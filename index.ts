#! /usr/bin/env node

import inquirer from "inquirer";

const answer = await inquirer.prompt([
  { message: "Enter your first value", type: "number", name: "firstValue" },
  { message: "Enter your second value", type: "number", name: "secondValue" },
  {
    message: "Select any one operator to perform operation",
    type: "list",
    name: "operator",
    choices: ["ADDITION", "SUBTRACTION", "MULTIPLICATION", "DIVISION"],
  },
]);

//CONDITIONAL STATEMENT
if (answer.operator === "ADDITION") {
  console.log(answer.firstValue + answer.secondValue);
} else if (answer.operator === "SUBTRACTION") {
  console.log(answer.firstValue - answer.secondValue);
} else if (answer.operator === "MULTIPLICATION") {
  console.log(answer.firstValue * answer.secondValue);
} else if (answer.operator === "DIVISION") {
  console.log(answer.firstValue /answer.secondValue);
} else {
  console.log("Please select valid operator");
}

console.log("THE END");