"use client";

import { Button } from "@/components/ui/button";
import GooogleIcon from "../../public/google.svg";
import { signIn } from "next-auth/react";
import Image from "next/image";

export default function SigninWithGoogle() {
  return (
    <Button
      onClick={() =>
        signIn("google", {
          callbackUrl: `${window.location.origin}`,
        })
      }
      className="mt-6"
      variant="outline"
    >
      <Image src={GooogleIcon} alt="Google icon" className="w-6 h-6 mr-4" />{" "}
      Login with Gmail
    </Button>
  );
}
