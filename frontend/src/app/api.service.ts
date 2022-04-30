import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http"
@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private httpClient: HttpClient) { }


  // see the params mentioned in the backend question file. write in format shown below.
  // func_name(param1: type1, param2: type2, ...) {
  //   return this.http.{{query type}}<any>("http://localhost:{{port number here}}/api/{{api name here}}", {params: {param1: param1, param2: param2, ...}})}});
  // }
  viewQuestions(user_id: string){
    this.httpClient.post<any>("http://localhost:8080/api/view_questions",{user_id:user_id}).subscribe( 
      (data) => {
        console.log(data);
        return data;
      }
    );
  }

  getQuestion(qid: string){
    this.httpClient.post<any>("http://localhost:8080/api/get_question",{qid: qid}).subscribe( 
      (data) => {
        console.log(data);
      }
    );
  }
  
  addQuestion(question_id: string, user_id: string, question: string, difficulty: string, type_of_question: string){
    this.httpClient.post<any>("http://localhost:8080/api/add_question", {question_id: question_id, user_id:user_id, question:question, difficulty:difficulty, type_of_question:type_of_question}).subscribe( 
      (data) => {
        console.log(data);
      }
    );
  }

  deleteQuestion(qid: string){
    this.httpClient.post<any>("http://localhost:8080/api/delete_question",{qid: qid}).subscribe( 
      (data) => {
        console.log(data);
      }
    );
  }

  updateQuestion(question_id: string, user_id: string, question: string, difficulty: string, type_of_question: string){
    this.httpClient.post<any>("http://localhost:8080/api/update_question", {question_id: question_id, user_id:user_id, question:question, difficulty:difficulty, type_of_question:type_of_question}).subscribe( 
      (data) => {
        console.log(data);
      }
    );
  }
  
  standardTest(type: string){
    this.httpClient.post<any>("http://localhost:8080/api/standard_test", {exam_type: type}).subscribe( 
      (data) => {
        console.log(data);
      }
    );
  }
    
  customTest(topic: string, subtopic: string, difficulty: string, type_of_ques: string, num_ques: string){
    this.httpClient.post<any>("http://localhost:8080/api/custom_test", {topic: topic, subtopic:subtopic, difficulty:difficulty, type_of_ques:type_of_ques, num_ques:num_ques}).subscribe( 
      (data) => {
        console.log(data);
      }
    );
  }

  reviewTests(user_id: string){
    this.httpClient.post<any>("http://localhost:8080/api/review_tests",{user_id: user_id}).subscribe( 
      (data) => {
        console.log(data);
      }
    );
  }

  getUserType(auth_token:string){
    return this.httpClient.get<any>("http://localhost:8080/api/getUserType", {params: {auth_token: auth_token}});
  }
  reviewTest(test_id: string, user_id: string){
    this.httpClient.post<any>("http://localhost:8080/api/review_test",{test_id:test_id,user_id: user_id}).subscribe( 
      (data) => {
        console.log(data);
      }
    );
  }


    
    
}
