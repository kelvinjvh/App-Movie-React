import { useEffect } from "react";
import { DataStore } from "../Store/Fetchdata";
import "../Styles/ListCardsMovies.css";
import { StoreMovies } from "../Store/Store";

const ListCardsMovies = () => {
  const { moviesList, movieDetails, fetchMovies } = DataStore();
  const { addMovietoFavoritesList,bd } = StoreMovies();

  useEffect(() => {
    fetchMovies(1);
  }, []);

  useEffect(() => {
   /*  console.log(bd)
    for(let index of moviesList.results){
      for(let values of bd){
        if(index.id === values.id){
          return console.log("encontrado")
        }
      }
    } */
  }, [bd])

  return (
    <div className="container-movie">
      {moviesList.results
        ? moviesList.results.map((movie) => (
            <div className="card" key={movie.id}>
              <img
                 onClick={() => movieDetails(movie.id)} 
                className="card-img"
                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                alt=""
              />
              <div className="card-description">
                <p className="card-title">{movie.title}</p>
                <p className="card-icon" onClick={() => addMovietoFavoritesList(movie)}>
                  🤍
                </p>
              </div>
            </div>
          ))
        : "ERROR DATOS NO ENCONTRADOS!!"}
    </div>
  );
};

export default ListCardsMovies;
