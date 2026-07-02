# ---------- Build stage ----------
FROM node:22-alpine AS builder

WORKDIR /app

# Install dependencies first (better layer caching)
COPY package.json package-lock.json ./
RUN npm ci

# Build the SvelteKit app (adapter-node -> ./build)
# Env vars are NOT baked in: the app uses $env/dynamic/public,
# which reads process.env at runtime.
COPY . .
RUN npm run build

# ---------- Runtime stage ----------
FROM node:22-alpine AS runner

ENV NODE_ENV=production \
    PORT=3000 \
    HOST=0.0.0.0

WORKDIR /app

# adapter-node bundles all dependencies into build/ (this project has no
# runtime "dependencies"), so only the build output + package.json
# (for "type": "module") are needed.
COPY --from=builder /app/build ./build
COPY --from=builder /app/package.json ./package.json

# Run as non-root
USER node

EXPOSE 3000

CMD ["node", "build"]
