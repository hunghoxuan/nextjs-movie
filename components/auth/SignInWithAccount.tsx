"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { toast } from "@/components/ui/use-toast";
import { signIn } from "next-auth/react";
import { redirect } from "next/navigation";
import { useState } from "react";

export default function SignInWithAccount() {
  const [email, setEmail] = useState<null | string>(null);
  const [password, setPassword] = useState<null | string>(null);

  async function signInWithAccount() {
    const signInResult = await signIn("credentials", {
      email: email,
      password: password,
      callbackUrl: `${window.location.origin}/`,
      redirect: false,
    });

    if (!signInResult?.ok) {
      return toast({
        title: "Well this did not work...",
        description: "Something went wrong, please try again",
        variant: "destructive",
      });
    }

    return redirect(`${window.location.origin}/`);
  }
  return (
    <form action={signInWithAccount}>
      <div className="flex flex-col gap-y-2">
        <Label>Username</Label>
        <Input
          onChange={(e) => setEmail(e.target.value)}
          name="email"
          type="input"
          required
          placeholder="Enter your username or email address"
        />
        <Label className="mt-5">Password</Label>
        <Input
          onChange={(e) => setPassword(e.target.value)}
          name="password"
          type="password"
          required
          placeholder=""
        />
      </div>

      <Button type="submit" className="mt-4 w-full">
        Login
      </Button>
    </form>
  );
}