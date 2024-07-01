
// creating Data Structure

let readLineSync = require("readline-sync"); //to read input
let kuler = require("kuler");  //to add color

let availableOptions = ['a','b','c','d'];
let score = 0;

let userName = readLineSync.question("Enter your name \n");

console.log(kuler((`Hey ${userName}`),"#2563eb"))

//created object which is extensible
const database = {       //object for storing questions
    
    data : [
        { 
          Question : `Which type of JavaScript language is ___`,
          Options :  {
            a : "Object-Oriented",
            b : "Object-Based",
            c : "Assembly-language",
            d : "High-level"
          },
          CorrectAnswer : "a" 
        },
        {
          Question : `Which of the following is the correct output for the following JavaScript code:
var x=5, y=1    
var obj = { x:10 }  
with(obj)
{             
    alert(y)  
} `,
          Options :  {
            a : 1,
            b : "Error",
            c : 10,
            d : 5
          },
          CorrectAnswer : "a" 
        },
        {
          Question : `Which Type of copy is this?
const obj1 = { a: 1 }
const obj2 = obj2.assign(obj1)`,
          Options :  {
            a : "Deep Copy",
            b : "Shallow Copy",
            c : "Nested Copy",
            d : "None"
          },
          CorrectAnswer : "b" 
        },
        {
          Question : `let variable inside any function has which scope?`,
          Options :  {
            a : "Global Scope",
            b : "Local Scope",
            c : "Block Scope",
            d : "Both Local and Block scope"
          },
          CorrectAnswer : "b" 
        },
        {
          Question : `Which of the following variables takes precedence over the others if the names are the same?`,
          Options :  {
            a : "Global Variable",
            b : "Local Element",
            c : "Both",
            d : "None of them"
          },
          CorrectAnswer : "b" 
        },
        {
          Question : `What is output of this?
console.log(undefined == null)`,
          Options :  {
            a : "true",
            b : "false",
            c : "Can't compare different data types",
            d : "Error"
          },
          CorrectAnswer : "a" 
        },
        {
          Question : `What is Output for this?
const obj1 ={
   a : 23,
   b : {
      num1 :80,
      num2 : 45
     }
  value : null
 }
const obj2 = JSON.parse(JSON.stringify(obj1));
console.log(obj2.value);`,
          Options :  {
            a : "Undefined",
            b : "Reference Error",
            c : "empty",
            d : "null"
          },
          CorrectAnswer : "c" 
        },
        {
          Question : `The "new Point(3,2)", is a kind of _______ expression`,
          Options :  {
            a : "Object Creation Expression",
            b : "Primary Expression",
            c : "Invocation Expression",
            d : "Constructor Calling Expression"
          },
          CorrectAnswer : "a" 
        },
        {
          Question : `Which type of JavaScript language is ___`,
          Options :  {
            a : "Object-Oriented",
            b : "Object-Based",
            c : "Assembly-language",
            d : "High-level"
          },
          CorrectAnswer : "b" 
        },
        {
          Question : `What will be the output of following Code?
var quiz=[1,2,3];  
var js=[6,7,8];  
var result=quiz.concat(js);  
document.writeln(result);`,
          Options :  {
            a : "[1,2,3,6,7,8]",
            b : "[123678]",
            c : "{1,2,3,6,7,8}",
            d : "1,2,3,6,7,8"
          },
          CorrectAnswer : "a" 
        },
        {
          Question : `What is Output of this?
console.log(0 || "Priya" || 23)`,
          Options :  {
            a : "Priya",
            b : "0",
            c : "23",
            d : "None of these"
          },
          CorrectAnswer : "a" 
        },
        {
          Question : `Which method is not used for explicit binding of object with function or method`,
          Options :  {
            a : "call()",
            b : "apply()",
            c : "bind()",
            d : "split()"
          },
          CorrectAnswer : "d" 
        }
    ]
};

let leaderBoard = {
    data :[
        {
            name : "Prachi",
            score : 10
        },
        {
            name : "Shraddha",
            score : 8
        }
    ]
};

function result(userAnswer, CorrectAnswer){
      if(userAnswer == CorrectAnswer){
        console.log(kuler(("\nAbsolutely Correct"),"#2563eb"));
        score++;
       }else{
        console.log(kuler(("\nIncorrect"),"#be123c"));
        console.log(kuler((`Correct Answer is : ${CorrectAnswer}\n`),"#fde047"))
      }
}

//total score update for available user
function showQuestions(database){

    console.log("\nPlease choose only Options. Don't Enter entire Answer\n")
    for(let i=0;i<database.data.length;i++){
        console.log(`\nQ) ${i+1}. ${database.data[i].Question}\n`);
        for(let key in database.data[i].Options){
            console.log(`${key} . ${database.data[i].Options[key]}`);
        }

        let userAnswer = readLineSync.question("\nEnter Your answer among above Options : ").toLowerCase();
        if(![...availableOptions].includes(userAnswer)){
            userAnswer = readLineSync.question("Please Enter Correct Option ").toLowerCase();
        }
        result(userAnswer,database.data[i].CorrectAnswer);
    }
}

function showHighScore(leaderBoard){
    
    console.log(kuler(("\nLet's Check LeaderBoard"),"#042f2e"));
    let userExists = false;

    //check if user already exist
    for(let i=0;i<leaderBoard.data.length; i++){
        if(leaderBoard.data[i].name === userName){
            leaderBoard.data[i].score = score;
            userExists = true;
            break;
        }
    }

    //if user doesnt exist
    if(!userExists){
        leaderBoard.data.push({name : userName, score : score});
    }

    //sort leaderBoard
    leaderBoard.data.sort((a,b)=> b.score - a.score);

    //display leaderBoard
    console.log(kuler((`\nCurrent Leader is ${leaderBoard.data[0].name}`),"#fef08a"))

 
    leaderBoard.data.forEach((leader, index) => {
        console.log(`\nName: ${leader.name} Score: ${leader.score}`);
    });
}


showQuestions(database);

console.log(`\nCongrats you have successfully completed quiz!
            Your Total Score is ${score}`);

showHighScore(leaderBoard);
