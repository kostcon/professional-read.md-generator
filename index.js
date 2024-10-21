import fs from "fs";
import inquirer from "inquirer";
import path from "path";
import generateMarkdown from "./utils/generateMarkdown.js";

const requirements = [
  {
    type: "input",
    name: "title",
    message: "Please enter the project title:",
  },
  {
    type: "input",
    name: "description",
    message: "Please outline the purpose and functionality of your project:",
  },
  {
    type: "input",
    name: "install",
    message: "Please specifiy the steps required to install your project:",
  },
  {
    type: "input",
    name: "usage",
    message:
      "Please provide the awesome languages that are used in your project:",
  },
  {
    type: "input",
    name: "credits",
    message: "Please list the collaborator(s):",
  },
  {
    type: "checkbox",
    name: "license",
    message: "Please choose the following license(s)",
    choices: [
      "MIT License",
      "Apache License 2.0",
      "GNU General Public Licnese v3.0",
      "Mozilla Public License 2.0",
      "The Unlicense",
    ],
  },
  {
    type: "input",
    name: "screenshot",
    message: "Please submit a screen capture of how the product works",
  },
  {
    type: "input",
    name: "creator",
    message: "Please enter your github name:",
  },
  {
    type: "input",
    name: "email",
    message: "Please enter your e-mail:",
  },
];

function writeToFile(fileName, data) {
  return fs.writeFileSync(path.join(process.cwd(), fileName), data);
}

function init() {
  inquirer.prompt(requirements).then((responses) => {
    console.log("Creating your Professional ReadMe.MD File...");
    writeToFile("./dist/README.md", generateMarkdown({ ...responses }));
  });
}

init();
