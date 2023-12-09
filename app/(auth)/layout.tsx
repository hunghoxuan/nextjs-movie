import { getAuth } from "@/lib/auth";
import { redirect } from "next/navigation";
import { userMenu } from "@/config/web";
import Layout from "@/components/layout/Layout";

export default async function AuthLayout({ children: children }: { children: React.ReactNode }) {
  const { user } = await getAuth();
  if (!user) {
    redirect("/login");
  }

  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <Layout menu={userMenu} children={children} />
      </body>
    </html>
  );
}
