export type WebsiteConcept = {
  id: string;
  title: string;
  direction: string;
  description: string;
  href: string;
  released: string;
  status: "Current homepage" | "Alternate concept";
};

export const websiteConcepts: WebsiteConcept[] = [
  {
    id: "01",
    title: "Classic Monochrome",
    direction: "Editorial · precise · established",
    description:
      "The original launch-ready homepage with a high-contrast black-and-white treatment, comprehensive services, and detailed education.",
    href: "/",
    released: "July 2026",
    status: "Current homepage",
  },
  {
    id: "02",
    title: "Wine Country Journal",
    direction: "Warm editorial · local · personal",
    description:
      "A quieter magazine-inspired concept with an easier first-visit path, practical preparation and aftercare, and a warmer Napa–Solano sense of place.",
    href: "/concepts/design-02/",
    released: "November 2026",
    status: "Alternate concept",
  },
];
