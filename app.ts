#! /usr/bin/env node

import inquirer from "inquirer";

const money: number = 10000;
const Foreign_Currency: number = 1000;
const atm = await inquirer.prompt([
  {
    message: "Kindly Enter Your id",
    type: "number",
    name: "id",
  },
  {
    message: "Enter Your Pin",
    type: "number",
    name: "pin",
  },
  {
    message: "Select Your Account Type",
    type: "list",
    name: "accountType",
    choices: ["Current Account", "Saving Account", "Foreign Curruency Account"],
  },
]);

if (atm.accountType === "Current Account") {
  let operation1 = await inquirer.prompt([
    {
      name: "operation",
      message: "Select Your Operation",
      type: "list",
      choices: ["Cash Withdraw", "Check Balance"],
    },
  ]);
  if (operation1.operation === "Cash Withdraw") {
    let operation2 = await inquirer.prompt([
      {
        message: "Enter Your Amount",
        name: "amount1",
        type: "number",
      },
    ]);
    console.log(`${operation2.amount1} Cash Withdraw SuccesFull...`);
    console.log(`Your Remaining Balance is ${money - operation2.amount1}`);
  } else if (operation1.operation === "Check Balance") {
    console.log(`Your Total Balance Is ${money}`);
  }
} else if (atm.accountType === "Saving Account") {
  console.log(`You Save ${money} For Your Future:`);
} else if (atm.accountType === "Foreign Curruency Account") {
  let foreign1 = await inquirer.prompt([
    {
      message: "Select Your Operation",
      type: "list",
      choices: ["Cash Withdraw", "Check Balance"],
      name: "operation",
    },
  ]);
  if (foreign1.operation === "Cash Withdraw") {
    let foreign2 = await inquirer.prompt([
      {
        message: "Enter Your Amount",
        name: "amount2",
        type: "number",
      },
    ]);
    console.log(`${foreign2.amount2}Dollar Wthdraw Succesfull...`);
    console.log(`Your Remaining Balance is ${money - foreign2.amount2} Dollar`);
  } else if (foreign1.operation === "Check Balance") {
    console.log(`Your Remaining Balance is ${money}`);
  }
}
