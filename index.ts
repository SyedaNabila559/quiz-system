#!/usr/bin/env node
import inquirer from "inquirer";

console.log("Welcome to advanture quiz game");
console.log("You are required to gain maximum 4 points for the window");

let points = 0;

// Question 1

let question1 = await inquirer.prompt([ 
    {
        name:"one",
        message: "Typescript is a superset of?",
        type: "list",
        // @ts-ignore
        choices: ["Javascript","C++","Phyton","Typescript"]
    }
]);

if(question1.one === "Javascript"){
   console.log("Your answer is correct")
   points++
}
else{
    console.log("Your answer is incorrect");
}

// Question 2


let question2 = await inquirer.prompt([ 
    {
        name:"two",
        message: "Who is the founder of Microsoft?",
        type: "list",
        // @ts-ignore
        choices: ["Elson Mask","Mark","Bill Gates","Albert"]
    }
]);

if(question2.two === "Bill Gates" ){
   console.log("Your answer is correct")
   points++
}
else{
    console.log("Your answer is incorrect");
}

// Question 3

let question3 = await inquirer.prompt([ 
    {
        name:"three",
        message: "Isalamabad is the capital of?",
        type: "list",
        // @ts-ignore
        choices: ["Pakistan","Nepal","India","Dubai"]
    }
]);

if(question3.three === "Pakistan" ){
   console.log("Your answer is correct")
   points++
}
else{
    console.log("Your answer is incorrect");
};

// Question 4

let question4 = await inquirer.prompt([ 
    {
        name:"four",
        message: "Who is the current governor sindh?",
        type: "list",
        // @ts-ignore
        choices: ["Kamran Tassori","Imran Khan","Mariyam Nawaz","Bilawal Bhutto"]
    }
]);

if(question4.four === "Kamran Tassori" ){
   console.log("Your answer is correct");
   points++
}
else{
    console.log("Your answer is incorrect");
};

// Question 5


let question5 = await inquirer.prompt([ 
    {
        name:"five",
        message: "What is the National language of Pakistan?",
        type: "list",
        // @ts-ignore
        choices: ["Siraiki","Punjabi","Sindhi","Urdu"]
    }
]);

if(question5.five === "Urdu" ){
   console.log("Your answer is correct")
   points++
}
else{
    console.log("Your answer is incorrect");
}

// Output Conditions
if(points >= 4 ){
    console.log("Congratulations!");
    console.log(`Your points : ${points}`);
}
else{
    console.log("You loss! please try again");
    console.log(`Your points : ${points}`);
};
