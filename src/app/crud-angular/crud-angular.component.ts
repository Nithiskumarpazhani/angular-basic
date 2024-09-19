import { Component, Input, OnInit } from '@angular/core';
import { CrudAngularService } from '../crud-angular.service';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-crud-angular',
  templateUrl: './crud-angular.component.html',
  styleUrls: ['./crud-angular.component.css']
})
export class CrudAngularComponent implements OnInit {
  userData:any;
  userForm!: FormGroup;
  editUserForm!: FormGroup;
  showEditUserForm = false;
  editFormId: any;

  // variables to status of request;
  userCreated = false;
  userEdited = false;
  userDeleted = false;
  userDeletedId: any;
  //SERVICE CONTAINS PUT,POST,DELETE,GET
  constructor(private userDataService: CrudAngularService, private fb: FormBuilder) { }

  ngOnInit() {
    this.userDataService.getUserData().subscribe((data) => {
      console.log('data', data);
      this.userData = data;
    });

    this.initForm();
  }

  initForm() {
    this.userForm = this.fb.group({
      name: [],
      username: [],
      email: []
    });
  }

  createUser(event:any, userform:any) {
    const userData = userform.value;
    this.userDataService.createUser(userData).subscribe((data) => {
      console.log('user created', data);
      this.userCreated = true;
      setTimeout(() => {
        this.userCreated = false;
      }, 2000);
    });
  }

  editUser(event:any, data:any) {
    this.showEditUserForm = true;
    this.editFormId = data.Id;
    this.editUserForm = this.fb.group({
      id: [data.id],
      name: [data.name],
      username: [data.username],
      email: [data.email]
    });
  }

  editUserData(event:any, userform:any) {
    const userData = userform.value;
    this.userDataService.editUser(userData).subscribe((data) => {
      console.log('user edited', data);
      this.userEdited = true;
      setTimeout(() => {
        this.userEdited = false;
        this.showEditUserForm = false;
      }, 2000);
    });
  }

  deleteUser(event:any, userData:any) {
    this.userDataService.deleteUser(userData).subscribe((data) => {
      console.log('user deleted', data);
      this.userDeletedId = userData.id;
      this.userDeleted = true;
      setTimeout(() => {
        this.userDeleted = false;
      }, 2000);
    });
  }


 

}
