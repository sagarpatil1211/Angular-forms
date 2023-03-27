import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReactiveComponent } from './reactive/reactive.component';
import { TemplateComponent } from './template/template.component';
import { ValidationComponent } from './validation/validation.component';

const routes: Routes = [
  {path:"", component:TemplateComponent},
  {path:"template", component:TemplateComponent},
  {path:"reactive", component:ReactiveComponent},
  {path:"validation", component:ValidationComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
