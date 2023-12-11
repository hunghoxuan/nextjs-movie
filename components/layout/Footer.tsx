import { socialLinks } from "@/config";
import { BiLogoGithub, BiLogoLinkedin, BiLink } from "react-icons/bi";

export default function Footer() {
  return (
    <footer className="py-8 border-t border-zinc-800">
      <div className="px-global text-white/40">
        <p>&copy; {socialLinks.copyright} </p>

        <div className="flex gap-5 items-center flex-wrap text-2xl mt-5">
      <a
        href= {socialLinks.linkedin}
        target="_blank"
        rel="noreferrer noopener"
      >
        <BiLogoLinkedin />
        <span className="sr-only">Linkedin</span>
      </a>
      <a
        href={socialLinks.github}
        target="_blank"
        rel="noreferrer noopener"
      >
        <BiLogoGithub />
        <span className="sr-only">Github</span>
      </a>
      <a
        href={socialLinks.website}
        target="_blank"
        rel="noreferrer noopener"
      >
        <BiLink />
        <span className="sr-only">Website</span>
      </a>
    </div>
      </div>
    </footer>
  );
}
