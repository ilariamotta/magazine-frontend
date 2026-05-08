export default function ArticleCard() {
  return (
    <article className="pixel-card h-100 d-flex flex-column">
      <div className="ratio ratio-1x1 bg-warning border-bottom border-2 border-dark">
        <img src="/article-placeholder.png" alt="Titolo articolo" className="pixel-card-img"/>
      </div>
      <div className="p-3 d-flex flex-column flex-grow-1">
        <span className="pixel-badge mb-3 align-self-start">
          Nome categoria
        </span>
        <h3 className="pixel-title fs-4 mb-2">
          Titolo dell’articolo
        </h3>
        <p className="pixel-text mb-4">
          Sottotitolo dell'articolo
        </p>
        <div className="mt-auto d-flex justify-content-between align-items-center gap-3">
          <span className="pixel-text fw-bold">
            Data
          </span>
          <a href="/articoli/titolo-articolo" className="pixel-btn">
            Leggi
          </a>
        </div>
      </div>
    </article>
  )
}