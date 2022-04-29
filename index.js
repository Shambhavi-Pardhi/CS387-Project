const express = require('express');
const Pool = require('pg').Pool;
const question = require('./question');
const QueryBuilder = require('pg-pool-query-builder');
const bodyParser = require("body-parser");
const app = express();
const port = 8080;
const pool = new QueryBuilder({
    user: "",
    host: "",
    database: "",
    password: "",
    port: "",
})

app.get("/", (req, res)=>{
    res.send("gotit");
})

app.get("/api/add_question", (req, res)=>{
    var x = Question.addQuestion(pool, req.body);
    console.log(x);
    res.send(x);
})

app.listen(8080, ()=>{console.log("listening on port 8080")});