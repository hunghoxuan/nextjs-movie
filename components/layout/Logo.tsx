import Image from "next/image";
import { mainMenu } from "@/config";
import Link from "next/link";

export default function Logo( { className }: { className?: string } ) {
  return (
    <>    
     <Link href="/" className={className} >
       <Image src={ mainMenu.logo } alt="" priority />
     </Link>
    </>
  );
}
