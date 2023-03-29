import axios from "axios";
const getSubmissions = async (token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  const URL = "http://localhost:8000/submissions/friend";
  const res = await axios.get(URL, config);
  return res.data;
};

export const SubmissionService = {
  getSubmissions: getSubmissions,
};
