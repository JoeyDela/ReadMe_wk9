const inquirer = require("inquirer");


// Questions asked to the user

inquirer
    .prompt([
  {
    type: "input",
    message: "What is the title for your project?",
    name: "Title",
  },
  {
    type: "input",
    message: "Please give description of your project.",
    name: "Description",
  },

  {
    type: "input",
    message: "What is this app used for?",
    name: "Usage",
  },
  {
    type: "input",
    message: "What necessary dependencies must be installed to run this app?",
    name: "Installation",
  },
  {
    type: "input",
    message: "Please add contributors",
    name: "Contributor",
    },
  {
    type: "input",
    message: "What command do you use to test this App?",
    name: "Test",
  },
  {
    type: "list",
    message: "What license was used for this README?",
    choices: ["Apache 2.0 License", "CC0", "Eclipse", "IBM"],
    name: "License",
  },
  {
      type: "input",
      message: "What is your github username?",
      name: "name",
  },
  {
      type: "input",
      message: "What is your email address?",
      name: "email",
  }
  
]).then(response => {
  var badge;
    if(response.License === "Apache 2.0 License"){
      badge = '[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)';
    } else if(response.License === "CC0"){
      badge = '[[![License: CC0-1.0](https://licensebuttons.net/l/zero/1.0/80x15.png)](http://creativecommons.org/publicdomain/zero/1.0/)';
    } else if(response.License === "Eclipse"){
      badge = '[![License](https://img.shields.io/badge/License-EPL%201.0-red.svg)](https://opensource.org/licenses/EPL-1.0)';
    } else if(response.License === "IBM"){
      badge = '[![License: IPL 1.0](https://img.shields.io/badge/License-IPL%201.0-blue.svg)](https://opensource.org/licenses/IPL-1.0)';
    }
    var readMe = `
    ${badge}
    # repo name
    ${response.Title}
    # description
    ${response.Description}
    # Usage
    ${response.Usage}
    # installation
    ${response.Installation}
    # contributor
    ${response.Contributor}
    # test
    ${response.Test}
    # license
    
    # name
    ${response.name}
    # email
    ${response.email}
    `
    
    var fs = require("fs"); 
    fs.writeFile("../Readme/Readme.md", readMe, (error) => {
        error ? console.error(error) : console.log("ReadMe Finished!")
    })
});
