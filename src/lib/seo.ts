import {
  certifications,
  education,
  experience,
  faqs,
  profile,
  projects,
  services,
  skillGroups,
} from "./content";

/** No trailing slash, used to build asset and fragment URLs. */
export const siteUrl = "https://anshumansinha.site";

/** Canonical homepage URL, with the trailing slash the root path resolves to. */
export const siteHome = `${siteUrl}/`;

export const siteTitle = "Anshuman Sinha | SEO Specialist & Engineer";

/** Bump when the page content meaningfully changes; feeds ProfilePage.dateModified. */
export const siteLastUpdated = "2026-09-01";

export const siteDescription =
  "Anshuman Sinha is an SEO Specialist and Computer Science Engineer in Bengaluru, India, working across technical SEO, programmatic SEO, SaaS SEO, AEO/GEO and AI automation that grows organic search.";

const id = (fragment: string) => `${siteUrl}/#${fragment}`;

/** Every skill, flattened; feeds Person.knowsAbout for entity understanding. */
const allSkills = skillGroups.flatMap((g) => g.items);

const person = {
  "@type": "Person",
  "@id": id("person"),
  name: profile.name,
  givenName: profile.first,
  familyName: profile.last,
  jobTitle: "SEO Specialist",
  description: profile.summary[0],
  url: siteHome,
  image: {
    "@type": "ImageObject",
    "@id": id("headshot"),
    url: `${siteUrl}/anshuman-sinha.jpg`,
    contentUrl: `${siteUrl}/anshuman-sinha.jpg`,
    width: 746,
    height: 746,
    caption: `${profile.name}, SEO Specialist based in Bengaluru, India`,
  },
  email: `mailto:${profile.email}`,
  address: {
    "@type": "PostalAddress",
    addressLocality: "Bengaluru",
    addressRegion: "Karnataka",
    addressCountry: "IN",
  },
  homeLocation: {
    "@type": "Place",
    name: "Bengaluru, Karnataka, India",
  },
  nationality: { "@type": "Country", name: "India" },
  sameAs: [profile.linkedin, siteHome],
  knowsAbout: allSkills,
  knowsLanguage: [
    { "@type": "Language", name: "English" },
    { "@type": "Language", name: "Hindi" },
  ],
  hasOccupation: {
    "@type": "Occupation",
    name: "SEO Specialist",
    occupationalCategory: "13-1161.00",
    skills: profile.disciplines.join(", "),
    occupationLocation: {
      "@type": "City",
      name: "Bengaluru",
    },
  },
  // Role pattern: each role wraps the organization it was held at.
  worksFor: experience.map((job) => ({
    "@type": "OrganizationRole",
    roleName: job.role,
    startDate: job.startDate,
    ...(job.endDate ? { endDate: job.endDate } : {}),
    worksFor: {
      "@type": "Organization",
      name: job.company,
      ...(job.companyUrl ? { url: job.companyUrl } : {}),
    },
  })),
  alumniOf: education.map((e) => ({
    "@type": e.schemaType,
    name: e.school,
    ...(e.schoolUrl ? { url: e.schoolUrl } : {}),
  })),
  hasCredential: [
    ...education.map((e) => ({
      "@type": "EducationalOccupationalCredential",
      name: e.credential,
      credentialCategory: e.credentialCategory,
      recognizedBy: {
        "@type": e.schemaType,
        name: e.school,
        ...(e.schoolUrl ? { url: e.schoolUrl } : {}),
      },
    })),
    ...certifications.map((c) => ({
      "@type": "EducationalOccupationalCredential",
      name: c.name,
      credentialCategory: "Certification",
      recognizedBy: {
        "@type": "Organization",
        name: c.issuer,
        ...(c.issuerUrl ? { url: c.issuerUrl } : {}),
      },
    })),
  ],
  makesOffer: {
    "@type": "OfferCatalog",
    "@id": id("services"),
    name: "SEO & growth engineering services",
    itemListElement: services.map((s, i) => ({
      "@type": "Offer",
      position: i + 1,
      itemOffered: {
        "@type": "Service",
        name: s.title,
        description: s.body,
        serviceType: s.title,
        provider: { "@id": id("person") },
        areaServed: { "@type": "Place", name: "Worldwide" },
      },
    })),
  },
};

const website = {
  "@type": "WebSite",
  "@id": id("website"),
  url: siteHome,
  name: `${profile.name} Portfolio`,
  description: siteDescription,
  inLanguage: "en",
  publisher: { "@id": id("person") },
  author: { "@id": id("person") },
  copyrightHolder: { "@id": id("person") },
};

const profilePage = {
  "@type": "ProfilePage",
  "@id": id("webpage"),
  url: siteHome,
  name: siteTitle,
  description: siteDescription,
  isPartOf: { "@id": id("website") },
  about: { "@id": id("person") },
  mainEntity: { "@id": id("person") },
  primaryImageOfPage: { "@id": id("headshot") },
  dateModified: siteLastUpdated,
  inLanguage: "en",
  speakable: {
    "@type": "SpeakableSpecification",
    cssSelector: ["h1", "#about-heading", "#services-heading"],
  },
};

const projectList = {
  "@type": "ItemList",
  "@id": id("projects"),
  name: "Selected projects by Anshuman Sinha",
  numberOfItems: projects.length,
  itemListElement: projects.map((p, i) => ({
    "@type": "ListItem",
    position: i + 1,
    item: {
      "@type": p.schemaType,
      name: p.title,
      alternateName: p.kind,
      description: p.body,
      ...(p.href ? { url: p.href } : {}),
      ...(p.schemaType === "WebApplication" ||
      p.schemaType === "SoftwareApplication"
        ? {
            applicationCategory: "BusinessApplication",
            operatingSystem: "Web browser",
          }
        : {}),
      creator: { "@id": id("person") },
      author: { "@id": id("person") },
      keywords: p.stack.join(", "),
    },
  })),
};

const faqPage = {
  "@type": "FAQPage",
  "@id": id("faq"),
  url: `${siteHome}#faq`,
  name: `Working with ${profile.name}: frequently asked questions`,
  isPartOf: { "@id": id("website") },
  about: { "@id": id("person") },
  inLanguage: "en",
  mainEntity: faqs.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: {
      "@type": "Answer",
      text: f.a,
    },
  })),
};

/** One linked graph; every node cross-references by @id instead of repeating itself. */
export const structuredData = {
  "@context": "https://schema.org",
  "@graph": [website, profilePage, person, projectList, faqPage],
};
