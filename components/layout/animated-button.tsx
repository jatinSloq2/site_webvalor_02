"use client"

import { motion } from "framer-motion"
import { Button, ButtonProps } from "@/components/ui/button"
import { cn } from "@/lib/utils"

interface AnimatedButtonProps extends ButtonProps {
  children: React.ReactNode
  glowing?: boolean
}

export function AnimatedButton({ 
  children, 
  className, 
  glowing = false, 
  ...props 
}: AnimatedButtonProps) {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      transition={{ type: "spring", stiffness: 400, damping: 17 }}
    >
      <Button
        className={cn(
          "relative overflow-hidden transition-all duration-300 bg-gradient-to-r from-primary to-secondary",
          glowing && "shadow-lg shadow-primary/25 hover:shadow-primary/40",
          className
        )}
        {...props}
      >
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-primary to-secondary"
          initial={{ x: "-100%" }}
          whileHover={{ x: "100%" }}
          transition={{ duration: 0.6 }}
        />
        <span className="relative z-10">{children}</span>
      </Button>
    </motion.div>
  )
}