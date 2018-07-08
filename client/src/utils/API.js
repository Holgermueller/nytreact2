import axios from "axios";
require("dotenv").config();

const API = {
	nytSearch: function(topic, startYear, endYear) {
		const APIKEY = ''
		if (startYear === "") {
			startYear = "2018"
		} if (endYear === "" || Number(endYear) < Number(startYear)){
			endYear = Number(startYear) + 1
		}
		console.log (topic);
		const queryUrl = 'https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=' + APIKEY + 
		"&q=" + topic + 
		"&begin_date=" + startYear + 
		"0101&end_date=" + endYear + "1231";
		return axios.get(queryUrl);
	},
	getArticleSaved: function() {
		return axios.get("/api/articles");
	},
	deleteArticle: function(id){
		return axios.delete("/api/articles" + id);
	},
	saveArticle: function(articleData) {
		return axios.post("/api/articles", articleData);
	}
};

export default API;