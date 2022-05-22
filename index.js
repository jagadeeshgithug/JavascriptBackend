const { application } = require("express");
const express = require("express");

const app = express();

const swaggerUi = require('swagger-ui-express');
const YAML = require('yamljs');
const swaggerDocument = YAML.load('./swagger.yaml');


const port = process.env.PORT || 3000;

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/api/v1/instagram", (req, res) => {
  const ojbect = {
    username: "jagadeesh",
    followers: 100,
    follows: 200,
    date: new Date(),
  };
  res.status(200).json(ojbect);
});

app.get("/api/v1/facebook", (req, res) => {
  const ojbect = {
    username: "jagadeeshnaidu",
    followers: 200,
    follows: 300,
    date: new Date(),
  };
  res.status(200).json(ojbect);
});

app.get("/api/v1/linkedIn", (req, res) => {
  const ojbect = {
    username: "kesavajagadeesh",
    followers: 50,
    follows: 500,
    date: new Date(),
  };
  res.status(200).json(ojbect);
});

app.get("/api/v1/:token", (req, res) => {
  res.send(req.params.token);
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
