const https = require('https')

async function first_login(pool, req, response){
    home_url = "localhost:4200";
    redirect_uri = "http://localhost:8080/api/login"
    if(req.query.code == undefined){
        response.redirect(home_url);
        return;
    }
    var AUTH_CODE = req.query.code;
    var request_query = "code="+AUTH_CODE+"&redirect_uri="+redirect_uri+"&grant_type=authorization_code";
    console.log(AUTH_CODE);
    const options = {
        hostname: "gymkhana.iitb.ac.in",
        path: "/profiles/oauth/token",
        method: "POST",
        headers: {
            "Authorization": "Basic dWdsc0FXTW5kdkRBMW1McjNGb1QwR0JtbkFKZWtGMUJuRjV6ZUxpMDpTdExXYnNMaXRvYW1sSVBOeDdKTVhQNGdwd3RZRlI5cUN6eVJ6cFhQSThyQU8zaWVDaG1aM2taWVlqRFJJb1FHeVFCd0hZTGZuUTFWUWx2bFA2alpoaWxDa0l5N2FUNW13RkR4cHByNlN0cVdGVThrM2hzZ09EQ0kxU0pCMWlUcA==",
			'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
        }
    }
    console.log("here1");
    const request = await https.request(options, (res)=>{
        let data = "";
        console.log(data);
        res.on('data', (chunk)=>{
            data+=chunk;
        })
        console.log(data);
        res.on('end', ()=>{
            var responseResult;
			try {
				responseResult = JSON.parse(data);
			}
			catch (err) {
				return response.redirect(home_url);
			}
            if(responseResult.access_token == undefined){
                return response.redirect(home_url);
            }
            const options2 = {
                hostname: "gymkhana.iitb.ac.in",
                path: "/profiles/user/api/user?fields=first_name,last_name,type,email,program",
                method: "GET",
                headers: {
                    'Authorization': "Bearer "+responseResult.access_token,
                }
            };

            const user_data = await https.request(options2, (res)=>{
                console.log(here);
                let data = "";
                res.on('data', (chunk)=>{
                    data+=chunk;
                })
                res.on('end', ()=>{
                    var responseResult;
                    try {
                        responseResult = JSON.parse(data);
                    }
                    catch (err) {
                        return response.redirect(home_url);
                    }
                    if(responseResult.access_token == undefined){
                        return response.redirect(home_url);
                    }
                    console.log(responseResult, "lalalalal");
                    response.redirect(home_url);
                    // use user data here
                    // TO-DO
                    // 1) return the type of user to differentiate between student and prof
                    // 2) send cookie to user to store so that access token is saved, to save furher logins
                    // 3) store refresh token in the database
                    // 4) add a function to login users that are in database using refresh token
                })
            })
        })
    })
    console.log("lalala");
}

// TO-DO
// check if there is a user with given access token in the db.
//ARGS:
//      -> user_id      (int)
//      -> access_token (string)


function re_login(req, res){

}

// TO-DO
// FOR BACKEND USE ONLY
// confirm the type of user( faculty/ student )
// ARGS:
//      -> type         (string)
//      -> access_token (string)



function confirm_type(type, access_token){

}

module.exports = {first_login, re_login, confirm_type};



const https = require('https');



