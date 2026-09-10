import type { ReactNode } from 'react';
import { ArrowLeft, ArrowUpRight } from 'lucide-react';
import { Header, Footer } from '../portfolio';

export function ProjectShell({
  number,
  title,
  category,
  description,
  children,
  nextHref,
  nextTitle,
}: {
  number: string;
  title: string;
  category: string;
  description: string;
  children: ReactNode;
  nextHref: string;
  nextTitle: string;
}) {
  return (
    <>
      <Header />
      <main id="main" className="project-page wrap">
        <a className="return-link" href="/#projects">
          <ArrowLeft size={16} aria-hidden="true" />
          All projects
        </a>
        <header className="project-intro">
          <p className="eyebrow">
            {number} / {category}
          </p>
          <h1>{title}</h1>
          <p className="project-description">{description}</p>
        </header>
        {children}
        <a className="next-project" href={nextHref}>
          <div>
            <span className="eyebrow">Next project</span>
            <span>{nextTitle}</span>
          </div>
          <ArrowUpRight aria-hidden="true" />
        </a>
      </main>
      <Footer />
    </>
  );
}
