import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from '../login/login.component';
import { RegisterComponent } from '../login/register/register.component';


const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'reg', component: RegisterComponent }
  
];
@NgModule({
imports: [RouterModule.forRoot(routes)],
exports: [RouterModule]
})
export class ApproutingModule { }

export const routingComponent =[LoginComponent, RegisterComponent]