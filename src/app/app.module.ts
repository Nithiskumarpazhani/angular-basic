import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductsComponent } from './products/products.component';
import { HttpClientModule } from '@angular/common/http';
import { CrudAngularComponent } from './crud-angular/crud-angular.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';
import { FormArrayComponent } from './form-array/form-array.component';

@NgModule({ // this is used to define the root module.
  declarations: [ // this array contains a list of components..dir,pipe, that belong to this module
    AppComponent,
    ProductsComponent,
    CrudAngularComponent,
    ParentComponent,
    ChildComponent,
    FormArrayComponent
  ],
  imports: [ // this array contains a list of modules that are used for our angular applications.
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [], // this array is used to register the services.
  bootstrap: [AppComponent] // this array contains the root component of the application.Angular will get bootstrap when we start the application.
})
export class AppModule { }
