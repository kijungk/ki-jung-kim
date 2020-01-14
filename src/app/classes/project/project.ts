import { Skill } from "../skill/skill";

export class Project {
  private name: string;
  private description: string;
  private stack: Array<Skill>;

  constructor(name: string, description: string, stack: Array<Skill>) {
    this.name = name;
    this.description = description;
    this.stack = stack;
  }
}
