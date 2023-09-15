
import React, { useEffect, useState } from "react";
import logo from "../images/Logo.png";
import menu from "../images/Menu.png";
import background from "../images/Poster.png";
import searchIcon from "../images/Searchicon.png";
import tomato from "../images/tomato.png";
import imdb from "../images/imdb.png";

function Header({backgroud,title,overview,vote_average}) {
  const [movieList, setMovieList] = useState([]);
  const logMovies = () => {
    fetch("https://api.themoviedb.org/3/movie/top_rated?api_key=91ae0fa37680b226d14ee02bf53a7ff2")
      .then((response) => response.json())
      .then((json) => setMovieList(json.results))
      .catch((err) => alert("unable to fetch data"));
  };
  useEffect(() => logMovies(), []);
 background = movieList.map((arr,index) => ([arr.backdrop_path]))
  title =movieList.map((arr,index) => ([arr.title]))
 overview = movieList.map((arr,index) => ([arr.overview]))
 vote_average = movieList.map((arr,index) => ([arr.vote_average]))



  
  
  return (
    <header
      className="container mx-auto bg-black  h-screen " 
      style={{
        backgroundImage: `url(https://image.tmdb.org/t/p/w500${background[0]})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}>
      <nav className="sm:max-w-6xl  mx-auto sticky top-0 z-50 flex p-2 justify-between">
        <h1 className="">
          <img src={logo} alt="logo" className="sm:w-36 w-24  sm:h-10 h-7 inline mr-2" />
        </h1>
        <div className="items-center flex relative">
          <input
            type="search"
            placeholder="What do you want to watch"
            className=" p-1 text-white  px-3 bg-inherit sm:w-96 w-40 rounded-md  border border-white "
          />
          <img src={searchIcon} alt="search icon" className="absolute right-2.5" />
        </div>
        <div className="flex items-center justify-end ">
          <a className="text-white hidden sm:inline">Sign In</a>
          <img src={menu} alt="menu" className="h-7 w-7 ms-5 " />
        </div>
      </nav>
      <section className="flex sm:max-w-6xl max-w-md  mx-auto item-center justify-between mt-40 text-white ">
        <article className="sm:w-1/2 mx-auto ps-10 ">
          <h1 className="text-6xl  font-extrabold text-left">{title[0]}</h1>
          <div className="flex  items-center px-2 space-x-9 mt-2 ">
                  <div>
                    <img src={imdb} className="inline mr-2 font-semibold" />
                    <span className="text-sm">{vote_average[0]*10}.0/100</span>
                  </div>
                  <div className="">
                    <img src={tomato} className="inline mr-2 font-semibold " />
                    <span className="text-sm">{vote_average[0] * 10}%</span>
                  </div>
                </div>
         
        
          <p className="mt-3 text-left sm:pe- pe-8">{overview[0]}
          </p>
         
        </article>
        <article className="sm:w-1/2">

        </article>
      </section>
    </header>
  );
}
export default Header;
