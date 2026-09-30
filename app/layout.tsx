import type { Metadata } from "next";
import type { ReactNode } from "react";
import "./globals.css";

export const metadata: Metadata = {
  title: "Chinnaswamy Purra | AI Engineer",
  description:
    "Portfolio of Chinnaswamy Purra: multimodal GUI agents, applied AI research, agentic systems, and machine learning engineering.",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
