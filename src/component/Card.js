import React, { useEffect, useState } from "react";
import {useNavigate} from "react-router-dom"
import tomato from "../images/tomato.png";
import imdb from "../images/imdb.png";
import InnerPageContent from "./InnerPageContent";

function Card() {
  const [movieList, setMovieList] = useState([]);
  const logMovies = () => {
    fetch("https://api.themoviedb.org/3/movie/top_rated?api_key=91ae0fa37680b226d14ee02bf53a7ff2")
      .then((response) => response.json())
      .then((json) => setMovieList(json.results))
      .catch((err) => alert("unable to fetch data"));
  };
  useEffect(() => logMovies(), []);

const navigate = useNavigate()
  return (
    <section className="sm:max-w-6xl mx-auto mt-10 ">
      <h1 className="text-4xl font-bold text-left mb-6">Top Rated Movies</h1>
      <div className=" grid grid-cols-2 md:grid-cols-4 text-left gap-x-10 ">
      {movieList.map((movie, index) => ( console.log("hello mr omoleye",movie),
        index < 10 ? (
          <div data-testid="movie-card" className= "flex flex-col rounded-md" >
            <div className="h-3/5">
              <img
              onClick={()=>navigate("/:id/route")}
                className="w-full h-full rounded-md"
                loading="lazy-loading"
                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                data-testid="movie-poster"
              />
              <div className="space-y-3 rounded-sm bg-slate-50  h-1/2">
                <div className="flex space-x-3 font-semibold">
                  <p data-testid="movie-release-date"> {movie.release_date}</p>{" "}
                  <p>{movie.original_language}</p>
                </div>
                <h3 data-testid="movie-title"  className="text-2xl cursor-pointer font-bold">
                  {movie.original_title}
                </h3>
               
                <div className="flex justify-between items-center px-2 ">
                  <div>
                    <img src={imdb} className="inline mr-2 font-semibold" />
                    <span className="text-sm">{movie.vote_average*10}.0/100</span>
                  </div>
                  <div className="">
                    <img src={tomato} className="inline mr-2 font-semibold " />
                    <span className="text-sm">{movie.vote_average * 10}%</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className="hidden"></div>
        )
        
     ) )}
      </div>
    </section>
  );
}

export default Card;
