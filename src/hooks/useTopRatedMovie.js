import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addTopRatedMovie } from "../utils/movieSlice";
import { TOP_RATED_MOVIE_URL, API_OPTIONS } from "../utils/constants";

const useTopRatedMovie = () => {
  const dispatch = useDispatch();
  const getTopRatedMovie = async () => {
    const data = await fetch(TOP_RATED_MOVIE_URL, API_OPTIONS);

    const json = await data.json();

    dispatch(addTopRatedMovie(json.results));
  };

  useEffect(() => {
    getTopRatedMovie();
  }, []);
};

export default useTopRatedMovie;
