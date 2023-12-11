import type { Metadata } from "next";

import Hero from "./components/Hero";

export const metadata: Metadata = {
  title: "Anime Vault",
  description: "Your favorite anime, all in one place.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="max-w-7xl mx-auto bg-[#0F1117]">
      <Hero />
      {children}
    </div>
  );
}
