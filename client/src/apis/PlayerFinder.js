import axios from "axios";

// NODE_ENV = 'development'
// NODE_ENV = 'production'

// if in prod baseURL = /api/v1/profile
// else baseURL = 'http://localhost:5555/api/v1/profile'

const baseURL =
  process.env.NODE_ENV === "production" ? "/" : "http://localhost:5000/";

export default axios.create({
  baseURL,
});
