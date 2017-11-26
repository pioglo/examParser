import { Component, NgModule } from '@angular/core';
import { NgModel } from '@angular/forms';
import { DataService } from './data.service';
import { Exam, Question } from './classes';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(private _dataService: DataService) {
  }

}