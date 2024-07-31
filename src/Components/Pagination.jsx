import React from 'react'
import "../Styles/Pagination.css"
import { DataStore } from '../Store/Fetchdata'
import { useEffect } from 'react';
const Pagination = () => {
  const {fetchMovies,page,ChangePage}=DataStore();
  const numberPages = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]
  useEffect(()=>{
    fetchMovies(page);
  },[page])

  return (
    <div className='pagination'>
     {numberPages.map(pages=>(
      <span key={pages} onClick={()=>ChangePage(pages)}>{pages}</span>
     ))}
    </div>
  )
}

export default Pagination