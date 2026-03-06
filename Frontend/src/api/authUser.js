import axios from "axios";

export const fetchAuth = async ({ email, password }) => {
  try {
    const auth = await axios.post(
      `${import.meta.env.VITE_API_URL}/api/generateotp`,
      {
        email,
        password,
      },
    );
    return auth.data;
  } catch (err) {
    throw err.response?.data || err;
  }
};
