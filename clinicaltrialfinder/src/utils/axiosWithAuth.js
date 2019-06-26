import axios from "axios";

export const axiosWithAuth = () => {
  const token = localStorage.getItem("token");

  return axios.create({
    headers: {
      Authorization: token
    },
    baseURL: "https://clinical-trial-finder.herokuapp.com"
  });
};

// need base localhost URL

// axiosWithOutAuth remove const token remove headers
