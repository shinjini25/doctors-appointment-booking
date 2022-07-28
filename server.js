const express = require("express");

require("dotenv").config();
const dbconfig = require("./config/dbconfig");

const app = express();
const port = process.env.PORT || 5000;


console.log(process.env.MONGO_URL);

app.get("/", (req, res) => res.send("Hello World!"));
app.listen(port, () => console.log(`Node Server Started at ${port}!`));
