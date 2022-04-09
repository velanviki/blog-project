import axios from "axios";

export default axios.create({
  baseURL:   "https://blogs-viki.herokuapp.com/",
  
  headers: { "Content-Type": "application/json" },
});