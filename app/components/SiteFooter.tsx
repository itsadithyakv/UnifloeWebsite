import Link from "next/link";
import { ArrowUpRight, Mail, Phone } from "lucide-react";
import { footerNavigationGroups } from "../data/site-content";

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="footer-main">
        <div className="footer-brand" data-reveal>
          <Link className="brand" href="/" aria-label="Unifloe home">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img className="footer-logo" src="/brand/logoUnifloeNoBgWhite-96.png" width="44" height="44" alt="" />
            <span>Unifloe</span>
          </Link>
          <p>One platform for the busy, brilliant work of running a school.</p>
          <div className="footer-contact">
            <a href="tel:+919686110206"><Phone aria-hidden="true" /><span>+91 9686110206</span></a>
            <a href="mailto:adithya@unifloe.app"><Mail aria-hidden="true" /><span>adithya@unifloe.app</span></a>
          </div>
        </div>
        <nav className="footer-links" aria-label="Footer navigation" data-reveal>
          {footerNavigationGroups.map((group) => (
            <div key={group.title}>
              <h3>{group.title}</h3>
              {group.links.map((item) =>
                item.href.startsWith("http") ? (
                  <a href={item.href} key={item.href}>{item.label}</a>
                ) : (
                  <Link href={item.href} key={item.href}>{item.label}</Link>
                ),
              )}
            </div>
          ))}
        </nav>
        <div className="footer-action" data-reveal>
          <h2>Ready when you are.</h2>
          <Link className="button button-light" href="/get-started">Get started <ArrowUpRight aria-hidden="true" /></Link>
        </div>
      </div>
      <div className="footer-bottom">
        <span>© {new Date().getFullYear()} Unifloe, a PaperKite product</span>
        <span>Guardian consent under the DPDP Act · No advertising or tracking</span>
        <span>Unifloe is an independent product and is not affiliated with the Government of India, CBSE, CISCE, APAAR or UDISE+.</span>
      </div>
    </footer>
  );
}
