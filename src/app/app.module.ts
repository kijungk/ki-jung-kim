import { AppRoutingModule } from "./app-routing.module";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { FlexLayoutModule } from "@angular/flex-layout";
import { HttpClientModule } from "@angular/common/http";
import { MaterialModule } from "./modules/material/material.module";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { NavigationComponent } from "./components/navigation/navigation.component";
import { HomeComponent } from "./pages/home/home.component";
import { AboutComponent } from "./pages/about/about.component";
import { SkillsetComponent } from "./pages/skillset/skillset.component";
import { ProjectsComponent } from "./pages/projects/projects.component";
import { ConnectComponent } from "./pages/connect/connect.component";
import { FooterComponent } from "./components/footer/footer.component";
import { SkillComponent } from "./dialogs/skill/skill.component";

import { IconService } from "./services/icon/icon.service";
import { SkillService } from "./services/skill/skill.service";

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    HomeComponent,
    AboutComponent,
    SkillsetComponent,
    ProjectsComponent,
    ConnectComponent,
    FooterComponent,
    SkillComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    HttpClientModule,
    MaterialModule
  ],
  entryComponents: [SkillComponent],
  providers: [IconService, SkillService],
  bootstrap: [AppComponent]
})
export class AppModule {}
