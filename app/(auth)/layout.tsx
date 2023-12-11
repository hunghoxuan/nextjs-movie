import { getAuth } from "@/lib/auth";
import { redirect } from "next/navigation";

export default async function AuthLayout({ children: children }: { children: React.ReactNode }) {
  const { user } = await getAuth();
  if (!user) {
    redirect("/login");
  }

  return (
    <>
      {children}
    </>
  );
}
