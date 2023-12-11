"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { MenuProps, MenuLink } from "@/lib/types/web";
import { Icon } from "@/components/ui/icon";
import UserNav from "../UserNav";
import Logo from "../Logo";

export default function NavbarVertical({ menus, user }: MenuProps) {
  const pathname = usePathname();
  return (
    <nav className="flex items-center justify-evenly h-full lg:flex-col lg:justify-start">
      <Logo className="w-10 pt-10" />
      {menus.map((link: MenuLink) => (
        <Link
          key={link.name}
          href={link.href}
          className="h-full w-full inline-flex items-center justify-center lg:h-24"
        >
          <div className="flex flex-col items-center justify-center">
            <Icon icon={link.icon as string} active={pathname === link.href} />
            <div className="sr-only1 mt-1">{link.name}</div>
          </div>
        </Link>
      ))}
      <UserNav {...user} />
    </nav>
  );
}
