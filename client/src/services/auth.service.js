import axios from "axios";
const URL_APi = "http://localhost:8800";

class AuthService {
  login = async (user) => {
    let res = await axios.post("/api/users/login", user);
    console.log(res);
    if (res.data.token) {
      localStorage.setItem("user", JSON.stringify(res.data));
    }
  };
  register = async (user) => {
    let res = await axios.post("api/users/register", user);
    console.log(res);
  };
}
export default new AuthService();
