const Pool = require('pg').Pool;

const pool = new Pool({
    user: "postgres",
    host: "localhost",
    database: "DB-Project",
    password: "sunflower050115",
    port: 5432,
})


// TO_DO

// 1) function to add questions
// ARGS:
//      -> question body (string)
//      -> question type (string)
//      -> difficulty    (int)
//      -> topic_id      (int)
//      -> subtopic_id   (int)
//      -> options       (Array<string>)
//      -> correct_answer(String)
// REQUEST TYPE:
//      POST

// const addQuestion = async (pool, question)=>{
//     if(question == undefined){
//         throw "UNDEFINED INPUT";
//     }
//     let return_data = pool.insert("question", Object.keys(question))
//         .values(Object.values(question))
//         .syncExecute()
//         .catch(err=>
//             {throw error;}
//         );
//     return return_data;
// }   


// const addQuestion = async (req, question)=>{
//     if(question == undefined){
//         throw "UNDEFINED INPUT";
//     }
//     return new Promise(function(resolve, reject) {
//         pool.query(`insert into question values ${question}`, (error, results) => {
//             if(error) {
//                 reject(error)
//             }
//             //resolve(results.rows);
//         })
//     })
// }

// 2) function to modify question
// ARGS:
//      -> question_id   (int)
//      -> question body (string)
//      -> question type (string)
//      -> difficulty    (int)
//      -> topic_id      (int)
//      -> subtopic_id   (int)
//      -> options       (Array<string>)
//      -> correct_answer(String)
// REQUEST TYPE:
//      UPDATE

// const updateQuestion = async (pool, question, question_id)=>{
//     if(question_id == undefined || quesiton == undefined){
//         throw "UNDEFINED INPUT";
//     }
//     let return_data = 
//                     pool.update("question")
//                         .set(question)
//                         .where("id")
//                         .equals(question_id)
//                         .syncExecute()
//                         .catch(err=>{throw err;});
//     return return_data;
                        
// }

// 3) function to delete question
// ARGS
//      -> question_id   (int)
// REQUEST TYPE:
//      DELETE

// const deleteQuestion = async (pool, question_id)=>{
//     if(question_id == undefined){
//         throw "UNDEFINED INPUT";
//     }
//     let return_data = pool.delete()
//                         .from("question")
//                         .where("id")
//                         .equals(question_id)
//                         .syncExecute()
//                         .catch(err=>{throw err;});
//     return return_data;
// }

// 4) function to fetch question
// ARGS:
//      -> question_id   (int)
// REQUEST TYPE:
//      GET

// const getQuestion = async (pool, question_id)=>{
//     if(question_id == undefined){
//         throw "UNDEFINED INPUT";
//     }
//     let return_data = pool.select("*")
//                         .from("question")
//                         .where("id")
//                         .equals(question_id)
//                         .syncExecute()
//                         .catch(err=>{throw err;});
//     return return_data;
// }

// 5) function to see question stats (for faculty)
// ARGS:
//      ->question_id    (int)

const getQuestionStats = async (pool, question_id)=>{
    if(question_id == undefined){
        throw "UNDEFINED INPUT";
    }
    let return_data = pool.select("*")
                        .from()
                        .innerJoin("question_user", "question")
                        .on("question_id")
                        .where("question_id")
                        .equals(question_id)
                        .where("id")
                        .equals(question_id)
                        .syncExecute()
                        .catch(err=>{throw err;});
    return return_data;
}


const viewQuestions = (req)=>{
    const user_id = req.params.user_id;
    return new Promise(function(resolve, reject) {
        pool.query(`select * from question, opt where user_id=${user_id} and opt.question_id=question.question_id`, (error, results) => {
            if(error) {
                reject(error)
            }
            resolve(results.rows);
        })
    })
}

const getQuestion = async (req)=>{
    const question_id = req.params.qid;
    return new Promise(function(resolve, reject) {
        pool.query(`select * from question where question_id=${question_id}`, (error, results) => {
            if(error) {
                reject(error)
            }
            resolve(results.rows);
        })
    })
}

const addQuestion = async (req, question)=>{
    if(question == undefined){
        throw "UNDEFINED INPUT";
    }
    return new Promise(function(resolve, reject) {
        pool.query(`insert into question values ${question}`, (error, results) => {
            if(error) {
                reject(error)
            }
            //resolve(results.rows);
        })
    })
}

const deleteQuestion = async (req)=>{
    const question_id = req.params.qid;
    return new Promise(function(resolve, reject) {
        pool.query(`delete from question where question_id = ${question_id}`, (error, results) => {
            if(error) {
                reject(error)
            }
            resolve(results.rows);
        })
    })
}

const updateQuestion = async (req, question)=>{
    const question_id = req.params.qid;
    if(question == undefined){
        throw "UNDEFINED INPUT";
    }
    return new Promise(function(resolve, reject) {
        pool.query(`update question set question_id=${question_id}, ${question} where question_id = ${question_id};`, (error, results) => {
            if(error) {
                reject(error)
            }
            resolve(results.rows);
        })
    })
}


module.exports = {addQuestion, updateQuestion, deleteQuestion, getQuestion, getQuestionStats, viewQuestions};
