const router = require("express").Router();
const Article = require("../models/article.js");

router.get("/api/getSavedArticle", (req,res) => {
  Article.find({}).then(data => {
    res.json(data);
  });
});

router.post("/api/saveArticle",(req,res)=>{
  Article.create(req.body.article).then(data => {
    res.json("Saved!");
  }).catch((err) => {
    res.json("You already saved that article!");
  });
});

router.delete("/api/delete",(req,res) => {
  console.log(req.body.id);
  Article.remove({_id:req.body.id}).then(data => {
    res.json("Deleted!");
  })
});

module.exports = router;
