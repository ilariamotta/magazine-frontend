export default function AuthorCard() {
  return (
    <article className="author-card">
      <div className="author-card-image-box">
        <img src="/author-placeholder.png" alt="Nome autore"className="author-card-image"/>
      </div>
      <div className="author-card-content">
        <h3 className="author-card-name">Nome Autore</h3>
        <p className="author-card-role">Ruolo autore</p>
        <a href="/autori/nome-autore" className="author-card-button">
          Vedi profilo
          <i className="bi bi-arrow-right-short"></i>
        </a>
      </div>
    </article>
  )
}