const express = require("express");
const serverConfig = require('./configs/server.config')

const app = express();

app.listen(7777, (serverConfig , PORT) => {
  console.log("server started");
});
