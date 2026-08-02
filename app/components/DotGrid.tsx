"use client";

import { useEffect, useMemo, useRef } from "react";
import styles from "./DotGrid.module.css";

type Dot = {
  cx: number;
  cy: number;
};

type DotGridProps = {
  dotSize?: number;
  gap?: number;
  baseColor?: string;
  activeColor?: string;
  activeScale?: number;
  proximity?: number;
  className?: string;
};

function hexToRgb(hex: string) {
  const match = hex.match(/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i);
  if (!match) return { r: 0, g: 0, b: 0 };
  return {
    r: Number.parseInt(match[1], 16),
    g: Number.parseInt(match[2], 16),
    b: Number.parseInt(match[3], 16),
  };
}

export function DotGrid({
  dotSize = 3,
  gap = 27,
  baseColor = "#d7e5fa",
  activeColor = "#75a7ff",
  activeScale = 2.25,
  proximity = 130,
  className = "",
}: DotGridProps) {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const dotsRef = useRef<Dot[]>([]);
  const pointerRef = useRef({ x: -1000, y: -1000 });
  const frameRef = useRef(0);
  const baseRgb = useMemo(() => hexToRgb(baseColor), [baseColor]);
  const activeRgb = useMemo(() => hexToRgb(activeColor), [activeColor]);

  useEffect(() => {
    const wrapper = wrapperRef.current;
    const canvas = canvasRef.current;
    if (!wrapper || !canvas) return;

    const context = canvas.getContext("2d");
    if (!context) return;

    const draw = () => {
      frameRef.current = 0;
      const { width, height } = wrapper.getBoundingClientRect();
      context.clearRect(0, 0, width, height);

      for (const dot of dotsRef.current) {
        const distance = Math.hypot(dot.cx - pointerRef.current.x, dot.cy - pointerRef.current.y);
        const strength = Math.max(0, 1 - distance / proximity);
        const red = Math.round(baseRgb.r + (activeRgb.r - baseRgb.r) * strength);
        const green = Math.round(baseRgb.g + (activeRgb.g - baseRgb.g) * strength);
        const blue = Math.round(baseRgb.b + (activeRgb.b - baseRgb.b) * strength);

        context.beginPath();
        const radius = (dotSize / 2) * (1 + (activeScale - 1) * strength);
        context.arc(dot.cx, dot.cy, radius, 0, Math.PI * 2);
        context.fillStyle = `rgb(${red}, ${green}, ${blue})`;
        context.fill();
      }
    };

    const scheduleDraw = () => {
      if (frameRef.current) return;
      frameRef.current = window.requestAnimationFrame(draw);
    };

    const buildGrid = () => {
      const { width, height } = wrapper.getBoundingClientRect();
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = Math.max(1, Math.round(width * dpr));
      canvas.height = Math.max(1, Math.round(height * dpr));
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      context.setTransform(dpr, 0, 0, dpr, 0, 0);

      const cell = dotSize + gap;
      const columns = Math.ceil(width / cell) + 1;
      const rows = Math.ceil(height / cell) + 1;
      const startX = (width - (columns - 1) * cell) / 2;
      const startY = (height - (rows - 1) * cell) / 2;
      const dots: Dot[] = [];

      for (let row = 0; row < rows; row += 1) {
        for (let column = 0; column < columns; column += 1) {
          dots.push({ cx: startX + column * cell, cy: startY + row * cell });
        }
      }

      dotsRef.current = dots;
      scheduleDraw();
    };

    const setPointerOutside = () => {
      if (pointerRef.current.x === -1000) return;
      pointerRef.current = { x: -1000, y: -1000 };
      scheduleDraw();
    };

    const onPointerMove = (event: PointerEvent) => {
      const bounds = wrapper.getBoundingClientRect();
      const x = event.clientX - bounds.left;
      const y = event.clientY - bounds.top;

      if (x < 0 || y < 0 || x > bounds.width || y > bounds.height) {
        setPointerOutside();
        return;
      }

      pointerRef.current = { x, y };
      scheduleDraw();
    };

    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const finePointer = window.matchMedia("(pointer: fine)").matches;
    const resizeObserver = new ResizeObserver(buildGrid);
    resizeObserver.observe(wrapper);
    buildGrid();

    if (!reducedMotion && finePointer) {
      window.addEventListener("pointermove", onPointerMove, { passive: true });
    }

    return () => {
      if (frameRef.current) window.cancelAnimationFrame(frameRef.current);
      resizeObserver.disconnect();
      window.removeEventListener("pointermove", onPointerMove);
    };
  }, [activeRgb, activeScale, baseRgb, dotSize, gap, proximity]);

  return (
    <div ref={wrapperRef} className={`${styles.grid} ${className}`} aria-hidden="true">
      <canvas ref={canvasRef} className={styles.canvas} />
    </div>
  );
}
