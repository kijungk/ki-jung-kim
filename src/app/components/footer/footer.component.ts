import { Component, OnInit } from "@angular/core";
import { IconService } from "src/app/services/icon/icon.service";

@Component({
  selector: "app-footer",
  templateUrl: "./footer.component.html",
  styleUrls: ["./footer.component.scss"]
})
export class FooterComponent implements OnInit {
  constructor(private iconService: IconService) {}

  ngOnInit() {
    this.iconService.registerCustomIcons();
  }

  private openTab(framework: string): void {
    switch (framework) {
      case "angular":
        window.open("https://github.com/kijungk/ki-jung-kim");
        break;
    }

    return;
  }
}
