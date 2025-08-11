import Header from "./Header";
import useNowPlayingMovie from "../hooks/useNowPlayingMovie";
import MainContainer from "./MainConatiner";
import SecondaryContainer from "./SecondaryConatiner";
import usePopularMovie from "../hooks/usePopularMovie";
import useTopRatedMovie from "../hooks/useTopRatedMovie";
import useUpcomingMovie from "../hooks/useUpcomingMovie";
import { useSelector } from "react-redux";
import Search from "./Search";

const Browse = () => {
  const searchState = useSelector((store) => store?.search?.toggleSearch);

  useNowPlayingMovie();
  usePopularMovie();
  useTopRatedMovie();
  useUpcomingMovie();

  return (
    <div className="relative">
      <Header />
      {searchState ? (
        <div>
          <Search />
        </div>
      ) : (
        <>
          <MainContainer />
          <div className="relative">
            <SecondaryContainer />
          </div>
        </>
      )}
    </div>
  );
};

export default Browse;
