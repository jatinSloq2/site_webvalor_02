"use client";

import * as React from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export function CustomCursor() {
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  const springConfig = { damping: 20, stiffness: 300 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  const [cursorVariant, setCursorVariant] = React.useState("default");

  React.useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX - 10);
      cursorY.set(e.clientY - 10);
    };

    const handleMouseEnter = (e: Event) => {
      const target = e.target as HTMLElement;
      if (
        target.matches("a, button, [role='button'], input, textarea, select")
      ) {
        setCursorVariant("hover");
      } else if (target.matches('[data-cursor="text"]')) {
        setCursorVariant("text");
      } else if (target.matches("img, video")) {
        setCursorVariant("media");
      }
    };

    const handleMouseLeave = () => {
      setCursorVariant("default");
    };

    window.addEventListener("mousemove", moveCursor);

    const elements = document.querySelectorAll(
      "a, button, [role='button'], input, textarea, select, img, video, [data-cursor]"
    );
    elements.forEach((el) => {
      el.addEventListener("mouseenter", handleMouseEnter);
      el.addEventListener("mouseleave", handleMouseLeave);
    });

    return () => {
      window.removeEventListener("mousemove", moveCursor);
      elements.forEach((el) => {
        el.removeEventListener("mouseenter", handleMouseEnter);
        el.removeEventListener("mouseleave", handleMouseLeave);
      });
    };
  }, [cursorX, cursorY]);

  const variants = {
    default: {
      width: 20,
      height: 20,
      backgroundColor: "rgba(59, 130, 246, 0.2)", // light blue glow
      border: "1px solid #3B82F6",
      boxShadow: "0 0 8px rgba(59, 130, 246, 0.4)",
      mixBlendMode: "normal" as const,
    },
    hover: {
      width: 40,
      height: 40,
      backgroundColor: "rgba(59, 130, 246, 0.4)",
      border: "none",
      boxShadow: "0 0 12px rgba(59, 130, 246, 0.6)",
    },
    text: {
      width: 60,
      height: 6,
      backgroundColor: "#3B82F6",
      border: "none",
      borderRadius: "3px",
    },
    media: {
      width: 50,
      height: 50,
      backgroundColor: "transparent",
      border: "2px dashed #6366F1",
      boxShadow: "0 0 10px rgba(99, 102, 241, 0.4)",
    },
  };

  // Disable on mobile
  if (typeof window !== "undefined" && window.innerWidth < 768) return null;

  return (
    <>
      {/* Main Cursor */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9999] rounded-full"
        style={{
          x: cursorXSpring,
          y: cursorYSpring,
        }}
        variants={variants}
        animate={cursorVariant}
        transition={{ type: "spring", stiffness: 500, damping: 30 }}
      />

      {/* Optional Inner Dot */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9999] rounded-full bg-blue-500"
        style={{
          x: cursorXSpring,
          y: cursorYSpring,
          width: 6,
          height: 6,
          marginLeft: -3,
          marginTop: -3,
        }}
      />
    </>
  );
}
