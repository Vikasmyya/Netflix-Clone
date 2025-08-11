import { API_OPTIONS, BACKGROUND_LOGO } from "../utils/constants";
import { useRef } from "react";
import { addgptmovie, addtmdbMovie } from "../utils/gptMovieSlice";
import { useDispatch, useSelector } from "react-redux";
import GptMovieSuggestions from "./GptMovieSuggestions";

const Search = () => {
  const searchText = useRef();
  const dispatch = useDispatch();

  //OpenAi llm
  //   const handleSearch = async () => {
  // const response = await client.responses.create({
  //   model: "gpt-4o",
  //   instructions:
  //     "You are a Movie Recommendation Assistant. Based on the user's input, recommend exactly 5 movies as a JSON array of strings. No extra text.",
  //   input: searchText.current.value,
  // });

  //Grok llm
  const handleSearch = async () => {
    const query = searchText.current.value.trim();
    if (!query) return;

    console.log(import.meta.env.VITE_GROK_API_KEY);

    try {
      const res = await fetch(
        "https://api.groq.com/openai/v1/chat/completions",
        {
          method: "POST",
          headers: {
            Authorization: `Bearer ${import.meta.env.VITE_GROK_API_KEY}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            model: "llama3-8b-8192",
            messages: [
              {
                role: "system",
                content:
                  "You are a movie recommendation API. Always respond ONLY with a JSON array of exactly 5 movie titles for the given input from the role user and be sprcific about genres and language. No extra text, no explanations.",
              },
              { role: "user", content: query },
            ],
          }),
        }
      );

      const data = await res.json();

      // Extract the text output
      const textOutput = data.choices?.[0]?.message?.content || "";

      // Try parsing as JSON array
      const movies = JSON.parse(textOutput);

      //Adding gpt movie to store
      dispatch(addgptmovie(movies));

      //Map movie to the tmdb
      const movieInDatabase = movies.map((movieName) => {
        return searchMovieInDatabase(movieName);
      });

      //got the result from TMDB
      const tmdbResults = await Promise.all(movieInDatabase);
      dispatch(addtmdbMovie(tmdbResults));
    } catch (err) {}
  };

  const searchMovieInDatabase = async (movie) => {
    const data = await fetch(
      "https://api.themoviedb.org/3/search/movie?query=" +
        movie +
        "&include_adult=false&language=en-US",
      API_OPTIONS
    );

    const json = await data.json();
    return json.results;
  };

  return (
    <div>
      <div className="relative w-full h-screen">
        <img
          src={BACKGROUND_LOGO}
          alt="logo-background"
          className="w-full h-full object-cover"
        />

        <form
          className="absolute inset-0 flex flex-col md:flex-row justify-center items-center gap-2"
          onSubmit={(e) => e.preventDefault()}
        >
          <input
            type="text"
            ref={searchText}
            placeholder="Enter the things"
            className="p-2 border-2 border-black bg-white rounded-md w-64 md:w-96"
          />
          <button
            className="p-2 bg-red-500 text-white rounded-md"
            onClick={handleSearch}
          >
            Submit
          </button>
        </form>
      </div>
      <div className="bottom-0 w-full bg-black">
        <div className="movie-container overflow-x-auto whitespace-nowrap py-4">
          <GptMovieSuggestions />
        </div>
      </div>
    </div>
  );
};

export default Search;
