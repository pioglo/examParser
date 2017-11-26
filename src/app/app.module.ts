import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule, MatInputModule, MatGridListModule, MatFormFieldModule } from '@angular/material';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router'
import 'hammerjs';

import { HttpModule } from '@angular/http';
import { DataService } from './data.service';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { AdminComponent } from './admin/admin.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    AdminComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    HttpModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatInputModule,
    MatGridListModule,
    MatFormFieldModule,
    RouterModule.forRoot([
      {
        path: '',
        component: HomeComponent
      },
      {
        path: 'home',
        component: HomeComponent
      },
      {
        path: 'login',
        component: LoginComponent
      },
      {
        path: 'admin',
        component: AdminComponent
      }
    ])
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
