import axios from "axios";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import ArticleCard from "../components/ArticleCard";
import CategoryCard from "../components/CategoryCard";
import AuthorCard from "../components/AuthorCard";
import Hero from "../components/Hero";
import { useNavigate } from "react-router-dom";
import Loader from "../components/Loader";


export default function HomePage() {

    const API_URL = import.meta.env.VITE_API_URL;
    const [articles, setArticles] = useState(null);
    const [categories, setCategories] = useState(null);
    const [authors, setAuthors] = useState(null);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    useEffect(() => { axios.get(`${API_URL}/api/articles`).then((response) => { setArticles(response.data.data); }).catch((error) => { console.error(error); }); }, [API_URL]);
    useEffect(() => { axios.get(`${API_URL}/api/categories`).then((response) => { setCategories(response.data.data); }).catch((error) => { console.error(error); }); }, [API_URL]);
    useEffect(() => { axios.get(`${API_URL}/api/authors`).then((response) => { setAuthors(response.data.data); }).catch((error) => { console.error(error); }); }, [API_URL]);

    if (!articles || !categories || !authors) {
        return <Loader text="Caricamento contenuti..." />;
    }

    const firstEventArticle = articles.find((article) => article.categories?.some((category) => category.slug === "eventi"));
    const latestArticles = articles.filter((article) => article.id !== firstEventArticle?.id);

    return (
        <>
            <div className="container">
                {/* HERO */}
                <Hero />
                {/*  FINE HERO */}
                {/* NOTIZIA EVENTO */}
                {firstEventArticle && (
                    <section className="mt-5" style={{ padding: "30px", border: "3px solid var(--text-main)", boxShadow: "10px 10px 0 var(--text-main)" }}>
                        <div className="row g-4 align-items-center">
                            <div className="col-12 col-lg-5">
                                <span className="mb-3 bg-black text-light" style={{ padding: "0.25rem 0.6rem", border: "2px solid var(--border-dark)" }}>
                                    In evidenza</span>
                                <h1 className="pixel-title pt-4">{firstEventArticle.title}</h1>
                                <p className="pixel-text">{firstEventArticle.subtitle}</p>
                                <a href={`/articoli/${firstEventArticle.slug}`} className="pixel-btn">Leggi l’articolo</a>
                            </div>
                            <div className="col-12 col-lg-7">
                                <img src={`${API_URL}/storage/${firstEventArticle.cover_image}`} alt={firstEventArticle.title} className="w-100" />
                            </div>
                        </div>
                    </section>
                )}
                {/* FINE NOTIZIA EVENTO */}
                {/* ARTICOLI RECENTI */}
                <section className="mt-5">
                    <div className="d-flex justify-content-between align-items-center">
                        <h1 className="pb-2">Notizie recenti</h1>
                        <Link to={`/articoli`} className="pixel-link">Leggi tutti gli articoli ►</Link>
                    </div>

                    <div className="row row-cols-1 row-cols-sm-1 row-cols-lg-5 g-4">
                        {latestArticles.slice(0, 5).map((article) => (
                            <div key={article.id} className="col">
                                <ArticleCard article={article} />
                            </div>
                        ))}
                    </div>

                </section>
                {/* FINE ARTICOLI RECENTI */}
                {/* CATEGORIE */}
                <section className="pt-5">
                    <div className="d-flex justify-content-between align-items-center">
                        <h2 className="pb-2">Esplora per categorie</h2>
                        <Link to={`/categorie`} className="pixel-link">Esplora tutte ►</Link>
                    </div>
                    <div className="row row row-cols-1 row-cols-sm-2 row-cols-lg-4 g-2">
                        {categories.slice(0, 4).map((category) =>
                            <div key={category.slug} className="col">
                                <CategoryCard category={category} />
                            </div>)}
                    </div>
                </section>
                {/* FINE CATEGORIE */}
                {/* AUTORI */}
                <section className="pt-5">
                    <div className="d-flex justify-content-between align-items-center">
                        <h2 className="pb-2">Scopri le nostre firme</h2>
                        <Link to={`/autori`} className="pixel-link">Vedi tutti gli autori ►</Link>
                    </div>
                    <div className="row row row-cols-1 row-cols-sm-2 row-cols-lg-4 g-2">
                        {authors.map((author) =>
                            <div key={author.id} className="col">
                                <AuthorCard author={author} />
                            </div>)}

                    </div>
                </section>
                {/* FINE AUTORI */}
            </div>
        </>
    )
}