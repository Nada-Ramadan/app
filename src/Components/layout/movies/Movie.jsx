import React from 'react'

export default function Movie({movie}) {
  return (
    <>
    <div key = {movie.id} className='col-md-3'>
    <div className='movie'>
     <img src = {"https://image.tmdb.org/t/p/w500" + movie.poster_path} className='w-100' alt=""/>
     <h1>{movie.original_title}</h1>
     <p>{movie.overview.split(" ").slice(0,10).join(" ")}</p>
    </div>
</div>
    </>
  )
}
