import { DataStore } from "../Store/Fetchdata";
import "../Styles/PoputModal.css";

const MovieDetailsWindow = () => {
  const { detailsMovies, showDetailsMovies, ShowMoviesDetailsWindow } = DataStore();

  return (
    <div className={`poput-modal ${showDetailsMovies ? "showpoput" : "hidden"}`}>
      <div className="portada">
        <img
          className="portada-img"
          src={`https://image.tmdb.org/t/p/w500${detailsMovies.poster_path}`} 
          alt=""
        />
      </div>
      <div className="content-description">
        <p className="content-title">{detailsMovies.title}</p>
        <p>Language : {detailsMovies.original_language}</p>
        <p>Description : {detailsMovies.overview}</p>
        <p>Date : {detailsMovies.release_date}</p>
        <div className="buttons">
          <button className="btn-close" onClick={ShowMoviesDetailsWindow}>
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default MovieDetailsWindow;
