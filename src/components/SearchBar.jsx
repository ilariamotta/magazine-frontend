import { useNavigate } from "react-router-dom";

export default function SearchBar({ className = "" }) {
  const navigate = useNavigate();

  function handleSearch(e) {
    e.preventDefault();

    const searchTerm = e.target.search.value.trim();

    if (!searchTerm) {
      return;
    }

    navigate(`/cerca?q=${searchTerm}`);
  }

  return (
    <form className={`search-bar d-flex ${className}`} onSubmit={handleSearch}>
      <input type="search" name="search" className="form-control search-input" placeholder="Cerca tra i nostri articoli.."/>
      <button type="submit" className="pixel-btn ms-2">Cerca</button>
    </form>
  );
}