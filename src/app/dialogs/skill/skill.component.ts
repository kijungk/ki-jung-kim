import { Component, OnInit, Inject } from "@angular/core";
import { MAT_DIALOG_DATA, MatDialogRef } from "@angular/material/dialog";
import { Skill } from "src/app/classes/skill/skill";

@Component({
  selector: "app-skill",
  templateUrl: "./skill.component.html",
  styleUrls: ["./skill.component.scss"]
})
export class SkillComponent implements OnInit {
  private skill: Skill;
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    public dialogRef: MatDialogRef<SkillComponent>
  ) {}

  ngOnInit() {
    this.intializeLevels(this.data.level);
  }

  private intializeLevels(level: number): void {
    for (let i = 0; i < level; i++) {
      const levelElement = <HTMLElement>(
        document.getElementsByClassName("level")[i]
      );

      setTimeout(() => {
        levelElement.style.background = "lightgreen";
      }, i * 50);
    }
  }

  private openTab(url: string): void {
    window.open(url);
    return;
  }

  private closeDialog(): void {
    this.dialogRef.close();
    return;
  }
}
