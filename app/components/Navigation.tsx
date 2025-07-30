"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";

const navItems = [
  { name: "bio", href: "/" },
  { name: "projects", href: "/projects"}
];

const externalLinks = [
  { name: "resume", href: "https://drive.google.com/file/d/1sc43YITFqWx4z5kR0m8RIA5K59otKl9h/view?usp=sharing" },
  { name: "linkedin", href: "https://www.linkedin.com/in/marla-tumenjargal/" },
  { name: "github", href: "https://github.com/marla-tumenjargal" },
];

export default function Navbar() {
  const pathname = usePathname();
  
  return (
    <>
      <nav
        className="
          flex flex-col
          pt-18.5
          space-y-2
          pl-10
          font-hk      /* Apply HK Grotesk */
        "
      >
        {navItems.map((item) => {
          const isActive = pathname === item.href || (pathname === "/" && item.name === "bio");
          return (
            <Link
              key={item.name}
              href={item.href}
              className="flex items-center space-x-2 transition-colors"
            >
              {/* Dot indicator */}
              <div
                className={`h-1 w-1 rounded-full ${
                  isActive ? "bg-black" : "bg-transparent"
                }`}
              />
              {/* Text + ✿ if active */}
              <span
                className={`text-sm font-medium relative transition-colors ${
                  isActive ? "text-black" : "text-gray-400"
                } after:content-[''] after:absolute after:w-0 after:h-px after:bottom-0 after:left-0 after:bg-black after:transition-opacity after:duration-150 after:opacity-0 hover:after:w-full hover:after:opacity-100 hover:after:transition-all hover:after:duration-200`}
              >
                {item.name} {isActive}
              </span>
            </Link>
          );
        })}
        
        {/* Divider with flower icon */}
        <div className="pt-3 pb-3 pr-6 flex justify-center">
          <span className="text-sm font-medium text-black">✿</span>
        </div>
        
        {/* External links */}
        {externalLinks.map((item) => (
          <Link
            key={item.name}
            href={item.href}
            target={item.href.startsWith("http") ? "_blank" : undefined}
            rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
            className="flex items-center space-x-2 transition-colors"
          >
            {/* Dot indicator (transparent for external links) */}
            <div className="h-2 w-2 rounded-full bg-transparent" />
            {/* Text */}
            <span className="text-sm font-medium text-gray-400 hover:text-black transition-colors relative after:content-[''] after:absolute after:w-0 after:h-px after:bottom-0 after:left-0 after:bg-black after:transition-opacity after:duration-150 after:opacity-0 hover:after:w-full hover:after:opacity-100 hover:after:transition-all hover:after:duration-200">
              {item.name}
            </span>
          </Link>
        ))}
      </nav>
      
    </>
  );
}