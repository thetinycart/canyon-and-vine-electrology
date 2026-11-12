import type { Metadata } from "next";
import Link from "next/link";
import "@fontsource-variable/manrope/wght.css";
import "@fontsource-variable/newsreader/wght.css";
import styles from "./design04.module.css";

const conceptUrl =
  "https://tycheventuresllc.com/canyon-and-vine-electrology/concepts/design-04/";
const conceptDescription =
  "Concept preview: a restrained, photograph-led direction for Evergreen Electrolysis in American Canyon, California.";
const conceptImage =
  "https://tycheventuresllc.com/canyon-and-vine-electrology/quiet-practice-hero.jpg?v=d04-20261111";

export const metadata: Metadata = {
  title: "The Quiet Practice | Evergreen Electrolysis",
  description: conceptDescription,
  alternates: {
    canonical: conceptUrl,
  },
  robots: {
    index: false,
    follow: true,
  },
  openGraph: {
    title: "The Quiet Practice | Evergreen Electrolysis",
    description: conceptDescription,
    type: "website",
    url: conceptUrl,
    images: [
      {
        url: conceptImage,
        width: 1586,
        height: 992,
        alt: "Evergreen Electrolysis Design 04 concept preview",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "The Quiet Practice | Evergreen Electrolysis",
    description: conceptDescription,
    images: [conceptImage],
  },
};

const treatmentAreas = [
  {
    number: "01",
    title: "Face & neck",
    text: "Focused treatment for the upper lip, chin, jawline, cheeks, sideburns, brows, hairline, ears, neck, and other facial detail areas.",
  },
  {
    number: "02",
    title: "Selected body areas",
    text: "Individualized care for areas such as the underarms, shoulders, chest, back, abdomen, arms, hands, legs, feet, and toes.",
  },
  {
    number: "03",
    title: "Small areas & finishing details",
    text: "A considered approach to isolated hairs, shaping, persistent hairs in areas prone to ingrowns from other removal methods, and growth you would like to refine.",
  },
];

const firstVisit = [
  {
    number: "1",
    title: "Talk through your goals",
    text: "Discuss the area, your hair-removal history, and the questions you want answered.",
  },
  {
    number: "2",
    title: "Experience a small treatment",
    text: "If appropriate, a test treatment introduces the sensation and helps assess your skin’s response.",
  },
  {
    number: "3",
    title: "Agree on a practical plan",
    text: "Review session length, appointment spacing, preparation, aftercare, and current rates.",
  },
];

const questions = [
  {
    question: "Will electrolysis work for my hair color and skin tone?",
    answer:
      "Electrolysis does not rely on pigment. It can treat every natural hair color—including blonde, red, gray, and white hair—across skin tones. Technique and settings are selected for the individual hair, skin, and treatment area.",
  },
  {
    question: "How many appointments will I need?",
    answer:
      "There is no single timeline for everyone. The area, amount of hair, growth cycles, previous removal methods, hormones, and appointment consistency all affect the plan. Nav will discuss a realistic starting schedule and review it as treatment progresses.",
  },
  {
    question: "What does treatment feel like?",
    answer:
      "You may feel brief warmth, a pinch, or a sting. Sensation varies by person and treatment area. A small initial treatment can help you understand the experience before planning longer sessions.",
  },
  {
    question: "What happens at my first appointment?",
    answer:
      "Your first visit is a private conversation about your goals and history, an explanation of the process, and—if appropriate—a small test treatment. You leave with a recommended next step rather than a promised deadline.",
  },
  {
    question: "How should I prepare, and what happens afterward?",
    answer:
      "Pause tweezing, waxing, and threading so visible hair is available to treat, and arrive with clean skin. Discuss relevant medications and recent skin treatments during your consultation. Temporary redness or warmth can occur afterward. Nav will discuss care for the specific area and your skin response; seek medical advice for severe or unexpected symptoms.",
  },
  {
    question: "Can you treat hair associated with hormonal changes?",
    answer:
      "Visible hair can be treated, including growth associated with PCOS, menopause, medication, or other hormonal change. Electrolysis removes hair; it does not diagnose or treat an underlying medical condition.",
  },
];

export default function QuietPractice() {
  return (
    <div className={styles.page} id="top">
      <a className={styles.skipLink} href="#main-content">Skip to content</a>

      <div className={styles.conceptBar}>
        <Link href="/concepts/">← Design archive</Link>
        <span>Design 04 · The Quiet Practice</span>
        <span>Concept preview · contact details pending</span>
      </div>

      <header className={styles.header}>
        <a className={styles.brand} href="#top" aria-label="Evergreen Electrolysis home">
          <span>Evergreen</span>
          <small>Electrolysis</small>
        </a>

        <nav className={styles.desktopNav} aria-label="Primary navigation">
          <a href="#treatment">Treatment</a>
          <a href="#first-visit">First visit</a>
          <a href="#nav">Meet Nav</a>
          <a href="#questions">Questions</a>
        </nav>

        <a className={styles.headerCta} href="#contact">Request a consultation</a>

        <a
          className={styles.mobileMenuToggle}
          href="#mobile-navigation"
          aria-controls="mobile-navigation"
        >
          Menu
        </a>
        <nav
          className={styles.mobileMenuPanel}
          id="mobile-navigation"
          aria-label="Mobile navigation"
        >
          <a className={styles.mobileMenuClose} href="#top">Close <span aria-hidden="true">×</span></a>
          <a href="#treatment">Treatment</a>
          <a href="#first-visit">First visit</a>
          <a href="#nav">Meet Nav</a>
          <a href="#questions">Questions</a>
          <a href="#contact">Request a consultation</a>
        </nav>
      </header>

      <main id="main-content">
        <section className={styles.hero} aria-labelledby="quiet-hero-title">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            className={styles.heroImage}
            src="/quiet-practice-hero.jpg?v=d04-20261111"
            alt="Portrait of a woman against a deep evergreen background"
            width="1586"
            height="992"
            loading="eager"
            fetchPriority="high"
          />
          <div className={styles.heroCopy}>
            <p className={styles.eyebrow}>Electrolysis · American Canyon, California</p>
            <h1 id="quiet-hero-title">Permanent hair removal.<br />A plan made for you.</h1>
            <p className={styles.heroLede}>
              Private, one-on-one electrolysis with Nav—for facial hair, selected body
              areas, and every natural hair color.
            </p>
            <div className={styles.heroActions}>
              <a className={styles.primaryButton} href="#contact">Request a consultation <span aria-hidden="true">→</span></a>
              <a className={styles.secondaryLink} href="#treatment">Explore treatment areas</a>
            </div>
            <p className={styles.heroNote}>
              Start with a conversation, a small test treatment if appropriate, and a clear next step.
            </p>
          </div>
        </section>

        <section className={styles.factBand} aria-label="Practice overview">
          <p>Permanent hair removal, one follicle at a time.</p>
          <p>Serving American Canyon and nearby Napa–Solano communities.</p>
        </section>

        <section className={styles.introduction} aria-labelledby="approach-title">
          <div>
            <p className={styles.sectionLabel}>The Evergreen approach</p>
            <h2 id="approach-title">A thoughtful place to begin.</h2>
          </div>
          <div className={styles.introCopy}>
            <p>
              Electrolysis treats individual hair follicles with a very fine probe and
              controlled electrical current. Because it does not depend on pigment, it can
              be used across natural hair colors and skin tones.
            </p>
            <p>
              The method is precise; the plan is personal. Your treatment cadence reflects
              the area, growth pattern, skin response, prior hair removal, and time you can
              realistically commit.
            </p>
            <div className={styles.inlineFacts}>
              <span>Every natural hair color</span>
              <span>Private appointments</span>
              <span>Individual treatment plans</span>
            </div>
          </div>
        </section>

        <section className={styles.treatment} id="treatment" aria-labelledby="treatment-title">
          <figure className={styles.treatmentPortrait}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/editorial-portrait-v2.jpg?v=d04-20261111"
              alt="Portrait showing natural skin texture"
              width="1122"
              height="1402"
              loading="lazy"
            />
          </figure>
          <div className={styles.treatmentCopy}>
            <p className={styles.sectionLabel}>Treatment areas</p>
            <h2 id="treatment-title">What would you like to focus on?</h2>
            <p className={styles.treatmentIntro}>
              A few persistent hairs or a larger area—your plan begins with your goals,
              hair growth, and skin response.
            </p>
            <div className={styles.treatmentList}>
              {treatmentAreas.map((area, index) => (
                <details key={area.number} open={index === 0}>
                  <summary><span>{area.number}</span><strong>{area.title}</strong><span aria-hidden="true">+</span></summary>
                  <div>
                    <p>{area.text}</p>
                    <a href="#contact">Discuss this at a consultation <span aria-hidden="true">→</span></a>
                  </div>
                </details>
              ))}
            </div>
            <p className={styles.hormonalNote}>
              Hair associated with hormonal changes can be discussed during your consultation.
              Electrolysis removes hair; it does not diagnose or treat an underlying condition.
            </p>
          </div>
        </section>

        <section className={styles.firstVisit} id="first-visit" aria-labelledby="first-visit-title">
          <div className={styles.visitIntro}>
            <p className={styles.sectionLabelLight}>Your first visit</p>
            <h2 id="first-visit-title">First, we listen.</h2>
            <p>
              Your first appointment is a chance to understand the process and decide on
              an appropriate starting point.
            </p>
          </div>
          <ol className={styles.visitList}>
            {firstVisit.map((step) => (
              <li key={step.number}>
                <span>{step.number}</span>
                <div><h3>{step.title}</h3><p>{step.text}</p></div>
              </li>
            ))}
          </ol>
          <aside className={styles.visitDetails}>
            <span>Consultation &amp; test treatment</span>
            <p>Your questions, an introduction to treatment, and a recommended next step.</p>
            <strong>Appointment length and fee confirmed before booking.</strong>
          </aside>
        </section>

        <section className={styles.navSection} id="nav" aria-labelledby="nav-title">
          <div className={styles.navHeading}>
            <p className={styles.sectionLabel}>Your electrologist</p>
            <h2 id="nav-title">Meet Nav.</h2>
          </div>
          <div className={styles.navCopy}>
            <p className={styles.navLead}>
              Nav brings a background in microbiology and professional electrology training
              to a practice built around careful observation, clear communication, and
              individual attention.
            </p>
            <p>
              She earned her bachelor’s degree in Microbiology from UC Davis and completed
              her professional electrology training at California Electrology Academy in Corona.
              Her science background informs careful technique, while appointments remain
              calm, private, and personal.
            </p>
            <dl className={styles.credentials}>
              <div><dt>Education</dt><dd>B.S. Microbiology · UC Davis</dd></div>
              <div><dt>Professional training</dt><dd>California Electrology Academy</dd></div>
              <div><dt>Licensure</dt><dd>California electrologist · Number added before launch</dd></div>
            </dl>
          </div>
        </section>

        <section className={styles.method} aria-labelledby="method-title">
          <div className={styles.methodCopy}>
            <p className={styles.sectionLabel}>The method, briefly</p>
            <h2 id="method-title">Precision at the follicle.</h2>
            <p>
              A fine, sterile, single-use probe follows the natural opening of the follicle.
              Controlled energy treats the hair-growth cells, and the treated hair is gently removed.
            </p>
            <p>
              Hair grows in cycles, so treatment usually involves a series of appointments.
              Technique and timing are adjusted to the area, hair, skin, and your response.
            </p>
            <div className={styles.methodFacts}>
              <span>Individual follicles</span>
              <span>Pigment-independent</span>
              <span>Progress over a series of visits</span>
            </div>
            <a className={styles.guidanceLink} href="https://www.barbercosmo.ca.gov/forms_pubs/publications/electrology.pdf">
              California Board consumer guidance <span aria-hidden="true">↗</span>
            </a>
          </div>
          <figure className={styles.methodImage}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/electrolysis-detail-v2.jpg?v=d04-20261111"
              alt="Close-up of probe-based electrolysis at the jawline"
              width="1536"
              height="1024"
              loading="lazy"
            />
          </figure>
        </section>

        <section className={styles.careStandards} aria-labelledby="care-title">
          <div>
            <p className={styles.sectionLabel}>Care standards</p>
            <h2 id="care-title">Care you can feel confident asking about.</h2>
          </div>
          <ul>
            <li>A new sterile, single-use probe for each treatment.</li>
            <li>A treatment space prepared between appointments.</li>
            <li>Reusable instruments cleaned, packaged, and sterilized as required.</li>
            <li>Clear preparation and aftercare instructions.</li>
            <li>Realistic expectations, without promised deadlines.</li>
          </ul>
        </section>

        <section className={styles.questions} id="questions" aria-labelledby="questions-title">
          <div className={styles.questionsHeading}>
            <p className={styles.sectionLabel}>Questions</p>
            <h2 id="questions-title">A few things worth knowing.</h2>
            <p>Good treatment planning starts with candid answers.</p>
          </div>
          <div className={styles.questionList}>
            {questions.map((item, index) => (
              <details key={item.question} open={index === 0}>
                <summary><span>{item.question}</span><span aria-hidden="true">+</span></summary>
                <p>{item.answer}</p>
              </details>
            ))}
          </div>
        </section>

        <section className={styles.contact} id="contact" aria-labelledby="contact-title">
          <div className={styles.contactCopy}>
            <p className={styles.sectionLabel}>Consultations</p>
            <h2 id="contact-title">Let’s make a plan.</h2>
            <p>
              Tell us which area you are considering and what you would like to understand.
              We’ll discuss a sensible first appointment.
            </p>
            <span className={styles.previewButton} aria-disabled="true">Booking link added before launch</span>
            <p className={styles.previewNotice}>
              Concept preview: appointment requests are not sent from this page.
            </p>
          </div>
          <dl className={styles.contactDetails} id="contact-details">
            <div><dt>Studio</dt><dd>American Canyon, California<br />Suite address added before launch</dd></div>
            <div><dt>Appointments</dt><dd>By appointment<br />Schedule added before launch</dd></div>
            <div><dt>Contact</dt><dd>Phone, email, and booking destination added before launch</dd></div>
            <div><dt>Service area</dt><dd>American Canyon · Vallejo · Napa · Benicia · Fairfield</dd></div>
          </dl>
        </section>
      </main>

      <footer className={styles.footer}>
        <div className={styles.footerWordmark}>Evergreen</div>
        <div className={styles.footerLower}>
          <p>Electrolysis · American Canyon, California</p>
          <p className={styles.disclaimer}>
            Results and treatment timelines vary by individual and cannot be guaranteed.
            This website provides general information only and is not medical advice.
            Services are subject to consultation and individual suitability; consult a qualified
            healthcare professional about medical conditions or medications.
          </p>
          <div><span>© 2027 Evergreen Electrolysis</span><Link href="/concepts/">Compare all designs</Link></div>
        </div>
      </footer>
    </div>
  );
}
