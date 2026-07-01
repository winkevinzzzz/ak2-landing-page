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
  class="bg-fixed bg-cover bg-center bg-no-repeat"
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

    <div class="relative z-20 mx-auto max-w-6xl px-6 pt-8">
      <img
        src="/img/logo.png"
        alt="AK2 — Attack Online 2"
        class="h-16 w-auto sm:h-20"
      />
    </div>

    <div
      class="relative mx-auto min-h-[480px] max-w-6xl px-6 pt-2 pb-10 sm:min-h-[560px]"
    >
      <img
        src="/img/girl-hero.png"
        alt="AK2 character"
        class="relative z-10 mx-auto h-auto w-full max-w-[420px] drop-shadow-[0_20px_40px_rgba(0,0,0,0.6)] sm:max-w-[480px]"
      />

      <div class="absolute left-6 top-[18%] z-0 w-max sm:top-[14%]">
        <p
          class="font-(family-name:--font-display) text-2xl text-white sm:text-3xl"
        >
          ត្រៀមខ្លួនសម្រាប់
        </p>

        <h1
          class="text-stroke -mt-1 whitespace-nowrap font-(family-name:--font-display) text-[clamp(100px,16vw,180px)] leading-[0.95] text-(--color-red-bright)"
        >
          ការប្រកួតដ៏អស្ចារ្យ
        </h1>
      </div>

      <div
        class="absolute bottom-20 right-6 z-20 flex flex-wrap justify-end gap-4"
      >
        <a
          href="#download"
          class="flex h-16 w-60 items-center justify-center bg-contain bg-center bg-no-repeat font-(family-name:--font-display) text-2xl text-white transition-transform hover:scale-[1.03] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-(--color-gold)"
          style="background-image: url('/img/gradient-bar.png');"
        >
          ទាញយក
        </a>
        <a
          href="#register"
          class="flex h-16 w-60 items-center justify-center bg-contain bg-center bg-no-repeat font-(family-name:--font-display) text-2xl text-white transition-transform hover:scale-[1.03] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-(--color-gold)"
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
    class="relative min-h-[520px] overflow-hidden bg-cover bg-center bg-no-repeat"
    style="background-image: url('/img/WelcomeGiftbackground.png');"
  >
    <div
      class="relative z-10 mx-auto flex max-w-7xl items-center gap-6 px-6 pt-14"
    >
      <!-- Left: title + rules + button -->
      <div class="min-w-0 flex-1 pr-8 pb-6">
        <h2
          class="font-(family-name:--font-display) text-[clamp(32px,4.5vw,58px)] leading-tight text-(--color-red-bright)"
        >
          កាដូស្វាគមន៍
        </h2>

        <ol
          class="mt-5 space-y-2 pb-20 text-sm font-bold leading-relaxed text-white/90"
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
          class="mt-4 mb-2 flex h-16 w-60 items-center justify-center bg-contain bg-center bg-no-repeat font-(family-name:--font-display) text-2xl text-white transition-transform hover:scale-[1.03] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-(--color-gold)"
          style="background-image: url('/img/gradient-bar.png');"
        >
          ចុះឈ្មោះ
        </a>
      </div>

      <!-- Center: 2 item tiles + label -->
      <div class="shrink-0">
        <div class="flex items-end gap-3">
          <!-- Honor Scroll tile -->
          <div class="relative" style="width: 140px; height: 140px;">
            <img
              src="/img/reward-frame.png"
              alt=""
              class="absolute inset-0 h-full w-full object-fill"
            />
            <div class="absolute inset-0 flex items-center justify-center p-3">
              <img
                src="/img/item-honor-scroll.png"
                alt="Honor Scroll"
                class="h-full w-full object-contain drop-shadow-md"
              />
            </div>
            <!-- quantity ribbon: red on left, diagonal cut right -->
            <div
              class="absolute bottom-0 left-0 flex h-7 items-center px-2"
              style="clip-path: polygon(0 0, calc(100% - 10px) 0, 100% 50%, calc(100% - 10px) 100%, 0 100%);"
            >
              <span class="pr-2 text-xl font-bold text-red">x66</span>
            </div>
          </div>

          <!-- M-Point tile -->
          <div class="relative" style="width: 140px; height: 140px;">
            <img
              src="/img/reward-frame.png"
              alt=""
              class="absolute inset-0 h-full w-full object-fill"
            />
            <div class="absolute inset-0 flex items-center justify-center p-3">
              <img
                src="/img/item-mpoint.png"
                alt="M-Point"
                class="h-full w-full object-contain drop-shadow-md"
              />
            </div>
            <div
              class="absolute bottom-0 left-0 flex h-7 items-center px-2"
              style="clip-path: polygon(0 0, calc(100% - 10px) 0, 100% 50%, calc(100% - 10px) 100%, 0 100%);"
            >
              <span class="pr-2 text-xl font-bold text-red">x1</span>
            </div>
          </div>
        </div>

        <p
          class="mt-3 font-(family-name:--font-display) text-3xl text-white/70"
        >
          យន្តការព្រឹត្តិការណ៍
        </p>
      </div>

      <!-- Right: guy character (large) -->
      <div class="shrink-0 self-end">
        <img
          src="/img/guy-char.png"
          alt="AK2 character"
          class="h-auto w-[160px] drop-shadow-[0_20px_30px_rgba(0,0,0,0.7)] sm:w-[200px] lg:w-[280px]"
        />
      </div>
    </div>
  </section>

  <!-- ===== Lucky draw ===== -->
  <section class="relative py-16">
    <div class="mx-auto max-w-6xl px-6">
      <h2
        class="font-(family-name:--font-display) text-3xl text-white sm:text-4xl"
      >
        ចុះឈ្មោះប្រើន ទទួលបានប្រើន
      </h2>
      <div
        class="mt-3 inline-block bg-(--color-red) px-4 py-1 text-sm font-medium text-white"
      >
        រហូតដល់ថ្ងៃទី ១៣ ខែកក្កដា ឆ្នាំ២០២៦
      </div>

      <div class="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
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

      <div class="mt-10 grid gap-120 sm:grid-cols-[auto_1fr] sm:items-center">
        <div>
          <p class="font-(family-name:--font-display) text-xl text-white/80">
            ចំនួនគណនីដែលចូលរួម
          </p>
          <div class="mt-2 flex items-center gap-6">
            <button
              type="button"
              aria-label="previous"
              class="text-2xl text-white/50 transition-colors hover:text-(--color-gold) focus-visible:outline-2 focus-visible:outline-(--color-gold)"
              onclick={() => (participants = Math.max(0, participants - 1000))}
            >
              &#8249;
            </button>
            <span
              class="font-(family-name:--font-display) text-4xl text-(--color-red-bright)"
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

        <ul class="space-y-1 text-sm font-bold text-white/80">
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
    <div class="relative mx-auto flex max-w-7xl items-stretch">
      <!-- Girl — full-height left panel -->
      <div class="relative w-[200px] shrink-0 lg:w-[450px]">
        <img
          src="/img/girl-red.png"
          alt="AK2 character"
          class="absolute bottom-0 left-0 h-full w-full object-contain object-bottom drop-shadow-[0_20px_30px_rgba(0,0,0,0.35)]"
        />
      </div>

      <!-- Right content column -->
      <div class="flex-1 px-6 py-14">
        <!-- Title -->
        <div class="text-center">
          <h2
            class="font-(family-name:--font-display) text-[clamp(32px,5vw,56px)] text-(--color-red) drop-shadow-[0_2px_6px_rgba(0,0,0,0.15)]"
          >
            កញ្ចប់ពិសេសសម្រាប់គណនីថ្មី
          </h2>
          <div
            class="mt-3 inline-block bg-(--color-red) px-5 py-1.5 text-sm font-medium text-white"
          >
            ចំនួនមានកំណត់ត្រឹមថ្ងៃទី ២៨ ខែមិថុនា ឆ្នាំ២០២៦ តែប៉ុណ្ណោះ
          </div>
        </div>

        <!-- Main row: item grid | gold price -->
        <div class="mt-8 flex items-end gap-6">
          <!-- Item grid: 4 cols x 2 rows -->
          <div class="flex-1">
            <div
              class="grid grid-cols-4 gap-2"
              style="grid-template-rows: repeat(2, 140px); grid-template-columns: repeat(4, 140px);"
            >
              <!-- AR -->
              <div
                class="relative"
                style="grid-row: 1; grid-column: 1; width: 140px; height: 140px;"
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
                    src="/img/item-ar.png"
                    alt="AR"
                    class="h-full w-full object-contain drop-shadow-md"
                  />
                </div>
                <div
                  class="absolute bottom-0 left-0 flex h-9 flex-col justify-center px-2"
                  style="clip-path: polygon(0 0, calc(100% - 10px) 0, 100% 50%, calc(100% - 10px) 100%, 0 100%);"
                >
                  <span class="pr-2 text-[8px] font-bold text-red">30 Days</span
                  >
                  <span class="pr-2 text-sm font-bold text-white">AR</span>
                </div>
              </div>

              <!-- Melee -->
              <div
                class="relative"
                style="grid-row: 1; grid-column: 2; width: 140px; height: 140px;"
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
                    src="/img/item-melee.png"
                    alt="Melee"
                    class="h-full w-full object-contain drop-shadow-md"
                  />
                </div>
                <div
                  class="absolute bottom-0 left-0 flex h-9 flex-col justify-center px-2"
                  style="clip-path: polygon(0 0, calc(100% - 10px) 0, 100% 50%, calc(100% - 10px) 100%, 0 100%);"
                >
                  <span class="pr-2 text-[8px] font-bold text-red">30 Days</span
                  >
                  <span class="pr-2 text-sm font-bold text-white">Melee</span>
                </div>
              </div>

              <!-- M&F (spans 2 rows) -->
              <div
                class="relative"
                style="grid-row: 1 / span 2; grid-column: 3; width: 140px; height: calc(140px * 2 + 8px);"
              >
                <img
                  src="/img/frame-blue-sm.png"
                  alt=""
                  class="absolute inset-0 h-full w-full object-fill"
                />
                <div
                  class="absolute inset-0 flex items-center justify-center p-3"
                >
                  <img
                    src="/img/item-mf.png"
                    alt="M&F"
                    class="h-full w-full object-contain drop-shadow-md"
                  />
                </div>
                <div
                  class="absolute bottom-0 left-0 flex h-9 flex-col justify-center px-2"
                  style="clip-path: polygon(0 0, calc(100% - 10px) 0, 100% 50%, calc(100% - 10px) 100%, 0 100%);"
                >
                  <span class="pr-2 text-[8px] font-bold text-red">30 Days</span
                  >
                  <span class="pr-2 text-sm font-bold text-white">M&amp;F</span>
                </div>
              </div>

              <!-- Lucky Coin -->
              <div
                class="relative"
                style="grid-row: 1; grid-column: 4; width: 140px; height: 140px;"
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
                    src="/img/item-lucky-coin.png"
                    alt="Lucky Coin"
                    class="h-full w-full object-contain drop-shadow-md"
                  />
                </div>
                <div
                  class="absolute bottom-0 left-0 flex h-7 items-center px-2"
                  style="clip-path: polygon(0 0, calc(100% - 10px) 0, 100% 50%, calc(100% - 10px) 100%, 0 100%);"
                >
                  <span class="pr-2 text-sm font-bold text-white">x100</span>
                </div>
              </div>

              <!-- Back -->
              <div
                class="relative"
                style="grid-row: 2; grid-column: 1; width: 140px; height: 140px;"
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
                    src="/img/item-back.png"
                    alt="Back"
                    class="h-full w-full object-contain drop-shadow-md"
                  />
                </div>
                <div
                  class="absolute bottom-0 left-0 flex h-9 flex-col justify-center px-2"
                  style="clip-path: polygon(0 0, calc(100% - 10px) 0, 100% 50%, calc(100% - 10px) 100%, 0 100%);"
                >
                  <span class="pr-2 text-[8px] font-bold text-red">30 Days</span
                  >
                  <span class="pr-2 text-sm font-bold text-white">Back</span>
                </div>
              </div>

              <!-- Pistol -->
              <div
                class="relative"
                style="grid-row: 2; grid-column: 2; width: 140px; height: 140px;"
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
                    src="/img/item-pistol.png"
                    alt="Pistol"
                    class="h-full w-full object-contain drop-shadow-md"
                  />
                </div>
                <div
                  class="absolute bottom-0 left-0 flex h-9 flex-col justify-center px-2"
                  style="clip-path: polygon(0 0, calc(100% - 10px) 0, 100% 50%, calc(100% - 10px) 100%, 0 100%);"
                >
                  <span class="pr-2 text-[8px] font-bold text-red">30 Days</span
                  >
                  <span class="pr-2 text-sm font-bold text-white">Pistol</span>
                </div>
              </div>

              <!-- Honor Scroll -->
              <div
                class="relative"
                style="grid-row: 2; grid-column: 4; width: 140px; height: 140px;"
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
                  class="absolute bottom-0 left-0 flex h-7 items-center px-2"
                  style="clip-path: polygon(0 0, calc(100% - 10px) 0, 100% 50%, calc(100% - 10px) 100%, 0 100%);"
                >
                  <span class="pr-2 text-sm font-bold text-white">x66</span>
                </div>
              </div>
            </div>

            <ul class="mt-5 space-y-1 text-sm font-bold text-(--color-ink)/70">
              <li>១. គណនីនីមួយៗ អាចទិញកញ្ចប់នេះបានតែម្តងប៉ុណ្ណោះ។</li>
              <li>២. ការទិញនេះត្រូវប្រើប្រាស់ AK Gold ចំនួន ១២៩៩។</li>
              <li>
                ៣. កញ្ចប់នេះនឹងទទួលបានក្នុងហ្គេមរបស់លោកអ្នក ភ្លាមៗ
                បន្ទាប់ពីការទិញបានជោគជ័យ។
              </li>
            </ul>
          </div>

          <!-- Gold price tile -->
          <div class="shrink-0 self-start">
            <div class="relative" style="width: 219px; height: 126px;">
              <img
                src="/img/frame-gold.png"
                alt=""
                class="absolute inset-0 h-full w-full object-fill"
              />
              <div class="absolute inset-0 flex flex-col px-4 py-3">
                <div class="flex items-center justify-between">
                  <span class="text-xs text-(--color-gold)">តម្លៃក្រឹមតែ</span>
                  <span class="text-xs font-bold text-(--color-gold)">GOLD</span
                  >
                </div>
                <div class="flex flex-1 items-center justify-center">
                  <span
                    class="font-(family-name:--font-display) text-4xl text-(--color-gold)"
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
