const Article = require("../models/article.js");

module.exports = (app) => {
  app.post("/saveArticle",(req,res)=>{
    console.log(req.body.article);
    Article.create(req.body.article).then(data => {
      res.json("Ok.");
    });
  });
}
