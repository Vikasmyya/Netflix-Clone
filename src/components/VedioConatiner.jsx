import useNowPlayingMovieTrailler from "../hooks/useNowPlayingMovieTrailler";
import { useSelector } from "react-redux";

const VedioContainer = ({ moveId }) => {
  useNowPlayingMovieTrailler(moveId);

  const vedio = useSelector((store) => store?.movie?.nowPlayingTrailer);
  const trailers = vedio?.results?.filter((x) => x.name === "Official Trailer");
  const selectedTrailer = trailers?.[0];

  if (!selectedTrailer) return null;

  return (
    <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10 pointer-events-none">
      <div className="w-full h-full scale-[1.25]">
        <iframe
          className="w-full h-full border-0"
          src={
            "https://www.youtube.com/embed/" +
            selectedTrailer.key +
            "?autoplay=1&mute=1&controls=0&modestbranding=1&rel=0&loop=1&showinfo=0playlist" +
            selectedTrailer.key
          }
          title="YouTube video player"
          allow="autoplay; fullscreen"
        ></iframe>
      </div>
    </div>
  );
};

export default VedioContainer;
