
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./src/page-template.js");


// TODO: Write Code to gather information about the development team members, and render the HTML file.

const managerQuestions = [
    {
      type: "input",
      name: "name",
      message: "What is the team manager's name?",
    },
    {
      type: "input",
      name: "id",
      message: "What is the team manager's employee ID?",
    },
    {
      type: "input",
      name: "email",
      message: "What is the team manager's email address?",
    },
    {
      type: "input",
      name: "officeNumber",
      message: "What is the team manager's office number?",
    },
  ];
  
  const engineerQuestions = [
    {
      type: "input",
      name: "name",
      message: "What is the engineer's name?",
    },
    {
      type: "input",
      name: "id",
      message: "What is the engineer's employee ID?",
    },
    {
      type: "input",
      name: "email",
      message: "What is the engineer's email address?",
    },
    {
      type: "input",
      name: "github",
      message: "What is the engineer's GitHub username?",
    },
  ];
  const internQuestions = [
    {
      type: "input",
      name: "name",
      message: "What is the intern's name?",
    },
    {
      type: "input",
      name: "id",
      message: "What is the intern's employee ID?",
    },
    {
      type: "input",
      name: "email",
      message: "What is the intern's email address?",
    },
    {
      type: "input",
      name: "school",
      message: "What school does the intern attend?",
    },
  ];
  

  const teamMembers = [];

function promptManager() {
  inquirer.prompt(managerQuestions).then((answers) => {
    const manager = new Manager(
      answers.name,
      answers.id,
      answers.email,
      answers.officeNumber
    );
    teamMembers.push(manager);
    promptUser();
  });
}

function promptEngineer() {
  inquirer.prompt(engineerQuestions).then((answers) => {
    const engineer = new Engineer(
      answers.name,
      answers.id,
      answers.email,
      answers.github
    );
    teamMembers.push(engineer);
    promptUser();
  });
}

function promptIntern() {
  inquirer.prompt(internQuestions).then((answers) => {
    const intern = new Intern(
      answers.name,
      answers.id,
      answers.email,
      answers.school
    );
    teamMembers.push(intern);
    promptUser();
  });
}

function promptUser() {
    inquirer
      .prompt([
        {
          type: "list",
          name: "choice",
          message: "What would you like to do?",
          choices: ["Add an engineer", "Add an intern", "Finish building team"],
        },
      ])
      .then((answer) => {
        switch (answer.choice) {
          case "Add an engineer":
            promptEngineer();
            break;
          case "Add an intern":
            promptIntern();
            break;
          case "Finish building team":
            const html = render(teamMembers);
            fs.writeFile(outputPath, html, (err) => {
              if (err) {
                console.error(err);
              } else {
                console.log("Team file written to output directory.");
              }
            });
            break; 
        }
      });
  } 


//   inquirer
//     .prompt(questions)
//     .then((answers) => {
//       // do something with the user's answers
//     })
//     .catch((error) => {
//       console.error(error);
//     });
  
    