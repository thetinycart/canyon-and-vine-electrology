import type { Metadata } from "next";
import Link from "next/link";
import styles from "./design03.module.css";

export const metadata: Metadata = {
  title: "Portrait of Precision | Evergreen Electrolysis",
  description:
    "A bold, human-centered website concept for Evergreen Electrolysis in American Canyon, California.",
  alternates: {
    canonical:
      "https://tycheventuresllc.com/canyon-and-vine-electrology/concepts/design-03/",
  },
};

const startingPoints = [
  {
    number: "01",
    title: "Face & neck",
    text: "Upper lip, chin, jawline, cheeks, sideburns, brows, hairline, ears, neck, and nape.",
  },
  {
    number: "02",
    title: "Selected body areas",
    text: "Underarms, shoulders, chest, back, abdomen, arms, hands, legs, feet, and toes.",
  },
  {
    number: "03",
    title: "Precision concerns",
    text: "Isolated hairs, shaping, recurring ingrowns, and visible growth associated with hormonal change.",
  },
];

const visitSteps = [
  {
    number: "1",
    title: "Talk it through",
    text: "We review your goals, hair history, skin response, products, medications, schedule, and questions in private.",
  },
  {
    number: "2",
    title: "Treat a small area",
    text: "A test treatment introduces the sensation and gives Nav useful information about technique and skin response.",
  },
  {
    number: "3",
    title: "Leave with a plan",
    text: "You receive a realistic recommendation for session length, visit cadence, preparation, and aftercare.",
  },
];

const faqs = [
  {
    question: "What is electrolysis?",
    answer:
      "Electrolysis treats one hair follicle at a time. A very fine probe is placed into the follicle’s natural opening and a controlled electrical current treats the cells responsible for hair growth. It is recognized as a method of permanent hair removal.",
  },
  {
    question: "Will it work for my hair color and skin tone?",
    answer:
      "Electrolysis does not rely on pigment, so it can treat every natural hair color—including blonde, red, gray, and white hair—across skin tones. Your settings and technique are selected for your individual hair, skin, and treatment area.",
  },
  {
    question: "Why will I need more than one appointment?",
    answer:
      "Hair grows in cycles, and only visible hairs can be treated during a visit. Consistent appointments allow different hairs to be treated as they appear. Area size, density, prior removal methods, hormones, and visit consistency all affect the overall timeline.",
  },
  {
    question: "What does treatment feel like?",
    answer:
      "Most people describe a brief warmth, pinch, or sting. Sensation varies by person and body area. Nav begins conservatively, checks in throughout the appointment, and adjusts the plan around your response.",
  },
  {
    question: "How should I prepare?",
    answer:
      "Pause tweezing, waxing, and threading so there is enough visible hair to treat. Arrive with clean skin and share relevant prescriptions, skin products, recent procedures, or skin changes during your consultation.",
  },
  {
    question: "What should I expect afterward?",
    answer:
      "Temporary redness, warmth, or irritation can occur. Keep the area clean, avoid unnecessary touching, and follow the aftercare discussed at your appointment. Seek medical advice for severe or unexpected symptoms.",
  },
];

export default function PortraitOfPrecision() {
  return (
    <main className={styles.page} id="top">
      <a className={styles.skipLink} href="#content">
        Skip to content
      </a>

      <div className={styles.conceptBar}>
        <Link href="/concepts/">← All concepts</Link>
        <span>Design 03 · Portrait of Precision</span>
        <Link href="/">Current homepage ↗</Link>
      </div>

      <header className={styles.header}>
        <a className={styles.brand} href="#top" aria-label="Evergreen Electrolysis home">
          <span className={styles.brandMonogram}>EE</span>
          <span className={styles.brandName}>
            Evergreen
            <small>Electrolysis</small>
          </span>
        </a>
        <nav aria-label="Concept navigation">
          <a href="#treatment">Treatment</a>
          <a href="#first-visit">First visit</a>
          <a href="#nav">Meet Nav</a>
          <a href="#faq">FAQ</a>
        </nav>
        <a className={styles.headerCta} href="#contact">
          Request a consultation
        </a>
      </header>

      <div id="content">
        <section className={styles.hero} aria-labelledby="precision-title">
          <div className={styles.heroCopy}>
            <p className={styles.kicker}>Permanent hair removal · American Canyon</p>
            <h1 id="precision-title">
              Precisely
              <br />
              <em>personal.</em>
            </h1>
            <p className={styles.heroLede}>
              Private electrolysis for the face and selected body areas, with a
              thoughtful plan for your hair, your skin, and your real life.
            </p>
            <div className={styles.heroActions}>
              <a className={styles.primaryButton} href="#contact">
                Start with a consultation <span aria-hidden="true">↗</span>
              </a>
              <a className={styles.secondaryLink} href="#treatment">
                Is it right for me? <span aria-hidden="true">↓</span>
              </a>
            </div>
            <p className={styles.serviceArea}>
              Serving American Canyon, Vallejo, Napa, Benicia, Fairfield, and nearby communities.
            </p>
          </div>

          <figure className={styles.heroPortrait}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/hero-profile.jpg?v=ee-electrolysis-20261111"
              alt="Black-and-white portrait of a woman in profile"
              width="1003"
              height="1568"
              loading="eager"
              fetchPriority="high"
            />
            <figcaption>
              <span>Every hair has a cycle.</span>
              <strong>Your plan should, too.</strong>
            </figcaption>
          </figure>

          <aside className={styles.heroNote}>
            <span aria-hidden="true">✦</span>
            <p>Works across natural hair colors and skin tones.</p>
          </aside>
        </section>

        <section className={styles.trustBar} aria-label="Practice highlights">
          <div><strong>Permanent</strong><span>Probe-based hair removal</span></div>
          <div><strong>Private</strong><span>One client at a time</span></div>
          <div><strong>Personal</strong><span>A plan shaped around you</span></div>
          <div><strong>Professional</strong><span>California-licensed care</span></div>
        </section>

        <section className={styles.startingSection} id="treatment" aria-labelledby="starting-title">
          <div className={styles.sectionIntro}>
            <p className={styles.kicker}>Start where you are</p>
            <h2 id="starting-title">One precise method.<br /><em>Many starting points.</em></h2>
            <p>
              Electrolysis is selected hair by hair, so care can be as focused as a
              single recurring strand or as structured as a longer-term treatment plan.
            </p>
          </div>
          <div className={styles.startingGrid}>
            {startingPoints.map((item) => (
              <article key={item.number}>
                <span>{item.number}</span>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
                <a href="#contact">Discuss this area <span aria-hidden="true">→</span></a>
              </article>
            ))}
          </div>
        </section>

        <section className={styles.scienceSection} aria-labelledby="science-title">
          <div className={styles.scienceVisual} aria-hidden="true">
            <span className={styles.orbitOne} />
            <span className={styles.orbitTwo} />
            <span className={styles.follicleLine} />
            <span className={styles.follicleRoot} />
            <span className={styles.visualLabel}>one follicle</span>
          </div>
          <div className={styles.scienceCopy}>
            <p className={styles.kickerLight}>The science, simply</p>
            <h2 id="science-title">Small target.<br /><em>Lasting intention.</em></h2>
            <p className={styles.scienceLede}>
              A fine, sterile, single-use probe follows the natural opening of the follicle.
              Controlled energy treats the hair-growth cells, and the treated hair is gently removed.
            </p>
            <div className={styles.scienceFacts}>
              <article>
                <span>01</span>
                <div><h3>Not pigment dependent</h3><p>Electrolysis targets the follicle rather than hair color.</p></div>
              </article>
              <article>
                <span>02</span>
                <div><h3>Technique is individualized</h3><p>Thermolysis, galvanic, or blend may be selected for the hair, area, and response.</p></div>
              </article>
              <article>
                <span>03</span>
                <div><h3>Consistency matters</h3><p>Appointments progress through the natural hair-growth cycle.</p></div>
              </article>
            </div>
            <a className={styles.boardLink} href="https://www.barbercosmo.ca.gov/forms_pubs/publications/electrology.pdf">
              Read California Board consumer guidance <span aria-hidden="true">↗</span>
            </a>
          </div>
        </section>

        <section className={styles.visitSection} id="first-visit" aria-labelledby="visit-title">
          <div className={styles.visitHeading}>
            <p className={styles.kicker}>Your first visit</p>
            <h2 id="visit-title">No guesswork.<br /><em>A clear next step.</em></h2>
          </div>
          <ol className={styles.visitSteps}>
            {visitSteps.map((step) => (
              <li key={step.number}>
                <span>{step.number}</span>
                <div><h3>{step.title}</h3><p>{step.text}</p></div>
              </li>
            ))}
          </ol>
          <aside className={styles.visitCard}>
            <p>Consultation &amp; test treatment</p>
            <strong>A calm introduction to the process.</strong>
            <span>Details and current rates confirmed before booking.</span>
          </aside>
        </section>

        <section className={styles.navSection} id="nav" aria-labelledby="nav-title">
          <div className={styles.navStatement}>
            <span className={styles.bigInitial}>N</span>
            <p>Careful observation.<br />Candid guidance.<br />Quiet confidence.</p>
          </div>
          <div className={styles.navCopy}>
            <p className={styles.kicker}>Meet Nav</p>
            <h2 id="nav-title">Science trained.<br /><em>People focused.</em></h2>
            <p className={styles.navLede}>
              Nav earned her bachelor’s degree in Microbiology from UC Davis and completed
              her professional electrology training at California Electrology Academy in Corona.
              She is a California-licensed electrologist.
            </p>
            <p>
              Microbiology taught her to notice the details: how living systems respond,
              why careful technique matters, and where consistency changes an outcome.
              Evergreen brings that mindset into a warm, private studio experience.
            </p>
            <div className={styles.credentialGrid}>
              <div><span>Education</span><strong>B.S. Microbiology<br />UC Davis</strong></div>
              <div><span>Training</span><strong>California Electrology<br />Academy</strong></div>
              <div><span>Licensure</span><strong>California Electrologist<br /># [ADD NUMBER]</strong></div>
            </div>
          </div>
        </section>

        <section className={styles.standardSection} aria-labelledby="standard-title">
          <div className={styles.standardCopy}>
            <p className={styles.kickerLight}>The Evergreen standard</p>
            <h2 id="standard-title">Clean practice.<br /><em>Clear expectations.</em></h2>
            <p>
              Professional care is not only what happens at the follicle. It is the full
              experience around it—from preparation and infection prevention to honest
              timelines and aftercare you can understand.
            </p>
          </div>
          <div className={styles.standardGrid}>
            <article><span>01</span><h3>Single-use sterile probes</h3><p>A new pre-sterilized disposable probe is used for every treatment.</p></article>
            <article><span>02</span><h3>Prepared treatment space</h3><p>Surfaces are cleaned and disinfected between appointments.</p></article>
            <article><span>03</span><h3>Instrument care</h3><p>Reusable electrology tools are cleaned, packaged, and sterilized as required.</p></article>
            <article><span>04</span><h3>Honest planning</h3><p>Your plan responds to hair cycles, skin response, goals, and consistency—not a promised deadline.</p></article>
          </div>
        </section>

        <section className={styles.careSection} aria-labelledby="care-title">
          <div className={styles.careHeading}>
            <p className={styles.kicker}>Before &amp; after</p>
            <h2 id="care-title">A little preparation<br /><em>goes a long way.</em></h2>
          </div>
          <div className={styles.careColumns}>
            <article>
              <span>Before your visit</span>
              <ul>
                <li>Let enough hair grow above the skin to be treated.</li>
                <li>Pause tweezing, waxing, and threading in the treatment area.</li>
                <li>Arrive with clean skin and share relevant products or medications.</li>
              </ul>
            </article>
            <article>
              <span>After your visit</span>
              <ul>
                <li>Expect that temporary redness or warmth may occur.</li>
                <li>Keep the area clean and avoid unnecessary touching.</li>
                <li>Follow the personalized aftercare discussed at your appointment.</li>
              </ul>
            </article>
          </div>
        </section>

        <section className={styles.faqSection} id="faq" aria-labelledby="faq-title">
          <div className={styles.faqHeading}>
            <p className={styles.kicker}>Straight answers</p>
            <h2 id="faq-title">Questions are<br /><em>part of the plan.</em></h2>
            <p>Bring every question. A good consultation should make the process easier to understand.</p>
          </div>
          <div className={styles.faqList}>
            {faqs.map((faq, index) => (
              <details key={faq.question} open={index === 0}>
                <summary><span>{faq.question}</span><span aria-hidden="true">+</span></summary>
                <p>{faq.answer}</p>
              </details>
            ))}
          </div>
        </section>

        <section className={styles.contactSection} id="contact" aria-labelledby="contact-title">
          <div className={styles.contactCopy}>
            <p className={styles.kickerLight}>Begin here</p>
            <h2 id="contact-title">Tell us what<br /><em>you’re ready to change.</em></h2>
            <p>
              Request a private consultation to discuss the area, your history, current
              rates, and a sensible first appointment.
            </p>
            <a className={styles.contactButton} href="mailto:hello@example.com?subject=Evergreen%20Electrolysis%20consultation%20request">
              Request by email <span aria-hidden="true">↗</span>
            </a>
          </div>
          <div className={styles.contactDetails}>
            <div><span>Phone</span><a href="tel:+17075550147">(707) 555-0147</a></div>
            <div><span>Email</span><a href="mailto:hello@example.com">hello@example.com</a></div>
            <div><span>Studio</span><p>[ADD SUITE ADDRESS]<br />American Canyon, CA 94503</p></div>
            <div><span>Hours</span><p>By appointment<br />[ADD BUSINESS HOURS]</p></div>
          </div>
        </section>
      </div>

      <footer className={styles.footer}>
        <div className={styles.footerBrand}>
          <span className={styles.brandMonogram}>EE</span>
          <span className={styles.brandName}>Evergreen<small>Electrolysis</small></span>
        </div>
        <p className={styles.disclaimer}>
          Results and treatment timelines vary by individual and cannot be guaranteed.
          This website provides general information only and is not medical advice.
          Services are subject to consultation and individual suitability; consult a qualified
          healthcare professional about medical conditions or medications.
        </p>
        <div className={styles.footerMeta}>
          <span>© 2027 Evergreen Electrolysis</span>
          <Link href="/concepts/">Compare all designs</Link>
        </div>
      </footer>

      <a className={styles.mobileCta} href="#contact">
        Request a consultation <span aria-hidden="true">↗</span>
      </a>
    </main>
  );
}
