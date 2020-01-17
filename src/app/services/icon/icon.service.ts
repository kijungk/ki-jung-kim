import { DomSanitizer } from "@angular/platform-browser";
import { MatIconRegistry } from "@angular/material/icon";
import { Injectable } from "@angular/core";

@Injectable()
export class IconService {
  private icons: string[] = [
    "adobexd",
    "angular",
    "css3",
    "dotnet",
    "express",
    "facebook",
    "github",
    "heroku",
    "html5",
    "jasmine",
    "javascript",
    "jest",
    "linkedin",
    "material",
    "mssql",
    "nodejs",
    "oracle",
    "postgresql",
    "python",
    "quasar",
    "react",
    "redux",
    "scss",
    "vue",
    "vuetify"
  ];

  private basePath = "/ki-jung-kim/assets/icons/";

  constructor(
    private matIconRegistry: MatIconRegistry,
    private domSanitizer: DomSanitizer
  ) {}

  public registerCustomIcons(): void {
    this.icons.forEach(icon => {
      this.matIconRegistry.addSvgIcon(
        icon,
        this.domSanitizer.bypassSecurityTrustResourceUrl(
          this.basePath + icon + ".svg"
        )
      );
    });

    return;
  }
}
