$(document).ready(function() {
    var $instructions = $('#instructions');
    var $question = $('#question');
    var $selections = $('#selections');
    var $time = $('#time');
    var $categorySelect = $('#trivia_category');
    var $difficultySelect = $('#trivia_difficulty');
    var $startBtn = $('#gameStart');

    var category = '';
    var difficulty = '';

    var gameTimer;
    var queryURL;

    var triviaGame = {
    	
    	time: 45,

    	questions: [],

        timeDown: function() {
            triviaGame.time--;
            $time.text(triviaGame.time);
            console.log(triviaGame.time);
        },

        displayQuestion: function() {

        }

    	

    }

    function urlCreator() {
        if ($categorySelect.val() === 'any') {
            category = '';
        } else {
            category = '&category=' + $categorySelect.val();
        }

        if ($difficultySelect.val() === 'any') {
            difficulty = '';
        } else {
            difficulty = '&difficulty=' + $difficultySelect.val();
        }

        queryURL = 'https://opentdb.com/api.php?amount=10&type=multiple' + category + difficulty;

    }

    $startBtn.on('click', function() {
        urlCreator();

        console.log(queryURL);

        $.ajax({
                url: queryURL,
                type: 'GET',
            })
            .done(function(response) {
                triviaGame.questions = response.results;
                console.log(triviaGame.questions);
                gameTimer = setInterval(triviaGame.timeDown, 1000);
            });
    });



});
/*
 TODO:
	Add ajax call to retrieve questions. 
	Parse questions and put them into the $question field
	Parse 
 


https://opentdb.com/api.php?amount=10&category= + CAT + &difficulty= + DIFFICULTY + &type=multiple

"9" General Knowledge
"10" Entertainment: Books
"11" Entertainment: Film
"12" Entertainment: Music
"13" Entertainment: Musicals &amp; Theatres
"14" Entertainment: Television
"15" Entertainment: Video Games
"16" Entertainment: Board Games
"17" Science &amp; Nature
"18" Science: Computers
"19" Science: Mathematics
"20" Mythology
"21" Sports
"22" Geography
"23" History
"24" Politics
"25" Art
"26" Celebrities
"27" Animals
"28" Vehicles
"29" Entertainment: Comics
"30" Science: Gadgets
"31" Entertainment: Japanese Anime &amp; Manga
"32" Entertainment: Cartoon &amp; Animations

easy
medium
hard



Open Triva response

{
"response_code": 0,
"results": [
	{
	"category": "Entertainment: Film",
	"type": "multiple",
	"difficulty": "hard",
	"question": "Which was the first of Alfred Hitchcock&#039;s movies to be filmed in colour?",
	"correct_answer": "Rope",
	"incorrect_answers": [
	"Psycho",
	"Vertigo",
	"Rebecca"
]
}


*/
