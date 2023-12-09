import { MenuProps, IconEnum } from "@/lib/types/web.d"
import type { Metadata } from "next";
import Logo from "../public/netflix_logo.svg";

export const metaData: Metadata = {
  title: "NextJS Movie",
  description: "Demonstration of NextJS with TypeScript, TailwindCSS, and NextAuth",
};

export const socialLinks = {
  github: "https://www.github.com",
  linkedin: "https://www.linkedin.com",
  facebook: "https://www.facebook.com",
  website: "https://wwww.google.com",
  copyright: "2023 FFW Assignment. All rights reserved",
}

export const mainMenu: MenuProps = {
  logo: Logo,
  orientation: "horizontal",
  menus: [{
      name: "Home",
      href: "/",
      icon: IconEnum.HOME,
    },
    {
      name: "Movies",
      href: "/movie",
      icon: IconEnum.MOVIES,
    },
    {
      name: "TV Shows",
      href: "/tv",
      icon: IconEnum.TV_SHOWS,
    },
    {
      name: "Search",
      href: "/search",
      icon: IconEnum.SEARCH,
    },
  ],
}

export const userMenu: MenuProps = {
  logo: Logo,
  orientation: "horizontal",
  menus: [{
      name: "Home",
      href: "/",
      icon: IconEnum.HOME,
    },
  ],
}