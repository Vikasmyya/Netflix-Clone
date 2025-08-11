import TitleContainer from "./TitleContainer";
import VedioContainer from "./VedioConatiner";
import { useSelector } from "react-redux";

const MainContainer = () => {
  const mainMovie = useSelector((store) => store?.movie?.nowPlayingMovie?.[3]);

  if (!mainMovie) return null;

  const { original_title, overview, id } = mainMovie;

  return (
    <div className="relative w-screen h-[56.25vw] overflow-hidden">
      <VedioContainer moveId={id} />

      {/* Overlay - allow clicks to pass through */}
      <div className="absolute top-0 left-0 w-full h-[calc(100%-var(--header-height))] bg-black/50 z-10 pointer-events-none"></div>

      <div className="absolute top-0 left-0 w-full h-[calc(100%-var(--header-height))] z-20">
        <TitleContainer title={original_title} overview={overview} />
      </div>
    </div>
  );
};

export default MainContainer;
