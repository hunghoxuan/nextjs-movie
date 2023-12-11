"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { UserProps } from "@/lib/types/web";
import { signOut } from "next-auth/react";
import Link from "next/link";
import { ModeToggle } from "../layout/theme-toggle";

export default function UserNav(user: UserProps) {
  return (
    <>
      {user?.name && (
        <>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className="relative h-10 w-10 rounded-sm">
                <Avatar className="h-10 w-10 rounded-sm">
                  <AvatarImage src="https://nkljkwikhlggqlnjctge.supabase.co/storage/v1/object/public/user%20image/avatar.png" />
                  <AvatarFallback className="rounded-sm">
                    {user?.name}
                  </AvatarFallback>
                </Avatar>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56" align="end" forceMount>
              <DropdownMenuLabel>
                <Link href="/user">
                  <div className="flex flex-col space-y-1">
                    <p className="text-sm font-medium leading-none">
                      {user?.name}
                    </p>
                    <p className="text-xs leading-none text-muted-foreground">
                      {user?.email}
                    </p>
                  </div>
                </Link>
              </DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem
                onClick={() =>
                  signOut({ callbackUrl: `${window.location.origin}/` })
                }
              >
                {" "}
                Logout{" "}
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </>
      )}
      {!user?.name && (
        <>
          <Link href="/login"> Login </Link>
        </>
      )}
      <ModeToggle />
    </>
  );
}
