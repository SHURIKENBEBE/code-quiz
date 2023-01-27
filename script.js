// setting up a 60 second countdown timer

var count =45;
var counter =setInterval(timer, 1000);

function timer(){
  count=count-1;
  if (count <= 0){
     clearInterval(counter);
     return;
  }
document.getElementById("timer").innerHTML="Timer: "+ count + " secs"; 
}

// generate js Qs
    // create js questions

var myQuestions = [
    {
        question: "The Const keyword in Javascript can be redeclared",
        answers:{
            true: "yes",
            false: "no",
         },
        correctAnswer: false 
    },


    {
        question: "Math.floor(x) returns x rounded down to its nearest integer",
        answers:{
            true: "yes",
            false: "no",
        },
        correctAnswer: true,
    },

    {
        question: " Comparing two JavaScript objects doesn't always return false.",
        answers:{
            true: "yes",
            false: "no",
        },
        correctAnswer: false,
    },

    {
        question: "If not specified, Javascript counts position from 1",
        answers:{
            true: "yes",
            false: "no",
        },
        correctAnswer: false, 
    },

    {
        question: " x == '5' returns true",
        answers:{
            true: "yes",
            false: "no",
        },
        correctAnswer: true,
    },

    {
        question: "Given that x = 8 and y = 2, (x== 8 || y == 8) returns true",
        answers:{
            true: "yes",
            false: "no",
        },
        correctAnswer: true, 
    },



];




function Qgenerator(jsQuestions, Qbox, resultBox, submitBtn){
    function showQ(jsQuestions, Qbox){
        var output=[];
        var answers;
        
        for (var i=0; i < jsQuestions.length; i++){
            answers =[];

            for (Boolean in jsQuestions[i].answers){
                answers.push(
                    '<label>' + '<input type="radio" name="questions'+i+'" value="'+Boolean+'">'+letter + ':'+jsQuestions[i].answers[Boolean]+'</label>'
                );
            }
        
        output.push(
            '<div class="questions">'+jsQuestions[i].question + '</div>'+'<div class="answers">' + answers.join('')+'</div>');
        }
        Qbox.innerHTML=output.join('');
    } 

    function showR(jsQuestions, Qbox, resultBox){
        var answerBox = Qbox.querySelectorAll('.answers');

        var userAnswer ="";
        var numCorrect = 0;

        for (var i=0; i<jsQuestions.length; i++){
            userAnswer = (answerBox[i].querySelector('input[name=question]'+i+']:checked')||{}).value;

            if(userAnswer===jsQuestions[i].correctAnswer){
                numCorrect++

                answerBox[i].style.color = 'lightblue';
            }

            else{
                answerBox[i].style.color='red';
            }
        }
        resultBox.innerHTML = numCorrect + 'out of ' + jsQuestions.length;
    }

    showQ(jsQuestions, Qbox);

    submitBtn.onclick = function(){
        showR(jsQuestions, Qbox, resultBox);
    }
}

var Qbox = document.getElementById('quiz');
var resultBox = document.getElementById('results');
var submitBtn = document.getElementById('submit');

Qgenerator(myQuestions, Qbox, resultBox, submitBtn);



