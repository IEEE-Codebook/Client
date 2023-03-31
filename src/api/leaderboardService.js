import axios from "axios";
const leader = async (platform) => {
  const URL = "http://localhost:8000/leaderboard/all?"
    .concat("platform=")
    .concat(platform);
  const res = await axios.get(URL);
  console.log(res.data);
  return res.data;
};

export const LeaderboardService = {
  leader: leader,
};
