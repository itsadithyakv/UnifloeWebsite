"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { CSSProperties, useCallback, useEffect, useRef, useState } from "react";
import { productLinks } from "../data/site-content";
import styles from "./StaggeredMenu.module.css";

export type StaggeredMenuItem = {
  label: string;
  ariaLabel: string;
  link: string;
};

type StaggeredMenuProps = {
  position?: "left" | "right";
  colors?: string[];
  items: StaggeredMenuItem[];
  logoUrl: string;
  accentColor?: string;
  closeOnClickAway?: boolean;
};

const openClassName = "menu-open";

export function StaggeredMenu({
  position = "right",
  colors = ["#d8e6ff", "#72a7ff", "#185ee8"],
  items,
  logoUrl,
  accentColor = "#1a61f3",
  closeOnClickAway = true,
}: StaggeredMenuProps) {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const panelRef = useRef<HTMLElement>(null);
  const toggleRef = useRef<HTMLButtonElement>(null);
  const openRef = useRef(false);

  const closeMenu = useCallback(() => {
    if (!openRef.current) return;
    openRef.current = false;
    setOpen(false);
    const root = document.documentElement;
    root.classList.remove(openClassName);
    root.style.removeProperty("--scrollbar-gap");
  }, []);

  const openMenu = useCallback(() => {
    openRef.current = true;
    setOpen(true);
    // Lock the document scroll on the root element. Locking <body> does not
    // propagate to the viewport once <html> clips horizontal overflow, which
    // let the page keep scrolling behind the open menu and carried the header
    // away with it.
    const root = document.documentElement;
    const scrollbarGap = window.innerWidth - root.clientWidth;
    root.style.setProperty("--scrollbar-gap", `${Math.max(0, scrollbarGap)}px`);
    root.classList.add(openClassName);
  }, []);

  const toggleMenu = useCallback(() => {
    if (openRef.current) closeMenu();
    else openMenu();
  }, [closeMenu, openMenu]);

  useEffect(() => {
    return () => {
      const root = document.documentElement;
      root.classList.remove(openClassName);
      root.style.removeProperty("--scrollbar-gap");
    };
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        closeMenu();
        toggleRef.current?.focus();
        return;
      }
      if (event.key === "Tab" && panelRef.current && toggleRef.current) {
        const focusable = [
          toggleRef.current,
          ...Array.from(panelRef.current.querySelectorAll<HTMLElement>('a[href], button:not([disabled])')),
        ];
        const currentIndex = focusable.indexOf(document.activeElement as HTMLElement);
        if (event.shiftKey && currentIndex <= 0) {
          event.preventDefault();
          focusable.at(-1)?.focus();
        } else if (!event.shiftKey && currentIndex === focusable.length - 1) {
          event.preventDefault();
          focusable[0]?.focus();
        }
      }
    };
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [closeMenu, open]);

  useEffect(() => {
    if (openRef.current) closeMenu();
  }, [pathname, closeMenu]);

  const style = { "--menu-accent": accentColor } as CSSProperties;

  return (
    <div className={styles.wrapper} data-open={open || undefined} data-position={position} style={style}>
      <header className={styles.header}>
        <div className={styles.headerInner}>
          <Link className={styles.brand} href="/" aria-label="Unifloe home" onClick={() => closeMenu()}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img className={styles.logo} src={logoUrl} width="42" height="42" alt="" draggable={false} />
            <span>Unifloe</span>
          </Link>

          <div className={styles.headerActions}>
            <a className={styles.signIn} href={productLinks.signIn}>
              Sign in
            </a>
            <Link className={styles.startButton} href="/get-started" onClick={() => closeMenu()}>
              Get started
            </Link>
            <button
              ref={toggleRef}
              className={styles.toggle}
              type="button"
              aria-label={open ? "Close menu" : "Open menu"}
              aria-expanded={open}
              aria-controls="staggered-menu-panel"
              onClick={toggleMenu}
            >
              <span className={styles.toggleText}>{open ? "Close" : "Menu"}</span>
              <span className={styles.icon} aria-hidden="true">
                <span />
                <span />
              </span>
            </button>
          </div>
        </div>
      </header>

      <div
        className={`${styles.backdrop} ${open ? styles.backdropOpen : ""}`}
        aria-hidden="true"
        onMouseDown={closeOnClickAway ? () => closeMenu() : undefined}
      />

      <div className={styles.preLayers} aria-hidden="true">
        {colors.slice(0, 3).map((color, index) => (
          <div
            className={styles.preLayer}
            style={{ background: color, "--layer-index": index } as CSSProperties}
            key={color}
          />
        ))}
      </div>

      <aside
        id="staggered-menu-panel"
        ref={panelRef}
        className={styles.panel}
        aria-hidden={!open}
        inert={!open}
      >
        <div className={styles.productLinks}>
          <a href={productLinks.demo} onClick={() => closeMenu()}>
            <strong>Try the live demo</strong>
            <span>Open go.unifloe.app as any role. Nothing you change is saved.</span>
          </a>
          <a href={productLinks.signIn} onClick={() => closeMenu()}>
            <strong>Sign in</strong>
            <span>For schools already on Unifloe.</span>
          </a>
        </div>
        <nav aria-label="Primary navigation">
          <ol className={styles.list}>
            {items.map((item, index) => {
              const active = item.link === "/" ? pathname === "/" : pathname.startsWith(item.link);
              return (
                <li className={styles.itemWrap} style={{ "--item-index": index } as CSSProperties} key={item.link}>
                  <Link
                    className={`${styles.item} ${active ? styles.active : ""}`}
                    href={item.link}
                    aria-label={item.ariaLabel}
                    aria-current={active ? "page" : undefined}
                    onClick={() => closeMenu()}
                  >
                    <span className={styles.itemLabel}>{item.label}</span>
                  </Link>
                </li>
              );
            })}
          </ol>
        </nav>
        <div className={styles.panelCta}>
          <p>Want to see it on your own school’s records?</p>
          <Link href="/get-started" onClick={() => closeMenu()}>How to get started <span aria-hidden="true">↗</span></Link>
        </div>
      </aside>
    </div>
  );
}
