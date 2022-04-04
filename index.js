const express = require('express');
const Pool = require('pg').Pool;
const QueryBuilder = require('pg-pool-query-builder');
const bodyParser = requre("bodyParser");
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

