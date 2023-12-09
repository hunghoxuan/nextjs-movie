import "@/public/styles/globals.css";
import { mainMenu, metaData } from "@/config/web";
import { Inter } from "next/font/google";
import Layout from "@/components/layout/Layout";
export const metadata = metaData;
const inter = Inter({ subsets: ["latin"] });

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <Layout menu={mainMenu} children={children} />
      </body>
    </html>
  );
}