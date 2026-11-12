import type { Metadata } from "next";
import Link from "next/link";
import "@fontsource-variable/manrope/wght.css";
import styles from "./design05.module.css";

const url = "https://tycheventuresllc.com/canyon-and-vine-electrology/concepts/design-05/";
const image = "https://tycheventuresllc.com/canyon-and-vine-electrology/everyday-edit-portrait.jpg";
const description = "A personal approach to permanent hair removal with Nav, a California-licensed electrologist in American Canyon. Explore treatment and your first visit.";

export const metadata: Metadata = {
  title: "The Everyday Edit | Evergreen Electrolysis",
  description,
  alternates: { canonical: url },
  robots: { index: false, follow: true },
  openGraph: {
    title: "The Everyday Edit | Evergreen Electrolysis",
    description, type: "website", url,
    images: [{ url: image, width: 1122, height: 1402, alt: "A woman smiling in warm afternoon light" }],
  },
  twitter: { card: "summary_large_image", title: "The Everyday Edit | Evergreen Electrolysis", description, images: [image] },
};

const areas = [
  { number: "01", title: "Face & neck", text: "Upper lip, chin, jawline, cheeks, sideburns, brows, hairline, and neck. Focus on a few persistent hairs or discuss a wider area." },
  { number: "02", title: "Selected body areas", text: "Underarms, shoulders, chest, back, abdomen, arms, hands, legs, feet, and toes. Session length follows the area and your individual plan." },
  { number: "03", title: "The finishing details", text: "Isolated hairs, grooming, and precise shaping. Bring your priorities; Nav will help you understand an appropriate starting point." },
];
const questions = [
  { question: "Does hair color or skin tone matter?", answer: "Electrolysis treats the follicle with electrical current rather than targeting pigment. It can treat all natural hair colors, including blonde, red, gray, and white, across skin tones. Your consultation helps establish individual suitability and settings." },
  { question: "Is it one appointment or a series?", answer: "Plan for a series. Hair grows in cycles, and the visible hairs are only part of the picture. The area, hair density, previous removal methods, hormonal influences, and appointment consistency affect the schedule. There is no single treatment count or completion date for everyone." },
  { question: "What does electrolysis feel like?", answer: "You may feel a brief warmth, pinch, or sting. Sensation depends on the person, area, and settings. A small test treatment, when appropriate, gives you a chance to experience it and discuss comfort before planning longer sessions." },
  { question: "What about hair linked to hormonal changes?", answer: "Existing unwanted hair can be treated, including hair associated with PCOS or menopause. Electrolysis does not diagnose or treat the underlying condition, and hormonal changes can influence new growth. Discuss medical questions with your healthcare professional." },
  { question: "How much will treatment cost?", answer: "Rates: [ADD VERIFIED PRICES]. Total cost depends on session length and the course of treatment. Your consultation is the place to discuss a practical starting schedule and fees before making a commitment." },
];

function Arrow() { return <span aria-hidden="true">↗</span>; }

export default function EverydayEdit() {
  return (
    <div className={styles.page} id="top">
      <a className={styles.skip} href="#main-content">Skip to content</a>
      <div className={styles.archiveBar}>
        <Link href="/concepts/">← All designs</Link>
        <span>05 / The Everyday Edit</span>
      </div>
      <header className={styles.header}>
        <a className={styles.brand} href="#top" aria-label="Evergreen Electrolysis, top of page">evergreen<span>electrolysis</span></a>
        <nav className={styles.navigation} aria-label="Primary navigation">
          <a href="#treatment">The treatment</a><a href="#nav">Meet Nav</a><a href="#first-visit">Your first visit</a>
        </nav>
        <a className={styles.headerCta} href="#consultation">Let’s begin <Arrow /></a>
      </header>
      <nav className={styles.mobileNavigation} aria-label="Mobile navigation">
        <a href="#treatment">Treatment</a><a href="#nav">Meet Nav</a><a href="#first-visit">First visit</a><a href="#questions">FAQs</a>
      </nav>

      <main id="main-content">
        <section className={styles.hero} aria-labelledby="hero-title">
          <div className={styles.heroCopy}>
            <p className={styles.eyebrow}>American Canyon, California</p>
            <h1 id="hero-title">A little less<br /> hair.<br /><em>A little more<br /> you.</em></h1>
            <p className={styles.heroLede}>Permanent hair removal, with a personal plan.<br />One-on-one electrolysis with Nav.</p>
            <a className={styles.button} href="#consultation">Start with a consultation <Arrow /></a>
            <a className={styles.textLink} href="#treatment">New to electrolysis? Start here <span aria-hidden="true">↓</span></a>
          </div>
          <div className={styles.heroVisual}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/everyday-edit-portrait.jpg" alt="A woman smiling in warm afternoon light" width="1122" height="1402" loading="eager" fetchPriority="high" />
            <div className={styles.photoFoot}><span>Care, at your pace.</span><span aria-hidden="true">✳</span></div>
          </div>
        </section>

        <div className={styles.introBand}>
          <p>A personal choice.<br /><strong>A precise approach.</strong></p>
          <p>From a few chin hairs to a larger treatment area, start with clear answers and a plan that makes sense for you.</p>
          <a href="#first-visit">Meet your first visit <Arrow /></a>
        </div>

        <section className={styles.treatment} id="treatment" aria-labelledby="treatment-title">
          <div className={styles.sectionHeading}>
            <p className={styles.eyebrow}>01 / The treatment</p>
            <h2 id="treatment-title">Small details.<br /><em>Thoughtful attention.</em></h2>
            <p>Electrolysis uses a fine probe and a controlled electrical current to treat individual hair follicles. It works independently of hair pigment, so light, gray, and red hairs can be treated too.</p>
          </div>
          <div className={styles.areaList}>
            {areas.map(area => <article key={area.number}><span className={styles.number}>{area.number}</span><div><h3>{area.title}</h3><p>{area.text}</p></div><a href="#consultation" aria-label={`Discuss ${area.title.toLowerCase()} at a consultation`}><Arrow /></a></article>)}
            <p className={styles.scopeNote}>Intimate-area services are not offered. Every treatment area is subject to consultation and individual suitability.</p>
          </div>
        </section>

        <section className={styles.method} aria-labelledby="method-title">
          <p className={styles.eyebrow}>The method in a moment</p>
          <h2 id="method-title">One follicle at a time.<br />A plan over time.</h2>
          <div className={styles.methodSteps}>
            <div><span aria-hidden="true">01 —</span><h3>Target the follicle</h3><p>A very fine probe follows the follicle’s natural opening. Controlled current treats the cells involved in hair growth.</p></div>
            <div><span aria-hidden="true">02 —</span><h3>Remove the treated hair</h3><p>The treated hair is gently removed. Technique and settings reflect the area, hair, and skin response.</p></div>
            <div><span aria-hidden="true">03 —</span><h3>Return as growth appears</h3><p>Hair grows in cycles. A series of visits allows treatment of hairs as they become available, with the plan reviewed along the way.</p></div>
          </div>
          <a className={styles.textLink} href="https://www.barbercosmo.ca.gov/forms_pubs/publications/electrology.pdf">Read California’s electrology guide <Arrow /></a>
        </section>

        <section className={styles.practitioner} id="nav" aria-labelledby="nav-title">
          <div className={styles.navMonogram} aria-hidden="true"><span>e</span><p>Individual care.<br />Informed by science.</p></div>
          <div className={styles.navCopy}>
            <p className={styles.eyebrow}>02 / Your electrologist</p>
            <h2 id="nav-title">A person.<br /><em>Not just a process.</em></h2>
            <p className={styles.navLead}>Meet Nav, your California-licensed electrologist.</p>
            <p>Nav earned her bachelor’s degree in Microbiology from UC Davis and completed professional electrology training at California Electrology Academy in Corona. She brings that scientific foundation to careful observation and a treatment plan centered on you.</p>
            <p>There is room for your questions, your preferences, and your pace. Understanding the next step is part of the care.</p>
            <dl className={styles.credentials}>
              <div><dt>Education</dt><dd>B.S. Microbiology · UC Davis</dd></div>
              <div><dt>Professional training</dt><dd>California Electrology Academy · Corona</dd></div>
              <div><dt>California licensure</dt><dd>License number: [ADD NUMBER]</dd></div>
            </dl>
          </div>
        </section>

        <section className={styles.visit} id="first-visit" aria-labelledby="visit-title">
          <div className={styles.visitHeading}><p className={styles.eyebrow}>03 / Your first visit</p><h2 id="visit-title">You don’t need<br />all the answers.<br /><em>Bring your questions.</em></h2><p>Start with a consultation and, if appropriate, a small test treatment. Together, you’ll work through what comes next.</p><a className={styles.button} href="#consultation">Plan your first visit <Arrow /></a></div>
          <div className={styles.visitGuide}>
            <ol>
              <li><span>01</span><div><h3>Talk it through</h3><p>Your goals, hair-removal history, skin response, and relevant health information help shape the plan.</p></div></li>
              <li><span>02</span><div><h3>Get a feel for it</h3><p>A small test treatment, if appropriate, introduces the sensation and gives you time to ask questions.</p></div></li>
              <li><span>03</span><div><h3>Know your next step</h3><p>Review recommended session length, spacing, rates, preparation, and aftercare before booking further treatment.</p></div></li>
            </ol>
            <details className={styles.careDetails}><summary>Before &amp; after your appointment <span aria-hidden="true">+</span></summary><div><h4>Before</h4><p>Ask how much visible hair to leave for treatment. Pause tweezing, waxing, and threading in the area, and discuss medications or recent skin treatments with Nav.</p><h4>After</h4><p>Temporary redness or irritation can occur. Follow your individual aftercare instructions; contact a healthcare professional promptly for severe or unexpected symptoms.</p></div></details>
          </div>
        </section>

        <section className={styles.faq} id="questions" aria-labelledby="questions-title">
          <div><p className={styles.eyebrow}>Good questions welcome</p><h2 id="questions-title">Let’s clear<br /><em>a few things up.</em></h2></div>
          <div>{questions.map(item => <details key={item.question}><summary>{item.question}<span aria-hidden="true">+</span></summary><p>{item.answer}</p></details>)}</div>
        </section>

        <section className={styles.contact} id="consultation" aria-labelledby="contact-title">
          <div className={styles.contactTop}><p className={styles.eyebrow}>Your next step</p><span aria-hidden="true">↗</span></div>
          <h2 id="contact-title">Make room<br /><em>for you.</em></h2>
          <div className={styles.contactBottom}>
            <div><p>A conversation about your goals.<br />A thoughtful place to begin.</p><p className={styles.bookingPlaceholder}>Booking destination: [ADD VERIFIED LINK]</p><small>Online booking is not connected in this concept.</small></div>
            <dl><div><dt>Visit</dt><dd>American Canyon, California<br />Address: [ADD STUDIO ADDRESS]</dd></div><div><dt>Call</dt><dd>Phone: [ADD PHONE NUMBER]</dd></div><div><dt>Plan</dt><dd>Hours: [ADD BUSINESS HOURS]<br />Prices: [ADD VERIFIED PRICES]</dd></div></dl>
          </div>
        </section>
      </main>
      <footer className={styles.footer}>
        <div className={styles.footerTop}><a className={styles.brand} href="#top">evergreen<span>electrolysis</span></a><p>American Canyon, California<br />Serving the Napa–Solano community.</p><Link href="/concepts/">Compare all designs <Arrow /></Link></div>
        <p className={styles.disclaimer}>Results and treatment timelines vary by individual and cannot be guaranteed. This website provides general information only and is not medical advice. Services are subject to consultation and individual suitability; consult a qualified healthcare professional about medical conditions or medications.</p>
        <div className={styles.footerEnd}><span>© 2026 Evergreen Electrolysis</span><a href="#top">Back to top ↑</a><span>Design 05 · The Everyday Edit</span></div>
      </footer>
    </div>
  );
}
