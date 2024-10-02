import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Movie from './Movie'

export default function Movies() {

    let [movies , setMovies] = useState([])

    useEffect(()=>{
        getPopulerMovies()
    },[])

    async function getPopulerMovies(){
        let { data }  = await axios.get("https://api.themoviedb.org/3/movie/popular?api_key=eaa86ae5ef2157748f0b8021bb6ec5df&language=en")
        setMovies(data.results);
        
    }
  return (
    <div>
      <div className='row'>
        {movies.map((movie)=>{
            return <Movie movie = {movie}/>
        })}
      </div>
    </div>
  )
}
