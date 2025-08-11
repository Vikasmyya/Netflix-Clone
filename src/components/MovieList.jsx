import MovieCard from "./MovieCard";

const MovieList = ({ title, movies }) => {
  return (
    movies && (
      <div className="p-4 mx-10">
        <h1 className="text-xl font-bold mb-2 text-white">{title}</h1>

        <div className="overflow-x-auto whitespace-nowrap scroll">
          <div className="flex gap-4">
            {movies.map((movie) => (
              <div key={movie.id} className="flex-shrink-0">
                <MovieCard poster={movie.poster_path} />
              </div>
            ))}
          </div>
        </div>
      </div>
    )
  );
};

export default MovieList;
