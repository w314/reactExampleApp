import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-converter',
  templateUrl: './converter.component.html',
  styleUrls: ['./converter.component.sass']
})
export class ConverterComponent implements OnInit {

  title:string = 'Converter'
  
  #conversionRate = 28.34952
  gramm: number | null = null
  ounce: number | null = null
  
  toGramm() {
    // if ounce is not null convert it to gramms
    this.gramm = this.ounce 
      ? parseFloat((this.ounce / this.#conversionRate).toFixed(2))
      : null
  }

  toOunce() {
    console.log('in toOunce')
    this.ounce = this.gramm 
    ? parseFloat((this.gramm / this.#conversionRate).toFixed(2)) : null
  }



  constructor() { }

  ngOnInit(): void {
  }

}
