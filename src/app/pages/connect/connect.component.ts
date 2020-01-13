import { Component, OnInit } from "@angular/core";
import { IconService } from "src/app/services/icon/icon.service";

@Component({
  selector: "app-connect",
  templateUrl: "./connect.component.html",
  styleUrls: ["./connect.component.scss"]
})
export class ConnectComponent implements OnInit {
  constructor(private iconService: IconService) {}

  ngOnInit() {
    this.iconService.registerCustomIcons();
  }
}
