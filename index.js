const express = require("express");
const axios = require("axios");

const app = express();

app.get("/", async (req, res) => {
  const result = await axios.get(
    "https://www.techinasia.com/wp-json/techinasia/2.0/posts"
  );

  res.send(result.data);
});

app.get("/:slug", async (req, res) => {
  const result = await axios.get(
    `https://www.techinasia.com/wp-json/techinasia/2.0/posts/${req.params.slug}`
  );

  res.send(result.data);
});

app.listen(process.env.PORT || 7200, () => {
  console.log("OK");
});
