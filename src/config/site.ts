export const siteConfig = {
  productName: "TabRevo",

  siteUrl: "https://tabrevo.duckdns.org",
  serverIp: "140.238.244.49",

  positioning: {
    headline: "Save it now. Get reminded when it matters.",
    description:
      "Save any tab, add a note, and set a reminder so you can come back when it actually matters.",
  },

  assets: {
    extensionScreenshot: "/screenshots/tabrevo-extension.webp",
    pwaScreenshot: "/screenshots/tabrevo-pwa.webp",
    brandLogo: "/brand/tabrevo-logo.png",
    brandIcon: "/brand/tabrevo-icon.png",
    chromeLogo: "/brand/chrome.svg",
  },

  links: {
    extensionStoreUrl:
      "https://chromewebstore.google.com/detail/tab-story/nhjglpjgddjcjafdabmepgalnaejnleb",
    webAppUrl: "https://tabstory.pages.dev/",
    extensionRepoUrl: "https://github.com/Rawdyrathaur/Tab_story",
    pwaRepoUrl: "https://github.com/Rawdyrathaur/Tab_story_PWA",
    privacyUrl:
      "https://github.com/Rawdyrathaur/Tab_story/blob/main/PRIVACY.md",
    supportUrl: "https://github.com/Rawdyrathaur/Tab_story/issues/new",
  },

  freePlan: {
    price: "$0",
    label: "Free · Local-first",
    description:
      "The core TabRevo workflow runs locally in your browser and does not require a hosted account.",
    features: [
      "Save and organize tabs",
      "Folders, tags, pins, and notes",
      "Search your saved library",
      "Schedule local reminders",
      "Review and restore saved history",
      "AI summaries with your own Gemini API key",
      "Optional Google Drive and Calendar integrations",
    ],
  },

  plannedPlan: {
    label: "Hosted Sync",
    description:
      "Cross-device synchronization and account-based services are being designed separately from the local-first core.",
    features: [
      "Cross-device library synchronization",
      "Server-backed reminder delivery",
      "Device and account management",
      "Reliable offline outbox synchronization",
    ],
  },
} as const;
