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
    {
      label: "Su di noi",
      path: "/chi-siamo",
    },
  ];

  return (
    <header className="site-header text-uppercase">
      <nav className="navbar navbar-expand-xl">
        <div className="container d-flex align-items-center">

          {/* LOGO */}
          <Link to="/" className="navbar-brand me-2">
            <img src="/logo.png" alt="Pixel Pop" className="site-logo" />
          </Link>

          {/* SEARCH MOBILE/TABLET */}
          <SearchBar className="d-xl-none flex-grow-1 mx-2" />

          {/* HAMBURGER */}
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Apri menu"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          {/* MENU */}
          <div className="collapse navbar-collapse" id="navbarNav">
            <div className="d-flex flex-column flex-xl-row align-items-xl-center w-100 gap-3 ms-xl-4">
              <ul className="navbar-nav d-flex flex-column flex-xl-row gap-xl-2">
                {navLinks.map((link) => (
                  <li key={link.path} className="nav-item">
                    <Link to={link.path} className="nav-link">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>

              {/* SEARCH DESKTOP */}
              <SearchBar className="d-none d-xl-flex ms-xl-auto" />
            </div>
          </div>

        </div>
      </nav>
    </header>
  );
}