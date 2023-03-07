import Link from "next/link";
import { Container } from "./container";
import { GithubIcon } from "./icons/github";
import { Logo } from "./icons/logo";
import { SlackIcon } from "./icons/slack";
import { TwitterIcon } from "./icons/twitter";

const footerLinks = [
  {
    title: "Product",
    links: [
      { title: "Features", href: "#" },
      { title: "Integrations", href: "#" },
      { title: "Pricing", href: "#" },
      { title: "Changelog", href: "#" },
      { title: "Docs", href: "#" },
      { title: "Linear Method", href: "#" },
      { title: "Download", href: "#" },
    ],
  },
  {
    title: "Company",
    links: [
      { title: "About us", href: "#" },
      { title: "Blog", href: "#" },
      { title: "Careers", href: "#" },
      { title: "Customers", href: "#" },
      { title: "Brand", href: "#" },
    ],
  },
  {
    title: "Resources",
    links: [
      { title: "Community", href: "#" },
      { title: "Contact", href: "#" },
      { title: "DPA", href: "#" },
      { title: "Terms of service", href: "#" },
    ],
  },
  {
    title: "Developers",
    links: [
      { title: "API", href: "#" },
      { title: "Status", href: "#" },
      { title: "GitHub", href: "#" },
    ],
  },
];

export const Footer = () => (
  <footer className="mt-12 border-t border-transparent-white py-[5.6rem] text-sm">
    <Container className="flex flex-col justify-between">
      <div>
        <div className="flex h-full flex-row items-start justify-between">
          <div className="flex items-center text-grey">
            <Logo className="mr-4 h-4 w-4" /> Compila
          </div>
          <div className="flex flex-col items-end gap-2">
            <a
              href="mailto:contact@compila.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              contact@compila.com
            </a>
            <div className="mt-auto flex space-x-4 text-grey">
              <TwitterIcon />
              <GithubIcon />
              <SlackIcon />
            </div>
          </div>
        </div>
      </div>
    </Container>
  </footer>
);
