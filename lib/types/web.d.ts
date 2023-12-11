import { StaticImport } from "next/dist/shared/lib/get-img-props";

export type UserProps = {
  id?: string | null;
  name?: string | null;
  email?: string | null;
  role?: string | null;
  token?: string | null;
  login?: number | null;
  randomKey?: string | null;
} | null;

export interface MenuLink {
  name: string;
  href: string;
  icon?: string;
}

export type MenuProps = {
  logo: string | StaticImport;
  orientation: "horizontal" | "vertical";
  menus: MenuLink[];
  user?: UserProps;
};

export type IconProps = {
  icon: string;
  active: boolean;
};

export const IconEnum = {
  HOME: "home",
  MOVIES: "movie",
  TV_SHOWS: "tv",
  SEARCH: "search",
  USER: "user",
  LOGOUT: "logout",
  LOGIN: "login",
};
