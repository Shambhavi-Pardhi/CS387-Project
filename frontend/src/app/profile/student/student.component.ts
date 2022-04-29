import { Component, OnInit } from '@angular/core';
import { FormControl, Form, FormGroup, ReactiveFormsModule } from '@angular/forms';
@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {

  constructor() { }
  customForm = new FormGroup({
  difficulty : new FormControl(),
  topics : new FormControl(),
  sub_topics : new FormControl(),
  number_of_questions : new FormControl(),
  format : new FormControl(),
  })


  ngOnInit(): void {
  }

  generatecustom(){
    console.log(this.customForm.get('difficulty')!.value),
    console.log(this.customForm.get('topics')!.value),
    console.log(this.customForm.get('sub_topics')!.value),
    console.log(this.customForm.get('number_of_questions')!.value),
    console.log(this.customForm.get('format')!.value)
  }

  difficulties = ["easy", "medium", "hard"];
  topics_list = ["Algorithms", "Data Structures", "Operating Systems", "Programming Languages", "Web Development"];
  sub_topics_list = ["Sorting", "Searching", "Graphs", "Trees", "Binary Trees", "Heaps", "Hashing", "Linked Lists", "Queues", "Stacks", "Tries"];
  formats = ["MCQ", "Fill in the Blank", "Programming"];
  number_of_questions_list = [5, 10, 15, 20, 25, 30, 35, 40, 45, 50];

}
