// components/seo/structured-data.tsx
import Script from 'next/script'

interface OrganizationDataProps {
  name: string
  url: string
  logo: string
  description: string
  address?: {
    streetAddress: string
    addressLocality: string
    addressRegion: string
    postalCode: string
    addressCountry: string
  }
  contactPoint?: {
    telephone: string
    contactType: string
  }
  sameAs?: string[] // Social media profiles
}

export function OrganizationStructuredData({
  name,
  url,
  logo,
  description,
  address,
  contactPoint,
  sameAs = [
    "https://twitter.com/webvalor",
    "https://linkedin.com/company/webvalor",
    "https://www.instagram.com/web_valor007",
    "https://facebook.com/webvalor"
  ]
}: OrganizationDataProps) {
  const organizationData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${url}#organization`,
    name,
    url,
    logo: {
      "@type": "ImageObject",
      url: logo,
      width: "512",
      height: "512"
    },
    description,
    foundingDate: "2020", 
    sameAs,
    ...(address && { 
      address: { 
        "@type": "PostalAddress", 
        ...address 
      } 
    }),
    ...(contactPoint && { 
      contactPoint: { 
        "@type": "ContactPoint", 
        ...contactPoint,
        availableLanguage: ["English"]
      } 
    }),
    serviceArea: {
      "@type": "GeoCircle",
      geoMidpoint: {
        "@type": "GeoCoordinates",
        latitude: "40.7128", // Update with your coordinates
        longitude: "-74.0060"
      },
      geoRadius: "100000" // Service radius in meters
    },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Web Development Services",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Web Development",
            description: "Custom website development services"
          }
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Web Design",
            description: "Professional web design services"
          }
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Digital Strategy",
            description: "Digital marketing and strategy consulting"
          }
        }
      ]
    }
  }

  return (
    <Script
      id="organization-structured-data"
      type="application/ld+json"
      strategy="afterInteractive"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(organizationData),
      }}
    />
  )
}

interface WebsiteDataProps {
  url: string
  name: string
  description?: string
}

export function WebsiteStructuredData({ 
  url, 
  name, 
  description = "Premium web development and design agency"
}: WebsiteDataProps) {
  const websiteData = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${url}#website`,
    url,
    name,
    description,
    publisher: {
      "@id": `${url}#organization`
    },
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: `${url}/search?q={search_term_string}`
      },
      "query-input": "required name=search_term_string"
    },
    inLanguage: "en-US"
  }

  return (
    <Script
      id="website-structured-data"
      type="application/ld+json"
      strategy="afterInteractive"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(websiteData),
      }}
    />
  )
}

interface LocalBusinessDataProps {
  name: string
  url: string
  telephone: string
  address: {
    streetAddress: string
    addressLocality: string
    addressRegion: string
    postalCode: string
    addressCountry: string
  }
  geo?: {
    latitude: string
    longitude: string
  }
  openingHours?: string[]
  priceRange?: string
}

export function LocalBusinessStructuredData({
  name,
  url,
  telephone,
  address,
  geo,
  openingHours = [
    "Mo-Fr 09:00-18:00",
    "Sa 10:00-16:00"
  ],
  priceRange = "$$$"
}: LocalBusinessDataProps) {
  const localBusinessData = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name,
    url,
    telephone,
    address: {
      "@type": "PostalAddress",
      ...address
    },
    ...(geo && {
      geo: {
        "@type": "GeoCoordinates",
        latitude: geo.latitude,
        longitude: geo.longitude
      }
    }),
    openingHoursSpecification: openingHours.map(hours => {
      const [days, time] = hours.split(' ')
      const [open, close] = time.split('-')
      
      return {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: days.split('-').map(day => {
          const dayMap: { [key: string]: string } = {
            'Mo': 'Monday',
            'Tu': 'Tuesday', 
            'We': 'Wednesday',
            'Th': 'Thursday',
            'Fr': 'Friday',
            'Sa': 'Saturday',
            'Su': 'Sunday'
          }
          return dayMap[day]
        }),
        opens: open,
        closes: close
      }
    }),
    priceRange,
    serviceArea: {
      "@type": "State",
      name: "Nationwide" // Update based on your service area
    }
  }

  return (
    <Script
      id="local-business-structured-data"
      type="application/ld+json"
      strategy="afterInteractive"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(localBusinessData),
      }}
    />
  )
}

interface BreadcrumbDataProps {
  items: Array<{
    name: string
    url: string
  }>
}

export function BreadcrumbStructuredData({ items }: BreadcrumbDataProps) {
  const breadcrumbData = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url
    }))
  }

  return (
    <Script
      id="breadcrumb-structured-data"
      type="application/ld+json"
      strategy="afterInteractive"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(breadcrumbData),
      }}
    />
  )
}