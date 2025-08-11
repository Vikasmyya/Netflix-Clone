import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const GptMovieSuggestions = () => {
  const tmdbMovies = useSelector((store) => store?.gptMovie?.tmdbMovie);

  return (
    <div className="overflow-x-auto whitespace-nowrap scroll">
      {tmdbMovies.map((movie, index) => {
        return (
          <MovieList key={index} title={null} movies={tmdbMovies[index]} />
        );
      })}
    </div>
  );
};

export default GptMovieSuggestions;
