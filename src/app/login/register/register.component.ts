import { Component, OnInit } from '@angular/core';
// import { FormGroup, FormControl, Validators, FormBuilder }  from '@angular/forms';
// import {FormsModule,ReactiveFormsModule} from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor() { }

//   userForm = new FormGroup({
// 	name: new FormControl('Mahesh', Validators.maxLength(10)),
// 	age: new FormControl(20, Validators.required),
// 	city: new FormControl(),
// 	country: new FormControl()
//  });
  ngOnInit() {
  }

  name2 = " ";
  signup(val)
  {
      this.name2=val;
      localStorage.setItem("username",this.name2);
      // console.log(val);
  }

  getItem()
  {
    console.log(localStorage.getItem("username"));
  }
  
}