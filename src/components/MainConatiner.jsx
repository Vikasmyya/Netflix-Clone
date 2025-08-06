import TitleContainer from "./TitleContainer";
import VedioContainer from "./VedioConatiner";
import { API_OPTIONS } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { addNowPlayingTrailer } from "../utils/movieSlice";

const MainContainer = () => {
  //Selecting movie and trailer from store
  const movie = useSelector((store) => store?.movie?.nowPlayingMovie);
  const vedio = useSelector((store) => store?.movie?.nowPlayingTrailer);

  //Getting first movie and the offial trailer from array
  const mainMovie = movie[0];
  const trailer = vedio?.results?.filter((x) => x.name === "Official Trailer");

  const dispatch = useDispatch();

  //Calling useeffect
  useEffect(() => {
    getNowPlayingMovieVideo();
  }, []);

  //Calling movie database to fetch the videos
  const getNowPlayingMovieVideo = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/" + mainMovie.id + "/videos",
      API_OPTIONS
    );
    const json = await data.json();
    dispatch(addNowPlayingTrailer(json));
  };

  //if movie not in store return null
  if (!movie) return null;

  //destructuing the data
  const { original_title, overview } = mainMovie;
  const { key } = trailer[0];

  return (
    <div>
      <VedioContainer moveId={key} />
      <TitleContainer title={original_title} overview={overview} />
    </div>
  );
};

export default MainContainer;
