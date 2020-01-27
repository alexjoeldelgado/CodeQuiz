var $counter = $("#counter");
var $title = $("#title");
var $intro = $("#intro");
var $startQuiz = $("#startQuiz");
var $quiz = $("#quiz");
var $question = $("#question");
var $choices = $("#choices");
var $choiceA = $("#A");
var $choiceB = $("#B");
var $choiceC = $("#C");
var $choiceD = $("#D");
var $score = $("#score");
var $answerIsCorrect = $("#answerIsCorrect");
var $answerIsWrong = $("#answerIsWrong");
var $gameOver = $("#gameOver");
var $resultsScreen = $("#resultsScreen");
var $scoreDiv = $("#scoreDiv");
var $initials = $("#initials");
var $submitInit = $("#submitInitials");
var $highScores = $("#highScores");
var $highScoreList = $("#highScoreList");
var $return = $("#return");
var $clearHighScores = $("#clearHighScores")
var $viewHS = $("#viewHS");
var $topbar = $("#topbar");
var questions = [
    {
        $question: "What is HTML?",
        $choiceA: "HyperText Markup Language",
        $choiceB: "A language spoken in Ancient Greece",
        $choiceC: "An acronym for life",
        $choiceD: "A javascript function",
        correct: "A",
    },{
        $question: "How can you make a numbered list?",
        $choiceA: "list",
        $choiceB: "ol",
        $choiceC: "ul",
        $choiceD: "li",
        correct: "B",
    },{
        $question: "Which HTML element defines the title of a document?",
        $choiceA: "head",
        $choiceB: "meta",
        $choiceC: "nav",
        $choiceD: "title",
        correct: "D",
    },{
        $question: "How do you select an element with id 'demo'?",
        $choiceA: "demo",
        $choiceB: ".demo",
        $choiceC: "#demo",
        $choiceD: "/demo",
        correct: "C",
    },{
        $question: "How do you write 'Hello World' in an alert box?",
        $choiceA: "prompt('Hello World');",
        $choiceB: "alertbox('Hello World');",
        $choiceC: "alert('Hello World');",
        $choiceD: "msg('Hello World');",
        correct: "C",
    },{
        $question: "Which event occurs when the user clicks on an HTML element?",
        $choiceA: "onclick",
        $choiceB: "onmouseover",
        $choiceC: "keyup",
        $choiceD: "onchange",
        correct: "A",
    },{
        $question: "The Bootstrap Grid System is based on how many columns?",
        $choiceA: "9",
        $choiceB: "15",
        $choiceC: "8",
        $choiceD: "12",
        correct: "D",
    },{
        $question: "Which jQuery method is used to hide selected elements?",
        $choiceA: "visible(false)",
        $choiceB: "hide()",
        $choiceC: "hidden()",
        $choiceD: "display(none)",
        correct: "B",
    }
];

var lastQuestion = questions.length - 1;
var currentQuestion = 0;
var count = 80;
var quizTime = 0;

function displayQuestion(){
    var q = questions[currentQuestion];
    $question.html("<h1>" + q.$question + "</h1>");
    $choiceA.html("<button> 1. " + q.$choiceA + "</button>");
    $choiceB.html("<button> 2. " + q.$choiceB + "</button>");
    $choiceC.html("<button> 3. " + q.$choiceC + "</button>");
    $choiceD.html("<button> 4. " + q.$choiceD + "</button>");
};

function displayCounter(){
        if (count >= quizTime){
        $counter.html("<p>" + count + "</p>");
        count--;
    } else {
        clearInterval();
    }};

function startQuiz(){
    currentQuestion = 0;
    count = 80;
    $startQuiz.hide();
    $title.hide();
    $intro.hide();
    displayQuestion();
    $quiz.show();
    $counter.show();
    displayCounter();
    var timer = setInterval(displayCounter,1000);
}
function correctResult(){
    $answerIsCorrect.fadeIn(500);
    $answerIsCorrect.fadeOut(500);
}
function wrongResult(){
    $answerIsWrong.fadeIn(500);
    $answerIsWrong.fadeOut(500);
}
function gameOver(){
    $gameOver.fadeIn(500);
    $gameOver.fadeOut(500);
    $quiz.hide();
    $counter.hide();
    clearInterval(displayCounter);
    console.log(score);
    $resultsScreen.show();
    $scoreDiv.append("<p>Your score is " + score + "!</p>");


}
function checkAnswer(answer) {
    if (answer == questions[currentQuestion].correct){
        score = count;
        correctResult();
    } else {
        wrongResult();
        for(var i = 0; i < 10; i++){
            displayCounter();
        }
        score = count;
    }
    if (currentQuestion < lastQuestion){
        currentQuestion++;
        displayQuestion();
    } else {
        gameOver();
    }
}
$submitInit.on("click", function(event){
    event.preventDefault();
    $resultsScreen.hide();  
    $highScores.show();
    $topbar.hide();
    addScore();
    console.log($initials)
})
function addScore(){
    var $newLi = $("<li>");
    $newLi.text($initials.val() + " " + score);
    $highScoreList.append($newLi);
}
$return.on("click", function(){
    $highScores.hide();
    $counter.hide();
    $startQuiz.show();
    $title.show();
    $intro.show();
    $topbar.show();
    $scoreDiv.empty();
})
$clearHighScores.on("click", function(){
    $highScoreList.empty();
})
$startQuiz.on("click",startQuiz);
function viewHS (){
    $topbar.hide();
    $title.hide();
    $intro.hide();
    $startQuiz.hide();
    $quiz.hide();
    $resultsScreen.hide();
    $highScores.show();
}





