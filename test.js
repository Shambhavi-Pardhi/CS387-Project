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




// 1) function to generate a test (for teachers)
// ARGS:
//      -> test_type
//      -> topics
//      -> subtopics

