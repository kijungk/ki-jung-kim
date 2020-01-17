export class Skill {
  private name: string;
  private level: number;
  private description: string;
  private icon: string;
  private url: string;

  constructor(
    name: string,
    level: number,
    description: string,
    icon: string,
    url: string
  ) {
    this.name = name;
    this.level = level;
    this.description = description;
    this.icon = icon;
    this.url = url;
  }
}
