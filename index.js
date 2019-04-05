// Load the NPM Package inquirer
var inquirer = require("inquirer");
var mysql = require("mysql");

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
        console.log("Please enter your item & starting bid: ");
        var item = process.argv[2];
        var startingBid = process.argv[3];
        INSERT INTO items SET
    } else {
        console.log("you choose " + inquirerResponse.whatToDo.choices);
    }

});