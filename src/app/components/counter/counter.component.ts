import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.sass']
})
export class CounterComponent implements OnInit {


  // declare count property to use in counter
  count = 0
  // declare function to increase count in counter
  increaseCount() {
    this.count = this.count + 1
  }
  
  constructor() { }

  ngOnInit(): void {
  }

}
