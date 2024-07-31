import { useRef } from "react";
import "../Styles/Header.css";
import { StoreMovies } from "../Store/Store";
import { DataStore } from "../Store/Fetchdata";

const Header = () => {
  const { bd, showListMoviesFavorite } = StoreMovies();
  const { searchMovies, fetchMovies } = DataStore();
  let txtinput = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (txtinput.current.value === "") {
      return alert("Error Campos Vacios!!");
    }
    searchMovies(txtinput.current.value);
    txtinput.current.value = "";
  };

  return (
    <header className="header">
      <img
        style={{ cursor: "pointer" }}
        type="submit"
        id="lblinput"
        onClick={() => fetchMovies(1)}
        className="header-logo"
        src="https://image.tmdb.org/t/p/original/wwemzKWzjKYJFfCeiB57q3r4Bcm.svg"
        alt=""
      />
      <form onSubmit={(e) => handleSubmit(e)}>
        <input type="text" ref={txtinput} placeholder="Search" />
        <button className="btn-search">Search</button>
      </form>
      <nav className="navbar">
        <ul className="navbar-list">
          <li
            style={{ cursor: "pointer" }}
            className="navbar-item"
            onClick={() => fetchMovies(1)}
          >
            Movies
          </li>
          <li className="navbar-item">About</li>
          <li
            className="navbar-item btn-favorites"
            onClick={showListMoviesFavorite}
          >
            <span className="total-movies ">{bd.length}</span>
            <span className="fs-5">❤</span>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
