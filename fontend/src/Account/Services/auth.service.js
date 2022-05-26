import axios from "axios";
const API_URL = "http://localhost:3001/api/user";

class AuthService {
  login() {}
  logout() {}
  register(
    user_account,
    user_password,
    user_name,
    gender,
    birthday,
    email,
    mobile,
    city,
    interest_product,
    interest_collection,
    interest_article
  ) {
    return axios.post(API_URL + "/register", {
      user_account,
      user_password,
      user_name,
      gender,
      birthday,
      email,
      mobile,
      city,
      interest_product,
      interest_collection,
      interest_article,
    });
  }
  getCurrentUser() {}
}

export default new AuthService();