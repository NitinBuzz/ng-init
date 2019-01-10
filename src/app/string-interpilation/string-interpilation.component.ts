import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-string-interpilation',
  templateUrl: './string-interpilation.component.html',
  styleUrls: ['./string-interpilation.component.css']
})
export class StringInterpilationComponent implements OnInit {
  name: string = 'Nitin';
  age: number = 22;
  works: string = 'string-interpilation works!';
  constructor() { }

  ngOnInit() {
  }

  getWorks() {
    return this.works;
  }

}
