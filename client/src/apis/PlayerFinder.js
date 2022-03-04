import axios from "axios";

// NODE_ENV = 'development'
// NODE_ENV = 'production'

// if in prod baseURL = /api/v1/profile
// else baseURL = 'http://localhost:5555/api/v1/profile'

const baseURL =
  process.env.NODE_ENV === "production"
    ? "https://cryptic-anchorage-55953.herokuapp.com/api/v1/profile"
    : "http://localhost:5555/api/v1/profile";

export default axios.create({
  baseURL,
});
