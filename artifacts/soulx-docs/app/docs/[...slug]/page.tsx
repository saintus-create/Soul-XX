import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { MDXRemote } from "next-mdx-remote/rsc";
import remarkGfm from "remark-gfm";
import rehypePrettyCode from "rehype-pretty-code";
import { getDoc, getAllSlugs, getNavNeighbors, NAV } from "@/lib/docs";
import Link from "next/link";
import { ChevronLeft, ChevronRight } from "lucide-react";

export async function generateStaticParams() {
  const slugs = getAllSlugs();
  return slugs.map((slug) => ({ slug: [slug] }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string[] }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const doc = getDoc(slug[0]);
  if (!doc) return {};
  return {
    title: doc.meta.title,
    description: doc.meta.description,
  };
}

const mdxOptions = {
  mdxOptions: {
    remarkPlugins: [remarkGfm],
    rehypePlugins: [
      [
        rehypePrettyCode,
        {
          theme: "vesper",
          keepBackground: false,
        },
      ],
    ],
  },
};

export default async function DocPage({
  params,
}: {
  params: Promise<{ slug: string[] }>;
}) {
  const { slug } = await params;
  const doc = getDoc(slug[0]);
  if (!doc) notFound();

  const { prev, next } = getNavNeighbors(slug[0]);

  return (
    <article
      style={{
        maxWidth: "780px",
        margin: "0 auto",
        padding: "3rem 2.5rem 5rem",
      }}
    >
      <div className="prose">
        <MDXRemote
          source={doc.content}
          options={mdxOptions as Parameters<typeof MDXRemote>[0]["options"]}
        />
      </div>

      {(prev || next) && (
        <nav
          style={{
            display: "flex",
            justifyContent: "space-between",
            marginTop: "3.5rem",
            paddingTop: "1.5rem",
            borderTop: "1px solid var(--border)",
            gap: "1rem",
          }}
        >
          {prev ? (
            <Link
              href={`/docs/${prev.slug}/`}
              style={{
                display: "flex",
                alignItems: "center",
                gap: "0.5rem",
                padding: "0.75rem 1rem",
                border: "1px solid var(--border)",
                borderRadius: "8px",
                textDecoration: "none",
                color: "var(--text-muted)",
                fontSize: "0.85rem",
                transition: "border-color 0.15s, color 0.15s",
                flex: 1,
                maxWidth: "260px",
              }}
            >
              <ChevronLeft size={16} style={{ flexShrink: 0 }} />
              <span>
                <div
                  style={{
                    fontSize: "0.7rem",
                    textTransform: "uppercase",
                    letterSpacing: "0.06em",
                    marginBottom: "2px",
                  }}
                >
                  Previous
                </div>
                <div style={{ color: "var(--text)", fontWeight: 500 }}>
                  {prev.title}
                </div>
              </span>
            </Link>
          ) : (
            <div />
          )}

          {next ? (
            <Link
              href={`/docs/${next.slug}/`}
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "flex-end",
                gap: "0.5rem",
                padding: "0.75rem 1rem",
                border: "1px solid var(--border)",
                borderRadius: "8px",
                textDecoration: "none",
                color: "var(--text-muted)",
                fontSize: "0.85rem",
                transition: "border-color 0.15s, color 0.15s",
                flex: 1,
                maxWidth: "260px",
                textAlign: "right",
              }}
            >
              <span>
                <div
                  style={{
                    fontSize: "0.7rem",
                    textTransform: "uppercase",
                    letterSpacing: "0.06em",
                    marginBottom: "2px",
                  }}
                >
                  Next
                </div>
                <div style={{ color: "var(--text)", fontWeight: 500 }}>
                  {next.title}
                </div>
              </span>
              <ChevronRight size={16} style={{ flexShrink: 0 }} />
            </Link>
          ) : (
            <div />
          )}
        </nav>
      )}
    </article>
  );
}
