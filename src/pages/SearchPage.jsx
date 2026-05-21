import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import ArticleCard from "../components/ArticleCard";

export default function SearchPage() {
  const API_URL = import.meta.env.VITE_API_URL;

  const [searchParams] = useSearchParams();
  const query = searchParams.get("q") || "";

  const [articles, setArticles] = useState(null);

  useEffect(() => {
    axios
      .get(`${API_URL}/api/articles`)
      .then((response) => {
        setArticles(response.data.data);
      })
      .catch((error) => {
        console.error("Errore ricerca:", error);
        setArticles([]);
      });
  }, [API_URL]);

  if (!articles) {
    return (
      <main className="container py-5">
        <p>Ricerca in corso...</p>
      </main>
    );
  }

  const searchedText = query.toLowerCase();

  const filteredArticles = articles.filter((article) => {
    const articleText = `
      ${article.title}
      ${article.subtitle}
      ${article.content}
      ${article.author?.name}
      ${article.categories?.map((category) => category.name).join(" ")}
    `.toLowerCase();

    return articleText.includes(searchedText);
  });

  return (
    <main className="container py-5">
      {/* BREADCRUMB */}
      <nav aria-label="breadcrumb" className="mb-4">
        <ol className="breadcrumb">
          <li className="breadcrumb-item">
            <Link className="bread-pixel pixel-link" to="/">
              Home
            </Link>
          </li>

          <li className="breadcrumb-item active bread-pixel" aria-current="page">
            Cerca
          </li>
        </ol>
      </nav>
      {/* FINE BREADCRUMB */}

      {/* TESTATA RICERCA */}
      <section
        className="article-card mb-5"
        style={{
          borderColor: "var(--border-dark)",
          boxShadow: "8px 8px 0 var(--neon-cyan)",
        }}
      >
        <div className="article-card-body p-4 p-lg-5">
          <h1 className="pixel-title display-4 fw-bold text-uppercase lh-1 mb-3">
            Risultati di ricerca
          </h1>

          <p className="mb-0">
            Hai cercato: <strong>{query}</strong>
          </p>
        </div>
      </section>
      {/* FINE TESTATA RICERCA */}

      {/* RISULTATI */}
      <section>
        {filteredArticles.length === 0 ? (
          <p>Nessun articolo trovato.</p>
        ) : (
          <>
            <div className="d-flex justify-content-between align-items-center mb-4">
              <h2 className="pixel-title mb-0">Articoli trovati</h2>

              <Link to="/articoli" className="pixel-link">
                Tutti gli articoli ►
              </Link>
            </div>

            <div className="row row-cols-1 row-cols-sm-2 row-cols-lg-4 g-4">
              {filteredArticles.map((article) => (
                <div key={article.slug} className="col">
                  <ArticleCard article={article} />
                </div>
              ))}
            </div>
          </>
        )}
      </section>
      {/* FINE RISULTATI */}
    </main>
  );
}