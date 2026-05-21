import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import Footer from "./components/Footer";
import SearchBar from "./components/SearchBar";

import HomePage from "./pages/HomePage";
import ArticlesPage from "./pages/ArticlesPage";
import ArticleDetailPage from "./pages/ArticleDetailPage";
import CategoriesPage from "./pages/CategoriesPage";
import CategoryDetailPage from "./pages/CategoryDetailPage";
import AuthorsPage from "./pages/AuthorsPage";
import AuthorDetailPage from "./pages/AuthorDetailPage";
import NotFoundPage from "./pages/NotFoundPage";
import SearchPage from "./pages/SearchPage";
import AboutUs from "./pages/AboutUs";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/articoli" element={<ArticlesPage />} />
        <Route path="/articoli/:slug" element={<ArticleDetailPage />} />
        <Route path="/categorie" element={<CategoriesPage />} />
        <Route path="/categorie/:slug" element={<CategoryDetailPage />} />
        <Route path="/autori" element={<AuthorsPage />} />
        <Route path="/autori/:slug" element={<AuthorDetailPage />} />
        <Route path="*" element={<NotFoundPage />} />
        <Route path="/cerca" element={<SearchPage />} />
        <Route path="/chi-siamo" element={<AboutUs />}/>
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;