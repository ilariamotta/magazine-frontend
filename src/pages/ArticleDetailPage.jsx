import axios from "axios";
import { useEffect, useState } from "react";
import { Link, Links, useParams } from "react-router-dom";

export default function ArticleDetailPage() {
  const API_URL = import.meta.env.VITE_API_URL;
  const { slug } = useParams();

  const [article, setArticle] = useState(null);

  useEffect(() => {axios
      .get(`${API_URL}/api/articles/${slug}`)
      .then((response) => {setArticle(response.data.data);})
      .catch((error) => {
        console.error(error);});
  }, [API_URL, slug]);

  if (!article) {
    return (
      <main className="container py-5">
        <p>Caricamento articolo...</p>
      </main>
    );
  }

  const coverImageUrl = article.cover_image ? `${API_URL}/storage/${article.cover_image}`: "/article-placeholder.png";
  const authorImageUrl = article.author?.avatar_image ? `${API_URL}/storage/${article.author.avatar_image}`: "/author-placeholder.png";
  const formattedDate = new Date(article.published_at).toLocaleDateString("it-IT", {
    day: "2-digit",
    month: "long",
    year: "numeric",
  });

  return (
    <main className="container py-5">
      {/* BREADCRUMB */}
      <nav aria-label="breadcrumb">
      <ol class="breadcrumb">
      <Link class="breadcrumb-item bread-pixel" to="/">Home</Link>
      <Link class="breadcrumb-item bread-pixel" to="/articles">Articoli</Link>
      </ol>
      </nav>
      {/* TESTATA ARTICOLO */}
      <section className="mt-5">
        <div className="row g-0">
          {/* TESTI */}
          <div className="col-12 col-lg-6">
            <div className="h-100 d-flex flex-column justify-content-center p-4">
              <div className="d-flex flex-wrap gap-2 mb-3">
                {article.categories?.map((category) => (
                  <Link to={`/categories/${category.slug}`} key={category.id} className="article-detail-categories text-decoration-none px-2 py-1 border border-2 border-dark text-white" style={{ backgroundColor: category.color || "var(--neon-pink)", fontFamily: "var(--font-pixel)", }}>
                    {category.name}
                  </Link>
                ))}
              </div>
              <h1 className="pixel-title display-4 fw-bold text-uppercase lh-1 mb-3">{article.title}</h1>
              <h2 className="fs-5 text-muted mb-4">{article.subtitle}</h2>
              <div className="article-card-meta justify-content-start">
                <span>{formattedDate}</span>
                <span>•</span>
                {article.author?.slug && (
          <Link to={`/authors/${article.author.slug}`} className="pixel-link">
            {article.author.name}
          </Link>
        )}
              </div>
            </div>
          </div>
          {/* IMMAGINE */}
          <div className="col-12 col-lg-6">
            <div className="h-100">
              <img src={coverImageUrl} alt={article.title} className="pixel-card-img article-detail-img-box"/>
            </div>
          </div>
        </div>
      </section>
      {/* CONTENUTO ARTICOLO */}
      <section className="mb-5 article-detail-content-box">
        <div className="article-card-body p-4 p-lg-5">
          <p className="fs-5 lh-lg mb-0" style={{ whiteSpace: "pre-line" }}>{article.content}</p>
        </div>
      </section>
      <div className="d-flex justify-content-center mt-4">
        {/* LINK TO TOP */}
  <button type="button" className="pixel-btn" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>Torna su ↑</button>
</div>
    </main>
  );
}