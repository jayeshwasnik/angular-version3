import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

 public firstName;
     public password;
    public    lastName;
      public   email;
     public   mobileNumber;


  constructor() { }

  ngOnInit() {
  }

  public signupFunction=()=>{
    public data={
      firstName:this.firstName,
     password:this.password,
    lastName:this.lastName,
    email:this.email,
      mobileNumber:this.mobileNumber
    };

  }

}