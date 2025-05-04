import axios from "axios";

export const PostPoster = async (posterFile: File, token: string | null) => {
  const formData = new FormData();
  formData.append(`poster`, posterFile);

  try {
    await axios.post(
      `${import.meta.env.VITE_API_URL}/movies/4/poster`,
      formData,
      {
        headers: {
          "Content-Type": "multipart/form-data",
          bearer: token,
        },
      }
    );
  } catch (error) {
    console.error("Error uploading poster:", error);
    throw error;
  }
};

export const PostBackdrop = async (
  backdropFile: File,
  token: string | null
) => {
  const formData = new FormData();
  formData.append(`backdrop`, backdropFile);

  try {
    await axios.post(
      `${import.meta.env.VITE_API_URL}/movies/4/backdrop`,
      formData,
      {
        headers: {
          "Content-Type": "multipart/form-data",
          bearer: token,
        },
      }
    );
  } catch (error) {
    console.error("Error uploading backdrop:", error);
    throw error;
  }
};
