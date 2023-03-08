import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.sass']
})
export class HomePageComponent implements OnInit {
  
  // declare title property
  title = 'Angular Home Page'

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
