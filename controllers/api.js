const Article = require("../models/article.js");

module.exports = (app) => {

  //app.get("/api/getSavedArticle")

  app.post("/api/saveArticle",(req,res)=>{
    console.log(req.body.article);
    Article.create(req.body.article).then(data => {
      res.json("Saved!");
    }).catch((err) => {
      res.json("You already saved that article!");
    });
  });
}
