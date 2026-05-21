"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { NAV } from "@/lib/nav";

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <aside
      style={{
        width: "240px",
        flexShrink: 0,
        position: "fixed",
        top: "56px",
        left: 0,
        bottom: 0,
        overflowY: "auto",
        background: "var(--bg-sidebar)",
        borderRight: "1px solid var(--border-muted)",
        padding: "1.5rem 0 2rem",
      }}
    >
      {NAV.map((section) => (
        <div key={section.section} style={{ marginBottom: "1.75rem" }}>
          <div
            style={{
              fontSize: "0.67rem",
              fontWeight: 700,
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              color: "var(--text-faint)",
              padding: "0 1.25rem",
              marginBottom: "0.4rem",
            }}
          >
            {section.section}
          </div>
          <ul style={{ listStyle: "none" }}>
            {section.items.map((item) => {
              const href = `/docs/${item.slug}/`;
              const isActive =
                pathname === href || pathname === href.slice(0, -1);
              return (
                <li key={item.slug}>
                  <Link
                    href={href}
                    style={{
                      display: "block",
                      padding: "0.35rem 1.25rem",
                      fontSize: "0.85rem",
                      fontWeight: isActive ? 600 : 400,
                      color: isActive ? "var(--accent-light)" : "#8888a0",
                      textDecoration: "none",
                      borderLeft: isActive
                        ? "2px solid var(--accent)"
                        : "2px solid transparent",
                      background: isActive ? "var(--accent-dim)" : "transparent",
                      transition: "color 0.15s, background 0.15s",
                      position: "relative",
                    }}
                    onMouseEnter={(e) => {
                      if (!isActive) {
                        (e.currentTarget as HTMLElement).style.color =
                          "var(--text)";
                        (e.currentTarget as HTMLElement).style.background =
                          "rgba(255,255,255,0.03)";
                      }
                    }}
                    onMouseLeave={(e) => {
                      if (!isActive) {
                        (e.currentTarget as HTMLElement).style.color =
                          "#8888a0";
                        (e.currentTarget as HTMLElement).style.background =
                          "transparent";
                      }
                    }}
                  >
                    {item.title}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      ))}

      <div
        style={{
          margin: "1.5rem 1.25rem 0",
          padding: "0.75rem",
          background: "var(--accent-dim)",
          border: "1px solid rgba(124, 92, 246, 0.2)",
          borderRadius: "8px",
        }}
      >
        <div
          style={{
            fontSize: "0.72rem",
            color: "var(--accent-light)",
            fontWeight: 600,
            marginBottom: "0.3rem",
          }}
        >
          Try the Demo
        </div>
        <div
          style={{ fontSize: "0.73rem", color: "var(--text-muted)", lineHeight: 1.5 }}
        >
          Run SoulX-Singer in your browser on Hugging Face Spaces.
        </div>
        <a
          href="https://huggingface.co/spaces/Soul-AILab/SoulX-Singer"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: "inline-block",
            marginTop: "0.5rem",
            fontSize: "0.72rem",
            color: "var(--accent-light)",
            textDecoration: "none",
            fontWeight: 500,
          }}
        >
          Open HF Space →
        </a>
      </div>
    </aside>
  );
}
