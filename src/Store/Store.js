import { create } from "zustand";
import Swal from "sweetalert2";

export const StoreMovies = create((set, get) => ({
  favoriteMoviesListState: false,
  bd:
    localStorage.getItem("movies") === null
      ? []
      : JSON.parse(localStorage.getItem("movies")),
  SaveMovie: () => {
    localStorage.setItem("movies", JSON.stringify(get().bd));
  },
  
  /******************************************************/
  addMovietoFavoritesList: (Movie) => {
    const searchMovie = get().bd.find((movie) => movie.id === Movie.id);
    if (searchMovie) {
      Swal.fire({
        icon: "error",
        title: "error movie is already added!!",
      });
      return;
    }
    const newmovie = {
      id: Movie.id,
      title: Movie.title,
      poster: Movie.poster_path,
    };
    set({ bd: [...get().bd, newmovie] });
    get().SaveMovie();

    Swal.fire({
      position: "top-start",
      icon: "success",
      title: "added movie to favorites list!!",
      showConfirmButton: false,
      timer: 1000,
    });
  },
  /***************************************************** */
  showListMoviesFavorite: () => {
    set({ favoriteMoviesListState: !get().favoriteMoviesListState });
  },
  deleteMoviesFavorite: (Movie) => {
    set({ bd: get().bd.filter((movie) => movie.id !== Number(Movie.id)) });
    get().SaveMovie();
  },
}));
