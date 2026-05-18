import { Link } from "react-router-dom";

export default function CategoryCard({category}) {
  return (
    <>
    <a href="/categorie/nome-categoria" className="pixel-card category-card text-decoration-none">
      <div className="category-card-inner" style={{
            backgroundColor: category.color || "var(--neon-pink)",
          }}>
        <h6 className="pixel-title category-card-title">
          {category.name}
        </h6>
          <Link to={`/categories/${category.slug}`} className="pixel-btn align-self-start">Esplora <i className="bi bi-arrow-right-short ms-1"></i> </Link>
      </div>
    </a>
   </>
  )
}