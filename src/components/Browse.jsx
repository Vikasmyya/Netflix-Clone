import Header from "./Header";
import useNowPlayingMovie from "../hooks/useNowPlayingMovie";
import MainContainer from "./MainConatiner";
import SecondaryContainer from "./SecondaryConatiner";
import usePopularMovie from "../hooks/usePopularMovie";
import useTopRatedMovie from "../hooks/useTopRatedMovie";
import useUpcomingMovie from "../hooks/useUpcomingMovie";

const Browse = () => {
  useNowPlayingMovie();
  usePopularMovie();
  useTopRatedMovie();
  useUpcomingMovie();

  return (
    <div className="relative">
      <Header />
      <MainContainer />
      <div className="relative">
        <SecondaryContainer />
      </div>
    </div>
  );
};

export default Browse;
