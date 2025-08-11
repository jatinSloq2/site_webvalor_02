export const colors = {
  primary: {
    50: "#eff6ff",
    100: "#dbeafe",
    200: "#bfdbfe",
    300: "#93c5fd",
    400: "#60a5fa",
    500: "#3b82f6",
    600: "#2563eb",
    700: "#1d4ed8",
    800: "#1e40af",
    900: "#1e3a8a",
  },
  secondary: {
    50: "#eef2ff",
    100: "#e0e7ff",
    200: "#c7d2fe",
    300: "#a5b4fc",
    400: "#818cf8",
    500: "#6366f1", // Main secondary
    600: "#4f46e5",
    700: "#4338ca",
    800: "#3730a3",
    900: "#312e81",
  },
  // Semantic Colors
  success: "#10b981",
  warning: "#f59e0b",
  error: "#ef4444",
  info: "#3b82f6",
} as const;

export const gradients = {
  primary: "linear-gradient(135deg, #3b82f6 0%, #6366f1 100%)",
  secondary: "linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%)",
  warm: "linear-gradient(135deg, #f59e0b 0%, #ef4444 100%)",
  cool: "linear-gradient(135deg, #06b6d4 0%, #3b82f6 100%)",
} as const;

export const spacing = {
  // Responsive spacing scales
  section: {
    xs: "py-8 sm:py-12",
    sm: "py-12 sm:py-16",
    md: "py-16 sm:py-20",
    lg: "py-20 sm:py-24",
    xl: "py-24 sm:py-32",
  },
  container: {
    base: "px-4 sm:px-6 lg:px-8",
    wide: "px-4 sm:px-6 lg:px-12 xl:px-16",
  },
  gap: {
    xs: "gap-3 sm:gap-4",
    sm: "gap-4 sm:gap-6",
    md: "gap-6 sm:gap-8",
    lg: "gap-8 sm:gap-12",
  },
} as const;

export const typography = {
  // Responsive typography scales
  heading: {
    h1: "text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-serif font-bold",
    h2: "text-3xl sm:text-4xl lg:text-5xl font-serif font-bold",
    h3: "text-2xl sm:text-3xl lg:text-4xl font-serif font-bold",
    h4: "text-xl sm:text-2xl font-serif font-bold",
    h5: "text-lg sm:text-xl font-serif font-bold",
    h6: "text-base sm:text-lg font-serif font-bold",
  },
  body: {
    lg: "text-lg sm:text-xl",
    base: "text-base sm:text-lg",
    sm: "text-sm sm:text-base",
    xs: "text-xs sm:text-sm",
  },
  display: {
    xl: "text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-serif font-bold",
    lg: "text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-serif font-bold",
    md: "text-3xl sm:text-4xl md:text-5xl font-serif font-bold",
  },
} as const;

export const borderRadius = {
  sm: "rounded-md",
  md: "rounded-lg",
  lg: "rounded-xl",
  xl: "rounded-2xl",
  full: "rounded-full",
} as const;

export const shadows = {
  sm: "shadow-sm",
  md: "shadow-md",
  lg: "shadow-lg",
  xl: "shadow-xl",
  "2xl": "shadow-2xl",
  glow: "shadow-2xl shadow-primary/25",
} as const;

export const animations = {
  transition: {
    fast: "transition-all duration-150",
    base: "transition-all duration-300",
    slow: "transition-all duration-500",
  },
  hover: {
    scale: "hover:scale-105",
    lift: "hover:-translate-y-1",
    shadow: "hover:shadow-xl",
    glow: "hover:shadow-2xl hover:shadow-primary/25",
  },
} as const;

export const components = {
  card: {
    base: `${borderRadius.lg} ${shadows.md} bg-card border border-border`,
    interactive: `${borderRadius.lg} ${shadows.md} bg-card border border-border ${animations.transition.base} hover:shadow-xl hover:border-primary/50`,
    glass: `${borderRadius.lg} backdrop-blur-sm bg-card/80 border border-border/50`,
  },
  button: {
    primary: `${borderRadius.md} bg-primary text-primary-foreground ${animations.transition.base} ${animations.hover.shadow}`,
    secondary: `${borderRadius.md} bg-secondary text-secondary-foreground ${animations.transition.base} ${animations.hover.shadow}`,
    outline: `${borderRadius.md} border border-border bg-background ${animations.transition.base} hover:bg-accent`,
    ghost: `${borderRadius.md} ${animations.transition.base} hover:bg-accent`,
  },
  input: {
    base: `${borderRadius.md} border border-border bg-background px-3 py-2 ${animations.transition.fast} focus:border-primary focus:ring-2 focus:ring-primary/20`,
  },
} as const;

export const grid = {
  responsive: {
    "1-2": "grid-cols-1 md:grid-cols-2",
    "1-3": "grid-cols-1 md:grid-cols-2 lg:grid-cols-3",
    "1-4": "grid-cols-1 sm:grid-cols-2 lg:grid-cols-4",
    "2-4": "grid-cols-2 lg:grid-cols-4",
    auto: "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4",
  },
} as const;

// Utility function to get design token classes
export function getDesignToken(
  category: keyof typeof designTokens,
  variant: string,
) {
  return (designTokens[category] as any)?.[variant] || "";
}

// Combined design tokens for easy access
export const designTokens = {
  colors,
  gradients,
  spacing,
  typography,
  borderRadius,
  shadows,
  animations,
  components,
  grid,
} as const;

// Theme configuration
export const theme = {
  // Consistent spacing for sections
  sectionSpacing: "py-16 sm:py-20 lg:py-24",
  containerSpacing: "px-4 sm:px-6 lg:px-8",
  maxWidth: "max-w-7xl mx-auto",

  // Common responsive patterns
  responsiveGrid: {
    cards: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8",
    features: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8",
    testimonials: "grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8",
    portfolio: "grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12",
  },

  // Consistent text styles
  heroTitle: typography.display.xl,
  sectionTitle: typography.heading.h2,
  cardTitle: typography.heading.h4,
  body: typography.body.base,

  // Consistent interactive elements
  buttonPrimary: `${components.button.primary} px-6 sm:px-8 py-3 sm:py-4`,
  buttonSecondary: `${components.button.outline} px-6 sm:px-8 py-3 sm:py-4`,
  card: components.card.interactive,
} as const;

export default designTokens;
