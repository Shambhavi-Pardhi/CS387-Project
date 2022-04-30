// const express = require('express');
// const app = express();
// const port = 3000;

// const Question = require('./question');
// const Test = require('./test');
// //const QueryBuilder = require('pg-pool-query-builder');
// //const bodyParser = require("body-parser");
// app.use(express.json())
// app.use(function(req, res, next) {
//     res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
//     res.setHeader('Access-Control-Allow-Methods', 'GET,POST,PUT,DELETE,OPTIONS');
//     res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Access-Control-Allow-Headers');
//     next();
// });


// app.get("/", (req, res)=>{
//     res.send("DB Project!!");
// })


// // app.get("/api/add_question", (req, res)=>{
// //     var x = Question.addQuestion(pool, req.body);
// //     console.log(x);
// //     res.send(x);
// // })


// app.get("/api/:user_id/custom_test", (req, res)=>{
//     // const user_id = req.body.user_id;

//     Test.generateCustomTest(req)
//         .then(response => {
//             res.status(200).send(response);
//             // console.log(response);
//         })
//         .catch(error => {
//             res.status(500).send(error);
//         })
// })

// app.get("/api/:user_id/review_tests", (req, res)=>{
//     Test.reviewTests(req)
//         .then(response => {
//             res.status(200).send(response);
//         })
//         .catch(error => {
//             res.status(500).send(error);
//         })
// })

// app.get("/api/review_test/", (req, res)=>{
//     Test.reviewTest(req)
//         .then(response => {
//             res.status(200).send(response);
//         })
//         .catch(error => {
//             res.status(500).send(error);
//         })
// })

// app.get("/api/get_question", (req, res)=>{
//     Question.getQuestion(req)
//         .then(response => {
//             res.status(200).send(response);
//         })    
//         .catch(error => {
//             res.status(500).send(error);
//         })    
// })        

// app.get("/api/add_question", (req, res)=>{
//     // const question = req.body.question;
//     Question.addQuestion(req)
//         .then(response => {
//             res.status(200).send(response);
//             // console.log(response);
//         })
//         .catch(error => {
//             res.status(500).send(error);
//         })
// })

// app.get("/api/delete_question", (req, res)=>{
//     Question.deleteQuestion(req)
//         .then(response => {
//             res.status(200).send(response);
//         })
//         .catch(error => {
//             res.status(500).send(error);
//         })
// })

// app.get("/api/update_question", (req, res)=>{
//     // const question = req.body.question;
//     Question.updateQuestion(req)
//         .then(response => {
//             res.status(200).send(response);
//             // console.log(response);
//         })
//         .catch(error => {
//             res.status(500).send(error);
//         })
// })

// app.get("/api/standard_test", (req, res)=>{
//     // const exam_type = req.body.exam_type;
//     const exam_type = "JEE-Mains";
//     Test.getStandardTests(req, exam_type)
//         .then(response => {
//             res.status(200).send(response);
//         })
//         .catch(error => {
//             res.status(500).send(error);
//         })
// })

// app.get("/api/:user_id/view_questions", (req, res)=>{
//     Question.viewQuestions(req)
//         .then(response => {
//             res.status(200).send(response);
//             console.log(response);
//         })
//         .catch(error => {
//             res.status(500).send(error);
//         })
// })

// app.listen(3000, ()=>{console.log(`listening on port ${port}`)});





const express = require('express');
const app = express();
const port = 3000;

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
    res.send("DB Project Backend!!");
})


// app.get("/api/add_question", (req, res)=>{
//     var x = Question.addQuestion(pool, req.body);
//     console.log(x);
//     res.send(x);
// })


app.get("/:user_id/custom_test", (req, res)=>{
    Test.generateCustomTest(req, topic, subtopic, difficulty, type_of_ques, num_ques)
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

app.get("/:qid/get_question", (req, res)=>{
    Question.getQuestion(req)
        .then(response => {
            res.status(200).send(response);
        })    
        .catch(error => {
            res.status(500).send(error);
        })    
})        

app.get("/add_question", (req, res)=>{
    const question = "(509,1,\'TLKJBWRLKJT\',1,\'SCQ\')";
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

app.get("/:qid/delete_question", (req, res)=>{
    Question.deleteQuestion(req)
        .then(response => {
            res.status(200).send(response);
        })
        .catch(error => {
            res.status(500).send(error);
        })
})

app.get("/:qid/update_question", (req, res)=>{
    const question = "user_id=2,question=\'KJSHDFJK\',difficulty=4,type_of_question=\'MCQ\'";
    // const question = req.body.question;
    Question.updateQuestion(req,question)
        .then(response => {
            res.status(200).send(response);
            // console.log(response);
        })
        .catch(error => {
            res.status(500).send(error);
        })
})

app.get("/standard_tests", (req, res)=>{
    // const exam_type = req.body.exam_type;
    const exam_type = "JEE-Mains";
    Test.getStandardTests(req, exam_type)
        .then(response => {
            res.status(200).send(response);
            console.log(response);
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

app.listen(3000, ()=>{console.log(`listening on port ${port}`)});