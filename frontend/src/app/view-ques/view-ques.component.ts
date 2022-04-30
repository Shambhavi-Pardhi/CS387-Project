import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-view-ques',
  templateUrl: './view-ques.component.html',
  styleUrls: ['./view-ques.component.css'],
  providers: [ ApiService ]
})
export class ViewQuesComponent implements OnInit {

  public ques_lis = [];
  constructor() { }

  @ViewChild('notif') notif!: ElementRef;

  ngOnInit(): void {
  }

  questions = {ques_list: [{text: "Ques-1"}, {text: "Ques-2"}, {text: "Ques-3"}, {text: "Ques-4"}]};

  delete() {
    console.log("This question has been deleted");
  }

  update() {
    console.log("Updating this question");
  }

}
