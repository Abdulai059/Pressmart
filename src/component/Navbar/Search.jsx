import { useState } from "react";
import { Search } from "lucide-react";

function SearchButton() {
  const [query, setQuery] = useState("");
  const [isHovered, setIsHovered] = useState(false);

  //   function handle

  return (
    <div className="search-wrapper">
      <input
        type="text"
        placeholder="Search for a product"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        
        className="search-input"
      />
      <button
        // onClick={handleSearch}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className={`search-button ${isHovered ? "hovered" : ""}`}
        aria-label="Search"
      >
        <Search size={18} />
      </button>
    </div>
  );
}

export default SearchButton;
