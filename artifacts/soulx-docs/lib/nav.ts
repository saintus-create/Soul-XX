export interface NavItem {
  slug: string;
  title: string;
}

export interface NavSection {
  section: string;
  items: NavItem[];
}

export const NAV: NavSection[] = [
  {
    section: "Getting Started",
    items: [
      { slug: "introduction", title: "Introduction" },
      { slug: "quick-start", title: "Quick Start" },
    ],
  },
  {
    section: "Inference",
    items: [
      { slug: "singing-voice-synthesis", title: "Voice Synthesis (SVS)" },
      { slug: "singing-voice-conversion", title: "Voice Conversion (SVC)" },
    ],
  },
  {
    section: "Guides",
    items: [
      { slug: "preprocessing", title: "Preprocessing" },
      { slug: "webui", title: "WebUI" },
    ],
  },
  {
    section: "Reference",
    items: [{ slug: "citation", title: "Citation & License" }],
  },
];
