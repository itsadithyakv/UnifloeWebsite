"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { CSSProperties, useCallback, useEffect, useRef, useState } from "react";
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
  displayItemNumbering?: boolean;
  logoUrl: string;
  accentColor?: string;
  closeOnClickAway?: boolean;
};

export function StaggeredMenu({
  position = "right",
  colors = ["#d8e6ff", "#72a7ff", "#185ee8"],
  items,
  displayItemNumbering = true,
  logoUrl,
  accentColor = "#1a61f3",
  closeOnClickAway = true,
}: StaggeredMenuProps) {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const wrapperRef = useRef<HTMLDivElement>(null);
  const panelRef = useRef<HTMLElement>(null);
  const toggleRef = useRef<HTMLButtonElement>(null);
  const openRef = useRef(false);

  const syncViewportTop = useCallback(() => {
    const wrapper = wrapperRef.current;
    if (!wrapper) return;
    const headerHeight = wrapper.offsetHeight;
    const bottom = Math.min(window.innerHeight, wrapper.getBoundingClientRect().bottom);
    const viewportTop = Math.max(headerHeight, bottom);
    wrapper.style.setProperty("--menu-viewport-top", `${viewportTop}px`);
  }, []);

  const closeMenu = useCallback(() => {
    if (!openRef.current) return;
    openRef.current = false;
    setOpen(false);
    document.body.classList.remove("menu-open");
  }, []);

  const openMenu = useCallback(() => {
    syncViewportTop();
    openRef.current = true;
    setOpen(true);
    document.body.classList.add("menu-open");
  }, [syncViewportTop]);

  const toggleMenu = useCallback(() => {
    if (openRef.current) closeMenu();
    else openMenu();
  }, [closeMenu, openMenu]);

  useEffect(() => {
    syncViewportTop();
    return () => {
      document.body.classList.remove("menu-open");
    };
  }, [syncViewportTop]);

  useEffect(() => {
    if (!open) return;
    window.addEventListener("resize", syncViewportTop);
    return () => window.removeEventListener("resize", syncViewportTop);
  }, [open, syncViewportTop]);

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
    <div ref={wrapperRef} className={styles.wrapper} data-open={open || undefined} data-position={position} style={style}>
      <header className={styles.header}>
        <div className={styles.headerInner}>
          <Link className={styles.brand} href="/" aria-label="Unifloe home" onClick={() => closeMenu()}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img className={styles.logo} src={logoUrl} width="42" height="42" alt="" draggable={false} />
            <span>Unifloe</span>
          </Link>

          <div className={styles.headerActions}>
            <Link className={styles.demoButton} href="/contact" onClick={() => closeMenu()}>
              Book a free demo
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
        <div className={styles.panelTop}>
          <span>Explore Unifloe</span>
          <span>ERP + LMS for Indian schools</span>
        </div>
        <Link className={styles.pilotLink} href="/pricing#pilot" onClick={() => closeMenu()}>
          <span>Pilot applications are open</span><strong>View the offer →</strong>
        </Link>
        <nav aria-label="Primary navigation">
          <ol className={`${styles.list} ${displayItemNumbering ? styles.numbered : ""}`}>
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
                    {displayItemNumbering && <span className={styles.number}>{String(index + 1).padStart(2, "0")}</span>}
                    <span className={styles.itemLabel}>{item.label}</span>
                  </Link>
                </li>
              );
            })}
          </ol>
        </nav>
        <div className={styles.panelCta}>
          <p>Ready to see your school in one place?</p>
          <Link href="/contact" onClick={() => closeMenu()}>Start with a demo <span aria-hidden="true">↗</span></Link>
        </div>
      </aside>
    </div>
  );
}
