import axios from "axios";

export const fetchAuth = async ({ email, password }) => {
  console.log(email, password);
  const auth = await axios.post(
    `${import.meta.env.VITE_API_URL}/api/generateotp`,
    {
      email,
      password,
    },
  );
  console.log(auth);
};
