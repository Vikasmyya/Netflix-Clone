const TitleContainer = (props) => {
  const { title, overview } = props;
  return (
    <div className="absolute w-screen aspect-video text-white">
      <div className="w-4/12 mx-16 my-[25%] p-2">
        <h1 className="my-4 font-bold text-2xl">{title}</h1>
        <p className="text-sm text-white">{overview}</p>
        <button className="bg-white px-4 py-2 my-2 rounded-sm text-black cursor-pointer hover:opacity-70">
          Play
        </button>
        <button className="bg-gray-500 px-4 py-2 my-2 mx-2 rounded-sm text-white cursor-pointer">
          More Info
        </button>
      </div>
    </div>
  );
};

export default TitleContainer;
