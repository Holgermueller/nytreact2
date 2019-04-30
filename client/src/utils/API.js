import axios from "axios";

const API = {
  nytSearch: function(topic, startYear, endYear) {
    const APIKEY = "GOQZtddsgF2XHczhw8FxoNiAArFkNS6z";
    const queryUrl =
      "https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=" +
      APIKEY +
      "&q=" +
      topic;
    return axios.get(queryUrl);
  },

  saveArticle: function(articleData) {
    return axios.post("/api/articles", articleData);
  },

  getAllSavedArticles: function() {
    return axios.get("/api/articles");
  },

  deleteArticle: function(id) {
    console.log(id);
    return axios.delete("/api/articles/" + id);
  }
};

export default API;
