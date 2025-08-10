import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const SecondaryContainer = () => {
  const nowPlayingMovies = useSelector(
    (store) => store?.movie?.nowPlayingMovie
  );

  const popularMovie = useSelector((store) => store?.movie?.popularMovie);

  const topRatedMovie = useSelector((store) => store?.movie?.topRatedMovie);

  const upcomingMovie = useSelector((store) => store?.movie?.upcomingMovie);

  if (!nowPlayingMovies) return null;

  return (
    nowPlayingMovies && (
      <div className="">
        <div className="bg-black relative -mt-36 z-10">
          <MovieList title="Now Playing Movies" movies={nowPlayingMovies} />
          <MovieList title="Popular on Netflix" movies={popularMovie} />
          <MovieList title="Top Rated" movies={topRatedMovie} />
          <MovieList title="Upcoming Movie on Netflix" movies={upcomingMovie} />
        </div>
      </div>
    )
  );
};

export default SecondaryContainer;
