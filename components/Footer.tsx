import {  FaTwitter } from "react-icons/fa6";
import { CiLinkedin } from "react-icons/ci";
import { LuGithub } from "react-icons/lu";
import { FaInstagram } from "react-icons/fa6";
import { SiLeetcode } from "react-icons/si";
import { FloatingDock } from "./ui/floating-dock";

const socialLinks = [
  {
    title:"Linkedin",
    href: "https://www.linkedin.com/in/devansh-dwivedi-41588a202/",
    icon: <CiLinkedin />,
  },
  { title:"Twitter",
    href: "https://x.com/devansh09758001", icon: <FaTwitter /> },
  { title:"Github",
    href: "https://github.com/devanshdwivedi2003", icon: <LuGithub /> },
  { title:"Instagram",
    href: "https://www.instagram.com/_devansh_03_/", icon: <FaInstagram /> },
  { title:"Leetcode",
    href: "https://leetcode.com/u/Devansh_2003_/", icon: <SiLeetcode /> },
];

export const Footer = () => {
  return (
    
    <div className="flex items-center justify-center bg-black w-full">
      <FloatingDock
        
        items={socialLinks}
      />
    </div>
  );
};


