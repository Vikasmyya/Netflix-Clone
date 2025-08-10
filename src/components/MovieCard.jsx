import { POSTER_URL } from "../utils/constants";

const MovieCard = ({ poster }) => {
  return (
    <div className="w-[150px]">
      <img className="w-full h-auto rounded-lg" src={POSTER_URL + poster} />
    </div>
  );
};

export default MovieCard;
