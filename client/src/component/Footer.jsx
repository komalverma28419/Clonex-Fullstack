import React from "react";
import { NavLink, Link } from "react-router-dom";
import { ArrowUp } from "lucide-react";
import logo from "../assets/images/logo.png";
import darkLogo from "../assets/images/darkLogo.png";
import { useTheme } from "../context/ThemeContext";
import { footerLinks, socialLinks } from "../data/footerData";

const Footer = () => {
  const { theme } = useTheme();

  return (
    <footer className="py-10 lg:py-14 bg-primary dark:bg-[#202738]">
      <div className="max-w-7xl mx-auto px-7 lg:px-12 xl:px-14">

        <div className="grid gap-10 grid-cols-1 lg:grid-cols-2 ">
          <div className=" max-w-sm">

            <Link to="/" className="inline-block">
              <img src={theme === "light" ? logo : darkLogo} alt="Clonex Logo" className="h-10 lg:h-12"/>
            </Link>
            <p className="mt-1 pl-4 text-sm leading-7 text-white/60 dark:text-dark-muted">
              Build smarter communication with our modern CRM platform.
            </p>
            <div className="mt-2 pl-4 flex items-center gap-3">
              {socialLinks.map((item, index) => {
                const Icon = item.icon
                return (
                  <a key={index} href={item.href} target="_blank" rel="noopener noreferrer"
                    className="flex h-9 w-9 items-center justify-center rounded-full border 
                    border-border dark:border-dark-border transition-all duration-300 hover:bg-primary hover:text-white">
                    <Icon size={18} />
                  </a>
                )
              })}
            </div>
          </div>

          {/*----------------------------------- Company & Resources-------------------------- */}
          <div className="grid grid-cols-3  gap-4 items-start justify-items-start">
            {footerLinks.map((column) => (
            <nav key={column.title} aria-label={column.title} className="w-full">
              <h3 className="text-base sm:text-lg font-semibold text-white mt-2">{column.title}</h3>
              <ul className="mt-2 space-y-1 sm:space-y-3">
                {column.links.map((link) => (
                  <li key={link.name}>
                    <NavLink
                    to={link.href}
                    className={({ isActive }) =>`text-xs sm:text-[15px] transition-colors duration-300 
                    ${isActive ? "text-white font-medium" : "text-white/60 hover:text-white"}`}>
                      {link.name}
                  </NavLink>
                  </li>
                ))}
              </ul>
            </nav>
          ))}
          </div>
        </div>

        {/* -----------------------------Divider----------------------- */}
        <div className="my-6 border-t border-white/70 dark:border-white/20" />
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-sm text-white/60 dark:text-dark-muted text-center md:text-left">
            © {new Date().getFullYear()} Clonex. All rights reserved.
          </p>
          <a href="#top"
            className="inline-flex items-center justify-center gap-2 text-sm font-medium text-white/60 dark:text-dark-muted transition-colors duration-300 hover:text-primary">
            Back to Top
            <ArrowUp size={16} />
          </a>
        </div>

      </div>
    </footer>
  )
}
export default Footer;
