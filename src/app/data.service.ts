import { Injectable } from '@angular/core';

import { Http, Response, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';

import { Exam, Question } from './classes'

@Injectable()
export class DataService {
  adminMode: boolean = false;

  constructor(private _http: Http) { }

  async getExams(): Promise<Exam[]>  {
    let result = await this._http.get("/api/exams").toPromise();
    console.log(result.json().data);
    return result.json().data as Exam[];
  }

  addExam(exam: Exam) {
    return this._http.post("/api/exam", exam)
      .map(result => result.json())
      .subscribe();
  }

  login(login: string, password: string) {
    if (login === 'admin' && password === '1q2w3e4rY') {
      this.adminMode = true;
    } else {
      this.adminMode = false;
    }
  }
}