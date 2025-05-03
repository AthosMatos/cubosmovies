import axios from "axios";
import { MovieDetailsProps } from "./details/interfaces";

const API_KEY = import.meta.env.VITE_API_KEY;
const BASE_URL = "https://api.themoviedb.org/3";
const BASE_URL_SEARCH = `${BASE_URL}/search/movie`;
const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/w500";

const language = "pt-BR"; // Set the default language to Portuguese (Brazil)

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

export async function getMovies({
  page = 1,
}: {
  page?: number;
}): Promise<MovieDetailsProps[]> {
  try {
    // Get a list of popular movies
    const popularRes = await axios.get(`${BASE_URL}/movie/popular`, {
      params: {
        api_key: API_KEY,
        language,
        page: page,
      },
    });

    const movies = popularRes.data.results;

    // For each movie, get detailed info and trailer
    const detailedMovies = await Promise.all(
      movies.map(async (movie: any) => {
        const [detailsRes] = await Promise.all([
          axios.get(`${BASE_URL}/movie/${movie.id}`, {
            params: { api_key: API_KEY, language },
          }),
        ]);

        const details = detailsRes.data;

        return {
          id: movie.id,
          title: details.title,
          backdrop: details.backdrop_path
            ? `${IMAGE_BASE_URL}${details.backdrop_path}`
            : null,

          poster: details.poster_path
            ? `${IMAGE_BASE_URL}${details.poster_path}`
            : null,
          genre: details.genres.map((g: any, index: number) => {
            return { id: index, name: g.name };
          }),

          vote_average: details.vote_average * 10, // Scale to 0-10
        };
      })
    );

    return detailedMovies;
  } catch (error) {
    console.error("Error fetching movie data:", error);
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
