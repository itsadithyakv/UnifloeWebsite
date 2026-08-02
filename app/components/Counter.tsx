"use client";

import { animate, useInView, useReducedMotion } from "motion/react";
import { useEffect, useMemo, useRef, useState } from "react";
import styles from "./Counter.module.css";

type PriceCounterProps = {
  text: string;
  className?: string;
};

type ParsedPrice = {
  prefix: string;
  formattedNumber: string;
  suffix: string;
  value: number;
  decimalPlaces: number;
  usesGrouping: boolean;
};

function parsePriceText(text: string): ParsedPrice | null {
  const match = text.match(/^(.*?)(\d[\d,]*(?:\.\d+)?)(.*)$/);
  if (!match) return null;
  const formattedNumber = match[2];
  const decimalPlaces = formattedNumber.split(".")[1]?.length ?? 0;
  return {
    prefix: match[1],
    formattedNumber,
    suffix: match[3],
    value: Number(formattedNumber.replaceAll(",", "")),
    decimalPlaces,
    usesGrouping: formattedNumber.includes(","),
  };
}

function formatAnimatedPrice(price: ParsedPrice, value: number) {
  const formattedValue = new Intl.NumberFormat("en-IN", {
    useGrouping: price.usesGrouping,
    minimumFractionDigits: price.decimalPlaces,
    maximumFractionDigits: price.decimalPlaces,
  }).format(value);
  return `${price.prefix}${formattedValue}${price.suffix}`;
}

export function PriceCounter({ text, className = "" }: PriceCounterProps) {
  const containerRef = useRef<HTMLSpanElement>(null);
  const visualRef = useRef<HTMLSpanElement>(null);
  const [isCounting, setIsCounting] = useState(false);
  const parsed = useMemo(() => parsePriceText(text), [text]);
  const isInView = useInView(containerRef, { once: true, amount: 0.55 });
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    const visual = visualRef.current;
    if (!visual || !parsed || !isInView || prefersReducedMotion) return;

    setIsCounting(true);
    if (parsed.value === 0) {
      visual.textContent = text;
      const timeout = window.setTimeout(() => setIsCounting(false), 680);
      return () => window.clearTimeout(timeout);
    }

    visual.textContent = formatAnimatedPrice(parsed, 0);
    const controls = animate(0, parsed.value, {
      duration: 0.78,
      ease: [0.16, 1, 0.3, 1],
      onUpdate: (latest) => {
        if (visualRef.current) visualRef.current.textContent = formatAnimatedPrice(parsed, latest);
      },
      onComplete: () => {
        if (visualRef.current) visualRef.current.textContent = text;
        setIsCounting(false);
      },
    });

    return () => controls.stop();
  }, [isInView, parsed, prefersReducedMotion, text]);

  if (!parsed) return <span className={className}>{text}</span>;

  return (
    <span ref={containerRef} className={`${styles.container} ${className}`.trim()} aria-label={text}>
      <span className={styles.sizer} aria-hidden="true">{text}</span>
      <span
        ref={visualRef}
        className={`${styles.visual} ${isCounting ? styles.counting : ""}`.trim()}
        aria-hidden="true"
      >
        {text}
      </span>
    </span>
  );
}
