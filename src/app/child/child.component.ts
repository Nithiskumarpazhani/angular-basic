import { Component, Input, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit, OnDestroy {

  @Input() message: any;


  counter = 0;
  interval: any
  dataName = '';
  constructor() { 
    console.log("child constructor is called");
  }
  

  ngOnInit(): void {
    console.log("child ngOninit is called");

    this.interval = setInterval(() => {
      this.counter = this.counter + 1;
      console.log(this.counter);
    }, 1000)
  }


  ngOnDestroy(): void {
    console.log("child onDestroy is called and child component is removed from the DOM")
    clearInterval(this.interval);
  }

}
