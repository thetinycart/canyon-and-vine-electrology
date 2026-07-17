const services = [
  {
    number: "01",
    title: "Consultation & test session",
    text: "A private conversation about your goals, hair-growth history, treatment areas, and a plan that fits your schedule.",
    note: "Complimentary at opening",
  },
  {
    number: "02",
    title: "Face & neck",
    text: "Precision work for the upper lip, chin, jawline, cheeks, sideburns, brows, ears, neckline, and other detail areas.",
    note: "All hair colors",
  },
  {
    number: "03",
    title: "Body hair removal",
    text: "Personalized treatment for underarms, chest, abdomen, back, shoulders, arms, hands, bikini line, legs, and feet.",
    note: "All skin tones",
  },
  {
    number: "04",
    title: "Hormonal hair concerns",
    text: "Respectful hair-removal support for growth associated with PCOS, menopause, pregnancy, medication, or other hormonal changes.",
    note: "Hair care—not medical care",
  },
  {
    number: "05",
    title: "Gender-affirming care",
    text: "An affirming, discreet setting for facial and body goals, including ongoing clearance plans tailored to your timeline.",
    note: "Every identity welcome",
  },
  {
    number: "06",
    title: "Pre-operative clearance",
    text: "Planned support for clients following a surgeon’s written hair-clearance protocol, with documentation options at launch.",
    note: "Consultation required",
  },
  {
    number: "07",
    title: "Precision clean-up",
    text: "Focused sessions for beard lines, brow shaping, stray hairs, and areas prone to recurring ingrown hairs from other methods.",
    note: "Small areas welcome",
  },
  {
    number: "08",
    title: "Extended clearances",
    text: "Longer appointments for dense or larger areas, scheduled only after we understand your skin response and comfort needs.",
    note: "90–120 minute option",
  },
];

const areas = [
  "Brows & between brows",
  "Upper lip",
  "Chin & jawline",
  "Cheeks & sideburns",
  "Ears & nose exterior",
  "Neck & nape",
  "Shoulders & back",
  "Chest & abdomen",
  "Arms & hands",
  "Underarms",
  "Bikini line",
  "Legs & feet",
];

const appointmentLengths = ["15 min", "30 min", "45 min", "60 min", "90 min"];

const faqs = [
  {
    question: "What is electrolysis?",
    answer:
      "Electrolysis treats one hair follicle at a time with a very fine probe and a controlled electrical current. In California, electrology is the licensed practice of permanent hair removal using this method.",
  },
  {
    question: "Will it work for my skin tone or hair color?",
    answer:
      "Electrolysis does not depend on pigment, so it can treat every skin tone and natural hair color—including blonde, red, gray, and white hair. Your consultation helps determine the most appropriate technique and settings for your skin and hair.",
  },
  {
    question: "How long will permanent hair removal take?",
    answer:
      "There is no honest one-size-fits-all timeline. Hair grows in cycles, and only follicles producing visible hair can be treated at a given visit. Area size, density, prior hair-removal methods, hormones, and appointment consistency all affect the plan.",
  },
  {
    question: "What does a treatment feel like?",
    answer:
      "Most clients describe a brief warmth, pinch, or sting. Sensation varies by person and body area. We will begin conservatively, check in often, and build in breaks when helpful—comfort is part of the treatment plan.",
  },
  {
    question: "How should I prepare?",
    answer:
      "Avoid tweezing, waxing, or threading the treatment area before your visit; the hair needs to be visible enough to treat. Arrive with clean skin and tell your electrologist about relevant skin products, prescriptions, or recent procedures during consultation.",
  },
  {
    question: "Can electrolysis treat hair associated with PCOS?",
    answer:
      "Yes, the visible hair can be treated. Electrolysis does not diagnose or treat an underlying hormonal condition, and new follicles may become active over time. Sudden or unexplained hair-growth changes should be discussed with a qualified healthcare professional.",
  },
  {
    question: "Do you offer laser hair removal?",
    answer:
      "No. This future studio is designed specifically for licensed electrology. California places laser treatment outside an electrologist’s scope of practice, so the service menu is intentionally focused on probe-based electrolysis.",
  },
  {
    question: "Will you accept insurance?",
    answer:
      "Insurance and documentation policies are still being developed. Coverage varies by plan and medical-necessity requirements. Final payment, cancellation, and documentation policies will be published before booking opens.",
  },
];

export default function Home() {
  return (
    <main id="top">
      <a className="skip-link" href="#main-content">
        Skip to content
      </a>

      <div className="announcement">
        <span>Opening after California licensure</span>
        <span className="announcement-dot" aria-hidden="true" />
        <span>American Canyon, CA</span>
      </div>

      <header className="site-header" aria-label="Primary navigation">
        <a className="brand" href="#top" aria-label="Canyon and Vine Electrology home">
          <span className="brand-mark" aria-hidden="true">
            CV
          </span>
          <span className="brand-name">
            Canyon &amp; Vine
            <small>Electrology</small>
          </span>
        </a>

        <nav className="nav-links" aria-label="Site links">
          <a href="#services">Services</a>
          <a href="#process">What to expect</a>
          <a href="#about">About</a>
          <a href="#faq">FAQ</a>
        </nav>

        <a className="button button-small button-dark" href="#contact">
          Join the opening list
        </a>
      </header>

      <div id="main-content">
        <section className="hero" aria-labelledby="hero-title">
          <div className="hero-copy">
            <p className="eyebrow">Permanent hair removal · Napa–Solano</p>
            <h1 id="hero-title">
              Feel at home
              <br />
              <em>in your skin.</em>
            </h1>
            <p className="hero-lede">
              Thoughtful, one-follicle-at-a-time care for every skin tone, every hair color,
              and every reason you’re ready for a lasting change.
            </p>
            <div className="hero-actions">
              <a className="button button-primary" href="#contact">
                Get opening updates
                <span aria-hidden="true">↗</span>
              </a>
              <a className="text-link" href="#process">
                How electrolysis works <span aria-hidden="true">↓</span>
              </a>
            </div>
            <p className="hero-fineprint">
              Future private studio serving American Canyon, Vallejo, Napa, Benicia,
              Fairfield, and nearby communities.
            </p>
          </div>

          <div className="hero-art" aria-label="A calm, abstract visualization of precision hair removal">
            <div className="hero-orbit orbit-one" aria-hidden="true" />
            <div className="hero-orbit orbit-two" aria-hidden="true" />
            <div className="hero-orbit orbit-three" aria-hidden="true" />
            <div className="hero-center" aria-hidden="true">
              <span className="hero-center-dot" />
              <span className="hero-center-line" />
            </div>
            <div className="floating-note note-top">
              <span className="note-kicker">Designed for</span>
              <strong>every tone + texture</strong>
            </div>
            <div className="floating-note note-bottom">
              <span className="note-kicker">Planned modalities</span>
              <strong>thermolysis · galvanic · blend</strong>
            </div>
            <span className="art-caption">Precision, patience, permanence.</span>
          </div>
        </section>

        <section className="trust-strip" aria-label="Practice values">
          <div>
            <span className="trust-number">01</span>
            <p><strong>Private</strong> one-on-one appointments</p>
          </div>
          <div>
            <span className="trust-number">02</span>
            <p><strong>Inclusive</strong> care without assumptions</p>
          </div>
          <div>
            <span className="trust-number">03</span>
            <p><strong>Transparent</strong> plans and expectations</p>
          </div>
          <div>
            <span className="trust-number">04</span>
            <p><strong>Licensed</strong> California practice at opening</p>
          </div>
        </section>

        <section className="section services-section" id="services" aria-labelledby="services-title">
          <div className="section-heading heading-split">
            <div>
              <p className="eyebrow">The full service menu</p>
              <h2 id="services-title">One method.<br />Many reasons.</h2>
            </div>
            <p>
              We’re starting broad so you can decide what belongs in the final launch menu.
              Every service begins with clear expectations and a plan tailored to the client.
            </p>
          </div>

          <div className="service-grid">
            {services.map((service) => (
              <article className="service-card" key={service.number}>
                <div className="service-card-top">
                  <span>{service.number}</span>
                  <span className="service-arrow" aria-hidden="true">↗</span>
                </div>
                <h3>{service.title}</h3>
                <p>{service.text}</p>
                <span className="service-note">{service.note}</span>
              </article>
            ))}
          </div>
        </section>

        <section className="area-section" aria-labelledby="areas-title">
          <div className="area-intro">
            <p className="eyebrow eyebrow-light">Face to feet</p>
            <h2 id="areas-title">If the hair is unwanted,<br /><em>it deserves a conversation.</em></h2>
            <p>
              Electrolysis can address small detail areas and larger clearances alike. Sensitive
              and pre-operative areas are discussed privately during consultation.
            </p>
          </div>
          <div className="area-list" aria-label="Common treatment areas">
            {areas.map((area, index) => (
              <div className="area-row" key={area}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <strong>{area}</strong>
              </div>
            ))}
          </div>
        </section>

        <section className="section process-section" id="process" aria-labelledby="process-title">
          <div className="section-heading centered-heading">
            <p className="eyebrow">What to expect</p>
            <h2 id="process-title">A calm path to permanent.</h2>
            <p>No hard sell. No miracle timeline. Just a plan you understand.</p>
          </div>

          <div className="process-grid">
            <article>
              <span className="process-number">1</span>
              <h3>Start with your story</h3>
              <p>We talk through goals, hair history, skin response, schedule, and any questions—privately and without judgment.</p>
            </article>
            <article>
              <span className="process-number">2</span>
              <h3>Try a test session</h3>
              <p>A small treatment helps you understand the sensation and gives us useful information about settings and skin response.</p>
            </article>
            <article>
              <span className="process-number">3</span>
              <h3>Build your rhythm</h3>
              <p>We recommend appointment lengths and frequency based on the area, density, growth cycle, and your real-life availability.</p>
            </article>
            <article>
              <span className="process-number">4</span>
              <h3>Clear, then refine</h3>
              <p>Consistent treatment catches hairs across growth cycles. As regrowth decreases, appointments become shorter and less frequent.</p>
            </article>
          </div>

          <div className="method-card">
            <div className="method-copy">
              <p className="eyebrow">The technique</p>
              <h3>Three modalities.<br />One personalized plan.</h3>
              <p>
                Thermolysis uses heat, galvanic uses a chemical reaction created in the follicle,
                and blend combines both. The appropriate approach depends on the hair, skin,
                treatment area, and client response—not a trend.
              </p>
            </div>
            <div className="method-list">
              <div><span>01</span><strong>Thermolysis</strong><small>Alternating current · heat</small></div>
              <div><span>02</span><strong>Galvanic</strong><small>Direct current · chemical action</small></div>
              <div><span>03</span><strong>Blend</strong><small>Two modalities · one treatment</small></div>
            </div>
          </div>
        </section>

        <section className="appointments-section" aria-labelledby="appointments-title">
          <div className="appointments-copy">
            <p className="eyebrow eyebrow-light">Straightforward scheduling</p>
            <h2 id="appointments-title">Time-based appointments.<br /><em>No mystery packages.</em></h2>
            <p>
              Most established electrology practices price by time because each client’s density,
              area, and goals differ. Final launch rates will be published before booking opens.
            </p>
            <div className="appointment-pills" aria-label="Planned appointment lengths">
              {appointmentLengths.map((length) => <span key={length}>{length}</span>)}
            </div>
          </div>
          <div className="consult-card">
            <span className="consult-label">First visit</span>
            <strong>20-minute consultation</strong>
            <p>Goals review · treatment-area assessment · test session · personalized next step</p>
            <span className="consult-price">Complimentary at opening</span>
          </div>
        </section>

        <section className="section about-section" id="about" aria-labelledby="about-title">
          <div className="about-portrait" aria-hidden="true">
            <div className="portrait-sun" />
            <div className="portrait-arch">
              <span>Practitioner<br />photo here</span>
            </div>
            <p>American Canyon<br />California</p>
          </div>
          <div className="about-copy">
            <p className="eyebrow">Meet your electrologist</p>
            <h2 id="about-title">Care that feels<br /><em>precise and personal.</em></h2>
            <p className="about-lede">
              <strong>[Practitioner name]</strong> is currently completing professional electrology
              training and thoughtfully planning a private American Canyon studio.
            </p>
            <p>
              The future practice is being designed around the things clients consistently value:
              clear education, unhurried conversation, rigorous infection-control standards,
              inclusive care, and recommendations grounded in realistic hair-growth cycles.
            </p>
            <blockquote>
              “My goal is for every client to feel informed, respected, and completely at ease
              asking for what they need.”
            </blockquote>
            <div className="credential-list" aria-label="Credentials to add before launch">
              <span>CA electrologist license # [pending]</span>
              <span>Advanced certifications [add later]</span>
              <span>Professional memberships [add later]</span>
            </div>
          </div>
        </section>

        <section className="section faq-section" id="faq" aria-labelledby="faq-title">
          <div className="faq-heading">
            <p className="eyebrow">Good questions welcome</p>
            <h2 id="faq-title">Let’s make it clear.</h2>
            <p>
              Electrolysis is a process, and informed clients make better plans. Here are the
              questions people ask most often before a first appointment.
            </p>
          </div>
          <div className="faq-list">
            {faqs.map((faq, index) => (
              <details key={faq.question} open={index === 0}>
                <summary>
                  <span>{faq.question}</span>
                  <span className="faq-toggle" aria-hidden="true" />
                </summary>
                <p>{faq.answer}</p>
              </details>
            ))}
          </div>
        </section>

        <section className="contact-section" id="contact" aria-labelledby="contact-title">
          <div className="contact-copy">
            <p className="eyebrow eyebrow-light">Opening list</p>
            <h2 id="contact-title">Ready when<br /><em>you are.</em></h2>
            <p>
              Get one email when consultations open. No promotions, no inbox clutter—just the
              studio address, launch rates, and first available appointments.
            </p>
            <a className="button button-light" href="mailto:hello@example.com?subject=Canyon%20and%20Vine%20opening%20list">
              Join by email <span aria-hidden="true">↗</span>
            </a>
          </div>
          <address className="contact-details">
            <div>
              <span>Phone</span>
              <a href="tel:+17075550147">(707) 555-0147</a>
            </div>
            <div>
              <span>Email</span>
              <a href="mailto:hello@example.com">hello@example.com</a>
            </div>
            <div>
              <span>Studio</span>
              <p>[Street address]<br />American Canyon, CA 94503</p>
            </div>
            <div>
              <span>Hours</span>
              <p>By appointment<br />Schedule coming soon</p>
            </div>
          </address>
        </section>
      </div>

      <footer className="site-footer">
        <a className="brand footer-brand" href="#top">
          <span className="brand-mark" aria-hidden="true">CV</span>
          <span className="brand-name">Canyon &amp; Vine<small>Electrology</small></span>
        </a>
        <p>Permanent hair removal, thoughtfully done.</p>
        <div className="footer-meta">
          <span>© 2026 Canyon &amp; Vine Electrology</span>
          <span>Mockup · Booking opens after licensure</span>
        </div>
      </footer>
    </main>
  );
}
