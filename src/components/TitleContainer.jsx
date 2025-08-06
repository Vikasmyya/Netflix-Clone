const TitleContainer = (props) => {
  const { title, overview } = props;
  return (
    <div className="w-5/12 mx-12 my-12 p-2">
      <h1 className="my-4 font-bold text-2xl">{title}</h1>
      <p className="text-sm">{overview}</p>
      <button className="bg-gray-500 px-4 py-2 my-2 rounded-sm text-white cursor-pointer">
        Play
      </button>
      <button className="bg-gray-500 px-4 py-2 my-2 mx-2 rounded-sm text-white cursor-pointer">
        More Info
      </button>
    </div>
  );
};

export default TitleContainer;
