import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-validation',
  templateUrl: './validation.component.html',
  styleUrls: ['./validation.component.css']
})
export class ValidationComponent implements OnInit {

    loginData:any;
    info:any;

    posting = false;

  ngOnInit(): void 
  {
    this.loginData = new FormGroup(
      {
        // email : new FormControl("",Validators.compose([Validators.required, Validators.email])),

        email : new FormControl("",Validators.compose([Validators.required,Validators.email, Validators.pattern("[a-zA-Z0-9.-_]{1,}@[a-zA-Z.-]{2,}[.]{1}[a-zA-Z]{3,}")])),  // using pattern

        // password : new FormControl ("",Validators.compose([Validators.required])) 
        password :new FormControl("",Validators.compose([Validators.required]))
      }
    )
    
  }

  login(data:any)
  {
    this.posting = true
    console.log(data);
    this.info = data;
    this.loginData = new FormGroup(
      {
        email : new FormControl(""),
        password : new FormControl ("")
      }
    )
    
    
  }



}
