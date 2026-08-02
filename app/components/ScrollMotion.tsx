"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

const revealSelector = "[data-reveal]";

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
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      uniqueElements.forEach((element) => element.classList.add("reveal-visible"));
      return;
    }

    uniqueElements.forEach((element) => {
      element.classList.remove("reveal-visible");
      element.classList.add("reveal-ready");
    });
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          entry.target.classList.add("reveal-visible");
          observer.unobserve(entry.target);
        }
      },
      { rootMargin: "0px 0px -8%", threshold: 0.12 },
    );

    let secondFrame = 0;
    const firstFrame = window.requestAnimationFrame(() => {
      secondFrame = window.requestAnimationFrame(() => {
        uniqueElements.forEach((element) => observer.observe(element));
      });
    });

    return () => {
      window.cancelAnimationFrame(firstFrame);
      window.cancelAnimationFrame(secondFrame);
      observer.disconnect();
    };
  }, [pathname]);

  return null;
}
