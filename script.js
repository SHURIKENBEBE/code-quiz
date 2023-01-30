// setting up a 60 second countdown timer

var playOpt = ["Yes", "No"];
    
var restartBtn = document.getElementById("restart");
var nextBtn = document.getElementById("next");
var submitBtn = document.getElementById("submit");
var trueBtn = document.getElementById("true");
var falseBtn = document.getElementById("false");
var userScore = document.getElementById("userScore");
var totalScore = document.getElementById("totalScore");
var questionText = document.getElementById("questionText")

var currentQ = 0;
var score = 0;

var myQuestions = [
    {
        question: "The Const keyword in Javascript can be redeclared",
        answers:[
            {option: "True", answer: false},
            {option: "False", answer: true},
        ]
    },


    {
        question: "Math.floor(x) returns x rounded down to its nearest integer",
        answers:[
            {option: "True", answer: true},
            {option: "False", answer: false},
        ]
    },

    {
        question: " Comparing two JavaScript objects doesn't always return false.",
        answers:[
            {option: "True", answer: false},
            {option: "False", answer: true},
        ]
        
    },

    {
        question: "If not specified, Javascript counts position from 1",
        answers:[
            {option: "True", answer: false},
            {option: "False", answer: true},
        ]
    },

    {
        question: " x == '5' returns true",
        answers:[
            {option: "True", answer: true},
            {option: "False", answer: false},
        ]
    },

    {
        question: "Given that x = 8 and y = 2, (x== 8 || y == 8) returns true",
        answers:[
            {option: "True", answer: true},
            {option: "False", answer: false},
        ]
    },

];

restartBtn.addEventListener('click', restart);
nextBtn.addEventListener('click', next);
submitBtn.addEventListener('click', submit);




function startQuiz(){
    var userChoice = confirm("Would you like to start the quiz?");

    if (userChoice == "No"){
        console.log("user don't want to be quizzed :(");
        return;
    }

    console.log("user wants to be quizzed!");
    alert("You have 30 seconds to answer 6 questions!");
    // start timer
    var count =30;
    var counter =setInterval(timer, 1000);

    function timer(){
        count=count-1;
        if (count <= 0){
           clearInterval(counter);
           document.getElementById("quizbox").innerHTML = "Times Up!";
           return;
        }
      document.getElementById("timer").innerHTML="Timer: "+ count + " secs"; 
      }



    currentQ = 0;
    totalScore.innerHTML = myQuestions.length;
    questionText.innerHTML = myQuestions[currentQ].question;

    true.innerHTML = myQuestions[currentQ].answers[0].option;
    true.onclick = () =>{
        if(myQuestions[currentQ].answers[0].answer){
            if(score<3){
                score ++;
                alert("you are correct!");
            }
        }
        userScore.innerHTML = score; 
        if (currentQ < 2){
            next();
        }
    }

    false.innerHTML = myQuestions [currentQ].answers[1].option;
    false.onclick = () =>{
        if(myQuestions[currentQ].answers[1].answer){
            if(score<3){
                score ++;
                alert("you are wrong!");
            }
        }

        userScore.innerHTML = score; 
        if(currentQ <2 ){
            next();
        }
    }

}



startQuiz();






