import { Component, OnInit } from "@angular/core";
import { RouterOutlet } from "@angular/router";

import * as AnimateOnScroll from "aos";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent implements OnInit {
  ngOnInit() {
    AnimateOnScroll.init();
  }
}
