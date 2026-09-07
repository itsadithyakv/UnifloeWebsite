"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

const revealSelector = "[data-reveal]";
// Nothing may stay hidden for long, whatever the observer does: after this
// delay every remaining element is shown, so a missed intersection can never
// leave a blurred, invisible block on the page.
const safetyRevealMs = 2400;

function isPastOrInView(element: HTMLElement) {
  const rect = element.getBoundingClientRect();
  if (rect.width === 0 && rect.height === 0) return false;
  return rect.top < window.innerHeight * 0.92;
}

export function ScrollMotion() {
  const pathname = usePathname();

  useEffect(() => {
    const elements = Array.from(document.querySelectorAll<HTMLElement>(revealSelector));
    const groups = Array.from(document.querySelectorAll<HTMLElement>("[data-reveal-group]"));

    for (const group of groups) {
      Array.from(group.children).forEach((child, index) => {
        if (!(child instanceof HTMLElement)) return;
        child.dataset.reveal = "";
        child.style.setProperty("--reveal-delay", `${Math.min(index * 70, 280)}ms`);
        elements.push(child);
      });
    }

    const uniqueElements = [...new Set(elements)];
    const show = (element: Element) => {
      element.classList.remove("reveal-ready");
      element.classList.add("reveal-visible");
    };

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches || typeof IntersectionObserver === "undefined") {
      uniqueElements.forEach(show);
      return;
    }

    // Anything already on screen, or above the current scroll position (a
    // reload or an anchor link lands mid page), is shown at once. Only content
    // below the fold plays the entrance.
    const pending: HTMLElement[] = [];
    uniqueElements.forEach((element) => {
      element.classList.remove("reveal-visible");
      if (isPastOrInView(element)) {
        show(element);
      } else {
        element.classList.add("reveal-ready");
        pending.push(element);
      }
    });

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          show(entry.target);
          observer.unobserve(entry.target);
        }
      },
      { rootMargin: "0px 0px -6%", threshold: 0 },
    );

    let frame = 0;
    frame = window.requestAnimationFrame(() => {
      pending.forEach((element) => observer.observe(element));
    });

    const safety = window.setTimeout(() => {
      pending.forEach((element) => {
        if (isPastOrInView(element)) {
          show(element);
          observer.unobserve(element);
        }
      });
    }, safetyRevealMs);

    const onPageShow = () => pending.forEach((element) => { if (isPastOrInView(element)) show(element); });
    window.addEventListener("pageshow", onPageShow);

    return () => {
      window.cancelAnimationFrame(frame);
      window.clearTimeout(safety);
      window.removeEventListener("pageshow", onPageShow);
      observer.disconnect();
    };
  }, [pathname]);

  return null;
}
