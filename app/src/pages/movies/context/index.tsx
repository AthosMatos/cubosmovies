import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useTRPC } from "../../../trpc/utils";
import { MovieDetailsProps } from "../details/interfaces.ts";

export const useMovies = ({ onDelete }: { onDelete?: () => void }) => {
  const trpc = useTRPC();

  const { mutateAsync: createMovie, isPending: pendingCreate } = useMutation(
    trpc.movies.create.mutationOptions({})
  );
  const { mutateAsync: deleteMovie, isPending: pendingDelete } = useMutation(
    trpc.movies.delete.mutationOptions({})
  );

  const { mutateAsync: existsMovie } = useMutation(
    trpc.movies.exists.mutationOptions()
  );
  const { mutateAsync: checkIfGenreExists } = useMutation(
    trpc.genres.checkIfExists.mutationOptions({})
  );

  const queryClient = useQueryClient();

  const pageTotalKey = trpc.movies.getPageTotal.queryKey();

  const toogleToLocalList = async (movie?: MovieDetailsProps) => {
    if (!movie) return;
    queryClient.invalidateQueries({ queryKey: pageTotalKey });
    const existingMovie = await existsMovie({
      id: movie.id,
      name: movie.title,
    });
    if (existingMovie.body.exists) {
      await deleteMovie(existingMovie.body.id as number);
      if (onDelete) onDelete();
      return;
    }
    let ge: { id?: number; name: string }[] = [];
    if (movie.genre)
      ge = await checkIfGenreExists(movie.genre.map((g) => g.name));

    const genresToConnect = ge.filter((g) => g.id).map((g) => ({ id: g.id! }));
    const genresToCreate =
      movie.genre
        ?.filter((g) => !ge.find((ge) => ge.name === g.name))
        .map((g) => ({ name: g.name })) || [];

    const genre = {
      connect: genresToConnect,
      create: genresToCreate,
    };

    const createdmovie = await createMovie({
      id: movie.id,
      backdrop: movie?.backdrop || "",
      genre: genre,
      budget: movie?.budget || 0,
      duration: movie?.duration || 0,
      language: movie?.language || "",
      original_title: movie?.original_title || "",
      poster: movie?.poster || "",
      profit: movie?.profit || 0,
      revenue: movie?.revenue || 0,
      release_date: movie?.release_date
        ? new Date(movie.release_date)
        : new Date(),
      situation: movie?.situation || "",
      popularity: movie?.popularity || 0,
      subtitle: movie?.subtitle || "",
      synopsis: movie?.synopsis || "",
      title: movie?.title || "",
      trailer: movie?.trailer || "",
      vote_average: movie?.vote_average || 0,
      vote_count: movie?.vote_count || 0,
    });
    return createdmovie.body.id as number;
  };

  return {
    toogleToLocalList,
    pending: pendingCreate || pendingDelete,
  };
};
