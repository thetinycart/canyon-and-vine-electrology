import type { Metadata } from "next";
import Link from "next/link";
import styles from "./design02.module.css";

export const metadata: Metadata = {
  title: "Wine Country Journal | Evergreen Electrolysis",
  description:
    "A warm editorial website concept for Evergreen Electrolysis in American Canyon, California.",
  alternates: {
    canonical:
      "https://tycheventuresllc.com/canyon-and-vine-electrology/concepts/design-02/",
  },
};

const services = [
  {
    number: "01",
    title: "Consultation & test treatment",
    text: "A private conversation, treatment-area review, and small test session to establish a thoughtful first plan.",
  },
  {
    number: "02",
    title: "Face & neck",
    text: "Upper lip, chin, jawline, cheeks, sideburns, brows, hairline, ears, and neckline.",
  },
  {
    number: "03",
    title: "Selected body areas",
    text: "Underarms, shoulders, chest, back, abdomen, arms, hands, legs, and feet. Intimate areas are not offered.",
  },
  {
    number: "04",
    title: "Hormonal hair concerns",
    text: "A realistic hair-removal plan for visible growth associated with PCOS, menopause, medication, or hormonal change.",
  },
  {
    number: "05",
    title: "Precision detailing",
    text: "Focused appointments for brow shaping, beard lines, isolated hairs, and areas affected by recurring ingrowns.",
  },
  {
    number: "06",
    title: "Extended sessions",
    text: "Longer time-based appointments for dense or larger areas, arranged after skin response and comfort are understood.",
  },
];

const faqs = [
  {
    question: "Why does electrolysis require more than one visit?",
    answer:
      "Hair grows in cycles, and only visible hairs can be treated at a given appointment. Consistent visits allow different hairs to be treated as they enter a treatable stage.",
  },
  {
    question: "Does it work on light or gray hair?",
    answer:
      "Yes. Electrolysis treats individual follicles rather than targeting pigment, so it can be used on blonde, red, gray, and white hair as well as darker hair.",
  },
  {
    question: "How are sessions scheduled?",
    answer:
      "Appointments are reserved by time. Your recommended session length and current rate are confirmed before booking, based on the area, density, skin response, and your schedule.",
  },
  {
    question: "Do you offer laser hair removal?",
    answer:
      "No. Evergreen Electrolysis is focused on licensed, probe-based electrolysis. Laser treatment is outside a California electrologist’s scope of practice.",
  },
];

export default function WineCountryJournal() {
  return (
    <main className={styles.page} id="top">
      <a className={styles.skipLink} href="#content">Skip to content</a>

      <div className={styles.conceptBar}>
        <Link href="/concepts/">← All concepts</Link>
        <span>Design 02 · Wine Country Journal</span>
        <Link href="/">View current homepage ↗</Link>
      </div>

      <header className={styles.header}>
        <a className={styles.brand} href="#top" aria-label="Evergreen Electrolysis home">
          <span>Evergreen</span>
          <small>Electrolysis</small>
        </a>
        <nav aria-label="Concept navigation">
          <a href="#approach">Approach</a>
          <a href="#services">Services</a>
          <a href="#nav">Meet Nav</a>
          <a href="#questions">Questions</a>
        </nav>
        <a className={styles.headerCta} href="#contact">Request a consultation</a>
      </header>

      <div id="content">
        <section className={styles.hero} aria-labelledby="journal-hero-title">
          <div className={styles.heroIndex} aria-hidden="true">
            <span>01</span>
            <span>American Canyon · California</span>
          </div>
          <div className={styles.heroCopy}>
            <p className={styles.eyebrow}>Permanent hair removal · Napa–Solano</p>
            <h1 id="journal-hero-title">A quieter way<br />to feel <em>at ease.</em></h1>
            <p>
              Private, one-on-one electrolysis shaped around your skin, your hair,
              and a timeline that makes sense for your life.
            </p>
            <div className={styles.heroActions}>
              <a className={styles.primaryButton} href="#contact">Begin with a consultation</a>
              <a className={styles.textLink} href="#first-visit">See what to expect ↓</a>
            </div>
          </div>
          <figure className={styles.heroPortrait}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/hero-profile.jpg?v=ee-electrolysis-20261111"
              alt="Black-and-white editorial portrait of a woman in profile"
              width="1003"
              height="1568"
              loading="eager"
              fetchPriority="high"
            />
            <figcaption>Precision, patience, permanence.</figcaption>
          </figure>
          <aside className={styles.heroCard}>
            <span>Now welcoming clients</span>
            <strong>Private studio care in American Canyon</strong>
            <p>Serving Vallejo, Napa, Benicia, Fairfield, and nearby communities.</p>
          </aside>
        </section>

        <section className={styles.proofStrip} aria-label="Practice highlights">
          <div><span>01</span><strong>All hair colors</strong><p>Pigment-independent treatment</p></div>
          <div><span>02</span><strong>All skin tones</strong><p>Settings tailored to the individual</p></div>
          <div><span>03</span><strong>Private appointments</strong><p>One client at a time</p></div>
          <div><span>04</span><strong>California licensed</strong><p>Professional electrology care</p></div>
        </section>

        <section className={styles.approach} id="approach">
          <div className={styles.sectionLabel}>
            <span>02</span>
            <p>The Evergreen approach</p>
          </div>
          <div className={styles.approachHeadline}>
            <p className={styles.eyebrow}>Is electrolysis right for me?</p>
            <h2>Permanent care,<br /><em>one follicle at a time.</em></h2>
          </div>
          <div className={styles.approachBody}>
            <p>
              Electrolysis uses a very fine probe and controlled electrical current to treat
              the growth source of one hair at a time. Because it does not rely on pigment,
              it can be used across natural hair colors and skin tones.
            </p>
            <p>
              Hair grows in cycles, so a complete plan takes consistency rather than promises.
              Your consultation turns the area, density, prior hair-removal habits, skin response,
              and schedule into a realistic treatment cadence.
            </p>
          </div>
          <div className={styles.modalityList}>
            <div><span>Thermolysis</span><small>High-frequency current · heat</small></div>
            <div><span>Galvanic</span><small>Direct current · chemical action</small></div>
            <div><span>Blend</span><small>Both modalities · combined</small></div>
          </div>
        </section>

        <section className={styles.firstVisit} id="first-visit" aria-labelledby="first-visit-title">
          <div className={styles.sectionLabelLight}>
            <span>03</span>
            <p>Your first visit</p>
          </div>
          <div className={styles.visitHeading}>
            <p className={styles.eyebrowLight}>A clear beginning</p>
            <h2 id="first-visit-title">Know what comes next.</h2>
          </div>
          <ol className={styles.visitSteps}>
            <li><span>01</span><h3>Tell your story</h3><p>We review goals, hair history, skin response, products, medications, and questions privately.</p></li>
            <li><span>02</span><h3>Try a small area</h3><p>A test treatment introduces the sensation and helps guide technique, settings, and aftercare.</p></li>
            <li><span>03</span><h3>Plan the cadence</h3><p>You leave with an understandable recommendation for session length, frequency, and next steps.</p></li>
          </ol>
        </section>

        <section className={styles.services} id="services" aria-labelledby="services-journal-title">
          <div className={styles.sectionLabel}>
            <span>04</span>
            <p>Treatment menu</p>
          </div>
          <div className={styles.servicesIntro}>
            <p className={styles.eyebrow}>Selected services</p>
            <h2 id="services-journal-title">Focused care.<br /><em>Flexible timing.</em></h2>
            <p>
              Time-based appointments keep the plan responsive to the treatment area,
              density, and your progress. Current rates are confirmed before booking.
            </p>
          </div>
          <div className={styles.serviceList}>
            {services.map((service) => (
              <article key={service.number}>
                <span>{service.number}</span>
                <h3>{service.title}</h3>
                <p>{service.text}</p>
              </article>
            ))}
          </div>
          <div className={styles.timeRail} aria-label="Available appointment lengths">
            <span>15 minutes</span><span>30 minutes</span><span>45 minutes</span>
            <span>60 minutes</span><span>90 minutes</span>
          </div>
        </section>

        <section className={styles.careGuide} aria-labelledby="care-title">
          <div className={styles.careTitle}>
            <p className={styles.eyebrowLight}>Before &amp; after</p>
            <h2 id="care-title">Small habits support<br /><em>a thoughtful treatment.</em></h2>
          </div>
          <div className={styles.careColumns}>
            <article>
              <span>Before your visit</span>
              <ul>
                <li>Pause tweezing, waxing, and threading so a visible hair can be treated.</li>
                <li>Arrive with clean skin and enough visible growth for treatment.</li>
                <li>Share relevant products, prescriptions, recent procedures, and skin changes.</li>
              </ul>
            </article>
            <article>
              <span>After your visit</span>
              <ul>
                <li>Temporary redness or irritation can occur for several hours.</li>
                <li>Keep the area clean and follow the aftercare discussed at your appointment.</li>
                <li>Contact a healthcare professional about severe or unexpected symptoms.</li>
              </ul>
              <a href="https://www.barbercosmo.ca.gov/forms_pubs/publications/electrology.pdf">
                California Board consumer guidance ↗
              </a>
            </article>
          </div>
        </section>

        <section className={styles.about} id="nav" aria-labelledby="nav-title">
          <div className={styles.aboutImage}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/brand-mark.png?v=ee-electrolysis-20261111"
              alt="Evergreen Electrolysis EE logo with a woman in profile"
              width="512"
              height="512"
              loading="lazy"
            />
          </div>
          <div className={styles.aboutCopy}>
            <p className={styles.eyebrow}>Meet Nav</p>
            <h2 id="nav-title">Science-minded.<br /><em>Deeply personal.</em></h2>
            <p className={styles.aboutLead}>
              Nav earned her bachelor’s degree in Microbiology from UC Davis and completed
              her professional electrology training at California Electrology Academy in Corona.
              She is a California-licensed electrologist.
            </p>
            <p>
              Her microbiology background shaped a lasting respect for infection prevention,
              careful observation, and evidence-informed decisions. Her studio brings that
              precision into a calm, candid, one-on-one experience.
            </p>
            <div className={styles.credentials}>
              <span>Microbiology · UC Davis</span>
              <span>California Electrology Academy</span>
              <span>California License # [ADD NUMBER]</span>
            </div>
          </div>
        </section>

        <section className={styles.questions} id="questions" aria-labelledby="questions-title">
          <div className={styles.questionsHeading}>
            <p className={styles.eyebrow}>Good questions welcome</p>
            <h2 id="questions-title">A few things<br />worth knowing.</h2>
          </div>
          <div className={styles.questionList}>
            {faqs.map((faq, index) => (
              <details key={faq.question} open={index === 0}>
                <summary><span>{faq.question}</span><span aria-hidden="true">+</span></summary>
                <p>{faq.answer}</p>
              </details>
            ))}
          </div>
        </section>

        <section className={styles.contact} id="contact" aria-labelledby="contact-journal-title">
          <p className={styles.eyebrowLight}>Consultations</p>
          <h2 id="contact-journal-title">Let’s begin with<br /><em>a conversation.</em></h2>
          <p>
            Get in touch to ask a question or request a private consultation. We’ll confirm
            the treatment area, current rates, studio details, and an appointment time.
          </p>
          <a className={styles.contactButton} href="mailto:hello@example.com?subject=Evergreen%20Electrolysis%20consultation%20request">
            Request by email ↗
          </a>
          <div className={styles.contactDetails}>
            <div><span>Phone</span><a href="tel:+17075550147">(707) 555-0147</a></div>
            <div><span>Email</span><a href="mailto:hello@example.com">hello@example.com</a></div>
            <div><span>Studio</span><p>[ADD SUITE ADDRESS]<br />American Canyon, CA 94503</p></div>
            <div><span>Hours</span><p>By appointment<br />[ADD BUSINESS HOURS]</p></div>
          </div>
        </section>
      </div>

      <footer className={styles.footer}>
        <div className={styles.footerBrand}><span>Evergreen</span><small>Electrolysis</small></div>
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
    </main>
  );
}
