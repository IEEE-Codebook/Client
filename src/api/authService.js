import axios from "axios";
const signup = async (user) => {
  const URL = "http://localhost:8000/auth/signup?"
    .concat("name=")
    .concat(user.name)
    .concat("&email=")
    .concat(user.email)
    .concat("&password=")
    .concat(user.password);
  const res = await axios.post(URL);

  if (res.data) sessionStorage.setItem("user", JSON.stringify(res.data.token));
  return res.data;
};

const logout = async () => {
  sessionStorage.removeItem("user");
};
const login = async (user) => {
  const URL = "http://localhost:8000/auth/login?"
    .concat("email=")
    .concat(user.email)
    .concat("&password=")
    .concat(user.password);

  const res = await axios.post(URL);
  if (res.data) sessionStorage.setItem("user", JSON.stringify(res.data.token));
  return res.data;
};



export const AuthService = {
  signup: signup,
  logout: logout,
  login: login,
};
