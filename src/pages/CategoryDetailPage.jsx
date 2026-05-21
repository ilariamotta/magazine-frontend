import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import ArticleCard from "../components/ArticleCard";
import Loader from "../components/Loader";

export default function CategoryDetailPage() {
  const API_URL = import.meta.env.VITE_API_URL;
  const { slug } = useParams();

  const [category, setCategory] = useState(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);


  useEffect(() => {
    axios
      .get(`${API_URL}/api/categories/${slug}`)
      .then((response) => { setCategory(response.data.data); })
      .catch((error) => { console.error("Errore categoria:", error); });
  }, [API_URL, slug]);



  if (!category) {
    return <Loader text="Caricamento contenuti..." />;
  }

  const categoryArticles = category.articles || [];


  return (
    <main className="container py-5">
      {/* BREADCRUMB */}
      <nav aria-label="breadcrumb" className="mb-4">
        <ol className="breadcrumb">
          <li className="breadcrumb-item">
            <Link className="bread-pixel pixel-link" to="/">Home</Link>
          </li>
          <li className="breadcrumb-item">
            <Link className="bread-pixel pixel-link" to="/categorie">
              Categorie
            </Link>
          </li>
          <li className="breadcrumb-item active bread-pixel" aria-current="page">
            {category.name}
          </li>
        </ol>
      </nav>

      {/* TESTATA CATEGORIA */}
      <section
        className="article-card mb-5" style={{ borderColor: "var(--border-dark)", boxShadow: `8px 8px 0 ${category.color || "var(--neon-cyan)"}`, }}>
        <div className="article-card-body p-4 p-lg-5">
          <h1 className="pixel-title display-4 fw-bold text-uppercase lh-1 mb-3">{category.name}</h1>
          <p className="pixel-text fs-5 mb-0"> Tutti gli articoli pubblicati nella categoria {category.name}.</p>
        </div>
      </section>

      {/* ARTICOLI CATEGORIA */}
      <section>
        <div className="d-flex justify-content-between align-items-center mb-4">
          <h2 className="pixel-title mb-0">Articoli in {category.name}</h2>
          <Link to="/categorie" className="pixel-link">Tutte le categorie ►</Link>
        </div>
        {categoryArticles.length === 0 ? (
          <div className="article-card">
            <div className="article-card-body p-4">
              <p className="mb-0">
                Non ci sono ancora articoli pubblicati in questa categoria.
              </p>
            </div>
          </div>
        ) : (
          <div className="row row-cols-1 row-cols-sm-2 row-cols-lg-4 g-4">
            {categoryArticles.map((article) => (
              <div key={article.slug} className="col">
                <ArticleCard article={{ ...article, categories: [category] }} />
              </div>
            ))}
          </div>
        )}
      </section>
      {/* LINK TO TOP */}
      <div className="d-flex justify-content-center mt-4">
        <button type="button" className="pixel-btn" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>Torna su ↑</button>
      </div>
    </main>
  );
}