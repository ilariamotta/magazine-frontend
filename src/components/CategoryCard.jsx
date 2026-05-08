export default function CategoryCard() {
  return (
    <>
    <a href="/categorie/nome-categoria" className="pixel-card category-card text-decoration-none">
      <div className="category-card-inner">
        <h3 className="pixel-title category-card-title">
          Anime & Manga
        </h3>
        <span className="pixel-btn align-self-start">
          Esplora
          <i className="bi bi-arrow-right-short ms-1"></i>
        </span>
      </div>
    </a>
   </>
  )
}