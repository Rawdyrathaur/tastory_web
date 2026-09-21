export const siteConfig = {
  productName: "Tab Story",

  positioning: {
    eyebrow: "A calmer way to keep what matters",
    headline: "Save it now. Return when it matters.",
    description:
      "Tab Story turns browser tabs into a focused library for saving, organizing, annotating, scheduling, and revisiting the web.",
  },

  assets: {
    extensionScreenshot: "/screenshots/tab-story-extension.webp",
    pwaScreenshot: "/screenshots/tab-story-pwa.webp",
  },

  links: {
    extensionStoreUrl:
      "https://chromewebstore.google.com/detail/tab-story/nhjglpjgddjcjafdabmepgalnaejnleb",
    webAppUrl: "",
    extensionRepoUrl: "https://github.com/Rawdyrathaur/Tab_story",
    pwaRepoUrl: "https://github.com/Rawdyrathaur/Tab_story_PWA",
    privacyUrl: "https://github.com/Rawdyrathaur/Tab_story/blob/main/PRIVACY.md",
    supportUrl: "https://github.com/Rawdyrathaur/Tab_story/issues/new",
  },

  freePlan: {
    price: "$0",
    label: "Local-first",
    description:
      "The core Tab Story workflow lives in your browser and does not require a hosted account.",
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
    label: "Hosted sync",
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
