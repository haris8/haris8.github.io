import { Header, Footer } from './portfolio';
export default function NotFound() {
  return (
    <>
      <Header />
      <main id="main" className="wrap missing-page">
        <p className="eyebrow">404</p>
        <h1>A little off course.</h1>
        <a className="action-link" href="/">
          Return home ↗
        </a>
      </main>
      <Footer />
    </>
  );
}
