import { useMutation } from "@tanstack/react-query";
import { createContext, useContext, useEffect, useState } from "react";
import {
  useFieldArray,
  UseFieldArrayReturn,
  useForm,
  UseFormRegister,
  UseFormSetValue,
} from "react-hook-form";
import { useParams } from "react-router";
import { useAuth } from "../../../../context/Auth/index.tsx";
import { useTRPC } from "../../../../trpc/utils.ts";
import { useMovies } from "../../context/index.tsx";
import { PostBackdrop, PostPoster } from "../axios.ts";
import { MovieDetailsProps } from "../interfaces.ts";

interface MovieEditorPageContextProps {
  exists?: boolean;
  pendingCreate: boolean;
  pendingUpdate: boolean;
  submit: (e?: React.BaseSyntheticEvent) => Promise<void>;
  fieldArray: UseFieldArrayReturn<MovieDetailsProps, "genre", "id">;
  movie: MovieDetailsProps;
  register: UseFormRegister<MovieDetailsProps>;
  setValue: UseFormSetValue<MovieDetailsProps>;
  id?: string;
  toogleToLocalList: (movie?: MovieDetailsProps) => Promise<number | undefined>;
  updateMovie?: () => Promise<void>;
}

const MovieEditorPageContext = createContext({} as MovieEditorPageContextProps);

export const MovieEditorPageProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const { id } = useParams();
  const [createdId, setCreatedId] = useState<string | undefined>(undefined);
  const trpc = useTRPC();
  const { toogleToLocalList, pending: pendCreate } = useMovies({});
  const { token } = useAuth();
  const { register, handleSubmit, watch, control, setValue } =
    useForm<MovieDetailsProps>({
      mode: "onChange",
    });
  const movie = watch();

  // Field array to manage genre list
  const fieldArray = useFieldArray({
    control,
    name: "genre", // this should match your MovieDetailsProps type
  });

  const { mutate: updateMovie, isPending: pendUpdate } = useMutation(
    trpc.movies.update.mutationOptions()
  );
  const { mutateAsync: checkIfGenreExists } = useMutation(
    trpc.genres.checkIfExists.mutationOptions({})
  );
  const { mutateAsync: existsMovie, data: exists } = useMutation(
    trpc.movies.exists.mutationOptions()
  );
  const { mutateAsync: getMovie } = useMutation(
    trpc.movies.get.mutationOptions()
  );

  const update = async () => {
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

    movie.posterFile && (await PostPoster(movie.posterFile, token));
    movie.backdropFile && (await PostBackdrop(movie.backdropFile, token));

    updateMovie({
      id: parseInt(id!),
      data: {
        genre: genre,
        budget: movie?.budget || 0,
        duration: movie?.duration || 0,
        language: movie?.language || "",
        original_title: movie?.original_title || "",

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
      },
    });
  };
  const create = async () => {
    const newMovieObj = { ...movie };
    newMovieObj.poster = null;
    newMovieObj.backdrop = null;
    movie.posterFile && (await PostPoster(movie.posterFile, token));
    movie.backdropFile && (await PostBackdrop(movie.backdropFile, token));

    const movieId = await toogleToLocalList(newMovieObj);
    if (movieId) {
      setCreatedId(movieId.toString());
    }
  };
  const submitMovie = async () => {
    if (id) {
      update();
    } else {
      create();
    }
  };
  const submit = handleSubmit(submitMovie);

  const isPending = pendUpdate || pendCreate;

  useEffect(() => {
    const checkedid = createdId ? parseInt(createdId) : parseInt(id!);
    existsMovie({
      id: isNaN(checkedid) ? undefined : checkedid,
      name: movie.title,
    });
  }, [isPending, createdId]);

  useEffect(() => {
    if (id) {
      getMovie(parseInt(id)).then((data) => {
        if (data) {
          setValue("id", data.id);
          setValue("title", data.title);
          setValue("original_title", data.original_title);
          setValue("subtitle", data.subtitle);
          setValue("synopsis", data.synopsis);
          setValue("genre", data.genre);
          setValue("popularity", data.popularity);
          setValue("vote_average", data.vote_average);
          setValue("vote_count", data.vote_count);
          data.release_date &&
            setValue("release_date", new Date(data.release_date));
          setValue("duration", data.duration);
          setValue("situation", data.situation);
          setValue("language", data.language);
          setValue("budget", data.budget);
          setValue("revenue", data.revenue);
          setValue("profit", data.profit);
          setValue("poster", data.poster);
          setValue("backdrop", data.backdrop);
          setValue("trailer", data.trailer);
        }
      });
    }
  }, [id]);

  return (
    <MovieEditorPageContext.Provider
      value={{
        exists: exists?.body.exists,
        pendingCreate: pendCreate,
        pendingUpdate: pendUpdate,
        submit,
        fieldArray,
        movie,
        register,
        setValue,
        toogleToLocalList,
        id,
        updateMovie: update,
      }}
    >
      {children}
    </MovieEditorPageContext.Provider>
  );
};

export const useMovieEditorPageContext = () => {
  const context = useContext(MovieEditorPageContext);
  if (!context) {
    throw new Error(" must be used within a DetailsPageProvider");
  }
  return context;
};
