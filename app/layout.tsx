import "@/public/styles/globals.css";
import { mainMenu, metaData } from "@/config/web";
import { Inter } from "next/font/google";
import Layout from "@/components/layout/Layout";

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
  display: 'swap',
})

export const metadata = metaData;
export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <Layout menu={mainMenu}>
          {children}
        </Layout>
      </body>
    </html>
  );
}