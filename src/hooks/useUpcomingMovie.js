import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addUpcomingMovie } from "../utils/movieSlice";
import { UPCOMING_MOVIE_URL, API_OPTIONS } from "../utils/constants";

const useUpcomingMovie = () => {
  const dispatch = useDispatch();
  const getUpcomingMovie = async () => {
    const data = await fetch(UPCOMING_MOVIE_URL, API_OPTIONS);

    const json = await data.json();

    dispatch(addUpcomingMovie(json.results));
  };

  useEffect(() => {
    getUpcomingMovie();
  }, []);
};

export default useUpcomingMovie;
