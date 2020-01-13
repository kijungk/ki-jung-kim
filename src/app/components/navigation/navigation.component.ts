import { Component, OnInit } from "@angular/core";
import { Link } from "src/app/classes/link/link";

@Component({
  selector: "app-navigation",
  templateUrl: "./navigation.component.html",
  styleUrls: ["./navigation.component.scss"]
})
export class NavigationComponent implements OnInit {
  private links: Array<Link> = new Array<Link>();
  constructor() {}

  ngOnInit() {
    this.initializeLinks(this.links);
  }

  private initializeLinks(links: Array<Link>): void {
    links.push(new Link("Home", "/"));
    links.push(new Link("About", "/about"));
    links.push(new Link("Skillset", "/skillset"));
    links.push(new Link("Projects", "/projects"));
    links.push(new Link("Connect", "/connect"));
  }
}
