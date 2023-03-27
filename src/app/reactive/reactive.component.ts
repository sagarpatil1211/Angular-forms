import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-reactive',
  templateUrl: './reactive.component.html',
  styleUrls: ['./reactive.component.css']
})
export class ReactiveComponent  implements OnInit{
 

  formdata:any;
  object:any;
  ngOnInit(): void {
    this.formdata = new FormGroup({
      username : new FormControl("sagar"),
      password : new FormControl ("123")
    })
  }

  save(data:any){
    console.log(data);
    this.object = data
  }

}
