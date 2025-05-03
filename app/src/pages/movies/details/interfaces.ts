export interface MovieDetailsProps {
  id: number;
  title: string;
  original_title: string;
  subtitle: string | null;
  synopsis: string | null;
  genre?:
    | {
        name: string;
        id?: number | undefined;
      }[]
    | undefined;
  popularity: number;
  vote_average: number;
  vote_count: number;
  release_date: Date | null;
  duration: number | null;
  situation: string | null; // e.g., "Released", "Post Production"
  language: string;
  budget: number | null;

  revenue: number | null;
  profit: number | null;
  poster: string | null;
  backdrop: string | null;
  trailer: string | null;
}
