export default function AuthorCard() {
  return (
    <article className="pixel-card pixel-card-purple p-3 d-flex flex-column flex-md-row gap-3 h-100">
      <div className="ratio ratio-1x1 bg-warning border border-2 border-dark author-img-box">
        <img src="/author-placeholder.png" alt="Nome autore" className="pixel-card-img"/>
      </div>
      <div className="d-flex flex-column justify-content-center">
        <h3 className="pixel-title fs-4 mb-1">Nome Autore</h3>
        <p className="pixel-text fw-bold mb-2">
          Ruolo autore</p>
        <a href="/autori/nome-autore" className="pixel-btn align-self-start">
          Vedi profilo
        </a>
      </div>
    </article>
  )
}