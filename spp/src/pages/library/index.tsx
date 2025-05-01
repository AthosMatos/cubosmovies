import { useEffect, useState } from "react";
import { useHeaderContext } from "../../context/headerContext";
import { Input } from "../components/Input";
import { PageTransitionSlide } from "../components/PageTransitionWrapper";
import { getMovies } from "./funcs";
import { Movie } from "./interfaces";
import { MovieCardWrapper } from "./styled";

const LibraryPage = () => {
  const [movies, setMovies] = useState<Movie[]>([]);
  useEffect(() => {
    getMovies().then((data) => {
      if (!data) return;
      setMovies(data);
    });
  }, []);
  const { headerHeight } = useHeaderContext();
  return (
    <PageTransitionSlide
      style={{
        paddingTop: headerHeight,
      }}
      className="w-full h-full items-end  flex flex-col"
    >
      <div className="flex">
        <Input
          placeholder="Pesquise por filmes"
          icon="search"
          className="w-32 h-32"
        />
      </div>
      <div className="w-full flex flex-wrap gap-4">
        {movies.map((movie) => (
          <MovieCardWrapper
            key={movie.title}
            backgroundImage={movie.poster || movie.backdrop || ""}
          >
            <div className="flex flex-col p-2">
              <h3 className="text-lg font-semibold">{movie.title}</h3>

              <svg className="w-full h-full" viewBox="0 0 36 36">
                <circle
                  cx="18"
                  cy="18"
                  r="16"
                  fill="none"
                  stroke="#333"
                  strokeWidth="2"
                />
                <circle
                  cx="18"
                  cy="18"
                  r="16"
                  fill="none"
                  stroke="#4CAF50"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeDasharray={`${movie.vote_average * 10}, 100`}
                  transform="rotate(-90 18 18)"
                />
                <text
                  x="18"
                  y="22"
                  textAnchor="middle"
                  fontSize="12"
                  fill="white"
                  fontWeight="bold"
                >
                  {movie.vote_average}
                </text>
              </svg>
              <div className="flex flex-wrap gap-1">
                {movie.genre.map((genre, index) => (
                  <span key={index} className="text-xs ">
                    {genre}
                  </span>
                ))}
              </div>
            </div>
          </MovieCardWrapper>
        ))}
      </div>
    </PageTransitionSlide>
  );
};

export default LibraryPage;
