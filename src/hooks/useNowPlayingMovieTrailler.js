import { useEffect } from "react";
import { addNowPlayingTrailer } from "../utils/movieSlice";
import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../utils/constants";

const useNowPlayingMovieTrailler = (moveId) => {
  const dispatch = useDispatch();

  //Calling useeffect
  useEffect(() => {
    getNowPlayingMovieVideo();
  }, []);

  //Calling movie database to fetch the videos
  const getNowPlayingMovieVideo = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/" + moveId + "/videos",
      API_OPTIONS
    );
    const json = await data.json();
    dispatch(addNowPlayingTrailer(json));
  };
};

export default useNowPlayingMovieTrailler;
