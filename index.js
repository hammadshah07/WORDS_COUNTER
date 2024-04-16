import inquirer from "inquirer";
const answers = await inquirer.prompt([
    {
        name: "sentence",
        type: "input",
        message: "Enter your sentence to count the words",
    }
]);
const words = answers.sentence.trim().split(" ");
console.log(words);
console.log(`your sentence word is ${words.length}`);
