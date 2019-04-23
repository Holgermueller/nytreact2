const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const articleSchema = new Schema({
  headline: { type: String, required: true },
  pub_date: { type: Date, required: true },
  snippet: { type: String, required: true },
  web_url: { type: String, required: true }
});

module.exports = mongoose.model("Article", articleSchema);
