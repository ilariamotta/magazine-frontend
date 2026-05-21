import { Link } from "react-router-dom";
import SearchBar from "./SearchBar";

export default function Header() {
  const navLinks = [
    {
      label: "Home",
      path: "/",
    },
    {
      label: "Videogiochi",
      path: "/categorie/videogiochi",
    },
    {
      label: "Anime",
      path: "/categorie/anime",
    },
    {
      label: "Manga",
      path: "/categorie/manga",
    },
    {
      label: "Recensioni",
      path: "/categorie/recensioni",
    },
    {
      label: "Autori",
      path: "/autori",
    },
  ];

  return (
    <header className="site-header text-uppercase">
      <nav className="navbar navbar-expand-lg">
        <div className="container d-flex align-items-center justify-content-between">
          {/* LOGO */}
          <Link to="/" className="ms-0"><img src="/logo.png" alt="Pixel Pop" className="site-logo me-3" /></Link>
          {/* SEARCH MOBILE/TABLET */}
          <SearchBar className="d-lg-none flex-grow-1 mx-2" />
          {/* HAMBURGER */}
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          {/* MENU DESKTOP / COLLAPSE */}
          <div className="collapse navbar-collapse" id="navbarNav">
            <div className="navbar-nav d-flex flex-column flex-lg-row align-items-lg-center gap-3 ms-lg-auto">
              <ul className="navbar-nav">
                {navLinks.map((link) => (
                  <li key={link.path} className="nav-item">
                    <Link to={link.path} className="nav-link">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
              {/* SEARCH DESKTOP */}
              <SearchBar className="d-none d-lg-flex ms-lg-3" />
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}