import type { Metadata } from 'next';
import { ArrowUpRight } from 'lucide-react';
import { ProjectShell } from '../project-shell';
import { DataDiagram } from '../../portfolio';
import {
  Table,
  TableHeader,
  TableBody,
  TableRow,
  TableHead,
  TableCell,
  TableCaption,
} from '@/components/ui/table';

const description =
  'A SQL-backed hiring platform, from application to interview.';
export const metadata: Metadata = {
  title: 'DataCity',
  description,
  openGraph: {
    title: 'DataCity | Haris Siddiqui',
    description,
    url: '/projects/datacity/',
  },
  twitter: { card: 'summary', title: 'DataCity | Haris Siddiqui', description },
};
const rows = [
  ['APP-001', 'Alex Morgan', 'Data Analyst', 'In review'],
  ['APP-002', 'Jordan Lee', 'Software Engineer', 'Interview'],
  ['APP-003', 'Taylor Chen', 'Systems Analyst', 'Applied'],
  ['APP-004', 'Sam Rivera', 'Database Developer', 'In review'],
];

export default function DataCity() {
  return (
    <ProjectShell
      number="03"
      title="DataCity"
      category="Database / Microsoft SQL Server"
      description={description}
      nextHref="/projects/secret-weapon/"
      nextTitle="The Secret Weapon"
    >
      <div className="database-showcase">
        <div className="showcase-bar">
          <span className="demo-label">Simplified relationship diagram</span>
        </div>
        <DataDiagram />
      </div>
      <section
        className="database-preview"
        aria-labelledby="applications-title"
      >
        <div className="table-title-row">
          <div>
            <p className="eyebrow">DataCity / Concept preview</p>
            <h2 id="applications-title">Applications</h2>
          </div>
          <span className="demo-label">Generic demo data</span>
        </div>
        <Table className="application-table">
          <TableCaption>
            Illustrative interface with fictional candidates.
          </TableCaption>
          <TableHeader>
            <TableRow>
              {['Application', 'Candidate', 'Position', 'Status'].map((h) => (
                <TableHead key={h} scope="col">
                  {h}
                </TableHead>
              ))}
            </TableRow>
          </TableHeader>
          <TableBody>
            {rows.map((row) => (
              <TableRow key={row[0]}>
                {row.map((cell, i) => (
                  <TableCell key={i}>
                    {i === 3 ? (
                      <span
                        className={`application-status ${cell === 'Interview' ? 'status-interview' : ''}`}
                      >
                        {cell}
                      </span>
                    ) : (
                      cell
                    )}
                  </TableCell>
                ))}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </section>
      <div className="project-bottom-row">
        <a
          className="action-link"
          href="https://harissiddiqui.me/datacity.html"
          target="_blank"
          rel="noopener noreferrer"
        >
          Original SQL project <ArrowUpRight size={18} aria-hidden="true" />
        </a>
      </div>
    </ProjectShell>
  );
}
