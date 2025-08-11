import type { Metadata, Viewport } from "next";
import { Inter, Cormorant_Garamond, Playfair_Display } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/layout/theme-provider";
import { CustomCursor } from "@/components/animations/custom-cursor";
import { OrganizationStructuredData, WebsiteStructuredData } from "@/components/seo/structured-data";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap", // Better font loading performance
});

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  variable: "--font-serif",
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-brand",
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#ffffff' },
    { media: '(prefers-color-scheme: dark)', color: '#0a0a0a' },
  ],
}

export const metadata: Metadata = {
  title: {
    default: "Webvalor - Premium Web Development Agency",
    template: "%s | Webvalor",
  },
  description:
    "Transform your digital presence with premium web development and design services. We create confident, motion-first websites that drive results and captivate audiences.",
  keywords: [
    "web development",
    "web design",
    "digital agency",
    "premium websites",
    "motion design",
    "creative agency",
    "UI/UX design",
    "responsive design",
    "modern web development",
    "professional web services"
  ],
  authors: [{ name: "Webvalor Team", url: "https://webvalor.vercel.app" }],
  creator: "Webvalor",
  publisher: "Webvalor",
  category: "Web Development",

  // Update with your actual domain
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://webvalor.vercel.app'),

  alternates: {
    canonical: "/",
    languages: {
      'en-US': '/en-US',
      'en': '/en',
    },
  },

  openGraph: {
    type: "website",
    locale: "en_US",
    url: "/",
    siteName: "Webvalor",
    title: "Webvalor - Premium Web Development Agency",
    description: "Transform your digital presence with premium web development and design services. We create confident, motion-first websites that drive results.",
    images: [
      {
        url: "/og-image.jpg", // Create this image: 1200x630px
        width: 1200,
        height: 630,
        alt: "Webvalor - Premium Web Development Agency",
        type: "image/jpeg",
      },
      {
        url: "/og-image-square.jpg", // Create this image: 1200x1200px
        width: 1200,
        height: 1200,
        alt: "Webvalor Logo",
        type: "image/jpeg",
      }
    ],
  },

  twitter: {
    card: "summary_large_image",
    site: "@webvalor", // Update with your Twitter handle
    creator: "@webvalor",
    title: "Webvalor - Premium Web Development Agency",
    description: "Transform your digital presence with premium web development and design services.",
    images: [
      {
        url: "/twitter-image.png", // Create this image: 1200x600px
        alt: "Webvalor - Premium Web Development Agency",
      }
    ],
  },

  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },

  verification: {
    google: process.env.GOOGLE_VERIFICATION_CODE,
    yandex: process.env.YANDEX_VERIFICATION_CODE,
  },

  // Additional metadata for better SEO
  applicationName: "Webvalor",
  referrer: "origin-when-cross-origin",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },

  // App-specific metadata
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: "Webvalor",
  },

  // Manifest for PWA (if you plan to add PWA features)
  manifest: "/manifest.json",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* Preconnect to external domains for better performance */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />

        {/* Favicon and app icons */}
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/icon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />

        {/* Additional meta tags */}
        <meta name="format-detection" content="telephone=no, date=no, email=no, address=no" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />

        {/* Prevent zoom on iOS Safari */}
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5, user-scalable=yes" />
      </head>
      <body
        className={`${inter.variable} ${cormorant.variable} ${playfair.variable} antialiased min-h-screen`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange={false}
        >
          <CustomCursor />
          {children}

          {/* Structured Data */}
          <OrganizationStructuredData
            name="Webvalor"
            url="https://webvalor.vercel.app" // Update with your actual domain
            logo="https://webvalor.vercel.app/logo.png" // Update with your logo URL
            description="Premium web development and design agency specializing in motion-first, experience-led digital solutions."
            address={{
              streetAddress: "Your Street Address", // Update with actual address
              addressLocality: "Your City",
              addressRegion: "Your State/Region",
              postalCode: "Your ZIP",
              addressCountry: "Your Country"
            }}
            contactPoint={{
              telephone: "+91-7240440461", // Update with actual phone
              contactType: "customer service"
            }}
          />
          <WebsiteStructuredData
            url="https://webvalor.vercel.app"
            name="Webvalor"
          />
        </ThemeProvider>
      </body>
    </html>
  );
}