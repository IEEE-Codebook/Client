import axios from "axios";

const getProfile = async (token) => {
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
    const URL = "http://localhost:3000/profile/me";
    const res = await axios.get(URL, config);
  
    return res.data;
  };

export const ProfileService = {
    getProfile: getProfile,
}