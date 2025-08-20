import SearchIcon from "@mui/icons-material/Search";
import FavoriteIcon from "@mui/icons-material/Favorite";
import PersonIcon from "@mui/icons-material/Person";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import Topbar from "./Topbar";
function Navbar() {
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

        <div className="nav-bar-icons">
          <SearchIcon fontSize="large" />
          <FavoriteIcon fontSize="large" />
          <PersonIcon fontSize="large" />
          <ShoppingCartIcon fontSize="large" />
        </div>
      </header>
    </>
  );
}

export default Navbar;
