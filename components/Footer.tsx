import { FaXTwitter, FaInstagram } from "react-icons/fa6";
import { CiLinkedin } from "react-icons/ci";
import { LuDownload, LuGithub } from "react-icons/lu";
import { SiLeetcode } from "react-icons/si";
import { FloatingDock } from "./ui/floating-dock";
import { HoverBorderGradientDemo } from "./resume-btn";
import { RESUME_URL } from "./home";

const socialLinks = [
  {
    title: "LinkedIn",
    href: "https://www.linkedin.com/in/devansh-dwivedi-41588a202/",
    icon: <CiLinkedin />,
  },
  { title: "X (Twitter)", href: "https://x.com/devansh09758001", icon: <FaXTwitter /> },
  { title: "GitHub", href: "https://github.com/devanshdwivedi2003", icon: <LuGithub /> },
  { title: "Instagram", href: "https://www.instagram.com/_devansh_03_/", icon: <FaInstagram /> },
  { title: "LeetCode", href: "https://leetcode.com/u/Devansh_2003_/", icon: <SiLeetcode /> },
];

export const Footer = () => {
  return (
    <footer id="contact" className="relative w-full px-6 pt-16 pb-10">
      <div className="mx-auto mt-10 flex max-w-2xl flex-col items-center text-center">
        <h3 className="text-3xl md:text-5xl font-semibold text-gray-200">
          Let&apos;s build something great together.
        </h3>
        <p className="mt-4 text-sm md:text-base text-neutral-400">
          Have a project in mind or an opportunity to share? My inbox is always open.
        </p>
        <div className="mt-8 flex flex-col items-center gap-4">
          <HoverBorderGradientDemo />
          <a
            href={RESUME_URL}
            download
            className="inline-flex items-center gap-2 text-sm md:text-base text-neutral-400 underline-offset-4 transition hover:text-white hover:underline"
          >
            <LuDownload /> Download my resume
          </a>
        </div>
      </div>

      <div className="mt-20 flex items-center justify-center">
        <FloatingDock items={socialLinks} />
      </div>

      <p className="mt-10 border-t border-white/10 pt-6 text-center text-xs md:text-sm text-neutral-500">
        © {new Date().getFullYear()} Devansh Dwivedi. Built with Next.js, GSAP &amp; Aceternity UI.
      </p>
    </footer>
  );
};
