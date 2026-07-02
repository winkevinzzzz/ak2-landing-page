<script lang="ts">
  import { env } from "$env/dynamic/public";
</script>

<svelte:head>
  <title>AK2 — Ranking</title>
  <meta name="description" content="AK2 Attack Online 2 — season ranking and rewards." />
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
          <li>១. ចាប់ផ្តើមបន្ទាប់ពី Update ថ្ងៃទី ២៩ ខែមិថុនា រហូតដល់ថ្ងៃទី ២៦ ខែកក្កដា ឆ្នាំ២០២៦។</li>
          <li>២. សម្រាប់គែលពណ៌ដែលបានរៈ ឈ្មោះបទចាំតែរូបភាព។</li>
          <li>៣. គណនាការបញ្ចូល AK Gold ទាំងអស់ និងត្រូវបានបូកបញ្ចូលក្នុងព្រឹត្តិការណ៍។</li>
          <li>៤. មានគែលពណ៌ដែលស្ថិតនៅក្នុងលេខរៀងទី១ ប៉ុណ្ណោះ ដែលមានទទួលបានរង្វាន់ពិសេសនេះ។</li>
          <li>
            ៥. រង្វាន់ពិសេសនេះ រួមមាន Name Card, Avatar Frame, Title, Background, និង Armband ទាំងអស់ជាប្រភេទ <strong
              class="text-(--color-gold)">Permanent</strong
            >
            ដែលនឹងបញ្ចូនចូលទៅកាន់គណនីព្រឹត្តិការណ៍ដោយស្វ័យប្រវត្តិ។
          </li>
          <li>៦. បន្ទាប់ពីព្រឹត្តិការណ៍បានបញ្ចប់ កាដូនឹងទទួលបានក្នុងហ្គេមរយៈពេល ៦០ថ្ងៃបន្ទាប់ ។</li>
        </ol>
      </div>
    </div>

    <div class="h-16 sm:h-24"></div>
  </section>

  <!-- ===== Ranking panel ===== -->
  <section class="relative -mt-16 px-4 pb-16 sm:-mt-20 sm:px-6 sm:pb-20">
    <div
      class="mx-auto max-w-6xl overflow-hidden border border-white/10 bg-(--color-navy-deep)/85 backdrop-blur-sm"
      // style="clip-path: polygon(
      //   0 0,
      //   75% 0,
      //   78% 2.5%,
      //   100% 2.5%,
      //   100% 100%,
      //   27% 100%,
      //   22% 97.5%,
      //   0 97.5%
      //       );"
    >
      <iframe
        src={env.PUBLIC_TOURNAMENT_LEADERBOARD_URL}
        title="AK2 Ranking Leaderboard"
        class="h-[2700px] w-full border-0"
        loading="lazy"
      ></iframe>
    </div>
  </section>
</main>
