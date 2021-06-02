const input = require('readline-sync');

// TODO 2: modify your quiz app to ask 5 questions //

// TODO 1.1a: Define candidateName // 

let candidateName = "";


// TODO 1.2a: Define question, correctAnswer, and candidateAnswer //
let question = "Who was the first American woman in space? ";
let correctAnswer = "Sally Ride";
let candidateAnswer = "";
let questions = ["Who was the first American woman in space? ", "True or false: Kilometer == 5000 meters? ", 
"(5 + 3)/2 * 10 =? ", "Given the array [8, 'Orbit', 'Trajectory',45], what entry is at index 2? ", 
"What is the minimum crew size for the ISS? "];
let correctAnswers = ["Sally Ride","true", "40", "Trajectory", "3"];  
let candidateAnswers = [];


//console.log (candidateAnswer = "Your Answer: Sally Ride");
//console.log(correctAnswer = "Correct Answer: Sally Ride");


function askForName() {
  // TODO 1.1b: Ask for candidate's name //
 candidateName = input.question ("What is your Name?:");
}

function askQuestion() {
  // TODO 1.2b: Ask candidate the question and assign the response as candidateAnswer //
//candidateAnswer = input.question(questions);





  for (let i = 0; i < questions.length; i++){
    //console.log(questions[i] + correctAnswers[i]);
    candidateAnswers = input.question(questions[i]);
    if (candidateAnswers === correctAnswers[i]) {
        console.log("You're correct"); 
      } else {
        console.log(" incorrect ");
        console.log("correct answer: " + correctAnswers[i]);
      }
  }
}



function gradeQuiz(candidateAnswers) {

  // TODO 1.2c: Let the candidate know if they have answered the question correctly or incorrectly // 
  
  let grade;
  

  return grade;
}

function runProgram() {
  askForName();
  // TODO 1.1c: Ask for candidate's name //
  console.log ("Welcome " + candidateName + "!");
  askQuestion();
  gradeQuiz(this.candidateAnswers);
}

// Don't write any code below this line //
// And don't change these or your program will not run as expected //
module.exports = {
  candidateName: candidateName,
  question: question,
  correctAnswer: correctAnswer,
  candidateAnswer: candidateAnswer,
  questions: questions,
  correctAnswers: correctAnswers,
  candidateAnswers: candidateAnswers,
  gradeQuiz: gradeQuiz,
  runProgram: runProgram
};