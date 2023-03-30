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

const addAtcoder = async (params) => {
  const config = {
    headers: {
      Authorization: `Bearer ${params[0]}`,
    },
  };
  const URL = "http://localhost:8000/profile/edit?atcoder=" + params[1];
  const res = await axios.put(URL, { atcoder: params[1] }, config);
  return res.data;
};
const addCodeforces = async (params) => {
  const config = {
    headers: {
      Authorization: `Bearer ${params[0]}`,
    },
  };
  const URL = "http://localhost:8000/profile/edit?codeforces=" + params[1];
  const res = await axios.put(URL, { codeforces: params[1] }, config);
  return res.data;
};

const addFriend = async (params) => {
  const config = {
    headers: {
      Authorization: `Bearer ${params[0]}`,
    },
  };
  const URL = "http://localhost:8000/profile/add?username=" + params[1];
  const res = await axios.put(URL, { username: params[1] }, config);
  return res.data;
};

const editDetails = async (params) => {
  const config = {
    headers: {
      Authorization: `Bearer ${params.token}`,
    },
  };
  const URL =
    "http://localhost:8000/profile/edit?name=" +
    params.name +
    "&email=" +
    params.email +
    "&codeforces=" +
    params.codeforces +
    "&atcoder=" +
    params.atcoder;
  const res = await axios.put(URL, {}, config);
  return res.data;
};

export const ProfileService = {
  getProfile: getProfile,
  friendProfile: friendProfile,
  addAtcoder: addAtcoder,
  addCodeforces: addCodeforces,
  addFriend: addFriend,
  editDetails: editDetails,
};
