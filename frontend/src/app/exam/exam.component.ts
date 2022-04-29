import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import screenfull from "screenfull";
import { Directive, HostListener } from '@angular/core';
// import { LoggingService } from '../logging.service';

@Directive({
  selector: '[appBlockCopyPaste]'
})
export class BlockCopyPasteDirective {
  constructor() { }

  @HostListener('paste', ['$event']) blockPaste(e: KeyboardEvent) {
    e.preventDefault();
  }

  @HostListener('copy', ['$event']) blockCopy(e: KeyboardEvent) {
    e.preventDefault();
  }

  @HostListener('cut', ['$event']) blockCut(e: KeyboardEvent) {
    e.preventDefault();
  }
 
}

@Component({
  selector: 'app-exam',
  templateUrl: './exam.component.html',
  styleUrls: ['./exam.component.css']
})
export class ExamComponent implements OnInit {
  
  constructor() {
   }
  @ViewChild('notif') notif!: ElementRef;
  ngOnInit(): void {
    if(screenfull.isEnabled) {
      screenfull.request();
    }
    screenfull.on('change', () => {
      console.log('Am I fullscreen?', screenfull.isFullscreen ? 'Yes' : 'No');
    });
  }
  
  full_screen():void{
    if(screenfull.isEnabled) {
      screenfull.request();
    }
  }
  question_number = 1;
  total_questions = 30;
  question = {text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. "+this.question_number, options: [{text: "lorem ipsum", selected: 0}, {text: "lorem ipsum", selected: 0}, {text: "lorem ipsum", selected: 0}, {text: "lorem ipsum", selected: 0}]};

  next(){
    console.log(this.curr_time);
    if(this.question_number < this.total_questions){
      this.question_number++;
      this. question = {text: "lorem ipsum "+this.question_number, options: [{text: "lorem ipsum", selected: 0}, {text: "lorem ipsum", selected: 0}, {text: "lorem ipsum", selected: 0}, {text: "lorem ipsum", selected: 0}]};
    }
    else{
    this.notif.nativeElement.innerHTML = "end of test";
    this.notif.nativeElement.style.display = "block";
    setTimeout(() => {
      this.notif.nativeElement.style.display = "none";
    }
    , 2000);}
  
  }

  submit(){
    console.log("submit");
  }

  prev(){
    this.question_number--;
    this.question = {text: "lorem ipsum "+this.question_number, options: [{text: "lorem ipsum", selected: 0}, {text: "lorem ipsum", selected: 0}, {text: "lorem ipsum", selected: 0}, {text: "lorem ipsum", selected: 0}]};
  }

  option_select = this.question.options[0].selected+this.question.options[1].selected+this. question.options[2].selected+this. question.options[3].selected > 0? true: false;
  selectAnswer(i:number){
    this.question.options[i].selected = 1 - this.question.options[i].selected;
    this.option_select = this.question.options[0].selected+this.question.options[1].selected+this. question.options[2].selected+this. question.options[3].selected > 0? true: false;
  }


  style1 = true;
  style2 = false;
  question_set = [{number: 1, attempt: 1}, {number: 2, attempt: 1}, {number: 3, attempt: 1}, {number: 4, attempt: 1}, {number: 5, attempt: 1}, {number: 6, attempt: 1}, {number: 7, attempt: 1}, {number: 8, attempt: 1}, {number: 9, attempt: 1}, {number: 10, attempt: 1}];
  
  onfinish(){
    this.notif.nativeElement.innerHTML = "This test has ended. please wait while we confirm your submission";
    this.notif.nativeElement.style.display = "block";
    setTimeout(() => {
      this.notif.nativeElement.style.display = "none";
    }
    , 10000);
  }

  @HostListener('document:keydown', ['$event']) onKeydownHandler(e: KeyboardEvent) {
    if(e.key === "Escape"){
    this.notif.nativeElement.innerHTML = "do not attempt to leave the test";
    this.notif.nativeElement.style.display = "block";
    setTimeout(() => {this.notif.nativeElement.style.display = "none";}, 2000);}
  }
  @HostListener('window:blur', ['$event'])
    onBlur(event: any): void {
      this.notif.nativeElement.innerHTML = "do not attempt to leave the test";
      this.notif.nativeElement.style.display = "block";
      setTimeout(() => {this.notif.nativeElement.style.display = "none";}, 2000);
    }
    @HostListener('window:resize', ['$event'])
    onresize(event: any): void {
      this.notif.nativeElement.innerHTML = "do not attempt to leave the test";
      this.notif.nativeElement.style.display = "block";
      window.resizeTo(screen.width, screen.height);
      setTimeout(() => {this.notif.nativeElement.style.display = "none";}, 2000);
    }
    curr_time = new Date().getTime();

}

