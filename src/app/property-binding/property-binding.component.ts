import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-property-binding",
  templateUrl: "./property-binding.component.html",
  styleUrls: ["./property-binding.component.css"]
})
export class PropertyBindingComponent implements OnInit {
  allowClick = false;
  constructor() {
    setTimeout(() => {
      this.allowClick = true;
    }, 2000);
  }

  ngOnInit() {}
}
