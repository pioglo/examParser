import { Component, NgModule, OnInit, ViewEncapsulation } from '@angular/core';
import { Exam, Question } from '../classes';
import { NgModel } from '@angular/forms';
import { DataService } from '../data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class HomeComponent implements OnInit {
  exam: Exam;
  examId: string = "";
  numbers: number[];
  questionsLeft: Question[] = [];
  questionsRight: Question[] = [];

  constructor(private _dataService: DataService, private router: Router) { 
  }

  ngOnInit() {
    this.generateEmptyExam();
    this.fillTables();
  }

  generateExam() {
    if (this.examId.length === 0) {
      alert("Please, insert exam code number.");
    } else {
      this.exam.examId = this.examId;
      this.exam.questions = [];
      for (let i=0; i<50; i++) {
        let question = new Question();
        question.questionId = i+1;
        do {
          question.answears = [];
          for(let j=0; j<4; j++) {
            question.answears.push(Boolean(Math.round(Math.random())));
          }
        } while (this.allFalse(question))
        this.exam.questions.push(question);
      }
    }
    
  }

  allFalse(question: Question) {
    if (question.answears[0] === false && question.answears[1] === false && question.answears[2] === false && question.answears[3] === false) {
      return true;
    }
    return false;
  }

  generateEmptyExam() {
    this.exam = new Exam();
    this.exam.examId = "";
    this.exam.questions = [];
    for (let i=0; i<50; i++) {
      let question = new Question();
      question.questionId = i+1;
      for(let j=0; j<4; j++) {
        question.answears.push(false);
      }
      this.exam.questions.push(question);
    }
  }

  fillTables() {
    this.questionsLeft = [];
    this.questionsRight = [];
    for (let i=0; i<50; i++) {
      if (i < 25) {
        this.questionsLeft.push(this.exam.questions[i]);
      } else {
        this.questionsRight.push(this.exam.questions[i]);
      }
    }
  }

  onGenerateExamClick() {
    this.generateExam();
    this.fillTables();
  }

  onLoginBtnClick() {
    this.router.navigateByUrl('/login');
  }

  onSendResultsClick() {
    if (confirm("Are you sure you have marked all the right answears?")) {
      let tmp = this._dataService.addExam(this.exam);
      this.generateEmptyExam();
      this.fillTables();
    }
  }
}
