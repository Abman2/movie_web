import { useEffect, useState } from "react";
import {options} from "./FetchOptions"

const useFetchMovie = (id) => {
  const [loading, setLoading] = useState(false);
  const [movie, setMovie] = useState([]);
  useEffect(() => {
    setLoading(true);
    fetchMovies();
  }, []);

  const fetchMovies = async () => {
    const url = `https://api.themoviedb.org/3/movie/${id}?append_to_response=videos,images,genres`;
    const res = await fetch(url, options);
    const data = await res.json();
    setMovie(data);
    setLoading(false);
    // console.log(data);
  };

  return { movie, loading };
  // console.log(movie)
};

export default useFetchMovie;
