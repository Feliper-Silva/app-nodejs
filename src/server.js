const express = require("express");

const stats = require("./pcRamUsage");
const app = express();
const host = "http://localhost";
const port = 3000;

app.use((req, res) => {
  let url = req.url;
  if (url === "/stats") {
    res.end(JSON.stringify(stats, null, 2));
  } else {
    res.end("<h1> Seja bem-vindo</h1>");
  }
});
app.listen(port, () => console.log(`Server is running in ${host}:${port}`));
