export class Skill {
  private name: string;
  private level: number;
  private icon: string;

  constructor(name: string, level: number, icon: string) {
    this.name = name;
    this.level = level;
    this.icon = icon;
  }
}
