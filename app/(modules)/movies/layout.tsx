import "@/styles/globals.css";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "TMDB Movie",
  description: "Demonstration of NextJS with TypeScript, TailwindCSS, and NextAuth",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main>
      {children}
    </main>
  );
}