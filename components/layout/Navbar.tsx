"use client";

import { MenuProps } from "@/lib/types/web";
import NavbarVertical from "@/components/layout/navbar/NavbarVertical";
import NavbarTop from "@/components/layout/navbar/NavbarTop";

export default function Navbar( props : MenuProps ) {
  return (
    props.orientation === "horizontal" ? <NavbarTop { ...props } /> : <NavbarVertical { ...props } />
  );
}
