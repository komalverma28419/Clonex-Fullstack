import { FaLinkedin, } from "react-icons/fa6";
import { BsTwitter, BsGithub, BsInstagram  } from "react-icons/bs";

export const footerLinks = [
  {
    title: "Company",
    links: [
      { name: "About Us", href: "/about" },
      { name: "Features", href: "/features/call-tracking" },
    ]
  },
  {
    title: "Support",
    links: [
      { name: "Refund Policy", href: "refund-policy" },
      { name: "Privacy Policy", href: "privacy-policy" },
      { name: "Terms & Conditions", href: "terms-conditions" },
    ]
  },
  {
    title: "Our Works",
    links: [
        {name: "Pricing", href: "/pricing"},
        {name: "Signup", href: "/signup"},

    ]
  }
]

export const socialLinks = [
  {
    icon: BsGithub,
    href: "https://github.com/",
  },
  {
    icon: FaLinkedin,
    href: "https://linkedin.com/",
  },
  {
    icon: BsTwitter,
    href: "https://twitter.com/",
  },
  {
    icon: BsInstagram,
    href: "https://instagram.com/",
  },
];