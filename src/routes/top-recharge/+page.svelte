<script lang="ts">
  import { env } from "$env/dynamic/public";

  // The leaderboard is served through our same-origin proxy
  // (/leaderboard/[...path]), so its document height can be measured.
  let iframeEl: HTMLIFrameElement | undefined = $state();
  let iframeHeight = $state(800);

  function syncHeight() {
    const doc = iframeEl?.contentDocument;
    if (!doc) return;
    // Measure the content wrapper, not <body> (body has min-height:100vh,
    // which would only ever let the iframe grow). 24px top + 48px bottom padding.
    const container = doc.querySelector(".container");
    const measured = container
      ? container.getBoundingClientRect().height + 72
      : (doc.documentElement?.scrollHeight ?? 0);
    const next = Math.max(400, Math.ceil(measured));
    if (Math.abs(next - iframeHeight) > 4) iframeHeight = next;
  }

  $effect(() => {
    // The embedded page meta-refreshes every 30s and paginates via links,
    // so keep the height in sync continuously.
    const id = setInterval(syncHeight, 800);
    return () => clearInterval(id);
  });
</script>

<svelte:head>
  <title>AK2 — Top Recharge Ranking</title>
  <meta name="description" content="AK2 Attack Online 2 — top recharge season ranking and rewards." />
  <meta property="og:title" content="AK2 — Top Recharge Ranking" />
  <meta property="og:description" content="AK2 Attack Online 2 — top recharge season ranking and rewards." />
  <meta name="twitter:title" content="AK2 — Top Recharge Ranking" />
  <meta name="twitter:description" content="AK2 Attack Online 2 — top recharge season ranking and rewards." />
</svelte:head>

<main>
  <!-- ===== Header / Rules ===== -->
  <section class="relative overflow-hidden bg-cover bg-center bg-no-repeat">
    <div class="relative z-10 mx-auto max-w-6xl px-4 pt-10 sm:px-6 sm:pt-12">
      <div class="mt-8 max-w-2xl">
        <p class="font-(family-name:--font-display) text-xl text-white sm:text-2xl">ត្រៀមខ្លួនសម្រាប់</p>
        <h1
          class="text-stroke -mt-1 font-(family-name:--font-display) text-[clamp(36px,8vw,72px)] text-(--color-red-bright)"
        >
          ការប្រកួតដ៏អស្ចារ្យ
        </h1>

        <ol class="mt-6 space-y-1.5 text-sm leading-relaxed text-white/90 sm:text-base">
          <li>
            ១. ​ចាប់​ផ្តើម​បន្ទាប់​ពី Update ​ថ្ងៃ​ទី​ ២៩​ ខែ​មិថុនា​ រួចរាល់ រហូត​ដល់​ថ្ងៃ​ទី​ ២៦ ខែ​កក្កដា​ ឆ្នាំ​២០២៦
          </li>
          <li>២. សម្រាប់​តែ​គណនី​ដែល​បាន​ចុះ​ឈ្មោះ​ចូល​រួម​ទុក​ជាមុន​តែប៉ុណ្ណោះ</li>
          <li>៣. រាល់​ការបញ្ចូល​ AK Gold ទាំង​អស់​ នឹង​ត្រូវ​បាន​បូក​បញ្ចូល​ក្នុង​ព្រឹត្តិការណ៍​នេះ​</li>
          <li>៤. មាន​តែ​គណនី​ដែល​ស្ថិត​នៅ​ក្នុង​លេខ​រៀង​ទី​១ ប៉ុណ្ណោះ​ដែល​​ទទួល​បាន​កញ្ចប់​កាដូ​ពិសេស​នេះ</li>
          <li>
            ៥.​ កញ្ចប់​កាដូ​ពិសេស​នេះ​ រួម​មាន​ Name Card, Avatar Frame, Title, Background, និង​Armband
            ទាំង​អស់​​ជា​ប្រភេទ​ Permanant ដែលរៀបចំឡើងសម្រាប់តែព្រឹត្តិការណ៏នេះប៉ុណ្ណោះ <strong
              class="text-(--color-gold)">Permanent</strong
            >
            ដែលនឹងបញ្ចូនចូលទៅកាន់គណនីព្រឹត្តិការណ៍ដោយស្វ័យប្រវត្តិ។
          </li>
          <li>៦. បន្ទាប់​ពី​ព្រឹត្តិ​ការណ៍​បាន​បញ្ចប់​ កាដូ​នឹង​ទទួល​បាន​ក្នុង​រយ​ពេល​ ៦០​ថ្ងៃ​បន្ទាប់​ ៕</li>
        </ol>
      </div>
    </div>

    <div class="h-16 sm:h-24"></div>
  </section>

  <!-- ===== Ranking panel ===== -->
  <section class="relative -mt-16 px-4 pb-16 sm:-mt-20 sm:px-6 sm:pb-20">
    <div
      class="mx-auto max-w-6xl pt-5 overflow-hidden bg-[linear-gradient(180deg,rgba(0,0,0,0.55),rgba(0,0,0,0.35))]"
      style="clip-path: polygon(
        0 0,
        calc(100% - 140px) 0,
        calc(100% - 116px) 24px,
        100% 24px,
        100% 100%,
        140px 100%,
        116px calc(100% - 24px),
        0 calc(100% - 24px)
            );"
    >
      <iframe
        bind:this={iframeEl}
        src={"/leaderboard/" + env.PUBLIC_TOURNAMENT_ID}
        title="AK2 Ranking Leaderboard"
        class="w-full"
        style="height: {iframeHeight}px;"
        onload={syncHeight}
      ></iframe>
    </div>
  </section>
</main>
