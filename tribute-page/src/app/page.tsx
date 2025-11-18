import { Discography } from "@/components/Discography";
import { LeadList } from "@/components/LeadList";
import { MilkCarton } from "@/components/MilkCarton";
import { Quotes } from "@/components/Quotes";
import { Timeline } from "@/components/Timeline";
import { discography, leads, quotes, timeline } from "@/data/story";
import styles from "./page.module.css";

export default function Page() {
  return (
    <main>
      <div className="page-shell">
        <section className={styles.hero}>
          <div className={styles.heroContent}>
            <p className={styles.heroSubtitle}>Digital Reissue of a Missing Person Campaign</p>
            <h1 className={styles.heroTitle}>The Search for Rodríguez</h1>
            <p className={styles.heroBody}>
              Before streaming algorithms and social media blasts, a handful of fans stitched
              together clues from cassette dubbings, rumor mills, and whispered late-night phone
              calls. This tribute recreates the grassroots digital hunt that asked the world a single
              question: who was the voice behind &ldquo;Sugar Man&rdquo;?
            </p>
            <div className={styles.heroFooter}>
              <span className={styles.heroBadge}>Status: FOUND, BUT NEVER FORGOTTEN</span>
              <p className={styles.heroNotes}>
                The original campaign lived on a static page, decorated with a milk carton and pleas
                for information. We preserve that spirit here—archiving their ingenuity, and the myth
                they chased across continents.
              </p>
            </div>
          </div>
          <div className={styles.milkWrapper}>
            <MilkCarton />
          </div>
        </section>

        <section className={styles.section}>
          <header className={styles.sectionHeader}>
            <p className={styles.eyebrow}>Breadcrumb chronology</p>
            <h2 className={styles.sectionTitle}>Timeline of a Global Whisper</h2>
            <p className={styles.sectionBody}>
              Every rumor was timestamped, every album-liner scribble archived. The community built a
              living dossier that finally bridged Detroit and Cape Town.
            </p>
          </header>
          <Timeline events={timeline} />
        </section>

        <section className={styles.section}>
          <header className={styles.sectionHeader}>
            <p className={styles.eyebrow}>Lead archive</p>
            <h2 className={styles.sectionTitle}>Clues Posted to the Bulletin</h2>
            <p className={styles.sectionBody}>
              Messages streamed into the old guestbook from across the globe. Here are reconstructed
              highlights—each a thread woven into the legend.
            </p>
          </header>
          <LeadList leads={leads} />
        </section>

        <section className={styles.section}>
          <header className={styles.sectionHeader}>
            <p className={styles.eyebrow}>Vital recordings</p>
            <h2 className={styles.sectionTitle}>Discography That Fueled the Hunt</h2>
            <p className={styles.sectionBody}>
              Fans reverse-engineered these records, scrutinizing every lyric for GPS coordinates, a
              turn of phrase, or a glimpse into the life they felt inside the grooves.
            </p>
          </header>
          <Discography items={discography} />
        </section>

        <Quotes quotes={quotes} />

        <section className={styles.section}>
          <header className={styles.sectionHeader}>
            <p className={styles.eyebrow}>Share your findings</p>
            <h2 className={styles.sectionTitle}>Add Your Note to the Archive</h2>
            <p className={styles.sectionBody}>
              The original website invited visitors to fax, call, or email any hint. This modern
              ledger welcomes memories, bootlegs, newspaper clippings, and reflections on what the
              search meant to you.
            </p>
          </header>
          <div className={styles.callout}>
            <h3 className={styles.ctaTitle}>Digital Submission Form</h3>
            <p className={styles.ctaBody}>
              Contributions are catalogued and published as part of the Rodríguez Oral History
              Project. Names can be withheld upon request, and every submission receives a response
              from the volunteer archivists.
            </p>
            <form
              action="https://formspree.io/f/xayzjger"
              method="POST"
              style={{ display: "grid", gap: "1rem" }}
            >
              <label style={{ display: "grid", gap: "0.35rem" }}>
                <span style={{ letterSpacing: "0.12em", textTransform: "uppercase", fontSize: "0.8rem" }}>
                  Your Name (optional)
                </span>
                <input
                  type="text"
                  name="name"
                  placeholder="e.g. Anonymous Sleuth"
                  style={{
                    borderRadius: "12px",
                    border: "1px solid rgba(0,0,0,0.2)",
                    padding: "0.75rem 1rem",
                    fontSize: "1rem"
                  }}
                />
              </label>
              <label style={{ display: "grid", gap: "0.35rem" }}>
                <span style={{ letterSpacing: "0.12em", textTransform: "uppercase", fontSize: "0.8rem" }}>
                  Contact Email
                </span>
                <input
                  type="email"
                  name="email"
                  required
                  placeholder="you@example.com"
                  style={{
                    borderRadius: "12px",
                    border: "1px solid rgba(0,0,0,0.2)",
                    padding: "0.75rem 1rem",
                    fontSize: "1rem"
                  }}
                />
              </label>
              <label style={{ display: "grid", gap: "0.35rem" }}>
                <span style={{ letterSpacing: "0.12em", textTransform: "uppercase", fontSize: "0.8rem" }}>
                  Lead, Memory, or Artifact
                </span>
                <textarea
                  name="message"
                  required
                  rows={4}
                  placeholder="Share the rumor you chased, the lyric that haunted you, the moment you heard Rodríguez was alive..."
                  style={{
                    borderRadius: "12px",
                    border: "1px solid rgba(0,0,0,0.2)",
                    padding: "0.75rem 1rem",
                    fontSize: "1rem",
                    resize: "vertical"
                  }}
                />
              </label>
              <ul className={styles.ctaList}>
                <li>Submissions are reviewed weekly by a volunteer archivist.</li>
                <li>Audio files, scans, and photographs can be sent by reply email.</li>
                <li>
                  Select stories will be featured in an annual zine honoring the global Rodríguez
                  community.
                </li>
              </ul>
              <button
                type="submit"
                style={{
                  justifySelf: "start",
                  background: "var(--color-deep)",
                  color: "var(--color-cream)",
                  borderRadius: "999px",
                  border: "none",
                  padding: "0.9rem 1.9rem",
                  fontSize: "0.95rem",
                  letterSpacing: "0.2em",
                  textTransform: "uppercase",
                  fontWeight: 600,
                  cursor: "pointer",
                  boxShadow: "0 10px 20px rgba(0,0,0,0.18)"
                }}
              >
                Submit Lead
              </button>
            </form>
          </div>
        </section>

        <footer className={styles.footer}>
          Compiled with respect for the original &ldquo;Have You Seen Rodríguez?&rdquo; campaign. The
          search proved the legend was always real.
        </footer>
      </div>
    </main>
  );
}
