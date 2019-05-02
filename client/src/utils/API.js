import axios from "axios";

const API = {
  nytSearch: function(topic, startYear, endYear) {
    if (startYear === "") {
      startYear = "2019";
    }

    if (endYear === "" || Number(endYear) < Number(startYear)) {
      endYear = Number(startYear) + 1;
    }
    const APIKEY = "GOQZtddsgF2XHczhw8FxoNiAArFkNS6z";
    const queryUrl =
      "https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=" +
      APIKEY +
      "&q=" +
      topic +
      "&begin_date=" +
      startYear +
      "0101&end_date=" +
      endYear +
      "1231";
    return axios.get(queryUrl);
  },

  saveArticle: function(articleData) {
    return axios.post("/api/articles", articleData);
  },

  getAllSavedArticles: function() {
    return axios.get("/api/articles");
  },

  deleteArticle: function(id) {
    return axios.delete("/api/articles/" + id);
  }
};

export default API;
