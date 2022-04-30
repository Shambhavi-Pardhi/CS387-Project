import { Component, ElementRef, OnInit, ViewChild, Directive, HostListener } from '@angular/core';
import { text } from 'body-parser';


@Component({
  selector: 'app-review-ques-component',
  templateUrl: './review-ques-component.component.html',
  styleUrls: ['./review-ques-component.component.css']
})
export class ReviewQuesComponentComponent implements OnInit {

  constructor() { }

   @ViewChild('notif') notif!: ElementRef;

  ngOnInit(): void {
  }

  tests = {test_list: [{text: "Question-1"},{text: "Question-2"},{text: "Question-3"},{text: "Question-4"}]};


}
