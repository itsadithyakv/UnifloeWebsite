"use client";

import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { ChevronDown } from "lucide-react";
import { useId, useState } from "react";

type FeatureAccordionProps = {
  index: string;
  name: string;
  summary: string;
  features: string[];
  defaultOpen?: boolean;
};

const smoothEase = [0.22, 1, 0.36, 1] as const;

export function FeatureAccordion({ index, name, summary, features, defaultOpen = false }: FeatureAccordionProps) {
  const [open, setOpen] = useState(defaultOpen);
  const prefersReducedMotion = useReducedMotion();
  const contentId = useId();
  const transition = prefersReducedMotion
    ? { duration: 0 }
    : { height: { duration: 0.48, ease: smoothEase }, opacity: { duration: 0.3, ease: smoothEase }, filter: { duration: 0.34, ease: smoothEase } };

  return (
    <article className={`module-card ${open ? "is-open" : ""}`}>
      <button
        className="module-summary"
        type="button"
        aria-expanded={open}
        aria-controls={contentId}
        onClick={() => setOpen((current) => !current)}
      >
        <span className="module-summary-copy"><span>{index}</span><strong>{name}</strong></span>
        <ChevronDown aria-hidden="true" />
      </button>
      <AnimatePresence initial={false}>
        {open ? (
          <motion.div
            id={contentId}
            className="module-detail-shell"
            initial={{ height: 0, opacity: 0, filter: "blur(9px)" }}
            animate={{ height: "auto", opacity: 1, filter: "blur(0px)" }}
            exit={{ height: 0, opacity: 0, filter: "blur(7px)" }}
            transition={transition}
          >
            <div className="module-detail"><p>{summary}</p><ul>{features.map((feature) => <li key={feature}>{feature}</li>)}</ul></div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </article>
  );
}
