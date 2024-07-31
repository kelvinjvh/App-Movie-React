import { StoreMovies } from "../Store/Store";
import "../Styles/ListMoviesFavorite.css";

const ListaMoviesFavorite = () => {
  const { bd,favoriteMoviesListState,showListMoviesFavorite,deleteMoviesFavorite } = StoreMovies();
  return (
    <div className={`container-movies-favoite ${favoriteMoviesListState ? "block" : "hidden"}`}>
      <h2 className="mb-5 mt-3">List Movies Favorite</h2>
      <img src="../ICONS/icon-close.png" style={{height:"30px",cursor:"pointer"}} className="position-absolute top-0 start-0" onClick={showListMoviesFavorite}/>
      <div className="listmoviesfavorite">
        {bd.map((movie) => (
          <div key={movie.id} className="card-movie">
            <img
              className="card-img"
              src={`https://image.tmdb.org/t/p/w500${movie.poster}`}
              alt=""
            />
            <h3>{movie.title}</h3>
            <img src="../ICONS/ICON-DELETE.png" style={{cursor:"pointer"}} onClick={()=>deleteMoviesFavorite(movie)}/>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ListaMoviesFavorite;
