import axios from "axios";
require("dotenv").config();

const API = {
  nytSearch: function(topic, startYear, endYear) {
    const APIKEY = "4fcc0dafe33644ff9bc6deb8396385e6";
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
    return axios.put("/api/articles", articleData);
  },

  getOneArticle: function(id){
    return axios.get("/api/articles/" + id);
  },

  getAllSavedArticles: function() {
    return axios.get("/api/articles")
  }
};

export default API;
