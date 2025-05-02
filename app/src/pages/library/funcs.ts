import axios from "axios";

const API_KEY = import.meta.env.VITE_API_KEY;
const BASE_URL = "https://api.themoviedb.org/3";
const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/w500";

const language = "pt-BR"; // Set the default language to Portuguese (Brazil)

export async function getMovies() {
  try {
    // Get a list of popular movies
    const popularRes = await axios.get(`${BASE_URL}/movie/popular`, {
      params: {
        api_key: API_KEY,
        language,
        page: 1,
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
          title: details.title,
          original_title: details.original_title,
          subtitle: null, // Not provided by TMDb
          synopsis: details.overview || null,
          genre: details.genres.map((g: any) => g.name),
          popularity: details.popularity,
          vote_average: details.vote_average,
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
          trailer: trailer
            ? `https://www.youtube.com/watch?v=${trailer.key}`
            : null,
        };
      })
    );

    return detailedMovies;
  } catch (error) {
    console.error("Error fetching movie data:", error);
  }
}
