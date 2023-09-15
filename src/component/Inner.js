import React, { useEffect, useState } from "react"

export default function Inner() {
    const [movieList, setMovieList] = useState([]);
    const logMovies2 = () => {
       

        fetch("https://api.themoviedb.org/3/movie/top_rated?api_key=91ae0fa37680b226d14ee02bf53a7ff2")
          .then((response) => response.json())
          .then((json) => setMovieList(json.results))
          .catch((err) => alert("unable to fetch data"));
      };
      useEffect(() => logMovies2(), []);
   

      const logMovies4 =(mov) =>{
       if(mov){
        fetch(`https://api.themoviedb.org/3/movie/${mov}?api_key=91ae0fa37680b226d14ee02bf53a7ff2`)
        .then((respons) => respons.json())
        .then((json) => console.log(json))
        .catch((err) => alert("unable to fetch data"));}
    
      }
      
     movieList.map((movi,index) => {  
        logMovies4(movi.id)})
    
   
  return (
   <>
   {
   

    }
   </>
  )
}
