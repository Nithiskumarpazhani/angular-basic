import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
})
export class ProductsComponent implements OnInit {
  signIn: boolean = true;

  //switch case
  color1 = '';
  people: any[] = [
    {
      name: 'Abi',
      age: 23,
      country: 'INDIA',
    },
    {
      name: 'Nithis',
      age: 5,
      country: 'USA',
    },
    {
      name: 'kumar',
      age: 34,
      country: 'INDIA',
    },
    {
      name: 'pravin',
      age: 31,
      country: 'UK',
    },
  ];

  customers = [
    {
      customerNo: '1',
      name: 'xyz',
      address: '2a',
      city: 'chennai',
      state: 'TN',
    },
    {
      customerNo: '2',
      name: 'abc',
      address: '2b',
      city: 'chennai',
      state: 'TN',
    },
    {
      customerNo: '3',
      name: 'www',
      address: '2c',
      city: 'bangalore',
      state: 'KA',
    },
    {
      customerNo: '4',
      name: 'yyy',
      address: '2d',
      city: 'thiruvandrum',
      state: 'KL',
    },
    {
      customerNo: '5',
      name: 'bbb',
      address: '2a',
      city: 'coimbatore',
      state: 'TN',
    },
  ];

  getColor1() {
    return 'green';
  }

  //ngstyle
  isBold: boolean = true;
  fontSize: number = 30;
  isItalic: boolean = true;

  MyStyle() {
    let mystyles = {
      'font-weight': this.isBold ? 'bold' : 'normal',
      'font-style': this.isItalic ? 'italic' : 'normal',
      'font-size.px': this.fontSize,
    };

    return mystyles;
  }
  //arrays
  prglang = ['Java', 'C', 'C++'];
  //PIPES
  name = 'Nithiskumar';
  todaydate = new Date();
  todaydate1 = new Date(2024, 12, 11); //0-11 month

  countValue = 0;
  onCountChange(value: number) {
    this.countValue = value;
  }


  constructor() {}

  ngOnInit(): void {}
  products = [
    { id: 1, name: 'phone', status: 'Available' },
    { id: 2, name: 'mobile', status: 'Available' },
    { id: 3, name: 'keyboard', status: 'Not Available' },
    { id: 4, name: 'mouse', status: 'Not Available' },
    { id: 5, name: 'laptop', status: 'Available' },
  ];


  employees =  [
    // {
    //   "id": 1,
    //   "name": "Abi",
    //   "email": "abi@gmail.com",
    //   "gender": "male"
    // },
    // {
    //   "id": 3,
    //   "name": "Raja",
    //   "email": "raja@gmail.com",
    //   "gender": "male"
    // },
    // {
    //   "id": 4,
    //   "name": "Devi",
    //   "email": "devi@gmail.com",
    //   "gender": "female"
    // },
    // {
    //   "id": 5,
    //   "name": "Lakshmi",
    //   "email": "laks@gmail.com",
    //   "gender": "female"
    // },
    // {
    //   "id": 6
    // },
    // {
    //   "name": "dinesh",
    //   "email": "dinesh@gmail.com",
    //   "gender": "male",
    //   "id": 7
    // }
  ]
}
