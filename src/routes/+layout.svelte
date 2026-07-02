<script lang="ts">
  import "../app.css";
  import { page } from "$app/state";

  let { children } = $props();
</script>

<svelte:head>
  <link rel="icon" href="/img/logo.webp" />
</svelte:head>

<main class="min-h-screen bg-cover bg-no-repeat" style="background-image: url('/img/bg-smoke.webp');">
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
