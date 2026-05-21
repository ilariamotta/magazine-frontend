import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <div className="hero-wrapper mt-5">
      <div className="hero-box">
        <img src="/hero.png" alt="Hero" className="img-fluid hero-pixel" />
        <div className="hero-buttons d-none d-lg-flex">
          <Link to="/chi-siamo" className="hero-btn">Su di noi</Link>
          <Link to="/autori" className="hero-btn">Autori</Link>
          <Link to="/categorie" className="hero-btn">Categorie</Link>
        </div>
      </div>
    </div>
  );
}