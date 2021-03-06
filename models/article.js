const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const articleSchema = new Schema({
  title: {type:String,
          unique:true},
  descrip: String,
  loc: {type:String,
          unique:true},
  date: String
});

const Article = mongoose.model("Article",articleSchema);

module.exports = Article;
