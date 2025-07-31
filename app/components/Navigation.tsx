"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";

const navItems = [
  { name: "bio", href: "/" },
];

const externalLinks = [
  { name: "resume", href: "./MARLA_TUMENJARGAL_RESUME.pdf" },
  { name: "linkedin", href: "https://www.linkedin.com/in/marla-tumenjargal/" },
  { name: "github", href: "https://github.com/marla-tumenjargal" },
];

export default function Navbar() {
  const pathname = usePathname();
  
  return (
    <>
      <nav
  className="
    flex flex-row
    items-center
    justify-center
    pl-2 pr-4 py-3   /* <-- adjust here */
    md:flex md:flex-col
    md:pt-18.5
    md:space-y-2
    md:pl-6
    font-hk
  "
>
        {/* Mobile: Left side - Main nav items */}
        <div className="flex flex-row space-x-6 md:flex-col md:space-x-0 md:space-y-2">
          {navItems.map((item) => {
            const isActive = pathname === item.href || (pathname === "/" && item.name === "bio");
            return (
              <Link
                key={item.name}
                href={item.href}
                className="flex items-center space-x-2 transition-colors"
              >
                {/* Dot indicator - hidden on mobile for cleaner look */}
                <div
                  className={`hidden md:block h-1 w-1 rounded-full ${
                    isActive ? "bg-black" : "bg-transparent"
                  }`}
                />
                {/* Text */}
                <span
                  className={`text-sm font-medium relative transition-colors ${
                    isActive ? "text-black" : "text-gray-400"
                  } after:content-[''] after:absolute after:w-0 after:h-px after:bottom-0 after:left-0 after:bg-black after:transition-opacity after:duration-150 after:opacity-0 hover:after:w-full hover:after:opacity-100 hover:after:transition-all hover:after:duration-200`}
                >
                  {item.name}
                </span>
              </Link>
            );
          })}
        </div>
        
        {/* Divider with flower icon - only show on desktop */}
        <div className="hidden md:block pt-3 pb-3 pr-6 flex justify-center">
          <span className="text-sm font-medium text-black">✿</span>
        </div>
        
        {/* Flower separator - show on mobile between nav sections */}
        <div className="md:hidden mx-4">
          <span className="text-sm font-medium text-black">✿</span>
        </div>
        
        {/* Mobile: Right side - External links / Desktop: Below divider */}
        <div className="flex flex-row space-x-4 md:flex-col md:space-x-0 md:space-y-2">
          {externalLinks.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              target={item.href.startsWith("http") ? "_blank" : undefined}
              rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
              className="flex items-center space-x-2 transition-colors"
            >
              {/* Dot indicator - hidden on mobile */}
              <div className="hidden md:block h-2 w-2 rounded-full bg-transparent" />
              {/* Text */}
              <span className="text-sm font-medium text-gray-400 hover:text-black transition-colors relative after:content-[''] after:absolute after:w-0 after:h-px after:bottom-0 after:left-0 after:bg-black after:transition-opacity after:duration-150 after:opacity-0 hover:after:w-full hover:after:opacity-100 hover:after:transition-all hover:after:duration-200">
                {item.name}
              </span>
            </Link>
          ))}
        </div>
      </nav>
    </>
  );
}