var readlineSync = require("readline-sync");

var score = 0;

var highScores = [
  {
    name: "Satyam",
    score: 5,
  },

  {
    name: "Anonymous",
    score: 4,
  },
]

var questions = [{
  question: "Whats Naruto's dream job ? ",
  answer: "Hokage"
}, {
  question: "Whats the first Name of Naruto's Father ? ",
  answer: "Minato"
},
{
  question: "Whats the village Name of Naruto ? ",
  answer: "Konohagakure"
},
{
  question:"Which eye of kakashi has Sharingan ?",
  answer:"left eye"
},
{
  question:"Whats the first name of Grandfather of tsunade ?",
  answer:"Hashirama"
}];



// play function
function play(question, answer) {
  var userAnswer = readlineSync.question(question);

  if (userAnswer.toUpperCase() === answer.toUpperCase()) { 
    console.log("right!");
    score = score + 1;
    
  } else {
    console.log("wrong!");
   
  }

  console.log("Your Current Score: ", score);
  console.log("-*-*-*-*-*-*-")
}

function playGame() {
  for (var i=0; i<questions.length; i++) {
    var currentQuestion = questions[i];
    play(currentQuestion.question, currentQuestion.answer)
  }
}

var userName = readlineSync.question("What's your name? ");

  console.log("Welcome "+ userName + " To Quiz : Are You a Naruto Fan");

playGame();
console.log("YAY! You Scored: ", score);
console.log("Check out the latest high scores ");
//function for checking highscore and printing it.

highScores.map(score => console.log(score.name, " : ", score.score))
