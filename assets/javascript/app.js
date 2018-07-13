//PSUEDO CODE
//HAVE COMPUTER GIVE USER A QUESTION WITH MULTIPLE ANSWERS IF USER GUESSES CORRECT ANSWER COMPUTER WILL MOVE ON TO THE NEXT QUESTION.
//HAVE PROGRAM RUN THROUGH ARRAY OF QUESTIONS
//MAY NEED MULTIPLE ANSWER ARRAYS 
// =======================================================================================================================================================

var currentQuestion = 0;
var correct = 0;
var wrong = 0;
var timer = 30;
var i = 0;

var interval = setInterval(function() {
    timer--;
    $('#timer').text(timer);
    if (timer === 0) {
        currentQuestion++;
        $("#trivButtons").empty();
        i++;
        $("#response").empty();
        logic();
        timer = 30;
    }
}, 1000)

// =======================================================================================================================================================


// THE ARRAY CONTAINING THE QUESTION THE CHOICES FOR THE USER AND AN ARRARY CONTAINING TRUE AND FALSE VALUES THAT WILL BE SET TO OUR CHOICES ARRAY.
var questionArr = [{
        question: "Who is the main character of Final Fantasy 7?",
        choices: ["Cloud Strife", "Barret Wallace", "Tifa Lockheart", "RedXIII"],
        values: [true, false, false, false]
    }, {
        question: "What is cloud first limit break?",
        choices: ["Braver", "Omnislash", "Cross Slash", "Blade Beam"],
        values: [true, false, false, false]

    }, {
        question: "Where was Avanlanche founded?",
        choices: ["Nimbelhiem", "Golden Saucer", "Midgar", "Choco Farm"],
        // answer: "dr. wily",
        values: [false, false, true, false]
    }, {
        question: "Who is Cloud's childhood friend?",
        choices: ["Yuffie", "Caitsith", "Barret", "Tifa"],
        values: [false, false, false, true]

    }, {
        question: "Who is Sephiroths father?",
        choices: ["Hojo", "RedXIII", "Dyne", "Cid"],
        values: [true, false, false, false]

    }, {
        question: "What was Zack's rank in soilder?",
        choices: ["3rd Class", "1st Class", "2nd Class", "4th Class"],
        values: [false, true, false, false]

    }, {
        question: "What is the life force of the planet",
        choices: ["Mana", "Water", "Mako", "Materia"],
        values: [false, false, true, false]

    },

]

// =======================================================================================================================================================


// function that creates the answer buttons
function answerButton() {
    for (var i = 0; i < questionArr[currentQuestion].choices.length; i++) {

        // We create a button 
        var button = $("<button>");

        // Assigns the name of the array to the button.
        button.text(questionArr[currentQuestion].choices[i]);

        // We create a class for the buttons 
        button.addClass("answer-buttons btn btn-primary");

        //ADDED AN ATTRIBUTE TO THE BUTTON THAT CREATES A PATH TO THE VALUES ARRAY AND TIES THE VALUE TO THE BUTTON. EXAMPLE. THE INDEX[0] OF VALUES WILL BE TIED TO THE INDEX[0] OF CHOICES.
        button.attr("value", questionArr[currentQuestion].values[i]);
        // CREATES AN ATTRIBUTE DATA NAME AND SETS IT EQUAL TO THE ARRAY ITEMS NAME.
        button.attr("Data-name", questionArr[currentQuestion].choices[i]);
        // WE APPEND the button in the div with the #trivButtons id.
        $("#trivButtons").append(button);
    };
}

// =======================================================================================================================================================

// LOGIC FOR THE GAME TO RUN. 
function logic() {

    // THE QUESTIONS ARE BEING PLACED IN A DIV ABOVE AS AN HTML USING questionArr above. 
    $("#trivQuestion").html(questionArr[currentQuestion].question)
        // A FOR LOOP THAT WILL CREATE OUR ANSWER BUTTONS.
        // VAR I IS SET TO 0, THIS WILL START WITH OUR FIRST INDEX IN THE ARRAY.
        // Next, questionArr is being tied to the variable currentQuestion 
        // *questionArr[currentQuestion]* which is currently *questionArr[0]*
        // which will then look into our array (choices) and take its length.
    answerButton();
    //FUNCTION THAT WILL RETURN THE VALUE OF THE BUTTON CLICKED.
    $("button").on("click", function() {
        // USING THE "THIS" KEYWORD THE CODE IDENTIFIES WHICH BUTTON IS PRESSED BASED ON ITS DATA-NAME.
        var answers = $(this).attr("Data-name");
        //CONSOLE LOGS THE DATA-NAME IN THE CONSOLE. 
        console.log(answers);
        // USING THE "THIS" WE CHECK THE VALUE OF THE BUTTON THAT IS CLICKED, IF THAT VALUE IS EQUAL TO TRUE. WE LOG "CORRECT".
        if ($(this).attr("value") === "true") {
            correct++;
            $("#response").html("Correct");
            currentQuestion++;
            timer = 30;
            $("#trivButtons").empty();
            i++;
            $("#response").empty();
            logic();
        } else {

            $("#response").html("Wrong!");
            wrong++;
            currentQuestion++;
            timer = 30;
            $("#trivButtons").empty();
            i++;
            $("#response").empty();
            logic();
        }
        console.log(currentQuestion);
    });



}

logic();