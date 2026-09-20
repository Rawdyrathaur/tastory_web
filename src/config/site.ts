export const siteConfig = {
  productName: "Tab Story",

  positioning: {
    eyebrow: "Your tabs, with a plan.",
    headline: "Save it now. Return when it matters.",
    description:
      "Tab Story turns browser tabs into organized collections, timely reminders, offline reading, and ideas you can discuss with AI — synchronized across the extension and web app."
  },

  links: {
    extensionStoreUrl: "",
    webAppUrl: "",
    supportUrl: "",
    githubUrl: "https://github.com/Rawdyrathaur/Tab_story_PWA"
  },

  freePlan: {
    maxActiveSynchronizedTabs: 2
  },

  promises: [
    "Save in one click.",
    "Return with reminders.",
    "Read across devices.",
    "Stay organized automatically."
  ]
} as const;
