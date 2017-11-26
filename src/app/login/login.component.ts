import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { DataService } from '../data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class LoginComponent implements OnInit {
  login: string;
  password: string;

  constructor(private _dataService: DataService, private router: Router) { }

  ngOnInit() {
  }

  onLoginClick() {
    this._dataService.login(this.login, this.password);
    if (this._dataService.adminMode){
      this.router.navigateByUrl('/admin');
    } else {
      this.router.navigateByUrl('/home');
    }
  }
}