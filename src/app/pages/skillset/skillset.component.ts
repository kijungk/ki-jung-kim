import { Component, OnInit } from "@angular/core";
import { Skill } from "src/app/classes/skill/skill";
import { MatDialog } from "@angular/material/dialog";
import { SkillComponent } from "src/app/dialogs/skill/skill.component";
import { SkillService } from "src/app/services/skill/skill.service";

@Component({
  selector: "app-skillset",
  templateUrl: "./skillset.component.html",
  styleUrls: ["./skillset.component.scss"]
})
export class SkillsetComponent implements OnInit {
  public frontendSkillset: Array<Skill>;
  public backendSkillset: Array<Skill>;
  public testingSkillset: Array<Skill>;
  public otherSkillset: Array<Skill>;

  constructor(public dialog: MatDialog, private skillService: SkillService) {}

  ngOnInit() {
    this.initializeFrontendSkillset(this.frontendSkillset);
    this.initializeBackendSkillset(this.backendSkillset);
    this.initializeTestingSkillset(this.testingSkillset);
    this.initializeOtherSkillset(this.otherSkillset);
  }

  private initializeFrontendSkillset(skillset: Array<Skill>): void {
    this.frontendSkillset = this.skillService.getSkillsetByType("frontend");
  }

  private initializeBackendSkillset(skillset: Array<Skill>): void {
    this.backendSkillset = this.skillService.getSkillsetByType("backend");
  }

  private initializeTestingSkillset(skillset: Array<Skill>): void {
    this.testingSkillset = this.skillService.getSkillsetByType("testing");
  }

  private initializeOtherSkillset(skillset: Array<Skill>): void {
    this.otherSkillset = this.skillService.getSkillsetByType("other");
  }

  public openDialog(skill: Skill): void {
    const dialogReference = this.dialog.open(SkillComponent, {
      minWidth: "50%",
      maxWidth: "90%",
      data: skill
    });
  }
}
