<script lang="ts">
  import "../app.css";
  import { page } from "$app/state";

  let { children } = $props();
</script>

<svelte:head>
  <!-- Favicons -->
  <link rel="icon" href="/favicon.ico" sizes="32x32" />
  <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
  <link rel="icon" href="/favicon-96x96.png" type="image/png" sizes="96x96" />
  <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
  <link rel="manifest" href="/site.webmanifest" />
  <meta name="theme-color" content="#0a1420" />

  <!-- Shared SEO -->
  <link rel="canonical" href={page.url.origin + page.url.pathname} />
  <meta property="og:site_name" content="AK2 — Attack Online 2" />
  <meta property="og:type" content="website" />
  <meta property="og:locale" content="km_KH" />
  <meta property="og:url" content={page.url.origin + page.url.pathname} />
  <meta property="og:image" content={page.url.origin + "/web-app-manifest-512x512.png"} />
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:image" content={page.url.origin + "/web-app-manifest-512x512.png"} />
</svelte:head>

<main class="min-h-screen bg-fixed bg-cover bg-no-repeat" style="background-image: url('/img/bg-smoke.webp');">
  <div class="mx-auto flex max-w-6xl items-start justify-between px-4 pt-6 sm:px-6 sm:pt-12">
    <!-- Logo -->
    <a href="/" class="flex items-center">
      <img
        src="/img/logo.webp"
        alt="AK2 — Attack Online 2"
        class="pointer-coarse:h-14 h-14 w-auto sm:h-20"
        fetchpriority="high"
      />
    </a>

    <!-- Menu -->
    <nav class="flex items-center gap-6 text-[16px] font-bold text-white/90 uppercase">
      <a
        href="/"
        class="relative transition-colors hover:text-white after:absolute after:-bottom-2 after:left-0 after:h-2 after:w-full after:origin-left after:rounded-br-4xl after:scale-x-0 after:bg-red-bright after:transition-transform after:duration-300 hover:after:scale-x-100 {page
          .url.pathname === '/'
          ? 'text-white after:scale-x-100'
          : ''}"
      >
        Home
      </a>
      <a
        href="/top-recharge"
        class="relative transition-colors hover:text-white after:absolute after:-bottom-2 after:left-0 after:h-2 after:w-full after:origin-left after:rounded-br-4xl after:scale-x-0 after:bg-red-bright after:transition-transform after:duration-300 hover:after:scale-x-100 {page
          .url.pathname === '/top-recharge'
          ? 'text-white after:scale-x-100'
          : ''}"
      >
        Top Recharge
      </a>
    </nav>
  </div>

  {@render children()}
</main>
