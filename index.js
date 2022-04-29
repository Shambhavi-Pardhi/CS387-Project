const express = require('express');
const app = express();
const port = 8080;

const Question = require('./question');
const Test = require('./test');
//const QueryBuilder = require('pg-pool-query-builder');
//const bodyParser = require("body-parser");
app.use(express.json())
app.use(function(req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
    res.setHeader('Access-Control-Allow-Methods', 'GET,POST,PUT,DELETE,OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Access-Control-Allow-Headers');
    next();
});


app.get("/", (req, res)=>{
    res.send("gotit");
})


// app.get("/api/add_question", (req, res)=>{
//     var x = Question.addQuestion(pool, req.body);
//     console.log(x);
//     res.send(x);
// })


app.get("/:user_id/custom_test", (req, res)=>{
    const question = "(502,1,\'TLKJBWRLKJT\',1,\'SCQ\')";
    Question.addQuestion(req,question)
        .then(response => {
            res.status(200).send(response);
            // console.log(response);
        })
        .catch(error => {
            res.status(500).send(error);
        })
})

app.get("/:user_id/review_test", (req, res)=>{
    Test.reviewTests(req)
        .then(response => {
            res.status(200).send(response);
        })
        .catch(error => {
            res.status(500).send(error);
        })
})

app.get("/:user_id/review_test/:test_id", (req, res)=>{
    Test.reviewTest(req)
        .then(response => {
            res.status(200).send(response);
        })
        .catch(error => {
            res.status(500).send(error);
        })
})

app.get("/add_question", (req, res)=>{
    const question = "(503,1,\'TLKJBWRLKJT\',1,\'SCQ\')";
    // const question = req.body.question;
    Question.addQuestion(req,question)
        .then(response => {
            res.status(200).send(response);
            // console.log(response);
        })
        .catch(error => {
            res.status(500).send(error);
        })
})

app.get("/:user_id/view_questions", (req, res)=>{
    Question.viewQuestions(req)
        .then(response => {
            res.status(200).send(response);
            console.log(response);
        })
        .catch(error => {
            res.status(500).send(error);
        })
})

app.listen(8080, ()=>{console.log("listening on port 8080")});