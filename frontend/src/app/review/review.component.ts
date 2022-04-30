import { Component, ElementRef, OnInit, ViewChild, Directive, HostListener } from '@angular/core';
import { text } from 'body-parser';

@Component({
  selector: 'app-review',
  templateUrl: './review.component.html',
  styleUrls: ['./review.component.css']
})
export class ReviewComponent implements OnInit {

  constructor() { }

   @ViewChild('notif') notif!: ElementRef;

  ngOnInit(): void {
  }

  tests = {test_list: [{text: "Test-1"},{text: "Test-2"},{text: "Test-3"},{text: "Test-4"}]};


}
