// Load the NPM Package inquirer
var inquirer = require("inquirer");

// Create a "Prompt" to ask them for a letter - ex. basic.js
inquirer.prompt([
    {
        type: "input",
        name: "name",
        message: "Type your name"
    },
    {
        type: "checkbox",
        name: "whatToDo",
        message: "What do you want to do?",
        choices: ["Post", "Bid"]
      }
]).then(function(inquirerResponse) {
    if (inquirerResponse.choices === "Post") {
        console.log("you choose " + inquirerResponse.whatToDo.choices);
    } else {
        console.log("you choose " + inquirerResponse.whatToDo.choices);
    }

});