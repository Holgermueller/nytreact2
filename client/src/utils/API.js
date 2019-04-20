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

  getArticleSaved: function() {
    return axios.get("/api/articles");
  },

  deleteArticle: function(id) {
    return axios.delete("/api/articles/" + id);
  },

  saveArticle: function(articleData) {
    console.log(articleData)
    return axios.post("/api/articles", articleData);
  },

  getOneArticle: function(id) {
    return axios.get("/api/articles/" + id);
  },

  getAllSavedArticles: function() {
    return axios.get("/api/articles");
  }
};

export default API;
