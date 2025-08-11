import { Metadata } from "next";

interface SEOMetadataProps {
  title: string;
  description: string;
  keywords?: string[];
  canonical?: string;
  ogImage?: string;
  ogType?: string;
  twitterCard?: string;
  author?: string;
  publishedTime?: string;
  modifiedTime?: string;
}

export function generateMetadata({
  title,
  description,
  keywords = [],
  canonical,
  ogImage = "/og-image.png",
  ogType = "website",
  twitterCard = "summary_large_image",
  author = "WebValor Creative Agency",
  publishedTime,
  modifiedTime,
}: SEOMetadataProps): Metadata {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://webvalor.com";
  const fullTitle = title.includes("WebValor")
    ? title
    : `${title} | WebValor - Creative Digital Agency`;

  const baseKeywords = [
    "web development",
    "web design",
    "digital agency",
    "webvalor",
    "creative agency",
    "ui/ux design",
    "mobile app development",
    "e-commerce development",
    "brand identity",
    "digital solutions",
    "responsive design",
    "modern web development",
    "custom software development",
  ];

  const allKeywords = [...baseKeywords, ...keywords].join(", ");

  return {
    title: fullTitle,
    description,
    keywords: allKeywords,
    authors: [{ name: author }],
    creator: author,
    publisher: "WebValor Creative Agency",

    // Robots
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },

    // Open Graph
    openGraph: {
      type: ogType as any,
      locale: "en_US",
      url: canonical || siteUrl,
      title: fullTitle,
      description,
      siteName: "WebValor Creative Agency",
      images: [
        {
          url: ogImage.startsWith("http") ? ogImage : `${siteUrl}${ogImage}`,
          width: 1200,
          height: 630,
          alt: fullTitle,
        },
      ],
      ...(publishedTime && { publishedTime }),
      ...(modifiedTime && { modifiedTime }),
    },

    // Twitter
    twitter: {
      card: twitterCard as any,
      title: fullTitle,
      description,
      images: [ogImage.startsWith("http") ? ogImage : `${siteUrl}${ogImage}`],
      creator: "@webvalor",
      site: "@webvalor",
    },

    // Verification
    verification: {
      google: process.env.GOOGLE_SITE_VERIFICATION,
      yandex: process.env.YANDEX_VERIFICATION,
      bing: process.env.BING_VERIFICATION,
    },

    ...(canonical && { alternates: { canonical } }),

    // Additional metadata
    category: "Technology",
    classification: "Business",
    ...(publishedTime && {
      other: { "article:published_time": publishedTime },
    }),
    ...(modifiedTime && { other: { "article:modified_time": modifiedTime } }),
  };
}

// Default metadata for pages
export const defaultMetadata = {
  title:
    "WebValor - Creative Digital Agency | Web Development & Design Services",
  description:
    "Transform your digital presence with WebValor's expert web development, UI/UX design, and digital solutions. We create stunning, high-performance websites and applications that drive results.",
  keywords: [
    "jaipur web development",
    "rajasthan digital agency",
    "indian web development company",
    "custom web applications",
    "react development",
    "next.js development",
    "typescript development",
    "modern web technologies",
  ],
};

// Page-specific metadata
export const pageMetadata = {
  home: {
    title:
      "WebValor - Creative Digital Agency | Professional Web Development Services",
    description:
      "Leading digital agency specializing in modern web development, UI/UX design, and digital transformation. Create exceptional digital experiences with WebValor's expert team.",
    keywords: [
      "homepage",
      "digital agency services",
      "web development portfolio",
    ],
  },

  services: {
    title:
      "Our Services - Web Development, Design & Digital Solutions | WebValor",
    description:
      "Comprehensive digital services including web development, mobile apps, UI/UX design, e-commerce solutions, and brand identity. Discover how WebValor can transform your business.",
    keywords: [
      "web development services",
      "ui/ux design services",
      "mobile app development",
      "e-commerce development",
      "digital transformation",
    ],
  },

  portfolio: {
    title: "Portfolio - Our Work & Client Success Stories | WebValor",
    description:
      "Explore WebValor's portfolio of successful projects including web applications, mobile apps, and digital solutions. See how we've helped businesses achieve their digital goals.",
    keywords: [
      "web development portfolio",
      "design portfolio",
      "client projects",
      "case studies",
      "success stories",
    ],
  },

  about: {
    title: "About Us - Meet the WebValor Team | Creative Digital Agency",
    description:
      "Learn about WebValor's mission, vision, and the passionate team behind our success. Discover our journey, values, and commitment to delivering exceptional digital experiences.",
    keywords: [
      "about webvalor",
      "our team",
      "company story",
      "digital agency team",
      "our mission",
    ],
  },

  contact: {
    title: "Contact Us - Start Your Project Today | WebValor",
    description:
      "Ready to transform your digital presence? Contact WebValor for a free consultation. Get in touch to discuss your project and receive a custom proposal within 24 hours.",
    keywords: [
      "contact webvalor",
      "get quote",
      "free consultation",
      "start project",
      "digital agency contact",
    ],
  },
};
