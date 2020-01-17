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

  private openTab(platform: string): void {
    switch (platform) {
      case "mail":
        window.open("mailTo:kimkijung@icloud.com");
        break;

      case "linkedin":
        window.open("https://linkedin.com/in/kimkijung");
        break;

      case "github":
        window.open("https://github.com/kijungk");
        break;
    }

    return;
  }
}
