import axios from "axios";
import { MovieDetailsProps } from "./details/interfaces";
import { FilterFormData } from "./library/context";

const API_KEY = import.meta.env.VITE_API_KEY;
const BASE_URL = "https://api.themoviedb.org/3";
const BASE_URL_SEARCH = `${BASE_URL}/search/movie`;
const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/w500";

const language = "pt-BR"; // Set the default language to Portuguese (Brazil)

function isSomething(value: any): boolean {
  // Check if the value is not null, undefined, or an empty string

  if (
    !(value instanceof Date) &&
    typeof value === "object" &&
    Object.keys(value).length === 0
  ) {
    return false;
  }

  if (Array.isArray(value) && value.length === 0) {
    return false;
  }
  if (!value) {
    return false;
  }
  if (!Array.isArray(value) && isNaN(value)) {
    return false;
  }
  return true;
}

function undefineParams(obj: any): any {
  //if param in object is not something (use isSomething function) remove it from object or set it to undefined
  const newObj = { ...obj };
  for (const key in newObj) {
    if (!isSomething(newObj[key])) {
      delete newObj[key];
    }
  }
  return newObj;
}

export async function searchMovies(
  search: string
): Promise<MovieDetailsProps[] | undefined> {
  try {
    // Get a list of popular movies
    const popularRes = await axios.get(BASE_URL_SEARCH, {
      params: {
        api_key: API_KEY,
        language,
        query: search,
      },
    });

    const movies = popularRes.data.results;

    // For each movie, get detailed info and trailer
    const detailedMovies = await Promise.all(
      movies.map(async (movie: any) => {
        const [detailsRes, videosRes] = await Promise.all([
          axios.get(`${BASE_URL}/movie/${movie.id}`, {
            params: { api_key: API_KEY, language },
          }),
          axios.get(`${BASE_URL}/movie/${movie.id}/videos`, {
            params: { api_key: API_KEY, language },
          }),
        ]);

        const details = detailsRes.data;
        const videos = videosRes.data.results;

        const trailer = videos.find(
          (video: any) => video.type === "Trailer" && video.site === "YouTube"
        );

        return {
          id: movie.id,
          title: details.title,
          original_title: details.original_title,
          subtitle: null, // Not provided by TMDb
          synopsis: details.overview || null,
          genre: details.genres.map((g: any, index: number) => {
            return { id: index, name: g.name };
          }),
          popularity: details.popularity,
          vote_average: details.vote_average * 10, // Scale to 0-10
          vote_count: details.vote_count,
          release_date: details.release_date
            ? new Date(details.release_date).toLocaleDateString()
            : null,
          duration: details.runtime,
          situation: details.status, // e.g., "Released", "Post Production"
          language: details.original_language,
          budget: details.budget,
          revenue: details.revenue,
          profit: details.revenue - details.budget,
          poster: details.poster_path
            ? `${IMAGE_BASE_URL}${details.poster_path}`
            : null,
          backdrop: details.backdrop_path
            ? `${IMAGE_BASE_URL}${details.backdrop_path}`
            : null,
          trailer: trailer
            ? `https://www.youtube.com/watch?v=${trailer.key}`
            : null,
        };
      })
    );

    return detailedMovies;
  } catch (error) {
    console.error("Error fetching movie data:", error);
    return undefined;
  }
}

export async function getMovies(
  props: FilterFormData & { page?: number }
): Promise<MovieDetailsProps[]> {
  const {
    page = 1,
    DateMax,
    DateMin,
    DurationMax,
    DurationMin,
    Genres,
  } = undefineParams(props);

  console.log(page, DateMax, DateMin, DurationMax, DurationMin, Genres);

  try {
    const params: any = {
      api_key: API_KEY,
      language,
      page,
      sort_by: "popularity.desc",
    };

    if (Genres && Genres.length > 0) {
      params.with_genres = Genres.join("|");
    }
    if (DateMin) {
      params["primary_release_date.gte"] = DateMin.toISOString().split("T")[0];
    }
    if (DateMax) {
      params["primary_release_date.lte"] = DateMax.toISOString().split("T")[0];
    }
    if (DurationMin) {
      params["with_runtime.gte"] = DurationMin;
    }
    if (DurationMax) {
      params["with_runtime.lte"] = DurationMax;
    }
    console.log(params);
    const res = await axios.get(`${BASE_URL}/discover/movie`, { params });
    const movies = res.data.results;
    console.log(movies);
    const detailedMovies = await Promise.all(
      movies.map(async (movie: any) => {
        const [detailsRes, videosRes] = await Promise.all([
          axios.get(`${BASE_URL}/movie/${movie.id}`, {
            params: { api_key: API_KEY, language },
          }),
          axios.get(`${BASE_URL}/movie/${movie.id}/videos`, {
            params: { api_key: API_KEY, language },
          }),
        ]);

        const details = detailsRes.data;
        const videos = videosRes.data.results;
        const trailer = videos.find(
          (video: any) => video.type === "Trailer" && video.site === "YouTube"
        );

        return {
          id: movie.id,
          title: details.title,
          original_title: details.original_title,
          subtitle: null,
          synopsis: details.overview || null,
          genre: details.genres.map((g: any, index: number) => ({
            id: index,
            name: g.name,
          })),
          popularity: details.popularity,
          vote_average: details.vote_average * 10,
          vote_count: details.vote_count,
          release_date: details.release_date
            ? new Date(details.release_date).toLocaleDateString()
            : null,
          duration: details.runtime,
          situation: details.status,
          language: details.original_language,
          budget: details.budget,
          revenue: details.revenue,
          profit: details.revenue - details.budget,
          poster: details.poster_path
            ? `${IMAGE_BASE_URL}${details.poster_path}`
            : null,
          backdrop: details.backdrop_path
            ? `${IMAGE_BASE_URL}${details.backdrop_path}`
            : null,
          trailer: trailer
            ? `https://www.youtube.com/embed/${trailer.key}`
            : null,
        } as MovieDetailsProps;
      })
    );

    return detailedMovies;
  } catch (error) {
    console.error("Error fetching filtered movies:", error);
    return [];
  }
}

export async function getMovie(id: number) {
  try {
    // Get a list of popular movies
    const movie = await axios.get(`${BASE_URL}/movie/${id}`, {
      params: {
        api_key: API_KEY,
        language,
      },
    });

    const details = movie.data;
    const videosRes = await axios.get(`${BASE_URL}/movie/${id}/videos`, {
      params: { api_key: API_KEY, language },
    });
    const videos = videosRes.data.results;

    const trailer = videos.find(
      (video: any) => video.type === "Trailer" && video.site === "YouTube"
    );

    return {
      id: id,
      title: details.title,
      original_title: details.original_title,
      subtitle: null, // Not provided by TMDb
      synopsis: details.overview || null,
      genre: details.genres.map((g: any, index: number) => {
        return { id: index, name: g.name };
      }),
      popularity: details.popularity,
      vote_average: details.vote_average * 10, // Scale to 0-10
      vote_count: details.vote_count,
      release_date: details.release_date
        ? new Date(details.release_date)
        : null,
      duration: details.runtime,
      situation: details.status, // e.g., "Released", "Post Production"
      language: details.original_language,
      budget: details.budget,
      revenue: details.revenue,
      profit: details.revenue - details.budget,
      poster: details.poster_path
        ? `${IMAGE_BASE_URL}${details.poster_path}`
        : null,
      backdrop: details.backdrop_path
        ? `${IMAGE_BASE_URL}${details.backdrop_path}`
        : null,
      trailer: trailer ? `https://www.youtube.com/embed/${trailer.key}` : null,
    } as MovieDetailsProps;
  } catch (error) {
    console.error("Error fetching movie data:", error);
  }
}

export async function getMovieGenres(): Promise<
  { id: number; name: string }[] | undefined
> {
  try {
    const response = await axios.get(`${BASE_URL}/genre/movie/list`, {
      params: {
        api_key: API_KEY,
        language,
      },
    });

    return response.data.genres; // Array of { id, name }
  } catch (error) {
    console.error("Error fetching genres from TMDB:", error);
    return undefined;
  }
}
