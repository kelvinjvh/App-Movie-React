import React from 'react'
import ListCardsMovies from './MovieCardList'
import Pagination from './Pagination'
import Header from './Header'
import MovieDetailsWindow from './MovieDetailsWindow '
import CreditMovies from './CreditMovies'
import ListaMoviesFavorite from './ListaMoviesFavorite'
const Homepage = () => {
  return (
    <>
    <Header/>
    <ListCardsMovies/>
    <MovieDetailsWindow/>
    <Pagination/>
    <CreditMovies/>
    <ListaMoviesFavorite/>
    </>
  )
}

export default Homepage