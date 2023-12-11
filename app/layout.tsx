import "@/styles/globals.css";
import { mainMenu, metaData, userMenu } from "@/config";
import { Inter } from "next/font/google";
import Layout from "@/components/layout/Layout";
import { getAuth } from "@/lib/auth";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata = metaData;
export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { user } = await getAuth();
  const menu = user ? userMenu : mainMenu;

  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <Layout menu={menu}>{children}</Layout>
      </body>
    </html>
  );
}
