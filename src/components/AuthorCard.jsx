export default function AuthorCard({author}) {
  
  const API_URL = import.meta.env.VITE_API_URL;
   const coverImageUrl = author.avatar_image ? `${API_URL}/storage/${author.avatar_image}` : "/author-placeholder.png";

  return (
    <article className="pixel-card pixel-card-purple p-3 d-flex flex-column flex-md-row gap-3 h-100">
      <div className="ratio ratio-1x1 bg-warning border border-2 border-dark author-img-box">
        <img src={coverImageUrl} alt={author.name} className="pixel-card-img"/>
      </div>
      <div className="d-flex flex-column justify-content-center">
        <h3 className="pixel-title fs-4 mb-1">{author.name}</h3>
        <a href="/autori/nome-autore" className="pixel-btn align-self-start">
          Vedi profilo
        </a>
      </div>
    </article>
  )
}