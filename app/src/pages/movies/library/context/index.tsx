import { useMutation } from "@tanstack/react-query";
import { createContext, useContext, useEffect, useMemo, useState } from "react";
import { useDebounce } from "use-debounce";
import { useDimensionsHelperContext } from "../../../../context/DimensionsHelperContext.tsx";
import { useTRPC } from "../../../../trpc/utils.ts";

import { MovieDetailsProps } from "../../details/interfaces.ts";
import { getMovies, searchMovies } from "../../funcs.ts";
import { LibraryPageContextProps } from "./interfaces.ts";

const LibraryPageContext = createContext({} as LibraryPageContextProps);

export const libraryHeaderId = "libraryheader";
export const libraryNavigationId = "librarynavigation";

export interface FilterFormData {
  DurationMin?: number | null;
  DurationMax?: number | null;
  DateMin?: Date | null;
  DateMax?: Date | null;
  Genres?: number[];
}

export const LibraryPageProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [movies, setMovies] = useState<MovieDetailsProps[]>([]);
  const [search, setSearch] = useState<string>("");
  const [debouncedSearch] = useDebounce(search, 500);
  const [isTMDBList, setIsTMDBList] = useState<boolean>(false);
  const [loadedList, setLoadedList] = useState<"local" | "tmdb">("local");
  const [page, setPage] = useState<number>(1);
  const [libraryHeaderHeight, setLibraryHeaderHeight] = useState<number>(0);
  const [libraryNavigationHeight, setLibraryNavigationHeight] =
    useState<number>(0);
  const trpc = useTRPC();
  const { spaceBetweenHeaderAndFooter } = useDimensionsHelperContext();

  const handleFormSubmit = (data: FilterFormData) => {
    const { DateMax, DateMin, DurationMax, DurationMin, Genres } = data;
    if (!DateMax && !DateMin && !DurationMax && !DurationMin) {
      return;
    }

    if (isTMDBList) {
      fillTMDB({
        page,
        DateMax,
        DateMin,
        DurationMax,
        DurationMin,
        Genres: Array.isArray(Genres)
          ? Genres?.map((g) => parseInt(g.toString()))
          : undefined,
      });
    } else {
      fillLocalMovies({
        page,
        DateMax,
        DateMin,
        DurationMax,
        DurationMin,
        Genres: Array.isArray(Genres)
          ? Genres?.map((g) => parseInt(g.toString()))
          : undefined,
      });
    }
  };

  const { mutate: fillTMDB, isPending: pendingTMDB } = useMutation({
    mutationFn: getMovies,

    onSuccess: (data) => {
      if (!data) return;
      setMovies(data);
      setLoadedList("tmdb");
    },
  });

  const { mutate: searchTMDB, isPending: pendingSearchTMDB } = useMutation({
    mutationFn: searchMovies,

    onSuccess: (data) => {
      if (!data) return;
      setMovies(data);
    },
  });

  const { mutate: fillLocalMovies, isPending: pendingLocalMovies } =
    useMutation(
      trpc.movies.getAll.mutationOptions({
        onSuccess: (data) => {
          if (!data) return;

          setMovies(
            data.map((movie) => {
              return {
                ...movie,
                release_date: new Date(movie.release_date),
              };
            })
          );
          setLoadedList("local");
        },
      })
    );

  const { mutate: searchLocalMovies, isPending: pendingSearchLocalMovies } =
    useMutation(
      trpc.movies.search.mutationOptions({
        onSuccess: (data) => {
          if (!data) return;
          setMovies(
            data.map((movie) => {
              return {
                ...movie,
                release_date: new Date(movie.release_date),
              };
            })
          );
        },
      })
    );

  const defaultGetMovies = () => {
    if (isTMDBList) {
      if (debouncedSearch.length) {
        searchTMDB(debouncedSearch);
      } else fillTMDB({ page });
    } else {
      if (debouncedSearch.length) {
        searchLocalMovies(debouncedSearch);
      } else fillLocalMovies({ page });
    }
  };

  useEffect(() => {
    defaultGetMovies();
  }, [isTMDBList, page, debouncedSearch]);

  useEffect(() => {
    const header = document.getElementById(libraryHeaderId);
    if (header) {
      const { height } = header.getBoundingClientRect();
      setLibraryHeaderHeight(height);
    }

    const navigation = document.getElementById(libraryNavigationId);
    if (navigation) {
      const { height } = navigation.getBoundingClientRect();
      setLibraryNavigationHeight(height);
    }
  }, [movies, isTMDBList]);

  const listHeight = useMemo(() => {
    return (
      spaceBetweenHeaderAndFooter -
      libraryHeaderHeight -
      libraryNavigationHeight -
      12 * 3 /* 3 * 12px gap */ -
      48
    );
  }, [
    spaceBetweenHeaderAndFooter,
    libraryHeaderHeight,
    libraryNavigationHeight,
  ]);

  return (
    <LibraryPageContext.Provider
      value={{
        movies,
        setMovies,
        defaultGetMovies,
        handleFormSubmit,
        loadedList,
        setSearch,
        isTMDBList,
        setIsTMDBList,
        setPage,
        pending: pendingTMDB || pendingLocalMovies,
        pendingSearch: pendingSearchTMDB || pendingSearchLocalMovies,
        listHeight,
        page,
      }}
    >
      {children}
    </LibraryPageContext.Provider>
  );
};

export const useLibraryPageContext = () => {
  const context = useContext(LibraryPageContext);
  if (!context) {
    throw new Error(
      "useLibraryPageContext must be used within a LibraryPageProvider"
    );
  }
  return context;
};
