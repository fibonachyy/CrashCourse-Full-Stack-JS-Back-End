const express = require("express");
const app = express();
const { api } = require("./Router");
const Config = require("./Config");
const bodyParser = require("body-parser");
function startApi() {
  app.use(bodyParser.urlencoded({ extended: false }));
  app.use(bodyParser.json());

  app.use("/api", api);

  app.use(function (req, res) {
    res.setHeader("Content-Type", "text/plain");
    res.write("you posted:\n");
    res.end(JSON.stringify(req.body, null, 2));
  });

  const port = 3000;
  app.listen(port, () => {
    console.log(`application run on port: ${port}`);
  });
}

function Run() {
  Config.mongoConnection()
    .then(startApi)
    .catch((e) => {
      console.error(e);
    });
}

Run();
