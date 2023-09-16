import React from "react";
import { useParams } from "react-router-dom";
import Inner from "./Inner";
import InnerPageNav from "./InnerPageNav";
import smallImage from "../images/Rectangle 37.png";
import Loading from "./Loading";

function InnerPageContent() {
  // console.log(useParams())
  const { id } = useParams();

  // console.log(id)
  const { loading, movie } = Inner(id);
 
  const selectedImage = movie.videos;
  const video = selectedImage?.results[0];
 
  // genres
  // const genres = movie.genres;
  //   const abman = genres.map((genre,index) => {
  //     <button key={genre[index]} className="text-red-700 text-xs border border-red-700 rounded-3xl px-2 bg-red-50 mr-3">
  //     {genre.name}
  //   </button>
  //   })
  return (
    <>
     {loading ? <Loading /> : null}
      {!loading ? (
    
    <div className="flex ">
      
      <div className="w-fit">
        <InnerPageNav />
      </div>
      <div className="sm:px-12 max-w-sm sm:max-w-none sm:pt-2 flex flex-col mx-auto  ">
        <div className="- w-full mx-auto rounded-md">
          <iframe
            src={`https://www.youtube.com/embed/${video?.key}`}
            className="rounded-md"
            frameborder="0"
            marginheight="0px"
            marginwidth="0px"
            height="400px"
            width="100%"
            title={video}
            allowfullscreen></iframe>
        </div>
        {/* word part */}
        <div className="flex flex-col sm:flex-row sm:max-w-none max-w-sm mx-auto">
          <div className="flex flex-col sm:w-3/5 ">
            <div className="inline-flex justify-between items-center flex-col sm:flex-row ">
              <p className="text-lg sm:text-2xl font-semibold space-x-2 p-2">
                <span data-testid="movie-title">{movie.title}</span> .{" "}
                <span data-testid="movie-release-date" className="text-base">
                  {movie.release_date}
                </span>{" "}
                . <span className="text-base">PG-13</span> .
                <span data-testid="movie-runtime" className="text-base">
                  {" "}
                  {movie.runtime}
                  <span className="font-normal text-sm">m</span>
                </span>
              </p>
              <div className=" "></div>
            </div>
            <div className="text-left space-y-6 p-2">
              <p className="text-justify text-sm" data-testid="movie-overview">
                {movie.overview}
              </p>
              <p className="">
                Directors:<span className="text-red-500">Director</span>
              </p>
              <p className="">
                Writers:<span className="text-red-500">hello world</span>
              </p>
              <p className="">
                Stars:<span className="text-red-500">hello world</span>
              </p>
            </div>
            <div className="inline-flex rounded-sm ps-2 text-sm font-semibold sm:mt-12 mt-2">
              <p className="bg-red-600 text-white sm:px-10 px-4 py-1 rounded-lg">
                Top rated Movies <span>#69</span>
              </p>
              <select className="border border-red-600 sm:w-80 w-44 text-right px-2 outline-none -mx-2 font-normal">
                <option>hell</option>
                <option>hell</option>
                <option>hell</option>
              </select>
            </div>
          </div>
          <div className="flex flex-col sm:w-2/5">
            <div className="px-8 space-y-4 ">
              <p className="text-right pt-2 text-md flex items-center justify-end">
                <span className="text-yellow-500 text-2xl mr-2">&#9733;</span>
                {movie.vote_average}
              </p>
              <button className="w-full bg-red-700 text-white font-semibold rounded-md h-9">
                See show times
              </button>
              <button className="w-full bg-red-50 border-red-700 border rounded-md h-9 font-semibold">
                More watch options
              </button>
            </div>
            <div className="m-2 pt-3 h-56 px-7">
              <img src={smallImage} alt="last" className="h-full" />
            </div>
          </div>
        </div>
      </div>
    </div>
    ):null}</>
  );
}

export default InnerPageContent;
