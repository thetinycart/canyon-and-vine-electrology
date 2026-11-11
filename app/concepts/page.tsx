import type { Metadata } from "next";
import Link from "next/link";
import { websiteConcepts } from "./designs";
import styles from "./concepts.module.css";

export const metadata: Metadata = {
  title: "Website Design Concepts | Evergreen Electrolysis",
  description:
    "Compare preserved website concepts for Evergreen Electrolysis in American Canyon, California.",
  alternates: {
    canonical:
      "https://tycheventuresllc.com/canyon-and-vine-electrology/concepts/",
  },
};

export default function ConceptsPage() {
  return (
    <main className={styles.page}>
      <header className={styles.header}>
        <Link className={styles.wordmark} href="/" aria-label="Evergreen Electrolysis home">
          <span>Evergreen</span>
          <small>Electrolysis</small>
        </Link>
        <p>Website concept archive</p>
      </header>

      <section className={styles.intro}>
        <p className={styles.eyebrow}>Design studies · preserved for review</p>
        <h1>One practice.<br /><em>Different points of view.</em></h1>
        <p className={styles.lede}>
          Each concept is a complete, independent direction. Earlier versions stay available,
          so you can compare structure, tone, and visual style without losing prior work.
        </p>
      </section>

      <section className={styles.grid} aria-label="Website design concepts">
        {websiteConcepts.map((concept) => (
          <article className={styles.card} key={concept.id}>
            <Link className={styles.preview} href={concept.href} aria-label={`Open ${concept.title}`}>
              <span className={styles.previewNumber}>{concept.id}</span>
              <span className={styles.previewWord}>Evergreen</span>
              <span className={styles.previewLine} />
              <span className={styles.previewDirection}>{concept.direction}</span>
            </Link>
            <div className={styles.cardBody}>
              <div className={styles.cardMeta}>
                <span>{concept.status}</span>
                <span>{concept.released}</span>
              </div>
              <h2>{concept.title}</h2>
              <p>{concept.description}</p>
              <Link className={styles.openLink} href={concept.href}>
                Open design <span aria-hidden="true">↗</span>
              </Link>
            </div>
          </article>
        ))}
      </section>

      <footer className={styles.footer}>
        <p>Evergreen Electrolysis · American Canyon, California</p>
        <p>New concepts are added without replacing earlier versions.</p>
      </footer>
    </main>
  );
}
