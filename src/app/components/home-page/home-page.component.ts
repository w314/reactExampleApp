import { Component, OnInit } from '@angular/core';
// import { ConverterComponent } from '../converter/converter.component';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.sass']
})
export class HomePageComponent implements OnInit {
  
  // declare title property
  title = 'Angular Examples'

  constructor() { }

  ngOnInit(): void {
  }

}
