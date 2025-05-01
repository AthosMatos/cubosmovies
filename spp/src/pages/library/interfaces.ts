export interface Movie {
  title: string;
  original_title: string;
  subtitle: string | null;
  synopsis: string | null;
  genre: string[];
  popularity: number;
  vote_average: number;
  vote_count: number;
  release_date: Date | null;
  duration: number | null;
  situation: string | null;
  language: string | null;
  budget: number | null;
  revenue: number | null;
  profit: number | null;
  poster: string | null;
  backdrop: string | null;
  trailer: string | null;
}
