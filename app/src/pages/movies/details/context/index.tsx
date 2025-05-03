import { useMutation } from "@tanstack/react-query";
import { createContext, useContext, useEffect, useMemo, useState } from "react";
import { useLocation, useParams } from "react-router";
import { useTRPC } from "../../../../trpc/utils.ts";
import { getMovie } from "../../funcs.ts";
import { MovieDetailsProps } from "../interfaces.ts";

interface DetailsPageContextProps {
  movie: MovieDetailsProps | undefined;
  isTMDB: boolean;
  pending: boolean;
}

const DetailsPageContext = createContext({} as DetailsPageContextProps);

export const DetailsPageProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const location = useLocation();
  const { id } = useParams();
  const trpc = useTRPC();
  const [movie, setMovie] = useState<MovieDetailsProps>();
  const isTMDB = useMemo(() => {
    if (location.pathname.includes("tmdb")) {
      return true;
    }
    return false;
  }, [location.pathname]);

  const { mutate: getMovieTMDB, isPending: pendingTMDB } = useMutation({
    mutationFn: getMovie,
    onSuccess: (data) => {
      if (!data) return;
      setMovie(data);
    },
  });

  const { mutate: getMovieLocal, isPending: pendingLocal } = useMutation(
    trpc.movies.get.mutationOptions({
      onSuccess: (data) => {
        if (!data) return;
        setMovie(data as any);
      },
    })
  );

  useEffect(() => {
    if (isTMDB) {
      getMovieTMDB(parseInt(id!));
    } else {
      getMovieLocal(parseInt(id!));
    }
  }, [isTMDB]);

  return (
    <DetailsPageContext.Provider
      value={{
        movie,
        isTMDB,
        pending: pendingTMDB || pendingLocal,
      }}
    >
      {children}
    </DetailsPageContext.Provider>
  );
};

export const useDetailsPageContext = () => {
  const context = useContext(DetailsPageContext);
  if (!context) {
    throw new Error(
      "useDetailsPageContext must be used within a DetailsPageProvider"
    );
  }
  return context;
};
