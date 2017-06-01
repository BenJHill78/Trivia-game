
$( document ).ready(function() {

  //Variables
  var ques = ["question1", "question2", "question3", "question4"]
  var question, a1, a2, a3, a4, correctAnswers=0, incorrectAnswers=0, totalQuestionsAnswered;
  var audio = new Audio("assets/sound/as1.mp3");
  var userAnswer1="", userAnswer2="", userAnswer3="", userAnswer4="";

  var gameq = {
    myQuestions: {
      question: "1.) What was Aerosmiths number 1 single?",
      choose: ["I don't want to miss a thing.", "walk this way", "crazy"],
      correctAnswer: "a",
    },
    myQuestions2: {
      question: "2.) Who designed the bands logo?",
      choose: ["Steven Tyler", "Brad Whitford", "Ray Tabano"],
      correctAnswer: "c",
    },
    myQuestions3: {
      question: "3.) What type of ride uses the bands songs and images?",
      choose: ["Roller Coaster", "Monster Truck ride", "Virtual bungie drop"],
      correctAnswer: "a",
    },
    myQuestions4: {
      question: "4.) What year were they inducted to the Rock N Roll Hall of Fame?",
      choose: ["1980", "2001", "1997"],
      correctAnswer: "b",
    }
  };
  $("#start").on("click", function(){
    $("#start").hide();
    audio.play();
    q1();
    $("#questions1").html(gameq.myQuestions.question);
    q2();
    $("#questions2").html(gameq.myQuestions2.question);
    q3();
    $("#questions3").html(gameq.myQuestions3.question);
    q4();
    $("#questions4").html(gameq.myQuestions4.question);
  });

  setTimeout(timeUp, 1000 * 25);

  function timeUp(){
    $("#countdown").append("<h2> Times Up! </h2>")
    audio.pause();
console.log(userAnswer1);
console.log(userAnswer2);
console.log(userAnswer3);
console.log(userAnswer4);
right();
  }

  function q1(){
    $("#questions1").html(gameq.myQuestions.question);
    $("#ans1").html(gameq.myQuestions.choose[0]);
    $("#ans2").html(gameq.myQuestions.choose[1]);
    $("#ans3").html(gameq.myQuestions.choose[2]);
 //   console.log ("1 answer is a")
    checkAnswer();
  }

  function q2(){
    $("#questions2").html(gameq.myQuestions2.question);
    $("#ans4").html(gameq.myQuestions2.choose[0]);
    $("#ans5").html(gameq.myQuestions2.choose[1]);
    $("#ans6").html(gameq.myQuestions2.choose[2]);
 //   console.log ("2 answer is c")
    checkAnswer();
  }

  function q3(){
    $("#questions3").html(gameq.myQuestions3.question);
    $("#ans7").html(gameq.myQuestions3.choose[0]);
    $("#ans8").html(gameq.myQuestions3.choose[1]);
    $("#ans9").html(gameq.myQuestions3.choose[2]);
    //console.log ("3 answer is a")
    checkAnswer();
  }

  function q4(){
    $("#questions4").html(gameq.myQuestions4.question);
    $("#ans10").html(gameq.myQuestions4.choose[0]);
    $("#ans11").html(gameq.myQuestions4.choose[1]);
    $("#ans12").html(gameq.myQuestions4.choose[2]);
//    console.log ("4 answer is b")
    checkAnswer();
  }
  function checkAnswer(){
    $("#in1").on("click", function(){
      userAnswer1 = "a";
    });
    $("#in2").on("click", function(){
      userAnswer1 = "b";
    });
    $("#in3").on("click", function(){
      userAnswer1 = "c";
    });
    $("#in4").on("click", function(){
      userAnswer2 = "a";
    });
    $("#in5").on("click", function(){
      userAnswer2 = "b";
    });
    $("#in6").on("click", function(){
      userAnswer2 = "c";
    });
    $("#in7").on("click", function(){
      userAnswer3 = "a";
    });
    $("#in8").on("click", function(){
      userAnswer3 = "b";
    });
    $("#in9").on("click", function(){
      userAnswer3 = "c";
    });
    $("#in10").on("click", function(){
      userAnswer4 = "a";
    });
    $("#in11").on("click", function(){
      userAnswer4 = "b";
    });
    $("#in12").on("click", function(){
      userAnswer4 = "c";
    });
  }
function right(){
  if (userAnswer1==gameq.myQuestions.correctAnswer){
    correctAnswers++;
  }else if(userAnswer1!=gameq.myQuestions.correctAnswer){
    incorrectAnswers++;
  }
    if (userAnswer2==gameq.myQuestions2.correctAnswer){
    correctAnswers++;
  }else if(userAnswer2!=gameq.myQuestions2.correctAnswer){
    incorrectAnswers++;
  }
    if (userAnswer3==gameq.myQuestions3.correctAnswer){
    correctAnswers++;
  }else if(userAnswer3!=gameq.myQuestions3.correctAnswer){
    incorrectAnswers++;
  }
    if (userAnswer4==gameq.myQuestions4.correctAnswer){
    correctAnswers++;
  }else if(userAnswer4!=gameq.myQuestions4.correctAnswer){
    incorrectAnswers++;
  }
  $("#correctAnswers").html("Correct Answers: "+correctAnswers);
    $("#incorrectAnswers").html("Incorrect Answers: "+incorrectAnswers);
}


});
