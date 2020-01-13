import { DomSanitizer } from "@angular/platform-browser";
import { MatIconRegistry } from "@angular/material/icon";
import { Injectable } from "@angular/core";

@Injectable()
export class IconService {
  private icons: string[] = ["angular", "github", "linkedin"];

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
