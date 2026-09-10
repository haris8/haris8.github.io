import type { Metadata } from 'next';
import { ArrowUpRight, CloudSun, Database, Network } from 'lucide-react';
import { ProjectShell } from '../project-shell';
import { MarketChart } from '../../portfolio';

const description =
  'Explore natural gas markets through lessons and simulated trading.';
export const metadata: Metadata = {
  title: 'Gas Trader Academy',
  description,
  openGraph: {
    title: 'Gas Trader Academy | Haris Siddiqui',
    description,
    url: '/projects/gas-trader-academy/',
  },
  twitter: {
    card: 'summary',
    title: 'Gas Trader Academy | Haris Siddiqui',
    description,
  },
};

export default function GasTraderAcademy() {
  return (
    <ProjectShell
      number="02"
      title="Gas Trader Academy"
      category="Energy / Interactive learning"
      description={description}
      nextHref="/projects/datacity/"
      nextTitle="DataCity"
    >
      <div className="energy-showcase">
        <div className="showcase-bar">
          <span className="eyebrow">Henry Hub / Natural gas</span>
          <span className="demo-label">
            Illustrative chart · Simulated data
          </span>
        </div>
        <div className="energy-title-row">
          <span className="energy-big-ticker">
            NG<span>.</span>
          </span>
          <span className="energy-chart-label">Read the signals.</span>
        </div>
        <MarketChart large />
        <div className="energy-signals">
          <div>
            <CloudSun aria-hidden="true" />
            <span>Weather</span>
          </div>
          <div>
            <Database aria-hidden="true" />
            <span>Storage</span>
          </div>
          <div>
            <Network aria-hidden="true" />
            <span>Supply & demand</span>
          </div>
        </div>
      </div>
      <div className="project-bottom-row">
        <a
          className="action-link"
          href="https://trade.harissiddiqui.me/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Explore the academy <ArrowUpRight size={18} aria-hidden="true" />
        </a>
      </div>
    </ProjectShell>
  );
}
