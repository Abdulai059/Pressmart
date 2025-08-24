import SearchIcon from "@mui/icons-material/Search";
import FavoriteIcon from "@mui/icons-material/Favorite";
import PersonIcon from "@mui/icons-material/Person";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import Topbar from "./Topbar";
import { useState } from "react";

export default function Navbar() {
 
  return (
    <>
      <Topbar />
      <header className="nav-bar ">
        <h2> Pressmart.</h2>

        <nav>
          <a href="/">Home</a>
          <a href="/">Shop</a>
          <a href="/">pages</a>
          <a href="/">Blog</a>
          <a href="/">Element</a>
          <a href="/">Buy</a>
        </nav>
        <Search />
        <div className="nav-bar-icons">
          <FavoriteIcon fontSize="large" />
          <PersonIcon fontSize="large" />
          <ShoppingCartIcon fontSize="large" />
        </div>
      </header>
    </>
  );
}

function Search({ query, setQuery }) {
  const [query, setQuery] = useState("");
  return (
    <div className="search-cotainer">
      <input
        className="search"
        type="text"
        placeholder="search items"
        value={query}
        onClick={(e) => setQuery(e.target.value)}
      />
      <SearchIcon className="search-btn" sx={{ fontSize: 25 }} />
    </div>
  );
}
