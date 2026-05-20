import axios from "axios";
import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import CategoryCard from "../components/CategoryCard";

export default function CategoriesPage() {
  const API_URL = import.meta.env.VITE_API_URL;
  const [categories, setCategories] = useState([]);

  useEffect(() => { axios.get(`${API_URL}/api/categories`).then((response) => { setCategories(response.data.data); }).catch((error) => { console.error(error); }); }, [API_URL]);

  if (!categories) {
    return (
      <main className="container py-5">
        <p>Caricamento delle categorie...</p>
      </main>
    );
  }

  return (
    <main className="container py-5">
      {/* BREADCRUMB */}
      <nav aria-label="breadcrumb" className="mb-4">
        <ol className="breadcrumb">
          <li className="breadcrumb-item">
            <Link className="bread-pixel pixel-link" to="/">Home</Link>
          </li>

          <li className="breadcrumb-item active bread-pixel" aria-current="page">
            Categorie
          </li>
        </ol>
      </nav>
      {/* FINE BREADCRUMB */}

      {/* TESTATA CATEGORIE */}
      <section
        className="article-card mb-5" style={{ borderColor: "var(--border-dark)", boxShadow: `8px 8px 0 "var(--neon-cyan)"}`, }}>
        <div className="article-card-body p-4 p-lg-5">
          <h1 className="pixel-title display-4 fw-bold text-uppercase lh-1 mb-3">Tutte le nostre categorie</h1>
        </div>
      </section>
      {/* FINE TESTATA CATEGORIE */}

      {/* CATEGORIE  */}
      <section>
        <div className="row row-cols-1 row-cols-sm-2 row-cols-lg-4 g-4">
          {categories.map((category) => (
            <div key={category.slug} className="col">
              <CategoryCard category={category} />
            </div>
          ))}
        </div>
      </section>

      {/* LINK TO TOP */}
      <div className="d-flex justify-content-center mt-4">
        <button type="button" className="pixel-btn" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>Torna su ↑</button>
      </div>
    </main>
  );
}