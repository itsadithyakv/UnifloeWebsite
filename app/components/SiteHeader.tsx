import { navigation } from "../data/site-content";
import { StaggeredMenu } from "./StaggeredMenu";

const menuItems = navigation.map((item) => ({
  label: item.label,
  link: item.href,
  ariaLabel: item.href === "/" ? "Go to the Unifloe home page" : `Go to the ${item.label.toLowerCase()} page`,
}));

export function SiteHeader() {
  return (
    <StaggeredMenu
      items={menuItems}
      logoUrl="/brand/logoUnifloeNoBG.png"
      colors={["#dce9ff", "#79aaff", "#1a61f3"]}
      accentColor="#1a61f3"
      displayItemNumbering
    />
  );
}
