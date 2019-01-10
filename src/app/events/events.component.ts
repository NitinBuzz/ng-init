import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-events",
  templateUrl: "./events.component.html",
  styleUrls: ["./events.component.css"]
})
export class EventsComponent implements OnInit {
  cart: string = "empty";
  constructor() {}

  ngOnInit() {}

  addToCart() {
    this.cart = "full";
  }
}
