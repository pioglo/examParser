import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../data.service';
import { Exam } from '../classes';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class AdminComponent implements OnInit {
  exams: Exam[] = [];
  encodedUri: string;

  constructor(private _dataService: DataService, private router: Router) { }
  
  async ngOnInit() {
    this.exams = await this._dataService.getExams();
  }

  onSave() {
    let csvContent = "";
    this.exams.forEach(exam => {
      let row = exam.examId + "\r\n";
      exam.questions.forEach(question => {
        row += question.questionId.toString() + ";" + question.answears.join(";") + "\r\n";
      });
      csvContent += row;
    });
    var blob = new Blob([csvContent], { type: 'text/csv' });
    var url = window.URL.createObjectURL(blob);
    const a: HTMLAnchorElement = document.createElement('a') as HTMLAnchorElement;
        a.href = url;
        a.download = "exams.csv";
        document.body.appendChild(a);
        a.click();        
    
        document.body.removeChild(a);
        URL.revokeObjectURL(url);
  }

}
