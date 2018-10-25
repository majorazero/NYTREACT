const express = require("express");
const app = express();
const path = require("path");
const mongoose = require("mongoose");
const PORT = process.env.PORT || 3001;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

require("./controllers/api.js")(app);

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/nytScrubber");

app.listen(PORT,()=>{
  console.log(`Listening in on...${PORT}`);
})
