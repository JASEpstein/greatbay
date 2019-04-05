// Load the NPM Package inquirer
var inquirer = require("inquirer");
var mysql = require("mysql");

var con = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "Nashville2016!",
    database: "SQL File 8"
});

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
        function postItem() {
            var query = con.query(
                "INSERT INTO items SET ?",
                {
                    itemName: item,
                    startBid: startingBid,
                    currentBid: startingBid
                },
                function (err, res) {
                    console.log(res.affectedRows + " product inserted\n");
                    queryAllItems();
                },
                function queryAllItems() {
                    con.query("SELECT * FROM items", function(err, res) {
                        for (var i = 0; i < res.length; i++) {
                            console.log(res[i].itemName + " | " + res[i].startingBid + " | " + res[i].currentBid);
                        }
                        console.log("-----------------------------------");
                        con.end();
                    });
                  }
            )
        }
    }

});