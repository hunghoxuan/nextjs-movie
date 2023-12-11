"use client";

import { SessionProvider } from "next-auth/react";
import { ReactNode } from "react";

const NextAuthProvider = ({ children }: { children: ReactNode }) => {
  return process.env.NEXT_PUBLIC_NEXTAUTH ? (
    <SessionProvider>{children}</SessionProvider>
  ) : (
    <>{children}</>
  );
};

export default NextAuthProvider;
