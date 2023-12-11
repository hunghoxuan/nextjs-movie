"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Bell, Search } from "lucide-react";
import UserNav from "../UserNav";
import { MenuProps } from "@/lib/types/web";
import { Icon } from "@/components/ui/icon";
import Logo from "../Logo";

export default function NavbarTop({ menus, user } : MenuProps) {
  const pathname = usePathname();
  return (
    <div className="w-full max-w-7xl mx-auto items-center justify-between px-5 sm:px-6 py-5 lg:px-8 flex">
      <div className="flex items-center">
        <Logo className="w-32" />
        <ul className="lg:flex gap-x-4 ml-14 hidden">
          {menus.map((link, idx) => (
            <div key={idx} className="mr-10">
                <li className="flex flex-col items-center justify-center">
                  <Link
                    href={link.href}
                    className={ pathname === link.href ? "text-white font-semibold underline text-sm" : "text-gray-300 font-normal text-sm" }
                  >
                    <Icon icon={ link.icon as string } active = { pathname === link.href } />
                    {link.name}
                  </Link>
                </li>
            </div>
          ))}
        </ul>
      </div>

      <div className="flex items-center gap-x-8">
        <Search className="w-5 h-5 text-gray-300 cursor-pointer" />
        <Bell className="h-5 w-5 text-gray-300 cursor-pointer" />
        <UserNav { ...user } />
      </div>
    </div>
  );
}
