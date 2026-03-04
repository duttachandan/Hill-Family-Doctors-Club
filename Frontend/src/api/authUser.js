import axios from 'axios'

export const fetchAuth = async (email, password) => {
    const auth = await axios.post(`${meta.env.VITE_API_URL}/register`, {
        body: {
            email,
            password
        }
    })
    console.log(auth);
};
