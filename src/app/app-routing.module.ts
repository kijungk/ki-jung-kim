import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { HomeComponent } from "./pages/home/home.component";
import { AboutComponent } from "./pages/about/about.component";
import { SkillsetComponent } from "./pages/skillset/skillset.component";
import { ProjectsComponent } from "./pages/projects/projects.component";
import { ConnectComponent } from "./pages/connect/connect.component";

const routes: Routes = [
  { path: "", component: HomeComponent, data: { animation: "Home" } },
  { path: "about", component: AboutComponent, data: { animation: "About" } },
  {
    path: "skillset",
    component: SkillsetComponent,
    data: { animation: "Skillset" }
  },
  {
    path: "projects",
    component: ProjectsComponent,
    data: { animation: "Projects" }
  },
  {
    path: "connect",
    component: ConnectComponent,
    data: { animation: "Connect" }
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
