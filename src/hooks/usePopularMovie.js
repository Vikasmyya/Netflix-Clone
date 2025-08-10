import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addPopularMovie } from "../utils/movieSlice";
import { POPULAR_MOVIE_URL, API_OPTIONS } from "../utils/constants";

const usePopularMovie = () => {
  const dispatch = useDispatch();
  const getPopularMovie = async () => {
    const data = await fetch(POPULAR_MOVIE_URL, API_OPTIONS);

    const json = await data.json();

    dispatch(addPopularMovie(json.results));
  };

  useEffect(() => {
    getPopularMovie();
  }, []);
};

export default usePopularMovie;
