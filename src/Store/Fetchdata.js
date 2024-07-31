/* key : "102a002846ef9bd6c1e5c28d806b478a",
  url :`https://api.themoviedb.org/3/search/movie?api_key=102a002846ef9bd6c1e5c28d806b478a&query=all`, */
import { create } from "zustand";

export const DataStore = create((set, get) => ({
  moviesList: [],
  contador: 0,
  detailsMovies: [],
  creditMovie: [],
  showDetailsMovies: false,
  ShowMovieCredits: false,
  page: 1,
  /********************************************* */
  ShowMoviesDetailsWindow: () => {
    set({ showDetailsMovies: !get().showDetailsMovies });
  },
  /********************************************* */
  ShowCreditPoput: () => {
    set({ ShowMovieCredits: !get().ShowMovieCredits });
  },
  /********************************************* */
  ChangePage: (numberpage) => {
    set({ page: numberpage });
  },
  /********************************************* */
  fetchMovies: async (page) => {
    const getMoviesData = await fetch(
      `https://api.themoviedb.org/3/movie/popular?api_key=102a002846ef9bd6c1e5c28d806b478a&language=en-US&page=${page}`
    );
    const moviesList = await getMoviesData.json();
    set((state) => ({ ...state, moviesList }));
  },
  /********************************************* */
  movieDetails: async (idmovie) => {
    const filter = get().moviesList.results.find(
      (movie) => movie.id === idmovie
    );
    set(() => ({ detailsMovies: filter }));
    get().ShowMoviesDetailsWindow();
  },
  /********************************************* */
  searchMovies: async (titlemovie) => {
    //https://api.themoviedb.org/3/search/movie?api_key={api_key}&query=Jack+Reacher
    const getmovie = await fetch(
      `https://api.themoviedb.org/3/search/movie?api_key=102a002846ef9bd6c1e5c28d806b478a&query=${titlemovie}`
    );
    const results = await getmovie.json();
    set({ moviesList: results });
  },
}));
