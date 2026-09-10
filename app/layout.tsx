import type { Metadata } from 'next';
import './globals.css';
export const metadata: Metadata = {
  metadataBase: new URL('https://harissiddiqui.me'),
  title: {
    default: 'Haris Siddiqui | Projects & Explorations',
    template: '%s | Haris Siddiqui',
  },
  description: 'Selected projects and education.',
  openGraph: {
    title: 'Haris Siddiqui',
    description: 'Selected projects and education.',
    type: 'website',
    locale: 'en_US',
  },
  icons: { icon: '/favicon.svg' },
};
export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className="dark">
      <body id="top">{children}</body>
    </html>
  );
}
