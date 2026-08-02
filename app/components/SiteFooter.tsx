import Link from "next/link";
import { ArrowUpRight, Mail, Phone } from "lucide-react";
import { navigation } from "../data/site-content";

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="footer-main">
        <div className="footer-brand" data-reveal>
          <Link className="brand" href="/" aria-label="Unifloe home">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img className="footer-logo" src="/brand/logoUnifloeNoBgWhite.png" width="44" height="44" alt="" />
            <span>Unifloe</span>
          </Link>
          <p>One platform for the busy, brilliant work of running a school.</p>
          <div className="footer-contact">
            <a href="tel:+919686110206"><Phone aria-hidden="true" /><span>+91 9686110206</span></a>
            <a href="mailto:adithya@unifloe.app"><Mail aria-hidden="true" /><span>adithya@unifloe.app</span></a>
          </div>
        </div>
        <nav className="footer-links" aria-label="Footer navigation" data-reveal>
          {navigation.map((item) => <Link href={item.href} key={item.href}>{item.label}</Link>)}
        </nav>
        <div className="footer-action" data-reveal>
          <h2>Bring your school together.</h2>
          <Link className="button button-light" href="/contact">Book a free demo <ArrowUpRight aria-hidden="true" /></Link>
        </div>
      </div>
      <div className="footer-bottom">
        <span>© {new Date().getFullYear()} Unifloe</span>
        <span>India-hosted data · DPDP-aligned design · APAAR-ready records</span>
        <span>Unifloe is an independent product and is not affiliated with the Government of India or APAAR.</span>
      </div>
    </footer>
  );
}
