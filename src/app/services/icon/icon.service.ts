import { DomSanitizer } from "@angular/platform-browser";
import { MatIconRegistry } from "@angular/material/icon";
import { Injectable } from "@angular/core";

@Injectable()
export class IconService {
  private icons: string[] = [
    "angular",
    "css3",
    "dotnet",
    "express",
    "facebook",
    "github",
    "html5",
    "jasmine",
    "javascript",
    "jest",
    "linkedin",
    "mssql",
    "nodejs",
    "oracle",
    "postgresql",
    "python",
    "vue"
  ];

  private basePath = "../../assets/icons/";

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
