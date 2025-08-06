import { NOWPLAYING_MOVIE_URL, API_OPTIONS } from "../utils/constants";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addNowPlayingMovies } from "../utils/movieSlice";

const useNowPlayingMovie = () => {
  const dispatch = useDispatch();

  //Fetching the movies
  const getNowPlayingMovies = async () => {
    const data = await fetch(NOWPLAYING_MOVIE_URL, API_OPTIONS);
    const json = await data.json(data);
    dispatch(addNowPlayingMovies(json.results));
  };

  //calling the useeffct
  useEffect(() => {
    getNowPlayingMovies();
  }, []);
};

export default useNowPlayingMovie;
