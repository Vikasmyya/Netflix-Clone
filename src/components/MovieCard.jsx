import { POSTER_URL } from "../utils/constants";

const MovieCard = ({ poster }) => {
  if (poster == null) return null;
  return (
    <div className="w-[150px] m-2">
      <img className="w-full h-auto rounded-lg" src={POSTER_URL + poster} />
    </div>
  );
};

export default MovieCard;
