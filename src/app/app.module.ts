import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { FlexLayoutModule } from '@angular/flex-layout';
// import { LoginComponent } from './login/login.component';
// import { RegisterComponent } from './login/register/register.component';
import { RouterModule, Routes } from '@angular/router';
import { ApproutingModule, routingComponent} from './approuting/approuting.module';
import { ChannalsComponent } from './channals/channals.component';


@NgModule({
  imports:      [ BrowserModule, FormsModule ,FlexLayoutModule ,RouterModule,ApproutingModule,MatButtonModule],
  declarations: [ AppComponent,routingComponent, ChannalsComponent],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
