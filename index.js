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
    var readMe = `
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
    fs.writeFile("Readme.md", readMe, (error) => {
        error ? console.error(error) : console.log("ReadMe Finished!")
    })
});
