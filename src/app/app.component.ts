import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  // `<p> Hi welcome</p>`
  styleUrls: ['./app.component.css']
  //loading 2 css files
  // styleUrls: ['./app.component.css','./Model/Sample.css']
})
/*
An Angular application is a tree of Angular components.
A component is technically a directive.
Components are the main building block for Angular 
applications. Each component consists of: 
1.An HTML template that declares what renders on the page.
2.A Typescript class that defines behavior. 
3.A CSS selector 
that defines how the component is used in a template.
*/
export class AppComponent {
  title = 'angular_basic';
  name = 'Nithiskumar';
}
