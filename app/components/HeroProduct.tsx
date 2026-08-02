"use client";

import { useEffect, useRef } from "react";

const MAX_TILT_X = 2.4;
const MAX_TILT_Y = 3.4;

function clamp(value: number) {
  return Math.max(-1, Math.min(1, value));
}

export function HeroProduct() {
  const containerRef = useRef<HTMLDivElement>(null);
  const screenshotRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    const screenshot = screenshotRef.current;
    const hero = container?.closest<HTMLElement>(".hero");
    if (!container || !screenshot || !hero) return;

    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const finePointer = window.matchMedia("(pointer: fine)").matches;
    if (reducedMotion || !finePointer) return;

    let frame = 0;
    let tiltX = 0;
    let tiltY = 0;

    const applyTilt = () => {
      frame = 0;
      screenshot.style.setProperty("--hero-tilt-x", `${tiltX.toFixed(2)}deg`);
      screenshot.style.setProperty("--hero-tilt-y", `${tiltY.toFixed(2)}deg`);
    };

    const scheduleTilt = () => {
      if (frame) return;
      frame = window.requestAnimationFrame(applyTilt);
    };

    const onPointerMove = (event: PointerEvent) => {
      const bounds = hero.getBoundingClientRect();
      const horizontal = clamp((event.clientX - (bounds.left + bounds.width / 2)) / (bounds.width / 2));
      const vertical = clamp((event.clientY - (bounds.top + bounds.height / 2)) / (bounds.height / 2));
      tiltX = vertical * -MAX_TILT_X;
      tiltY = horizontal * MAX_TILT_Y;
      scheduleTilt();
    };

    const resetTilt = () => {
      tiltX = 0;
      tiltY = 0;
      scheduleTilt();
    };

    hero.addEventListener("pointermove", onPointerMove, { passive: true });
    hero.addEventListener("pointerleave", resetTilt, { passive: true });

    return () => {
      if (frame) window.cancelAnimationFrame(frame);
      hero.removeEventListener("pointermove", onPointerMove);
      hero.removeEventListener("pointerleave", resetTilt);
    };
  }, []);

  return (
    <div ref={containerRef} className="hero-product" data-reveal>
      <div className="hero-product-aura" aria-hidden="true" />
      <figure ref={screenshotRef} className="hero-screenshot">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/herosectionphoto.png"
          width="2048"
          height="1100"
          alt="The Unifloe dashboard with attendance, assignments, library status, and a weekly timetable"
          fetchPriority="high"
        />
      </figure>
    </div>
  );
}
