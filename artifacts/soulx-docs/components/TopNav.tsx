"use client";

import Link from "next/link";
import { Github, Mic2 } from "lucide-react";

export default function TopNav() {
  return (
    <header
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        height: "56px",
        zIndex: 50,
        background: "rgba(12, 12, 16, 0.85)",
        backdropFilter: "blur(12px)",
        WebkitBackdropFilter: "blur(12px)",
        borderBottom: "1px solid var(--border)",
        display: "flex",
        alignItems: "center",
        padding: "0 1.5rem",
        gap: "1rem",
      }}
    >
      <Link
        href="/docs/introduction/"
        style={{
          display: "flex",
          alignItems: "center",
          gap: "0.5rem",
          textDecoration: "none",
          flexShrink: 0,
        }}
      >
        <span
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: "28px",
            height: "28px",
            background: "linear-gradient(135deg, #7c5cf6, #a78bfa)",
            borderRadius: "7px",
          }}
        >
          <Mic2 size={15} color="#fff" strokeWidth={2.5} />
        </span>
        <span
          style={{
            fontWeight: 700,
            fontSize: "0.95rem",
            letterSpacing: "-0.02em",
            color: "#fff",
          }}
        >
          SoulX
          <span style={{ color: "var(--accent-light)", marginLeft: "1px" }}>
            Singer
          </span>
        </span>
        <span
          style={{
            fontSize: "0.65rem",
            fontWeight: 500,
            color: "var(--text-muted)",
            background: "var(--bg-elevated)",
            border: "1px solid var(--border)",
            borderRadius: "4px",
            padding: "1px 6px",
            letterSpacing: "0.04em",
            marginLeft: "4px",
          }}
        >
          DOCS
        </span>
      </Link>

      <div style={{ flex: 1 }} />

      <nav
        style={{
          display: "flex",
          alignItems: "center",
          gap: "0.25rem",
        }}
      >
        <a
          href="https://arxiv.org/abs/2602.07803"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            fontSize: "0.8rem",
            color: "var(--text-muted)",
            textDecoration: "none",
            padding: "0.3rem 0.7rem",
            borderRadius: "6px",
            transition: "color 0.15s, background 0.15s",
          }}
          onMouseEnter={(e) => {
            (e.target as HTMLElement).style.color = "var(--text)";
            (e.target as HTMLElement).style.background = "var(--bg-elevated)";
          }}
          onMouseLeave={(e) => {
            (e.target as HTMLElement).style.color = "var(--text-muted)";
            (e.target as HTMLElement).style.background = "transparent";
          }}
        >
          Paper
        </a>
        <a
          href="https://huggingface.co/spaces/Soul-AILab/SoulX-Singer"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            fontSize: "0.8rem",
            color: "var(--text-muted)",
            textDecoration: "none",
            padding: "0.3rem 0.7rem",
            borderRadius: "6px",
            transition: "color 0.15s, background 0.15s",
          }}
          onMouseEnter={(e) => {
            (e.target as HTMLElement).style.color = "var(--text)";
            (e.target as HTMLElement).style.background = "var(--bg-elevated)";
          }}
          onMouseLeave={(e) => {
            (e.target as HTMLElement).style.color = "var(--text-muted)";
            (e.target as HTMLElement).style.background = "transparent";
          }}
        >
          Demo
        </a>
        <a
          href="https://github.com/saintus-create/SoulX-Singer"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: "flex",
            alignItems: "center",
            gap: "0.4rem",
            fontSize: "0.8rem",
            color: "var(--text-muted)",
            textDecoration: "none",
            padding: "0.3rem 0.7rem",
            borderRadius: "6px",
            transition: "color 0.15s, background 0.15s",
          }}
          onMouseEnter={(e) => {
            (e.target as HTMLElement).style.color = "var(--text)";
            (e.target as HTMLElement).style.background = "var(--bg-elevated)";
          }}
          onMouseLeave={(e) => {
            (e.target as HTMLElement).style.color = "var(--text-muted)";
            (e.target as HTMLElement).style.background = "transparent";
          }}
        >
          <Github size={15} />
          GitHub
        </a>
      </nav>
    </header>
  );
}
