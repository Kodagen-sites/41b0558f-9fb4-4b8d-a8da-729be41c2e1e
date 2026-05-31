// NOTE: "Northgrove" is an invented brand for this generated site — the company,
// services, contact details, and social links are placeholders, not a real entity.

export const siteConfig = {
  company: {
    name: "Northgrove",
    fullName: "Northgrove Partners",
    tagline: "Enduring value across every sector.",
    description:
      "Northgrove is a global advisory and operating partner. We bring capital, operational rigor, technology, and growth strategy to ambitious organizations in every sector and region.",
  },
  contact: {
    email: "hello@northgrove.example",
    phone: "+1 (212) 555-0140",
    location: "New York · London · Singapore",
  },
  socials: {
    linkedin: "https://www.linkedin.com/company/northgrove",
    x: "https://x.com/northgrove",
    instagram: "https://www.instagram.com/northgrove",
    youtube: "https://www.youtube.com/@northgrove",
  },
  services: [
    {
      slug: "capital",
      name: "Capital",
      description:
        "Patient, principal capital and structured financing for businesses building for the long term — from growth equity to balance-sheet reshaping.",
      image: "service-capital",
    },
    {
      slug: "operations",
      name: "Operations",
      description:
        "Hands-on operational partnership: supply chains, people systems, and the unglamorous machinery that turns strategy into compounding results.",
      image: "service-operations",
    },
    {
      slug: "technology",
      name: "Technology",
      description:
        "Modern data and software foundations — applied AI, platform modernization, and the engineering discipline to ship and sustain it.",
      image: "service-technology",
    },
    {
      slug: "growth",
      name: "Growth",
      description:
        "Market entry, brand, and demand engines that move organizations from regional strength to durable global presence.",
      image: "service-growth",
    },
  ],
  nav: [
    { href: "/#about", label: "About" },
    { href: "/#services", label: "Services" },
    { href: "/#work", label: "Work" },
    { href: "/#contact", label: "Contact" },
  ],
  legal: {
    links: [
      { href: "/privacy", label: "Privacy" },
      { href: "/terms", label: "Terms" },
    ],
  },
} as const;

export type SiteConfig = typeof siteConfig;
