import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { MatDividerModule } from "@angular/material/divider";
import { MatIconModule } from "@angular/material/icon";
import { MatTabsModule } from "@angular/material/tabs";

@NgModule({
  declarations: [],
  imports: [CommonModule, MatDividerModule, MatIconModule, MatTabsModule],
  exports: [MatDividerModule, MatIconModule, MatTabsModule]
})
export class MaterialModule {}
