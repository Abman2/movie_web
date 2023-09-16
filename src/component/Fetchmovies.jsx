import {useEffect, useState} from 'react'
import {options} from "./FetchOptions";

const Fetchmovies =()=> {

    const [loading,setLoading]= useState(false)
    const [movies, setMovies] = useState([])

    useEffect(()=>{
        setLoading(true)
        getMovies()
    },[])


    const getMovies = async () =>{
        const url = 'https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1';
        console.log(url)
        const res = await fetch(`${url}`, options)
        console.log(res)
        const data = await res.json()
        setMovies(data.results)
        setLoading(false)
        // console.log(data)
        
    }
    
  return (
   {loading,movies}
  )
}

export default Fetchmovies