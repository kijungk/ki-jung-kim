import { Component, OnInit } from "@angular/core";
import { RouterOutlet } from "@angular/router";

import * as AnimateOnScroll from "aos";
import { routeAnimation } from "./animations/route-animation/route-animation";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
  animations: [routeAnimation]
})
export class AppComponent implements OnInit {
  ngOnInit() {
    AnimateOnScroll.init();
  }

  public prepareOutlet(outlet: RouterOutlet): void {
    return (
      outlet &&
      outlet.activatedRouteData &&
      outlet.activatedRouteData["animation"]
    );
  }
}
