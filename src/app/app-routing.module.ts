import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { HomeComponent } from "./pages/home/home.component";
import { AboutComponent } from "./pages/about/about.component";
import { SkillsetComponent } from "./pages/skillset/skillset.component";
import { ProjectsComponent } from "./pages/projects/projects.component";
import { ConnectComponent } from "./pages/connect/connect.component";

const routes: Routes = [
  { path: "", component: HomeComponent },
  { path: "about", component: AboutComponent },
  {
    path: "skillset",
    component: SkillsetComponent
  },
  {
    path: "projects",
    component: ProjectsComponent
  },
  {
    path: "connect",
    component: ConnectComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
