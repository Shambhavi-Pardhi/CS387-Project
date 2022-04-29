const https = require('https')

async function first_login(req, response, Session){
    home_url = "localhost:4200";
    redirect_uri = "http://localhost:8080/api/login"
    if(req.body.code == undefined){
        response.redirect(home_url);
        return;
    }
    var AUTH_CODE = req.query.code;
    var request_query = "code="+AUTH_CODE+"&redirect_uri="+redirect_uri+"&grant_type=authorization_code";

    const options = {
        hostname: "gymkhana.iitb.ac.in",
        path: "/profiles/oauth/token",
        method: "POST",
        headers: {
            "Authorization": "Basic MTNsZVN0ekdabHNiQXFrWTdtYnkzQUZJdWVvUjNIdGJBSWRmQVo1NDpYOXZqTzZYV0F3bG1YUWN1T0NWYzNVY0hiaVRpYWdNYm9tN2VSQXoxdlJqWXY2a1NkcE8wRjdPZUpkamFpUnFhNm9UVElmRWZVZVNYVlNHOEVuTnhMR0dCTWhSMWdUMkdGcVdjNE5qSkEycmQ1bXdjdGpWN255MjB1T1F1RzJaWQ==",
			'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
        }
    }

    const request = https.request(options, (res)=>{
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
            const options2 = {
                hostname: "gymkhana.iitb.ac.in",
                path: "/profiles/user/api/user?fields=first_name,last_name,type,email,program",
                method: "GET",
                headers: {
                    'Authorization': "Bearer "+responseResult.access_token,
                }
            };

            const user_data = https.request(options2, (res)=>{
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