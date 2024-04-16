const express = require("express");
const cors = require("cors");
const body_parser = require("body-parser")
const app = express();

const routes = require("./routes")

app.use(cors());

app.use(cors({
    origin: "*", 
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true
}));

app.use(body_parser.json())
app.use("/",routes)


module.exports = app;
