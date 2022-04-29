// TO_DO

// function to fetch user data as seen by users
// ARGS:
//      ->user_id
// REQUEST_TYPE:
//      ->GET

const getUserData = (pool, user_id, access_token)=>{
    if(user_id == undefined){
        throw "UNDEFINED INPUT";
    }
    let return_data = pool.select("*")
                        .from("user")
                        .where("user_id")
                        .equals(user_id)
                        .and("access_token")
                        .equals(access_token)
                        .syncExecute()
                        .catch(err=>{throw err;});
    return return_data;
}



// function to fetch user data as seen by faculty for a topic/subtopic
// ARGS:
//      ->user_id
// REQUEST_TYPE:
//      ->GET



const getUserSubjectData = (pool, user_id, topic_id)=>{
    if(user_id == undefined || topic_id == undefined || access_token == undefined){
        throw "UNDEFINED INPUT";
    }
    let return_data = pool.select("*")
                        .from()
                        .innerJoin("user", "question")
                        .on("question_id") 
                        .where("user.id")
                        .equals(user_id)
                        .and("topic_id")
                        .equals(topic_id)
                        .syncExecute()
                        .catch(err=>{throw err;});
    return return_data;
}