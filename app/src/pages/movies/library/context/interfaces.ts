import { MovieDetailsProps } from "../../details/interfaces";

export interface LibraryPageContextProps {
  movies: MovieDetailsProps[];
  setMovies: React.Dispatch<React.SetStateAction<MovieDetailsProps[]>>;
  setSearch: React.Dispatch<React.SetStateAction<string>>;
  isTMDBList: boolean;
  pending: boolean;
  setIsTMDBList: React.Dispatch<React.SetStateAction<boolean>>;
  setPage: React.Dispatch<React.SetStateAction<number>>;
  listHeight: number;
  page: number;
  pendingSearch: boolean;
  handleFormSubmit: any;
  loadedList: "local" | "tmdb";
  defaultGetMovies: () => void;
}
