import axios from "axios";
const API_URL = "http://localhost:3001/api/user";

class AuthService {
  login() {}
  logout() {}
  register(
    account,
    password
    // user_account,
    // user_password,
    // user_name,
    // gender,
    // birthday,
    // email,
    // mobile,
    // city,
    // interest_product,
    // interest_collection,
    // interest_article
  ) {
    return axios.post(API_URL + "/signup", {
      account,
      password
      // user_account,
      // user_password,
      // user_name,
      // gender,
      // birthday,
      // email,
      // mobile,
      // city,
      // interest_product,
      // interest_collection,
      // interest_article,
    });
  }
  getCurrentUser() {}
}

// class要new 一個object出來
export default new AuthService();