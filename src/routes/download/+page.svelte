<script lang="ts">
  type RankEntry = {
    rank: number;
    account: string;
    gameId: string;
    gold: number;
  };

  // Mock leaderboard data — replace with real fetch/load data
  const allEntries: RankEntry[] = [
    { rank: 1, account: "PixelPioneer", gameId: "56789012", gold: 100000 },
    { rank: 2, account: "GamerHaven", gameId: "12345678", gold: 99000 },
    { rank: 3, account: "AdventureSeeker", gameId: "23456789", gold: 98000 },
    { rank: 4, account: "EpicGamerX", gameId: "34567890", gold: 97000 },
    { rank: 5, account: "ShadowNinja99", gameId: "45678901", gold: 96000 },
    { rank: 6, account: "DragonSlayerZ", gameId: "56789012", gold: 95000 },
    { rank: 7, account: "MysticWarrior88", gameId: "67890123", gold: 94000 },
    { rank: 8, account: "ThunderFury77", gameId: "78901234", gold: 93000 },
    { rank: 9, account: "StealthAssassin42", gameId: "89012345", gold: 92000 },
    { rank: 10, account: "GalacticHeroX", gameId: "90123456", gold: 91000 },
    { rank: 11, account: "FrostbiteRanger", gameId: "01234567", gold: 90000 },
    { rank: 12, account: "CrimsonKnight23", gameId: "12345678", gold: 90000 },
    { rank: 13, account: "VortexHunter11", gameId: "23456789", gold: 90000 },
    { rank: 14, account: "BlazePhoenix44", gameId: "34567890", gold: 90000 },
    { rank: 15, account: "IronFistWarrior", gameId: "45678901", gold: 90000 },
    { rank: 16, account: "CyborgNinja77", gameId: "56789012", gold: 90000 },
    { rank: 17, account: "WickedSorcerer99", gameId: "67890123", gold: 90000 },
    { rank: 18, account: "RogueAssassinX", gameId: "78901234", gold: 90000 },
    { rank: 19, account: "SavageBeast22", gameId: "89012345", gold: 90000 },
    { rank: 20, account: "LegendaryTitan88", gameId: "90123456", gold: 90000 },
  ];

  let searchTerm = $state("");
  let currentPage = $state(1);
  const totalPages = 10;

  const filteredEntries = $derived(
    searchTerm.trim()
      ? allEntries.filter((e) =>
          e.account.toLowerCase().includes(searchTerm.trim().toLowerCase()),
        )
      : allEntries,
  );

  function rankRowClass(rank: number) {
    if (rank === 1) return "bg-(--color-gold)/90 text-(--color-navy-deep)";
    if (rank === 2) return "bg-white/15 text-white";
    if (rank === 3) return "bg-(--color-gold)/25 text-white";
    return "text-white/90";
  }

  function goToPage(page: number) {
    currentPage = Math.max(1, Math.min(totalPages, page));
  }
</script>

<svelte:head>
  <title>AK2 — Ranking</title>
  <meta
    name="description"
    content="AK2 Attack Online 2 — season ranking and rewards."
  />
</svelte:head>

<main
  class="min-h-screen overflow-x-hidden bg-fixed bg-cover bg-center bg-no-repeat"
  style="background-image: url('/img/bg-smoke.png');"
>
  <!-- ===== Header / Rules ===== -->
  <section
    class="relative overflow-hidden bg-cover bg-center bg-no-repeat"
    style="background-image: url('/img/Herobackground.png');"
  >
    <div
      class="pointer-events-none absolute inset-0 bg-gradient-to-b from-(--color-navy-deep)/40 via-(--color-navy-deep)/10 to-(--color-navy-deep)/70"
    ></div>

    <div class="relative z-10 mx-auto max-w-6xl px-4 pt-10 sm:px-6 sm:pt-12">
      <img
        src="/img/logo.png"
        alt="AK2 — Attack Online 2"
        class="h-14 w-auto sm:h-20"
      />

      <div class="mt-8 max-w-2xl">
        <p
          class="font-(family-name:--font-display) text-xl text-white sm:text-2xl"
        >
          ត្រៀមខ្លួនសម្រាប់
        </p>
        <h1
          class="text-stroke -mt-1 font-(family-name:--font-display) text-[clamp(36px,8vw,72px)] leading-[0.95] text-(--color-red-bright)"
        >
          ការប្រកួតដ៏អស្ចារ្យ
        </h1>

        <ol
          class="mt-6 space-y-1.5 text-sm leading-relaxed text-white/90 sm:text-base"
        >
          <li>
            ១. ចាប់ផ្តើមបន្ទាប់ពី Update ថ្ងៃទី ២៩ ខែមិថុនា រហូតដល់ថ្ងៃទី ២៦
            ខែកក្កដា ឆ្នាំ២០២៦។
          </li>
          <li>២. សម្រាប់គែលពណ៌ដែលបានរៈ ឈ្មោះបទចាំតែរូបភាព។</li>
          <li>
            ៣. គណនាការបញ្ចូល AK Gold ទាំងអស់
            និងត្រូវបានបូកបញ្ចូលក្នុងព្រឹត្តិការណ៍។
          </li>
          <li>
            ៤. មានគែលពណ៌ដែលស្ថិតនៅក្នុងលេខរៀងទី១ ប៉ុណ្ណោះ
            ដែលមានទទួលបានរង្វាន់ពិសេសនេះ។
          </li>
          <li>
            ៥. រង្វាន់ពិសេសនេះ រួមមាន Name Card, Avatar Frame, Title,
            Background, និង Armband ទាំងអស់ជាប្រភេទ <strong
              class="text-(--color-gold)">Permanent</strong
            >
            ដែលនឹងបញ្ចូនចូលទៅកាន់គណនីព្រឹត្តិការណ៍ដោយស្វ័យប្រវត្តិ។
          </li>
          <li>
            ៦. បន្ទាប់ពីព្រឹត្តិការណ៍បានបញ្ចប់ កាដូនឹងទទួលបានក្នុងហ្គេមរយៈពេល
            ៦០ថ្ងៃបន្ទាប់ ។
          </li>
        </ol>
      </div>
    </div>

    <div class="h-16 sm:h-24"></div>
  </section>

  <!-- ===== Ranking panel ===== -->
  <section class="relative -mt-16 px-4 pb-16 sm:-mt-20 sm:px-6 sm:pb-20">
    <div
      class="mx-auto max-w-6xl overflow-hidden border border-white/10 bg-(--color-navy-deep)/85 backdrop-blur-sm"
      style="clip-path: polygon(
  0 0,
  75% 0,
  78% 2.5%,
  100% 2.5%,
  100% 100%,
  27% 100%,
  22% 97.5%,
  0 97.5%
      );"
    >
      <iframe
        src="https://tournament.testing.sabay.com/leaderboard/6a39f94172e9c9317d59ca06"
        title="AK2 Ranking Leaderboard"
        class="h-[900px] w-full border-0"
        loading="lazy"
      ></iframe>
    </div>
  </section>
</main>
