"use client";

import * as React from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export function CustomCursor() {
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  const springConfig = { damping: 25, stiffness: 700 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  const [cursorVariant, setCursorVariant] = React.useState("default");

  React.useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX - 16);
      cursorY.set(e.clientY - 16);
    };

    const handleMouseEnter = (e: Event) => {
      const target = e.target as HTMLElement;
      if (
        target.matches('a, button, [role="button"], input, textarea, select')
      ) {
        setCursorVariant("button");
      } else if (target.matches("img, video")) {
        setCursorVariant("image");
      } else if (target.matches('[data-cursor="text"]')) {
        setCursorVariant("text");
      }
    };

    const handleMouseLeave = () => {
      setCursorVariant("default");
    };

    window.addEventListener("mousemove", moveCursor);

    // Add event listeners to interactive elements
    const interactiveElements = document.querySelectorAll(
      'a, button, [role="button"], input, textarea, select, img, video, [data-cursor]',
    );
    interactiveElements.forEach((el) => {
      el.addEventListener("mouseenter", handleMouseEnter);
      el.addEventListener("mouseleave", handleMouseLeave);
    });

    return () => {
      window.removeEventListener("mousemove", moveCursor);
      interactiveElements.forEach((el) => {
        el.removeEventListener("mouseenter", handleMouseEnter);
        el.removeEventListener("mouseleave", handleMouseLeave);
      });
    };
  }, [cursorX, cursorY]);

  const variants = {
    default: {
      width: 32,
      height: 32,
      backgroundColor: "transparent",
      border: "2px solid #3B82F6",
      mixBlendMode: "difference" as const,
    },
    button: {
      width: 64,
      height: 64,
      backgroundColor: "#3B82F6",
      border: "none",
      mixBlendMode: "difference" as const,
    },
    text: {
      width: 64,
      height: 8,
      backgroundColor: "#3B82F6",
      border: "none",
      borderRadius: "4px",
      mixBlendMode: "difference" as const,
    },
    image: {
      width: 80,
      height: 80,
      backgroundColor: "transparent",
      border: "2px solid #6366F1",
      mixBlendMode: "difference" as const,
    },
  };

  // Only show cursor on desktop
  if (typeof window !== "undefined" && window.innerWidth < 768) {
    return null;
  }

  return (
    <motion.div
      className="fixed top-0 left-0 pointer-events-none z-[9999] rounded-full"
      style={{
        x: cursorXSpring,
        y: cursorYSpring,
      }}
      variants={variants}
      animate={cursorVariant}
      transition={{
        type: "spring",
        stiffness: 500,
        damping: 28,
      }}
    />
  );
}
