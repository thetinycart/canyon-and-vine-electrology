# Canyon & Vine Electrology

A responsive concept site for a future private electrology practice in American
Canyon, California. The working brand, contact details, service menu, and launch
language are intentionally provisional while the practitioner completes training
and California licensure.

## What the mockup includes

- opening-soon positioning that does not imply current licensure
- face, selected body, hormonal-hair, gender-affirming, grooming, precision,
  and extended-session service concepts
- common treatment areas and the three electrology modalities
- consultation and treatment-plan journey
- time-based appointment structure without invented launch pricing
- Nav’s education and science-informed practitioner story, FAQ, and placeholder
  contact sections
- responsive layouts, keyboard focus states, reduced-motion support, and
  `noindex` metadata for pre-launch review

## Local development

Requires Node.js `>=22.13.0`.

```bash
npm install
npm run dev
```

Visit `http://localhost:3000`.

## Validation

```bash
npm run build
node --test tests/rendered-html.test.mjs
```

## Before a public launch

Replace the working name and all bracketed or example contact details, add real
practitioner photography and credentials, confirm the final service menu and
policies, and remove `robots: { index: false, follow: false }` only after the
individual electrologist and establishment licenses are active.
