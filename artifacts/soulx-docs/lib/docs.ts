import fs from "fs";
import path from "path";
import matter from "gray-matter";

const CONTENT_DIR = path.join(process.cwd(), "content", "docs");

export interface DocMeta {
  title: string;
  description: string;
}

export interface Doc {
  slug: string;
  meta: DocMeta;
  content: string;
}

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

export function getAllSlugs(): string[] {
  if (!fs.existsSync(CONTENT_DIR)) return [];
  return fs
    .readdirSync(CONTENT_DIR)
    .filter((f) => f.endsWith(".mdx"))
    .map((f) => f.replace(/\.mdx$/, ""));
}

export function getDoc(slug: string): Doc | null {
  const filepath = path.join(CONTENT_DIR, `${slug}.mdx`);
  if (!fs.existsSync(filepath)) return null;
  const raw = fs.readFileSync(filepath, "utf-8");
  const { data, content } = matter(raw);
  return {
    slug,
    meta: {
      title: typeof data.title === "string" ? data.title : slug,
      description:
        typeof data.description === "string" ? data.description : "",
    },
    content,
  };
}

export function getNavNeighbors(slug: string): {
  prev: NavItem | null;
  next: NavItem | null;
} {
  const flat = NAV.flatMap((s) => s.items);
  const idx = flat.findIndex((i) => i.slug === slug);
  return {
    prev: idx > 0 ? flat[idx - 1] : null,
    next: idx < flat.length - 1 ? flat[idx + 1] : null,
  };
}
