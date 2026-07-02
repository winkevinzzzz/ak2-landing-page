<script lang="ts">
  import {
    drawTiers,
    packageItemsRow1,
    packageItemsRow2,
    mfItem,
  } from "$lib/data/content";

  let participants = $state(0);
</script>

<svelte:head>
  <title>AK2 — Attack Online 2</title>
  <meta
    name="description"
    content="AK2 Attack Online 2 — special event landing page: welcome gifts, lucky draw rewards, and the new account package."
  />
</svelte:head>

<main
  class="overflow-x-hidden bg-fixed bg-cover bg-center bg-no-repeat"
  style="background-image: url('/img/bg-smoke.png');"
>
<!-- ===== Hero ===== -->
  <section
    class="relative overflow-hidden bg-cover bg-center bg-no-repeat"
    style="background-image: url('/img/Herobackground.png');"
  >
    <div
      class="pointer-events-none absolute inset-0 bg-gradient-to-t from-(--color-navy-deep) via-(--color-navy-deep)/20 to-(--color-navy-deep)/50"
    ></div>

    <!-- Flare: top 30% of image, moved down to sit flush at bottom of Hero -->
    <img
      src="/img/flare.png"
      alt=""
      class="pointer-events-none absolute inset-x-0 bottom-0 z-[5] w-full"
      style="clip-path: inset(0 0 70% 0); transform: translateY(70%);"
    />

    <div class="relative z-20 mx-auto max-w-6xl px-4 pt-6 sm:px-6 sm:pt-8">
      <img
        src="/img/logo.png"
        alt="AK2 — Attack Online 2"
        class="h-10 w-auto sm:h-16 md:h-20"
      />
    </div>

    <div
      class="relative mx-auto min-h-[420px] max-w-6xl px-4 pt-2 pb-28 sm:min-h-[480px] sm:px-6 sm:pb-32 md:min-h-[560px] md:pb-10"
    >
      <img
        src="/img/girl-hero.png"
        alt="AK2 character"
        class="relative z-10 mx-auto h-auto w-full max-w-[280px] drop-shadow-[0_20px_40px_rgba(0,0,0,0.6)] sm:max-w-[420px] md:max-w-[480px]"
      />

      <div
        class="absolute top-[8%] left-4 z-0 w-[90%] sm:top-[14%] sm:left-6 sm:w-max md:top-[14%]"
      >
        <p
          class="font-(family-name:--font-display) text-lg text-white sm:text-2xl md:text-3xl"
        >
          ត្រៀមខ្លួនសម្រាប់
        </p>

        <h1
          class="text-stroke -mt-1 font-(family-name:--font-display) text-[clamp(44px,15vw,180px)] leading-[0.95] whitespace-normal text-(--color-red-bright) sm:whitespace-nowrap"
        >
          ការប្រកួតដ៏អស្ចារ្យ
        </h1>
      </div>

      <div
        class="absolute inset-x-4 bottom-6 z-20 flex flex-col items-center gap-3 sm:inset-x-6 sm:bottom-10 sm:flex-row sm:flex-wrap sm:justify-end md:bottom-20"
      >
        <a
          href="/download"
          class="flex h-14 w-full max-w-60 items-center justify-center bg-contain bg-center bg-no-repeat font-(family-name:--font-display) text-xl text-white transition-transform hover:scale-[1.03] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-(--color-gold) sm:h-16 sm:w-60 sm:text-2xl"
          style="background-image: url('/img/gradient-bar.png');"
        >
          ទាញយក
        </a>
        <a
          href="#register"
          class="flex h-14 w-full max-w-60 items-center justify-center bg-contain bg-center bg-no-repeat font-(family-name:--font-display) text-xl text-white transition-transform hover:scale-[1.03] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-(--color-gold) sm:h-16 sm:w-60 sm:text-2xl"
          style="background-image: url('/img/gradient-bar.png');"
        >
          ចុះឈ្មោះឥឡូវ
        </a>
      </div>
    </div>
  </section>


<!-- ===== Welcome gift ===== -->
  <section
    id="register"
    class="relative overflow-hidden"
  >
    <!-- Flare: back-most layer -->
    <img
      src="/img/flare.png"
      alt=""
      class="pointer-events-none absolute inset-x-0 top-0 z-0 w-full"
      style="clip-path: inset(30% 0 40% 0); transform: translateY(-30%);"
    />

    <!-- Background image: sits in front of the flare -->
    <img
      src="/img/WelcomeGiftbackground.png"
      alt=""
      class="pointer-events-none absolute inset-0 z-[1] h-full w-full object-cover object-center"
    />

    <div
      class="relative z-10 mx-auto flex max-w-7xl flex-col gap-8 px-4 py-10 sm:px-6 sm:py-12 lg:flex-row lg:items-center lg:gap-6 lg:pt-14 lg:pb-0"
    >
      <!-- Left: title + rules + button -->
      <div class="min-w-0 flex-1 text-center lg:pr-8 lg:pb-6 lg:text-left">
        <h2
          class="font-(family-name:--font-display) text-[clamp(28px,7vw,58px)] leading-tight text-(--color-red-bright)"
        >
          កាដូស្វាគមន៍
        </h2>

        <ol
          class="mt-5 space-y-2 text-sm font-bold leading-relaxed text-white/90"
        >
          <li>១. ចូលលេងនៅកាន់គណនីរបស់អ្នក ដើម្បីចុះឈ្មោះ។</li>
          <li>
            ២. រយៈពេលនៃការចុះឈ្មោះចាប់ពីថ្ងៃនេះ រហូតដល់ ថ្ងៃទី១១ ខែកក្កដា
            ឆ្នាំ២០២៦។
          </li>
          <li>៣. គណនីដែលបានចុះឈ្មោះ នឹងទទួលបានការជូនដំណឹងតាមរយៈអ៊ីមែល។</li>
          <li>
            ៤. កាដូនឹងទទួលបានក្នុងហ្គេម ៧ ថ្ងៃ បន្ទាប់ពីព្រឹត្តិការណ៍បានបញ្ចប់ ។
          </li>
        </ol>
        <a
          href="#"
          class="mx-auto mt-6 flex h-14 w-full max-w-60 items-center justify-center bg-contain bg-center bg-no-repeat font-(family-name:--font-display) text-xl text-white transition-transform hover:scale-[1.03] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-(--color-gold) sm:h-16 sm:text-2xl lg:mx-0"
          style="background-image: url('/img/gradient-bar.png');"
        >
          ចុះឈ្មោះ
        </a>
      </div>

      <!-- Right: tiles + label + guy character, grouped so they wrap together -->
      <div
        class="flex shrink-0 items-center justify-center gap-4 sm:gap-6 lg:justify-end"
      >
        <div class="shrink-0 flex flex-col items-center gap-1">
          <div class="flex items-end justify-center gap-2 sm:gap-3">
            <!-- Honor Scroll tile -->
            <div
              class="relative aspect-square w-[100px] sm:w-[130px] lg:w-[140px]"
            >
              <img
                src="/img/reward-frame.png"
                alt=""
                class="absolute inset-0 h-full w-full object-fill"
              />
              <div
                class="absolute inset-0 flex items-center justify-center p-3"
              >
                <img
                  src="/img/item-honor-scroll.png"
                  alt="Honor Scroll"
                  class="h-full w-full object-contain drop-shadow-md"
                />
              </div>
              <div
                class="absolute bottom-0 left-0 flex h-6 items-center px-2 sm:h-7"
                style="clip-path: polygon(0 0, calc(100% - 10px) 0, 100% 50%, calc(100% - 10px) 100%, 0 100%);"
              >
                <span class="pr-2 text-base font-bold text-red sm:text-xl"
                  >x66</span
                >
              </div>
            </div>

            <!-- M-Point tile -->
            <div
              class="relative aspect-square w-[100px] sm:w-[130px] lg:w-[140px]"
            >
              <img
                src="/img/reward-frame.png"
                alt=""
                class="absolute inset-0 h-full w-full object-fill"
              />
              <div
                class="absolute inset-0 flex items-center justify-center p-3"
              >
                <img
                  src="/img/item-mpoint.png"
                  alt="M-Point"
                  class="h-full w-full object-contain drop-shadow-md"
                />
              </div>
              <div
                class="absolute bottom-0 left-0 flex h-6 items-center px-2 sm:h-7"
                style="clip-path: polygon(0 0, calc(100% - 10px) 0, 100% 50%, calc(100% - 10px) 100%, 0 100%);"
              >
                <span class="pr-2 text-base font-bold text-red sm:text-xl"
                  >x1</span
                >
              </div>
            </div>
          </div>

          <p
            class="mt-2 text-center font-(family-name:--font-display) text-xl text-white/70 sm:text-2xl lg:text-3xl"
          >
            យន្តការព្រឹត្តិការណ៍
          </p>
        </div>

        <!-- guy character -->
        <div class="shrink-0">
          <img
            src="/img/guy-char.png"
            alt="AK2 character"
            class="h-auto w-[100px] drop-shadow-[0_20px_30px_rgba(0,0,0,0.7)] sm:w-[160px] lg:w-[280px]"
          />
        </div>
      </div>
    </div>
  </section>

  <!-- ===== Lucky draw ===== -->
  <section class="relative py-12 sm:py-16">
    <div class="mx-auto max-w-6xl px-4 sm:px-6">
      <h2
        class="font-(family-name:--font-display) text-2xl text-white sm:text-3xl md:text-4xl"
      >
        ចុះឈ្មោះប្រើន ទទួលបានប្រើន
      </h2>
      <div
        class="mt-3 inline-block bg-(--color-red) px-4 py-1 text-xs font-medium text-white sm:text-sm"
      >
        រហូតដល់ថ្ងៃទី ១៣ ខែកក្កដា ឆ្នាំ២០២៦
      </div>

      <div
        class="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4 lg:grid-cols-5"
      >
        {#each drawTiers as tier}
          <div class="relative" style="aspect-ratio: 610 / 416;">
            <img
              src={`/img/${participants >= tier.participants ? tier.showImage : tier.hideImage}`}
              alt=""
              class="absolute inset-0 h-full w-full object-contain"
            />
          </div>
        {/each}
      </div>

      <div
        class="mt-10 grid gap-8 sm:grid-cols-[auto_1fr] sm:items-center sm:gap-12 lg:gap-20"
      >
        <div class="text-center sm:text-left">
          <p
            class="font-(family-name:--font-display) text-lg text-white/80 sm:text-xl"
          >
            ចំនួនគណនីដែលចូលរួម
          </p>
          <div
            class="mt-2 flex items-center justify-center gap-6 sm:justify-start"
          >
            <button
              type="button"
              aria-label="previous"
              class="text-2xl text-white/50 transition-colors hover:text-(--color-gold) focus-visible:outline-2 focus-visible:outline-(--color-gold)"
              onclick={() => (participants = Math.max(0, participants - 1000))}
            >
              &#8249;
            </button>
            <span
              class="font-(family-name:--font-display) text-3xl text-(--color-red-bright) sm:text-4xl"
              >{participants}</span
            >
            <button
              type="button"
              aria-label="next"
              class="text-2xl text-white/50 transition-colors hover:text-(--color-gold) focus-visible:outline-2 focus-visible:outline-(--color-gold)"
              onclick={() => (participants += 1000)}
            >
              &#8250;
            </button>
          </div>
        </div>

        <ul
          class="space-y-1 text-center text-sm font-bold text-white/80 sm:text-left"
        >
          <li>១. ចូលរួមចុះឈ្មោះ ដើម្បីទទួលបានរង្វាន់ទៅតាមចំនួនកំណត់។</li>
          <li>
            ២. រង្វាន់ទាំងនេះនឹងទទួលបានក្នុងហ្គេម ៧ថ្ងៃ
            បន្ទាប់ពីព្រឹត្តិការណ៍បានបញ្ចប់។
          </li>
        </ul>
      </div>
    </div>
  </section>

<!-- ===== New account package ===== -->
<section
  class="relative overflow-hidden bg-cover bg-center bg-no-repeat text-(--color-ink)"
  style="background-image: url('/img/Newaccountpackagebackground.png');"
>
  <div
    class="relative mx-auto flex max-w-7xl flex-col lg:flex-row lg:items-stretch"
  >
    <!-- Girl — banner on mobile, full-height side panel on desktop -->
    <div
      class="relative order-2 mx-auto h-[220px] w-[200px] shrink-0 sm:h-[280px] sm:w-[260px] lg:order-1 lg:h-auto lg:w-[450px]"
    >
      <img
        src="/img/girl-red.png"
        alt="AK2 character"
        class="absolute inset-x-0 bottom-0 mx-auto h-full w-full object-contain object-bottom drop-shadow-[0_20px_30px_rgba(0,0,0,0.35)]"
      />
    </div>

    <!-- Right content column -->
    <div class="order-1 flex-1 px-4 py-10 sm:px-6 sm:py-12 lg:order-2 lg:py-14">
      <!-- Title -->
      <div class="text-center">
        <h2
          class="font-(family-name:--font-display) text-[clamp(28px,7vw,56px)] text-(--color-red) drop-shadow-[0_2px_6px_rgba(0,0,0,0.15)]"
        >
          កញ្ចប់ពិសេសសម្រាប់គណនីថ្មី
        </h2>
        <div
          class="mt-3 inline-block bg-(--color-red) px-4 py-1.5 text-xs font-medium text-white sm:px-5 sm:text-sm"
        >
          ចំនួនមានកំណត់ត្រឹមថ្ងៃទី ២៨ ខែមិថុនា ឆ្នាំ២០២៦ តែប៉ុណ្ណោះ
        </div>
      </div>

      <!-- Main row: item grid | gold price -->
      <div
        class="mt-8 flex flex-col items-center gap-6 lg:flex-row lg:items-end lg:justify-center"
      >
        <!-- Item grid: 4 cols x 2 rows, fully fluid widths via aspect-square + grid auto-placement -->
        <div class="w-full max-w-[420px] flex-1 sm:max-w-[480px]">
          <div class="grid grid-cols-4 gap-1.5 sm:gap-2">
            <!-- AR -->
            <div class="relative aspect-square">
              <img
                src="/img/reward-frame.png"
                alt=""
                class="absolute inset-0 h-full w-full object-fill"
              />
              <div class="absolute inset-0 flex items-center justify-center p-2 sm:p-3">
                <img
                  src="/img/item-ar.png"
                  alt="AR"
                  class="h-full w-full object-contain drop-shadow-md"
                />
              </div>
              <div
                class="absolute bottom-0 left-0 flex h-7 flex-col justify-center px-1.5 sm:h-9 sm:px-2"
                style="clip-path: polygon(0 0, calc(100% - 10px) 0, 100% 50%, calc(100% - 10px) 100%, 0 100%);"
              >
                <span class="pr-2 text-[6px] font-bold text-red sm:text-[8px]">30 Days</span>
                <span class="pr-2 text-xs font-bold text-white sm:text-sm">AR</span>
              </div>
            </div>

            <!-- Melee -->
            <div class="relative aspect-square">
              <img
                src="/img/reward-frame.png"
                alt=""
                class="absolute inset-0 h-full w-full object-fill"
              />
              <div class="absolute inset-0 flex items-center justify-center p-2 sm:p-3">
                <img
                  src="/img/item-melee.png"
                  alt="Melee"
                  class="h-full w-full object-contain drop-shadow-md"
                />
              </div>
              <div
                class="absolute bottom-0 left-0 flex h-7 flex-col justify-center px-1.5 sm:h-9 sm:px-2"
                style="clip-path: polygon(0 0, calc(100% - 10px) 0, 100% 50%, calc(100% - 10px) 100%, 0 100%);"
              >
                <span class="pr-2 text-[6px] font-bold text-red sm:text-[8px]">30 Days</span>
                <span class="pr-2 text-xs font-bold text-white sm:text-sm">Melee</span>
              </div>
            </div>

            <!-- M&F: spans 2 rows, auto-placed into column 3 -->
            <div class="relative col-start-3 row-span-2">
              <img
                src="/img/frame-blue-sm.png"
                alt=""
                class="absolute inset-0 h-full w-full object-fill"
              />
              <div class="absolute inset-0 flex items-center justify-center p-2 sm:p-3">
                <img
                  src="/img/item-mf.png"
                  alt="M&F"
                  class="h-full w-full object-contain drop-shadow-md"
                />
              </div>
              <div
                class="absolute bottom-0 left-0 flex h-7 flex-col justify-center px-1.5 sm:h-9 sm:px-2"
                style="clip-path: polygon(0 0, calc(100% - 10px) 0, 100% 50%, calc(100% - 10px) 100%, 0 100%);"
              >
                <span class="pr-2 text-[6px] font-bold text-red sm:text-[8px]">30 Days</span>
                <span class="pr-2 text-xs font-bold text-white sm:text-sm">M&amp;F</span>
              </div>
            </div>

            <!-- Lucky Coin -->
            <div class="relative aspect-square">
              <img
                src="/img/reward-frame.png"
                alt=""
                class="absolute inset-0 h-full w-full object-fill"
              />
              <div class="absolute inset-0 flex items-center justify-center p-2 sm:p-3">
                <img
                  src="/img/item-lucky-coin.png"
                  alt="Lucky Coin"
                  class="h-full w-full object-contain drop-shadow-md"
                />
              </div>
              <div
                class="absolute bottom-0 left-0 flex h-6 items-center px-1.5 sm:h-7 sm:px-2"
                style="clip-path: polygon(0 0, calc(100% - 10px) 0, 100% 50%, calc(100% - 10px) 100%, 0 100%);"
              >
                <span class="pr-2 text-xs font-bold text-white sm:text-sm">x100</span>
              </div>
            </div>

            <!-- Back -->
            <div class="relative aspect-square">
              <img
                src="/img/reward-frame.png"
                alt=""
                class="absolute inset-0 h-full w-full object-fill"
              />
              <div class="absolute inset-0 flex items-center justify-center p-2 sm:p-3">
                <img
                  src="/img/item-back.png"
                  alt="Back"
                  class="h-full w-full object-contain drop-shadow-md"
                />
              </div>
              <div
                class="absolute bottom-0 left-0 flex h-7 flex-col justify-center px-1.5 sm:h-9 sm:px-2"
                style="clip-path: polygon(0 0, calc(100% - 10px) 0, 100% 50%, calc(100% - 10px) 100%, 0 100%);"
              >
                <span class="pr-2 text-[6px] font-bold text-red sm:text-[8px]">30 Days</span>
                <span class="pr-2 text-xs font-bold text-white sm:text-sm">Back</span>
              </div>
            </div>

            <!-- Pistol -->
            <div class="relative aspect-square">
              <img
                src="/img/reward-frame.png"
                alt=""
                class="absolute inset-0 h-full w-full object-fill"
              />
              <div class="absolute inset-0 flex items-center justify-center p-2 sm:p-3">
                <img
                  src="/img/item-pistol.png"
                  alt="Pistol"
                  class="h-full w-full object-contain drop-shadow-md"
                />
              </div>
              <div
                class="absolute bottom-0 left-0 flex h-7 flex-col justify-center px-1.5 sm:h-9 sm:px-2"
                style="clip-path: polygon(0 0, calc(100% - 10px) 0, 100% 50%, calc(100% - 10px) 100%, 0 100%);"
              >
                <span class="pr-2 text-[6px] font-bold text-red sm:text-[8px]">30 Days</span>
                <span class="pr-2 text-xs font-bold text-white sm:text-sm">Pistol</span>
              </div>
            </div>

            <!-- Honor Scroll -->
            <div class="relative aspect-square">
              <img
                src="/img/reward-frame.png"
                alt=""
                class="absolute inset-0 h-full w-full object-fill"
              />
              <div class="absolute inset-0 flex items-center justify-center p-2 sm:p-3">
                <img
                  src="/img/item-honor-scroll.png"
                  alt="Honor Scroll"
                  class="h-full w-full object-contain drop-shadow-md"
                />
              </div>
              <div
                class="absolute bottom-0 left-0 flex h-6 items-center px-1.5 sm:h-7 sm:px-2"
                style="clip-path: polygon(0 0, calc(100% - 10px) 0, 100% 50%, calc(100% - 10px) 100%, 0 100%);"
              >
                <span class="pr-2 text-xs font-bold text-white sm:text-sm">x66</span>
              </div>
            </div>
          </div>

          <ul class="mt-5 space-y-1 text-xs font-bold text-(--color-ink)/70 sm:text-sm">
            <li>១. គណនីនីមួយៗ អាចទិញកញ្ចប់នេះបានតែម្តងប៉ុណ្ណោះ។</li>
            <li>២. ការទិញនេះត្រូវប្រើប្រាស់ AK Gold ចំនួន ១២៩៩។</li>
            <li>
              ៣. កញ្ចប់នេះនឹងទទួលបានក្នុងហ្គេមរបស់លោកអ្នក ភ្លាមៗ
              បន្ទាប់ពីការទិញបានជោគជ័យ។
            </li>
          </ul>
        </div>

        <!-- Gold price tile -->
        <div class="shrink-0 lg:self-start">
          <div
            class="relative mx-auto w-[180px] sm:w-[219px]"
            style="aspect-ratio: 219 / 126;"
          >
            <img
              src="/img/frame-gold.png"
              alt=""
              class="absolute inset-0 h-full w-full object-fill"
            />
            <div class="absolute inset-0 flex flex-col px-4 py-3">
              <div class="flex items-center justify-between">
                <span class="text-xs text-(--color-gold)">តម្លៃក្រឹមតែ</span>
                <span class="text-xs font-bold text-(--color-gold)">GOLD</span>
              </div>
              <div class="flex flex-1 items-center justify-center">
                <span
                  class="font-(family-name:--font-display) text-3xl text-(--color-gold) sm:text-4xl"
                  >១២៩៩</span
                >
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
</main>