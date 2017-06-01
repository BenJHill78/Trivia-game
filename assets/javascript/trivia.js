
$( document ).ready(function() {

  //Variables
  var ques = ["question1", "question2", "question3", "question4"]
  var question, a1, a2, a3, a4, correctAnswers, incorrectAnswers, totalQuestionsAnswered;
  var audio = new Audio("assets/sound/as.mp3");

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
  }

  function q1(){
    $("#questions1").html(gameq.myQuestions.question);
    $("#ans1").html(gameq.myQuestions.choose[0]);
    $("#ans2").html(gameq.myQuestions.choose[1]);
    $("#ans3").html(gameq.myQuestions.choose[2]);
        console.log ("1 answer is a")
  }

  function q2(){
    $("#questions2").html(gameq.myQuestions2.question);
    $("#ans4").html(gameq.myQuestions2.choose[0]);
    $("#ans5").html(gameq.myQuestions2.choose[1]);
    $("#ans6").html(gameq.myQuestions2.choose[2]);
    console.log ("2 answer is c")
  }

  function q3(){
    $("#questions3").html(gameq.myQuestions3.question);
    $("#ans7").html(gameq.myQuestions3.choose[0]);
    $("#ans8").html(gameq.myQuestions3.choose[1]);
    $("#ans9").html(gameq.myQuestions3.choose[2]);
            console.log ("3 answer is a")
  }

  function q4(){
    $("#questions4").html(gameq.myQuestions4.question);
    $("#ans10").html(gameq.myQuestions4.choose[0]);
    $("#ans11").html(gameq.myQuestions4.choose[1]);
    $("#ans12").html(gameq.myQuestions4.choose[2]);
            console.log ("4 answer is b")
  }

  $("in1").on("click"); 

  function displayOutput(){
    userAnswer = "a"
    if (in1=="a")
      correctAnswers ++
    else if (in1 != "a")
      incorrectAnswers ++
  }

  $("in2").on("click"); 

  function displayOutput(){
    userAnswer = "c"
    if (in2=="c")
      correctAnswers ++
    else if (in2 != "c")
      incorrectAnswers ++
  }

  $("in3").on("click"); 

  function displayOutput(){
    userAnswer = "a"
    if (in3=="a")
      correctAnswers ++
    else if (in3 != "a")
      incorrectAnswers ++
  }

  $("in4").on("click"); 

  function displayOutput(){
    userAnswer = "b"
    if (in4=="b")
      correctAnswers ++
    else if (in4 != "b")
      incorrectAnswers ++
  }
});

