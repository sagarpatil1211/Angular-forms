import { Component } from '@angular/core';

@Component({
  selector: 'app-template',
  templateUrl: './template.component.html',
  styleUrls: ['./template.component.css']
})
export class TemplateComponent {

  info:any;
  save(data:any){
    console.log(data);
    this.info = data
  }
}
