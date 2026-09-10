import { ArrowDown, ArrowUpRight } from 'lucide-react';
import { Header, Footer, MarketChart, DataDiagram } from './portfolio';

export default function Home() {
  return (
    <>
      <Header />
      <main id="main">
        <section className="hero" aria-label="Moon photograph">
          <img
            className="moon-photo"
            src="/images/moon.jpg"
            alt="The moon against a black night sky, from the original portfolio"
            fetchPriority="high"
          />
          <div className="hero-inner wrap">
            <a className="hero-scroll" href="#projects">
              <span>Explore the work</span>
              <ArrowDown size={19} aria-hidden="true" />
            </a>
          </div>
        </section>
        <section
          id="projects"
          className="projects wrap"
          aria-labelledby="projects-title"
        >
          <div className="section-heading">
            <h1 id="projects-title">Selected work</h1>
            <span className="eyebrow">01 — 03</span>
          </div>
          <div className="project-grid">
            <a
              className="project project-secret"
              href="/projects/secret-weapon/"
              aria-label="The Secret Weapon — view project and demo previews"
            >
              <div className="project-visual secret-visual">
                <div className="visual-topline">
                  <span className="eyebrow">A little more headspace.</span>
                  <span className="project-symbol">↗</span>
                </div>
                <img
                  className="secret-desktop"
                  src="/images/secret-weapon-desktop.svg"
                  alt="Generic desktop preview of The Secret Weapon task organizer"
                  width="1440"
                  height="900"
                  loading="lazy"
                />
                <img
                  className="secret-phone"
                  src="/images/secret-weapon-mobile.svg"
                  alt="Generic phone preview with three next actions"
                  width="390"
                  height="780"
                  loading="lazy"
                />
                <span className="preview-note">
                  Concept preview · Demo data
                </span>
              </div>
              <div className="project-caption">
                <span className="project-number">01</span>
                <div>
                  <h3>The Secret Weapon</h3>
                </div>
                <ArrowUpRight aria-hidden="true" />
              </div>
            </a>
            <a
              className="project project-energy"
              href="/projects/gas-trader-academy/"
              aria-label="Gas Trader Academy — view project"
            >
              <div className="project-visual energy-visual">
                <div className="visual-topline">
                  <span className="eyebrow">Energy / Natural gas</span>
                  <span className="project-symbol">↗</span>
                </div>
                <div className="market-heading">
                  <span className="market-ticker">
                    NG<span className="ticker-period">.</span>
                  </span>
                  <span className="eyebrow">
                    Learn the
                    <br />
                    market.
                  </span>
                </div>
                <MarketChart />
                <div className="chart-caption">
                  <span>HENRY HUB</span>
                  <span>SIMULATION</span>
                </div>
              </div>
              <div className="project-caption">
                <span className="project-number">02</span>
                <div>
                  <h3>Gas Trader Academy</h3>
                </div>
                <ArrowUpRight aria-hidden="true" />
              </div>
            </a>
            <a
              className="project project-data"
              href="/projects/datacity/"
              aria-label="DataCity — view database project"
            >
              <div className="project-visual data-visual">
                <div className="data-identity">
                  <span className="eyebrow">Relational by design</span>
                  <span className="data-wordmark">DataCity</span>
                  <span className="data-tech">Microsoft SQL Server</span>
                </div>
                <DataDiagram />
              </div>
              <div className="project-caption">
                <span className="project-number">03</span>
                <div>
                  <h3>DataCity</h3>
                </div>
                <ArrowUpRight aria-hidden="true" />
              </div>
            </a>
          </div>
        </section>
        <section
          id="experience"
          className="experience wrap"
          aria-labelledby="experience-title"
        >
          <div className="section-heading">
            <h2 id="experience-title">Work experience</h2>
          </div>
          <p className="experience-pending">Résumé to follow.</p>
        </section>
        <section
          id="education"
          className="education wrap"
          aria-labelledby="education-title"
        >
          <div className="section-heading">
            <h2 id="education-title">Education</h2>
          </div>
          <div className="education-row">
            <span className="education-year">2022</span>
            <div>
              <h3>University of Houston–Downtown</h3>
              <p>B.S. Computer Science</p>
            </div>
            <span className="education-date">December 2022</span>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
