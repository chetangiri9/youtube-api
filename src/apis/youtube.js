import axios from "axios";

const KEY = "AIzaSyBYPY2MiOBUfvP69OPeCtdckoDVp8340nY";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    maxResults: 10,
    key: KEY
  }
});
