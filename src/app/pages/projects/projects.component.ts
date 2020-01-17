import { Component, OnInit } from "@angular/core";
import { Project } from "src/app/classes/project/project";
import { Skill } from "src/app/classes/skill/skill";
import { IconService } from "src/app/services/icon/icon.service";
import { SkillService } from "src/app/services/skill/skill.service";
import { MatDialog } from "@angular/material/dialog";
import { SkillComponent } from "src/app/dialogs/skill/skill.component";

@Component({
  selector: "app-projects",
  templateUrl: "./projects.component.html",
  styleUrls: ["./projects.component.scss"]
})
export class ProjectsComponent implements OnInit {
  public projects: Array<Project> = new Array<Project>();

  constructor(
    public dialog: MatDialog,
    private iconService: IconService,
    private skillService: SkillService
  ) {}

  ngOnInit() {
    this.iconService.registerCustomIcons();
    this.initializeProjects(this.projects);
  }

  public openDialog(skill: Skill): void {
    const dialogReference = this.dialog.open(SkillComponent, { data: skill });
  }

  private initializeProjects(projects: Array<Project>): void {
    projects.push(
      new Project(
        "Pay eXchange",
        "An enterprise-scale web application which replaced a Cobol system that handled payroll of over 40,000 employees of the Hawaii State Department of Education. Worked in a very dynamic team alongside 8-15 developers, and very closely with subject-matter experts from the client's team in order to design, implement, test, and launch dozens of modules. Also served as a liaison between DevLeague and company to onboard and train 2 new developers. This was a professional project, therefore the repository and site is private.",
        [
          this.skillService.getSkillByTypeAndName("frontend", "VueJS"),
          this.skillService.getSkillByTypeAndName("backend", ".NET Core"),
          this.skillService.getSkillByTypeAndName(
            "backend",
            "Microsoft SQL Server"
          ),
          this.skillService.getSkillByTypeAndName(
            "backend",
            "Oracle SQL Server"
          ),
          this.skillService.getSkillByTypeAndName("other", "Python")
        ]
      )
    );
    projects.push(
      new Project(
        "Facebook Messenger: Event Assistant",
        "Created a Messenger integration of an Event Assistant application designed to guide users during Facebook conventions across the Asian-Pacific region. Delivered 4 separate applications used during 6 events. Each event hosted around 1,500 attendees, application was scalable and handled upwards of 12,000 requests per minute with ease. Projects are under heavy time constraint: The intial design phase to delivery often taking no longer than 30 days. Also showcased a creative use of Messenger being implemented as a mobile ordering platform where users can order a food and beverage item and be instantly notified once it's made. This was a professional project, therefore the repository is private; however, one of the events remain public.",
        [
          this.skillService.getSkillByTypeAndName("other", "Facebook API"),
          this.skillService.getSkillByTypeAndName("frontend", "Angular 8"),
          this.skillService.getSkillByTypeAndName("backend", "ExpressJS"),
          this.skillService.getSkillByTypeAndName("backend", "PostgreSQL")
        ]
      )
    );
    projects.push(
      new Project(
        "Cracking the Coding Interview 6th Edition (WIP)",
        "A JavaScript solutions manual to every problem found in Cracking the Coding Interview. Implementation of TDD where all code is unit tested using Jest before actual development. Once done with the solutions, will be hosted on Github using plain HTML5 | CSS3 | JavaScript to have it widely available for everyone to reference.",
        [
          this.skillService.getSkillByTypeAndName("frontend", "HTML 5"),
          this.skillService.getSkillByTypeAndName("frontend", "CSS 3"),
          this.skillService.getSkillByTypeAndName("frontend", "JavaScript"),
          this.skillService.getSkillByTypeAndName("backend", "NodeJS"),
          this.skillService.getSkillByTypeAndName("testing", "Jest")
        ]
      )
    );
    projects.push(
      new Project(
        "Facebook Messenger: Personal Helper (WIP)",
        "A showcase project of Facebook Messenger chat application. Similar in structure as the professionally developed projects done for Facebook event ops team. Integrated with a mock mobile ordering implementation to show innovative ways that Messenger can be utilized to cut down on business costs.",
        [
          this.skillService.getSkillByTypeAndName("other", "Facebook API"),
          this.skillService.getSkillByTypeAndName("frontend", "Angular 8"),
          this.skillService.getSkillByTypeAndName("backend", "ExpressJS"),
          this.skillService.getSkillByTypeAndName("testing", "Jasmine"),
          this.skillService.getSkillByTypeAndName("backend", "PostgreSQL")
        ]
      )
    );
  }
}
