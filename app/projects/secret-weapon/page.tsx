import type { Metadata } from 'next';
import { ArrowUpRight } from 'lucide-react';
import { ProjectShell } from '../project-shell';

const description =
  'A calmer place for tasks, priorities, and the next action.';
export const metadata: Metadata = {
  title: 'The Secret Weapon',
  description,
  openGraph: {
    title: 'The Secret Weapon | Haris Siddiqui',
    description,
    url: '/projects/secret-weapon/',
  },
  twitter: {
    card: 'summary',
    title: 'The Secret Weapon | Haris Siddiqui',
    description,
  },
};

export default function SecretWeapon() {
  return (
    <ProjectShell
      number="01"
      title="The Secret Weapon"
      category="Productivity / Web + Mobile"
      description={description}
      nextHref="/projects/gas-trader-academy/"
      nextTitle="Gas Trader Academy"
    >
      <figure className="desktop-showcase">
        <div className="showcase-bar">
          <span className="eyebrow">01 / A place to focus</span>
          <span className="demo-label">
            Concept preview · Generic demo data
          </span>
        </div>
        <a
          href="/images/secret-weapon-desktop.svg"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Open full-size desktop concept preview in a new tab"
        >
          <img
            src="/images/secret-weapon-desktop.svg"
            width="1440"
            height="900"
            alt="Desktop concept showing a focused Now list with Review weekly plan, Outline project notes, and Schedule focus time. All content is generic demo data."
          />
        </a>
        <figcaption>
          <span>Desktop</span>
          <a
            href="/images/secret-weapon-desktop.svg"
            target="_blank"
            rel="noopener noreferrer"
          >
            Full-size preview <ArrowUpRight size={15} aria-hidden="true" />
          </a>
        </figcaption>
      </figure>
      <section className="mobile-showcase" aria-labelledby="mobile-title">
        <div className="mobile-copy">
          <p className="eyebrow">02 / Take it with you</p>
          <h2 id="mobile-title">
            Less noise.
            <br />
            More space.
          </h2>
          <ol className="focus-steps">
            <li>
              <span>01</span>Capture
            </li>
            <li>
              <span>02</span>Prioritize
            </li>
            <li>
              <span>03</span>Act
            </li>
          </ol>
          <p className="demo-label">
            Illustrative screens. No personal content.
          </p>
        </div>
        <figure className="phone-showcase">
          <a
            href="/images/secret-weapon-mobile.svg"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Open full-size mobile concept preview in a new tab"
          >
            <img
              src="/images/secret-weapon-mobile.svg"
              width="390"
              height="780"
              alt="Mobile concept of the same generic Now list with quick capture and three next actions"
              loading="lazy"
            />
          </a>
          <figcaption>Mobile concept</figcaption>
        </figure>
      </section>
    </ProjectShell>
  );
}
