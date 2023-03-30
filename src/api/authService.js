import axios from "axios";
const signup = async (user) => {
  const URL = "http://localhost:8000/auth/signup?"
    .concat("name=")
    .concat(user.name)
    .concat("&email=")
    .concat(user.email)
    .concat("&password=")
    .concat(user.password)
    .concat("&codeforces=")
    .concat(user.codeforces);
  const res = await axios.post(URL);
  const u = res.data;
  if (res.data) {
    sessionStorage.setItem("user", JSON.stringify(res.data.token));
    console.log(u);
  }
  return u;
};
const logout = async () => {
  sessionStorage.removeItem("user");
};
const login = async (user) => {
  let URL = "http://localhost:8000/auth/login?"
    .concat("email=")
    .concat(user.email)
    .concat("&password=")
    .concat(user.password);

  const res = await axios.post(URL);
  const u = res.data;
  if (res.data) sessionStorage.setItem("user", JSON.stringify(res.data.token));
  return u;
};

export const AuthService = {
  signup: signup,
  logout: logout,
  login: login,
};
