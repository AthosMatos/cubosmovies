import { ReactNode } from "react";
/* 

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
*/
export interface MoviePageLayoutProps {
  buttons?: ReactNode;
  pageTitle?: string;
  form?: (e?: React.BaseSyntheticEvent) => Promise<void>;
  movie: {
    title?: ReactNode;
    original_title?: ReactNode;
    subtitle?: ReactNode;
    synopsis?: ReactNode;
    genre?: ReactNode;
    popularity?: ReactNode;
    vote_average?: ReactNode;
    vote_count?: ReactNode;
    release_date?: ReactNode;
    duration?: ReactNode;
    situation?: ReactNode; // e.g., "Released", "Post Production"
    language?: ReactNode;
    budget?: ReactNode;
    revenue?: ReactNode;
    profit?: ReactNode;

    poster?: ReactNode;
    backdrop?: string | null;
    trailer?: ReactNode;
  };
}
