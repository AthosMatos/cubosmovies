import { Spinner } from "../../../../suportPages/loading";
import MoviePoster from "../../components/poster";
import { useLibraryPageContext } from "../../context";

const LibraryPageList = () => {
  const { movies, pending, listHeight } = useLibraryPageContext();

  return (
    <div
      style={{
        height: listHeight,
      }}
      className="w-full items-center overflow-auto dark:bg-zinc-800/80 bg-zinc-200/30 p-4 rounded-3xl flex flex-wrap gap-4 justify-center border dark:border-zinc-600 border-zinc-300"
    >
      {pending ? (
        <Spinner className="w-16 h-16 text-purple-500" />
      ) : !movies.length ? (
        <div>
          <h1 className="text-2xl font-bold text-zinc-800 dark:text-zinc-200">
            Nenhum filme encontrado
          </h1>
          <p className="text-sm text-zinc-500 dark:text-zinc-400">
            Tente alterar os filtros ou adicionar novos filmes
          </p>
        </div>
      ) : (
        movies.map((movie) => <MoviePoster key={movie.id} {...movie} />)
      )}
    </div>
  );
};

export default LibraryPageList;
