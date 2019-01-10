import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-two-way-binding',
  templateUrl: './two-way-binding.component.html',
  styleUrls: ['./two-way-binding.component.css']
})
export class TwoWayBindingComponent implements OnInit {
 input: string = 'in';
 inputEx: string = 'in ex';
  constructor() { }

  ngOnInit() {
  }

  handleInput(event: Event) {
    this.input =( <HTMLInputElement>event.target).value;
  }

  handleInputEx(event: Event) {
    this.inputEx =( <HTMLInputElement>event.target).value;
  }

}
