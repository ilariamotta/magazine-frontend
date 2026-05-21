import axios from "axios";
import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import AuthorCard from "../components/AuthorCard";
import Loader from "../components/Loader";


export default function AuthorDetailPage() {

  const API_URL = import.meta.env.VITE_API_URL;
  const [authors, setAuthors] = useState(null);

  useEffect(() => { axios.get(`${API_URL}/api/authors`).then((response) => { setAuthors(response.data.data); }).catch((error) => { console.error(error); }); }, [API_URL]);

    if (!authors) {
        return <Loader text="Caricamento contenuti..." />;}


  return (
  <>
     <main className="container py-5">
      {/* BREADCRUMB */}
      <nav aria-label="breadcrumb" className="mb-4">
        <ol className="breadcrumb">
          <li className="breadcrumb-item">
            <Link className="bread-pixel pixel-link" to="/">Home</Link>
          </li>
        
          <li className="breadcrumb-item active bread-pixel" aria-current="page">
            Autori
          </li>
        </ol>
      </nav>
      {/* FINE BREADCRUMB */}

      {/* TESTATA AUTORI */}
      <section
        className="article-card mb-5" style={{ borderColor: "var(--border-dark)", boxShadow: `8px 8px 0 "var(--neon-cyan)"}`, }}>
        <div className="article-card-body p-4 p-lg-5">
          <h1 className="pixel-title display-4 fw-bold text-uppercase lh-1 mb-3">Tutti i nostri autori</h1>
        </div>
      </section>
      {/* FINE TESTATA AUTORI */}
       {/* ARTICOLI  */}
            <section>
                <div className="row row-cols-1 row-cols-sm-2 row-cols-lg-4 g-4">
                  {authors.map((author) => (
                    <div key={author.slug} className="col">
                      <AuthorCard author={author}/>
                    </div>
                  ))}
                </div>
            </section>
      
              {/* LINK TO TOP */}
            <div className="d-flex justify-content-center mt-4">
        <button type="button" className="pixel-btn" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>Torna su ↑</button>
      </div>
    </main>
    </>
  );
}