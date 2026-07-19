const services = [
  {
    number: "01",
    title: "Consultation & test session",
    text: "A private conversation about your goals, hair-growth history, treatment areas, and a plan that fits your schedule.",
    note: "Details confirmed at booking",
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
    text: "Personalized treatment for underarms, chest, abdomen, back, shoulders, arms, hands, legs, and feet.",
    note: "All skin tones",
  },
  {
    number: "04",
    title: "Hormonal hair concerns",
    text: "Respectful hair-removal support for growth associated with PCOS, menopause, medication, or other hormonal changes.",
    note: "Hair care—not medical care",
  },
  {
    number: "05",
    title: "Personalized treatment plans",
    text: "Discreet care for facial and listed non-intimate body-area goals, with appointment timing tailored to your needs.",
    note: "Your goals · your timeline",
  },
  {
    number: "06",
    title: "Grooming & active lifestyles",
    text: "Considered care for athletes and clients who prefer less hair on the neckline, shoulders, chest, back, arms, or legs.",
    note: "Targeted areas · tailored care",
  },
  {
    number: "07",
    title: "Precision detailing",
    text: "Focused sessions for beard lines, brow shaping, stray hairs, and areas prone to recurring ingrown hairs from other methods.",
    note: "Small areas welcome",
  },
  {
    number: "08",
    title: "Extended sessions",
    text: "Longer appointments for dense or larger areas, scheduled only after we understand your skin response and comfort needs.",
    note: "Available by arrangement",
  },
];

const areas = [
  "Brows & between brows",
  "Hairline & temples",
  "Upper lip",
  "Chin & jawline",
  "Cheeks & sideburns",
  "Ears & nose exterior",
  "Neck & nape",
  "Shoulders & back",
  "Chest & abdomen",
  "Arms & hands",
  "Underarms",
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
      "No. Evergreen Electrology is dedicated specifically to licensed electrology. California places laser treatment outside an electrologist’s scope of practice, so the service menu is intentionally focused on probe-based electrolysis.",
  },
  {
    question: "How will hygiene and sterilization be handled?",
    answer:
      "Every treatment uses a new, single-use, pre-sterilized disposable probe. Reusable electrology tools are cleaned, packaged, and sterilized in accordance with California Board requirements. Hands are cleaned immediately before each client, and treatment surfaces are cleaned and disinfected between appointments.",
  },
];

function BrandMark() {
  return (
    <span className="brand-mark" aria-hidden="true">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        className="brand-mark-image"
        src="/brand-mark.png?v=ee-wordmark-20260718"
        alt=""
        width="512"
        height="512"
      />
    </span>
  );
}

export default function Home() {
  return (
    <main id="top">
      <a className="skip-link" href="#main-content">
        Skip to content
      </a>

      <div className="announcement">
        <span>Now welcoming clients</span>
        <span className="announcement-dot" aria-hidden="true" />
        <span>American Canyon, CA</span>
      </div>

      <header className="site-header" aria-label="Primary navigation">
        <a className="brand" href="#top" aria-label="Evergreen Electrology home">
          <BrandMark />
          <span className="brand-name">
            Evergreen
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
          Request a consultation
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
              Thoughtful, one-follicle-at-a-time care for every skin tone and hair color,
              with a treatment plan tailored to your goals.
            </p>
            <div className="hero-actions">
              <a className="button button-primary" href="#contact">
                Request a consultation
                <span aria-hidden="true">↗</span>
              </a>
              <a className="text-link" href="#process">
                How electrolysis works <span aria-hidden="true">↓</span>
              </a>
            </div>
            <p className="hero-fineprint">
              Private studio suite serving American Canyon, Vallejo, Napa, Benicia,
              Fairfield, and nearby communities.
            </p>
          </div>

          <div className="hero-art">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              className="hero-photo"
              src="/hero-profile.jpg?v=ee-wordmark-20260718"
              alt="Black-and-white editorial portrait of a woman in profile"
              width="1003"
              height="1568"
              loading="eager"
              fetchPriority="high"
              decoding="async"
            />
            <div className="floating-note note-top">
              <span className="note-kicker">Designed for</span>
              <strong>every skin tone and hair color</strong>
            </div>
            <div className="floating-note note-bottom">
              <span className="note-kicker">Electrolysis modalities</span>
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
            <p><strong>Personalized</strong> care shaped around your goals</p>
          </div>
          <div>
            <span className="trust-number">03</span>
            <p><strong>Transparent</strong> plans and expectations</p>
          </div>
          <div>
            <span className="trust-number">04</span>
            <p><strong>Licensed</strong> California electrologist</p>
          </div>
        </section>

        <section className="section services-section" id="services" aria-labelledby="services-title">
          <div className="section-heading heading-split">
            <div>
              <p className="eyebrow">Services</p>
              <h2 id="services-title">One method.<br />Many reasons.</h2>
            </div>
            <p>
              A considered menu for facial and non-intimate body areas. Every service begins
              with clear expectations and an individualized treatment plan.
            </p>
          </div>

          <div className="service-grid">
            {services.map((service) => (
              <article className="service-card" key={service.number}>
                <div className="service-card-top">
                  <span>{service.number}</span>
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
            <p className="eyebrow eyebrow-light">Treatment areas</p>
            <h2 id="areas-title">Precision for the face.<br /><em>Considered care for the body.</em></h2>
            <p>
              Electrolysis can address fine facial details and larger selected body areas
              alike, with appointment length and technique tailored to the individual.
              Intimate-area services are not offered.
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
            <p>Clear guidance, realistic timelines, and a treatment plan you understand.</p>
          </div>

          <div className="process-grid">
            <article>
              <span className="process-number">1</span>
              <h3>Start with your story</h3>
              <p>We review your goals, hair history, skin response, schedule, and questions during a private consultation.</p>
            </article>
            <article>
              <span className="process-number">2</span>
              <h3>Try a test session</h3>
              <p>A small treatment helps you understand the sensation and gives us useful information about settings and skin response.</p>
            </article>
            <article>
              <span className="process-number">3</span>
              <h3>Establish a cadence</h3>
              <p>We recommend appointment lengths and frequency based on the area, density, growth cycle, and your real-life availability.</p>
            </article>
            <article>
              <span className="process-number">4</span>
              <h3>Progress through each cycle</h3>
              <p>Consistent treatment reaches hairs across growth cycles. As progress continues, appointment length and frequency can often be reduced.</p>
            </article>
          </div>

          <div className="method-card">
            <div className="method-copy">
              <p className="eyebrow">The technique</p>
              <h3>Three forms of electrolysis.<br />One personalized plan.</h3>
              <p>
                Electrolysis can be performed with thermolysis, galvanic, or blend. Thermolysis
                uses high-frequency current to generate heat, galvanic uses direct current to
                create a chemical reaction in the follicle, and blend combines both. Nav selects
                the approach based on the hair, skin, treatment area, and client response.
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
            <h2 id="appointments-title">Time-based appointments.<br /><em>Clearly explained.</em></h2>
            <p>
              Electrology appointments are reserved by time because each client’s density, area,
              and goals differ. Your recommended session length and current rate are confirmed
              before booking.
            </p>
            <div className="appointment-pills" aria-label="Appointment lengths">
              {appointmentLengths.map((length) => <span key={length}>{length}</span>)}
            </div>
          </div>
          <div className="consult-card">
            <span className="consult-label">First visit</span>
            <strong>Consultation &amp; test session</strong>
            <p>Goals review · treatment-area assessment · test session · personalized next step</p>
            <span className="consult-price">Details confirmed at booking</span>
          </div>
        </section>

        <section className="section about-section" id="about" aria-labelledby="about-title">
          <div className="about-portrait" aria-hidden="true">
            <div className="portrait-sun" />
            <div className="portrait-arch">
              <span className="portrait-initial">N</span>
            </div>
            <p>American Canyon<br />California</p>
          </div>
          <div className="about-copy">
            <p className="eyebrow">Meet Nav</p>
            <h2 id="about-title">A scientific foundation.<br /><em>A personal approach.</em></h2>
            <p className="about-lede">
              <strong>Nav</strong> earned her bachelor’s degree in Microbiology from UC Davis and
              completed her professional electrology training at California Electrology Academy
              in Corona, California. She is a California-licensed electrologist.
            </p>
            <p>
              Her background in microbiology shaped a lasting respect for infection prevention,
              careful observation, and evidence-informed decision-making. Electrology allows her
              to bring that precision to highly personal care grounded in patience, candid
              education, and realistic hair-growth cycles.
            </p>
            <p>
              Nav welcomes clients to a polished private suite in American Canyon, designed
              for calm, one-on-one appointments where clients can feel informed, respected,
              and comfortable asking questions.
            </p>
            <div className="principle-card">
              <span>Nav’s approach</span>
              <p>Science-minded care, candid guidance, and a treatment plan shaped around the individual—not a template.</p>
            </div>
            <div className="credential-list" aria-label="Nav's education and professional credentials">
              <span>Microbiology · UC Davis</span>
              <span>Professional Electrology Training · California Electrology Academy</span>
              <span>California Licensed Electrologist · License # [ADD NUMBER]</span>
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
            <p className="eyebrow eyebrow-light">Consultations</p>
            <h2 id="contact-title">Ready when<br /><em>you are.</em></h2>
            <p>
              To ask a question or request a consultation, get in touch by email. We’ll confirm
              the treatment area, current rates, studio details, and an appointment time.
            </p>
            <a className="button button-light" href="mailto:hello@example.com?subject=Evergreen%20Electrology%20consultation%20request">
              Request by email <span aria-hidden="true">↗</span>
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
              <p>[ADD SUITE ADDRESS]<br />American Canyon, CA 94503</p>
            </div>
            <div>
              <span>Hours</span>
              <p>By appointment<br />[ADD BUSINESS HOURS]</p>
            </div>
          </address>
        </section>
      </div>

      <footer className="site-footer">
        <a className="brand footer-brand" href="#top">
          <BrandMark />
          <span className="brand-name">Evergreen<small>Electrology</small></span>
        </a>
        <p>Permanent hair removal, thoughtfully done.</p>
        <div className="footer-meta">
          <span>© 2027 Evergreen Electrology</span>
          <span>American Canyon · By appointment</span>
        </div>
      </footer>
    </main>
  );
}
