import { Link } from "react-router-dom";

export default function ArticleCard({ article }) {
  const API_URL = import.meta.env.VITE_API_URL;
  const firstCategory = article.categories?.[0];

  const coverImageUrl = article.cover_image ? `${API_URL}/storage/${article.cover_image}` : "/article-placeholder.png";

  const formattedDate = new Date(article.published_at).toLocaleDateString("it-IT", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  });

  return (
    <article className="pixel-card article-card h-100 d-flex flex-column">
      <div className="article-card-img-box">
        <span className="pixel-badge article-card-badge" style={{
            backgroundColor: firstCategory?.color || "var(--neon-pink)",
          }}>{firstCategory?.name || "Categoria"}</span>
        <img src={coverImageUrl} alt={article.title} className="pixel-card-img"/>
      </div>
      <div className="article-card-body d-flex flex-column flex-grow-1">
        <h5 className="pixel-title article-card-title">{article.title}</h5>
        <div className="article-card-meta mt-auto"><span>{formattedDate}</span>
          <Link to={`/articles/${article.slug}`} className="pixel-btn article-card-link">Leggi</Link>
        </div>
      </div>
    </article>
  );
}