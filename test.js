const Pool = require('pg').Pool;

const pool = new Pool({
    user: "postgres",
    host: "localhost",
    database: "DB-Project",
    password: "sunflower050115",
    port: 5432,
})


// random selection from array of n size
const random_select = (array, n)=>{
    if(array == undefined || n == undefined){
        throw "UNDEFINED INPUT";
    }
    if(array.length < n){
        throw "INVALID INPUT";
    }  
    let return_data = [];
    for(let i=0; i<n; i++){
        let index = Math.floor(Math.random() * array.length);
        return_data.push(array[index]);
        array.splice(index, 1);
    }
    return return_data;
}

// TO-DO

// 1) function to generate a test (for students)
// ARGS:
//      -> test_type
//      -> topics
//      -> subtopics
const generateTest = (pool, test_type, topics, subtopics, user_id)=>{
    if(test_type == undefined || topics == undefined || subtopics == undefined){
        throw "UNDEFINED INPUT";
    }
    let return_data = pool.insert()
                        .into("test")
                        .values([test_type, topics, subtopics])
                        .syncExecute()
                        .catch(err=>{throw err;});
    // return return_data;

    let question_ids = pool.select("id")
                        .from("question")
                        .where("question_id")
                        .not()
                        .in()
                        .startSubquery()
                        .select("question_id")
                        .from("user_question")
                        .where("user_id")
                        .equals(user_id)
                        .endSubquery()
                        .syncExecute()
                        .catch(err=>{throw err;});

     let return_data2 = [];                   
    for (question_id in random_select(question_ids)){

        let data = pool.insert()
                            .into("test_question")
                            .values([test_id, question_id])
                            .syncExecute()
                            .catch(err=>{throw err;});
        return_data2.push(data);
    }
    return return_data2;
}

const generateCustomTest = async (req, topic, subtopic, difficulty, type_of_ques, num_ques)=>{
    const user_id = req.params.user_id;
    if(custom == undefined){
        throw "UNDEFINED INPUT";
    }
    return new Promise(function(resolve, reject) {
        pool.query(`insert into test values ${user_id}`, (error, results) => {
            if(error) {
                reject(error)
            }
            resolve(results.rows);
        });

        pool.query(`select * from (select question.question_id, question.question from question, tag where tag.question_id=question.question_id and tag.topic_id=${topic} and tag.subtopic_id=${subtopic} and difficulty=${difficulty} and type_of_question=${type_of_ques} limit ${num_ques}) as q, opt where opt.question_id=q.question_id`)
    })
}


const reviewTests = (req)=>{
    const user_id = req.params.user_id;
    return new Promise(function(resolve, reject) {
        pool.query(`select * from test where user_id=${user_id}`, (error, results) => {
            if(error) {
                reject(error)
            }
            resolve(results.rows);
        })
    })
}

const reviewTest = (req)=>{
    const test_id = req.params.test_id;
    const user_id = req.params.user_id;
    return new Promise(function(resolve, reject) {
        pool.query(`with x as (
            select question.question_id, question.question from question, test, attempt where test.test_id=3900 and test.user_id=8731 and test.test_id=attempt.test_id and attempt.question_id=question.question_id
        ), y as (
            select question.question_id, opt.options from opt, question, test, attempt where test.test_id=3900 and test.user_id=8731 and opt.question_id=question.question_id and test.test_id=attempt.test_id and attempt.question_id=question.question_id
        ), z as (
            select question.question_id, opt.options from opt, question, test, attempt where test.test_id=3900 and test.user_id=8731 and correct and test.test_id=attempt.test_id and attempt.question_id=opt.question_id and opt.question_id=question.question_id
        )
        select x.question_id, x.question, y.options, z.options as correct_ans, attempt.answergiven from x,y,z,attempt, test where test.test_id=3900 and test.user_id=8731 and test.test_id=attempt.test_id and attempt.question_id=x.question_id and x.question_id=y.question_id and y.question_id=z.question_id`, (error, results) => {
            if(error) {
                reject(error)
            }
            resolve(results.rows);
        })
    })
}

// 1) function to generate a test (for teachers)
// ARGS:
//      -> test_type
//      -> topics
//      -> subtopics


module.exports = {reviewTests, reviewTest};
