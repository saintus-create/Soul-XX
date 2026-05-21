import type { Metadata } from "next";
import "./globals.css";
import TopNav from "@/components/TopNav";
import Sidebar from "@/components/Sidebar";

export const metadata: Metadata = {
  title: {
    default: "SoulX-Singer Docs",
    template: "%s — SoulX-Singer",
  },
  description:
    "Official documentation for SoulX-Singer: zero-shot singing voice synthesis and conversion.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <TopNav />
        <div
          style={{
            display: "flex",
            minHeight: "100vh",
            paddingTop: "56px",
          }}
        >
          <Sidebar />
          <main
            style={{
              flex: 1,
              marginLeft: "240px",
              minWidth: 0,
            }}
          >
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}
