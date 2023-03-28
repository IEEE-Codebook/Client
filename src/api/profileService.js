import axios from "axios";

const getProfile = async (token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  const URL = "http://localhost:8000/profile/me";
  const res = await axios.get(URL, config);
  return res.data;
};

const friendProfile = async (name) => {
  const URL = "http://localhost:8000/profile/" + name;
  const res = await axios.get(URL);
  return res.data;
};

export const ProfileService = {
  getProfile: getProfile,
  friendProfile: friendProfile,
};
