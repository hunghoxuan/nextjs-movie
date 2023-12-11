import { MenuProps } from "@/lib/types/web";
import NavbarVertical from "@/components/layout/navbar/NavbarVertical";
import NavbarTop from "@/components/layout/navbar/NavbarTop";
import { getAuth } from "@/lib/auth";

export default async function Navbar(props: MenuProps) {
  const { user, session } = await getAuth();
  return props.orientation === "horizontal" ? (
    <NavbarTop user={user} {...props} />
  ) : (
    <NavbarVertical user={user} {...props} />
  );
}
