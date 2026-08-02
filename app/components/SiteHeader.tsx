import Link from "next/link";
import { navigation } from "../data/site-content";
import { StaggeredMenu } from "./StaggeredMenu";

const menuItems = navigation.map((item) => ({
  label: item.label,
  link: item.href,
  ariaLabel: item.href === "/" ? "Go to the Unifloe home page" : `Go to the ${item.label.toLowerCase()} page`,
}));

export function SiteHeader() {
  return (
    <>
      <div className="pilot-bar">
        <span className="pilot-pulse" aria-hidden="true" />
        Pilot applications are open
        <Link href="/pricing#pilot">Explore the one-year pilot</Link>
      </div>
      <StaggeredMenu
        items={menuItems}
        logoUrl="/brand/logoUnifloeNoBG.png"
        colors={["#dce9ff", "#79aaff", "#1a61f3"]}
        accentColor="#1a61f3"
        displayItemNumbering
      />
    </>
  );
}
