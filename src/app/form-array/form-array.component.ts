import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-array',
  templateUrl: './form-array.component.html',
  styleUrls: ['./form-array.component.css']
})
export class FormArrayComponent implements OnInit {
  personalForm: FormGroup = this.fb.group({});

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.personalForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      addresses: this.fb.array([]) // Initialize as empty FormArray
    });

    // Add a default address form group
    this.addAddress();
  }

  get addresses(): FormArray {
    return this.personalForm.get('addresses') as FormArray;
  }

  addAddress(): void {
    const addressFormGroup = this.fb.group({
      street: ['', Validators.required],
      city: ['', Validators.required],
      state: ['', Validators.required],
      zip: ['', [Validators.required, Validators.pattern('\\d{5}')]]
    });

    this.addresses.push(addressFormGroup);
  }

  removeAddress(index: number): void {
    this.addresses.removeAt(index);
  }

  onSubmit(): void {
    console.log(this.personalForm.value);
  }
}
