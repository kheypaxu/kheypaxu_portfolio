import {
  ArrowUpRight,
  Check,
  Code2,
  Layers3,
  MapPin,
  Monitor,
  Smartphone,
} from "lucide-react";
import styles from "./Capabilities.module.css";

export function Capabilities() {
  return (
    <div className={`wrap ${styles.section}`}>
      <div className={styles.heading}>
        <div>
          <span className={styles.eyebrow}>
            Thoughtful interfaces. Useful software.
          </span>
          <h2>
            What I excel at<span>.</span>
          </h2>
        </div>
        <p>
          I turn everyday workflows into clear, considered experiences — on the
          web, on your phone, and at your desk.
        </p>
      </div>
      <div className={styles.grid}>
        <article className={`${styles.card} ${styles.web}`}>
          <div className={styles.copy}>
            <span className={styles.icon}>
              <Monitor size={23} />
            </span>
            <h3>Frontend that feels right.</h3>
            <p>
              Responsive websites and dashboards that make complex information
              easier to navigate.
            </p>
            <ul>
              <li>
                <Check />
                Reusable React &amp; Next.js components
              </li>
              <li>
                <Check />
                Search, maps, and real-time data views
              </li>
              <li>
                <Check />
                Layouts that work across screen sizes
              </li>
            </ul>
            <a href="#projects">
              Explore VISAIA &amp; Revia <ArrowUpRight size={18} />
            </a>
          </div>
          <div className={styles.webArt} aria-hidden="true">
            <div className={styles.browserBar}>
              <span />
              <span />
              <span />
              <i>thoughtfully built</i>
            </div>
            <div className={styles.browserBody}>
              <div className={styles.sidebar}>
                <Layers3 />
                <span />
                <span />
                <span />
              </div>
              <div className={styles.dashboard}>
                <span className={styles.artLabel}>A clearer view.</span>
                <div className={styles.skeleton} />
                <div className={styles.miniCards}>
                  <div>
                    <span />
                    <strong>Discover</strong>
                  </div>
                  <div>
                    <MapPin />
                    <strong>Explore</strong>
                  </div>
                </div>
                <div className={styles.chart}>
                  <i />
                  <i />
                  <i />
                  <i />
                  <i />
                  <i />
                  <i />
                </div>
              </div>
            </div>
          </div>
        </article>
        <article className={`${styles.card} ${styles.mobile}`}>
          <div className={styles.copy}>
            <span className={styles.icon}>
              <Smartphone size={23} />
            </span>
            <h3>Mobile, with purpose.</h3>
            <p>
              Flutter experiences for real-world tasks, from mapping a field to
              submitting a pest report.
            </p>
            <div className={styles.tags}>
              <span>Flutter &amp; Dart</span>
              <span>Connected workflows</span>
            </div>
            <a href="#project-visaia">
              See VISAIA mobile <ArrowUpRight size={18} />
            </a>
          </div>
          <div className={styles.phone} aria-hidden="true">
            <span className={styles.notch} />
            <MapPin />
            <strong>Out in the field.</strong>
            <div className={styles.map}>
              <span />
            </div>
            <div className={styles.phoneButton}>
              Ready to explore <ArrowUpRight size={12} />
            </div>
          </div>
        </article>
        <article className={`${styles.card} ${styles.desktop}`}>
          <div className={styles.copy}>
            <span className={styles.icon}>
              <Code2 size={23} />
            </span>
            <h3>Workflows that connect.</h3>
            <p>
              Desktop applications that bring sales, records, and reporting into
              one practical workspace.
            </p>
            <div className={styles.tags}>
              <span>Python &amp; Flet</span>
              <span>Database integration</span>
            </div>
            <a href="#project-bigbrew">
              Explore BigBrew POS <ArrowUpRight size={18} />
            </a>
          </div>
          <div className={styles.receipt} aria-hidden="true">
            <span>One connected workspace</span>
            <div>
              <Check size={14} /> Products &amp; orders
            </div>
            <div>
              <Check size={14} /> Transaction records
            </div>
            <div>
              <Check size={14} /> Sales reports
            </div>
            <strong>
              Made for the day-to-day.
              <ArrowUpRight size={16} />
            </strong>
          </div>
        </article>
      </div>
      <div className={styles.footer}>
        <p>Have something in mind? Let’s find a good way to build it.</p>
        <a href="#contact">
          Let’s talk <ArrowUpRight size={18} />
        </a>
      </div>
    </div>
  );
}
