import axios from "axios";
import { useEffect, useState } from "react";
import ArticleCard from "../components/ArticleCard";
import CategoryCard from "../components/CategoryCard";
import AuthorCard from "../components/AuthorCard";


export default function HomePage() {
    
    const API_URL = import.meta.env.VITE_API_URL;
    const [articles, setArticles] = useState([]);
    const [categories, setCategories] = useState([]);
    const [authors, setAuthors] = useState([]);

  useEffect(() => {axios.get(`${API_URL}/api/articles`).then((response) => {setArticles(response.data.data);}).catch((error) => {console.error(error);});}, [API_URL]);
  useEffect(()=> {axios.get(`${API_URL}/api/categories`).then((response)=>{setCategories(response.data.data);}).catch((error)=>{console.error(error);});}, [API_URL]);
  useEffect(() =>{axios.get(`${API_URL}/api/authors`).then((response)=> {setAuthors(response.data.data);}).catch((error)=>{console.error(error);});}, [API_URL]);

return (
        <>
        <div className="container">
            {/* HERO */}
            {/* NOTIZIA EVENTO */}
            <section>
                <div className="row">
                    <div className="col-12">
                        NOTIZIA EVENTO
                    </div>
                </div>
            </section>
                {/* FINE NOTIZIA EVENTO */}
            {/* ARTICOLI RECENTI */}
            <section>
                <div className="d-flex justify-content-between align-items-center">
                <h1 className="pb-2">Notizie recenti</h1>
                <a href="">Vedi tutti gli articoli ►</a>
                </div>
 
             <div className="row row-cols-1 row-cols-sm-1 row-cols-lg-5 g-4">
                {articles.slice(0, 5).map((article) => (
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
                <a className="pixel-link" href="">Vedi tutti gli articoli ►</a>
                </div>
                <div className="row row row-cols-1 row-cols-sm-2 row-cols-lg-4 g-2">
                {categories.slice(0,4).map((category)=>
                <div key={category.key}className="col">
                    <CategoryCard category={category}/>
                </div>)}
                </div>
            </section>
            {/* FINE CATEGORIE */}
            {/* AUTORI */}
            <section className="pt-5">
                     <div className="d-flex justify-content-between align-items-center">
                <h2 className="pb-2">Scopri le nostre firme</h2>
                <a href="">Vedi tutti gli autori ►</a>
                </div>
                <div className="row row row-cols-1 row-cols-sm-2 row-cols-lg-4 g-2">
                {authors.map((author)=>
                <div key={author.id} className="col">
                    <AuthorCard author={author}/>   
                </div>)}
                
                </div>
            </section>
            {/* FINE AUTORI */}
          </div>
        </>
    )
}