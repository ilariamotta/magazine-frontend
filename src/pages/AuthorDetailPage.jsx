import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import ArticleCard from "../components/ArticleCard";
import Loader from "../components/Loader";

export default function AuthorDetailPage() {
  const API_URL = import.meta.env.VITE_API_URL;
  const { slug } = useParams();

  const [author, setAuthor] = useState(null);
  const [articles, setArticles] = useState(null);

  useEffect(() => {
  window.scrollTo(0, 0);
}, []);

  useEffect(() => {axios
      .get(`${API_URL}/api/authors/${slug}`)
      .then((response) => {setAuthor(response.data.data);})
      .catch((error) => {console.error("Errore autore:", error);});
  }, [API_URL, slug]);

  useEffect(() => {axios
      .get(`${API_URL}/api/articles`)
      .then((response) => {setArticles(response.data.data);})
      .catch((error) => {console.error("Errore articoli:", error);});
  }, [API_URL]);


  
  
  if (!articles || !author ) {
    return <Loader text="Caricamento contenuti..." />;}
    
    const authorArticles = articles.filter((article) => {return article.author?.slug === slug;});
  const authorImageUrl = author.avatar_image ? `${API_URL}/storage/${author.avatar_image}`: "/author-placeholder.png";

  return (
    <main className="container py-5">
      {/* BREADCRUMB */}
      <nav aria-label="breadcrumb" className="mb-4">
        <ol className="breadcrumb">
          <li className="breadcrumb-item"><Link className="bread-pixel pixel-link" to="/">Home</Link></li>
          <li className="breadcrumb-item"><Link className="bread-pixel pixel-link" to="/autori">Autori</Link></li>
          <li className="breadcrumb-item active bread-pixel" aria-current="page">{author.name}</li>
        </ol>
      </nav>
      {/* TESTATA AUTORE */}
      <section className="article-card mb-5">
        <div className="article-card-body p-4 p-lg-5">
          <div className="row g-4 align-items-center">
            <div className="col-12 col-md-4 col-lg-3">
              <div className="ratio ratio-1x1 bg-warning border border-2 border-dark">
                <img src={authorImageUrl} alt={author.name} className="pixel-card-img"/>
              </div>
            </div>
            <div className="col-12 col-md-8 col-lg-9">
              <span className="pixel-badge article-card-badge-static mb-3 d-inline-block">Autore</span>
              <h1 className="pixel-title display-4 fw-bold text-uppercase lh-1 mb-3">{author.name}</h1>
              <p className="pixel-text fs-5 mb-0">
                {author.bio || "Bio autore non disponibile."}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ARTICOLI AUTORE */}
      <section>
        <div className="d-flex justify-content-between align-items-center mb-4">
          <h2 className="pixel-title mb-0">Articoli di {author.name}</h2>
          <Link to="/autori" className="pixel-link">Tutti gli autori ►</Link>
        </div>

        {authorArticles.length === 0 ? (
          <div className="article-card">
            <div className="article-card-body p-4">
              <p className="mb-0">
                Non ci sono ancora articoli pubblicati per questo autore.
              </p>
            </div>
          </div>
        ) : (
          <div className="row row-cols-1 row-cols-sm-2 row-cols-lg-4 g-4">
            {authorArticles.map((article) => (
              <div key={article.id} className="col">
                <ArticleCard article={article} />
              </div>
            ))}
          </div>
        )}
      </section>
    </main>
  );
}