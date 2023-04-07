import chalk from "chalk";
import inquirer from "inquirer";
async function run() {
    const answer = await inquirer.prompt([
        {
            name: "num1",
            type: "Number",
            message: "Enter first number!",
            prefix: ">"
        },
        {
            name: "num2",
            type: "Number",
            message: "Enter second number!",
            prefix: ">",
        },
        {
            name: "operator",
            type: "list",
            choices: ["+", "-", "*", "/", "%", "^"],
            message: "enter operator",
        },
    ]);
    const num1 = Number(answer.num1);
    const num2 = Number(answer.num2);
    let result;
    if (answer.operator == "+") {
        result = num1 + num2;
    }
    else if (answer.operator == "-") {
        result = num1 - num2;
    }
    else if (answer.operator == "*") {
        result = num1 * num2;
    }
    else if (answer.operator == "/") {
        result = num1 / num2;
    }
    else if (answer.operator == "%") {
        result = num1 % num2;
    }
    else if (answer.operator == "^") {
        result = num1 ** num2;
    }
    console.log(chalk.green(`your answer is ${result}`));
}
run();
