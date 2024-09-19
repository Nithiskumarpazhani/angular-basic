import { Component, OnInit, SimpleChange, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {

  isChild: boolean = false;

  constructor() { 
    console.log("parent constructor called");
  }
  

  ngOnInit(): void {
    console.log("parent ngOnInit is called");
    // when the component is loaded into the DOM and then only the construct and ngOninit is called
  }


  ngOnChanges(changes: SimpleChanges): void {
    console.log(SimpleChange);
    console.log("ngonchanges is called in parent")
  }

  toggleChild() {
    this.isChild = !this.isChild;
  }

}
