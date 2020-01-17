import { Injectable } from "@angular/core";
import { Skill } from "src/app/classes/skill/skill";

@Injectable({
  providedIn: "root"
})
export class SkillService {
  private skillset: object = {
    frontend: [
      new Skill(
        "JavaScript",
        9,
        "Programming language of HTML and the web. Used to create dynamic content and styles, as well as enterprise-scale applications with Express and other frontend libraries.",
        "javascript",
        "https://www.ecma-international.org"
      ),
      new Skill(
        "Angular 8",
        9,
        "Angular is one of the most used frontend libraries in the industry and my personal favorite. Angular 8 introduces Ivy, a new engine for faster load times and smaller bundle sizes with lots of other goodies! Super excited to see how Angular tackles its biggest criticism of having performance downsides.",
        "angular",
        "https://www.angular.io"
      ),
      new Skill(
        "Material",
        9,
        "The styling module built for Angular. Uses flex-box principles that ties in very well with Angular flex-layout. Used for fast prototyping and layout designs.",
        "material",
        "https://material.angular.io"
      ),
      new Skill(
        "VueJS",
        9,
        "One of the most exciting frontend libraries to date! VueJS has made significant progress and with Vue 3 on the way, definitely a fan-favorite and my runner-up library for frontend work.",
        "vue",
        "https://www.vuejs.org"
      ),
      new Skill(
        "Vuetify",
        9,
        "A styling library for VueJS. Used extensively and also created custom components for the Pay eXchange project. Uses boot strap's 12-column grid strategy for layouts.",
        "vuetify",
        "https://www.vuetifyjs.com"
      ),
      new Skill(
        "Quasar",
        7,
        "The up-and-coming styling library for VueJS. Quasar works very well out-of-the-box, and is next up on my list of things to grok! Comes with full testing capabilities with Jest and Cypress and allows multi-platform integration for VueJS projects.",
        "quasar",
        "https://www.quasar.dev"
      ),
      new Skill(
        "React",
        6,
        "The leading frontend library in the industry. Made a couple of side projects using React, but did not explore professionally. Would love to work with a knowledgeable React team!",
        "react",
        "https://www.reactjs.org"
      ),
      new Skill(
        "Redux",
        6,
        "A state-management library for React. Used to retrieve data from the store without having to pass through multiple components.",
        "redux",
        "https://www/redux.js.org"
      ),
      new Skill(
        "HTML 5",
        9,
        "The markup language of the web! Used with CSS and JavaScript to create dynamic webpages, or can be used alone to create static pages. Utilized in all frontend libraries.",
        "html5",
        "https://www.whatwg.org"
      ),
      new Skill(
        "CSS 3",
        9,
        "Gives web content its style. Compiled languages such as Sassy CSS and Stylus compiles into CSS before being served to the public.",
        "css3",
        "https://www.w3.org/style/css"
      ),
      new Skill(
        "Sassy CSS",
        9,
        "My personal choice for compiled styling syntax. Sassy CSS allows the use of variables and logic in CSS to create dynamic styles without the use of JavaScript.",
        "scss",
        "https://www.sass-lang.com"
      )
    ],
    backend: [
      new Skill(
        "NodeJS",
        9,
        "JavaScript runtime built on Chrome's JavaScript engine. Used in Cracking the Coding Interview project to run code and tests, as well as in all projects for package management and project build.",
        "nodejs",
        "https://www.nodejs.org"
      ),
      new Skill(
        "ExpressJS",
        9,
        "Backend server library built on NodeJS. JavaScript implementation of a backend and runs on asynchronous principles using a single event-loop. Lightweight and used in all of my projects with the exception of Pay eXchange.",
        "express",
        "https://wwww.expressjs.com"
      ),
      new Skill(
        ".NET Core",
        8,
        "C# backend framework. Statically typed backend for OOP architecture. Used in Pay eXchange as an enterprise-scale, high-volume appliation.",
        "dotnet",
        "https://dotnet.microsoft.com"
      ),
      new Skill(
        "PostgreSQL",
        9,
        "Open-source database engine using relational data. Used in all conracted projects and personal projects.",
        "postgresql",
        "https://www.postgresql.org"
      ),
      new Skill(
        "Microsoft SQL Server",
        9,
        "Microsoft SQL Server used in Pay eXchange to integrate into the client's existing Oracle SQL Server. Has some syntatic differences from Oracle and integrated into .NET Core backend.",
        "mssql",
        "https://www.microsoft.com/en-us/sql-server"
      ),
      new Skill(
        "Oracle SQL Server",
        9,
        "Oracle, one of the leading relational database providers and used extensively with the Pay eXchange project. Integrated both Oracle and MSSQL databases.",
        "oracle",
        "https://www.oracle.com"
      )
    ],
    testing: [
      new Skill(
        "Jasmine",
        7,
        "Testing library that comes with Angular. Used for unit testing suites and full, end-to-end testing.",
        "jasmine",
        "https://www.jasmine.github.io"
      ),
      new Skill(
        "Jest",
        7,
        "Testing library for Quasar. Used for unit testing and full, end-to-end testing.",
        "jest",
        "https://www.jestjs.io"
      )
    ],
    other: [
      new Skill(
        "Python",
        6,
        "Powerful scripting language used to compare output files during the Pay eXchange project. Script would compare developer-designated fields in two text files in order to compare upwards of 10 million matches.",
        "python",
        "https://www.python.org"
      ),
      new Skill(
        "Facebook API",
        8,
        "API suite for Facebook integration of applications. Extensively used for Messenger applications that integrate into existing Facebook pages.",
        "facebook",
        "https://www.develoeprs.facebook.com"
      ),
      new Skill(
        "Adobe XD",
        9,
        "Design tool to mock-up layouts and create logos and images. Not as powerful as Photoshop, but definitely gets the job done!",
        "adobexd",
        "https://www.adobe.com/products/xd.html"
      ),
      new Skill(
        "Heroku",
        10,
        "Hosting platform built on AWS. Used to quickly host projects and able to scale with a user-friendly UI. Probably will be shelved once more familiarity with AWS is reached.",
        "heroku",
        "https://www.heroku.com"
      )
    ]
  };

  constructor() {}

  public getAllSkillsets(): object {
    return this.skillset;
  }

  public getSkillsetByType(type: string): Array<Skill> {
    return this.skillset[type];
  }

  public getSkillByTypeAndName(type: string, name: string): Skill {
    return this.skillset[type].find((skill: Skill) => {
      return skill["name"] === name;
    });
  }
}
