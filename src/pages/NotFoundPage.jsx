import { Link } from "react-router-dom";

export default function NotFoundPage() {
  return (
    <main className="container py-5">
      <section className="article-card text-center"style={{borderColor: "var(--border-dark)",boxShadow: "8px 8px 0 var(--neon-pink)",}}>
        <div className="article-card-body p-4 p-lg-5">
          <p className="pixel-title text-uppercase mb-2">Errore 404</p>
          <h1 className="pixel-title display-1 fw-bold text-uppercase lh-1 mb-4">Pagina non trovata</h1>
          <p className="lead mb-4">
            Ops! Sembra che questa pagina si sia persa nel Matrix. Ma non preoccuparti, abbiamo molte altre storie da raccontare!
          </p>
          <div className="d-flex flex-column flex-sm-row justify-content-center gap-3">
            <Link to="/" className="pixel-btn">Torna alla Home</Link>
            <Link to="/articoli" className="pixel-link d-flex align-items-center justify-content-center">Leggi gli articoli ►</Link>
          </div>
        </div>
      </section>
    </main>
  );
}
