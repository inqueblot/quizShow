var startBtn = document.querySelector('#start-button');
var win = document.querySelector('#win');
var lose = document.querySelector('#lose');
var timer = document.querySelector('.timer')
var correctArr = document.querySelectorAll(".choice-correct");
var wrongArr = document.querySelectorAll(".choice-wrong");
var timerCount = 10
var questionNum = 0
var timerInterval = 0
var index = 0
var winCounter = 0
var loseCounter = 0
console.log(typeof document.querySelector('#win'))

var questionArr = document.querySelectorAll('section')
console.log(questionArr)



//these run on start
//hides all questions
for (let index = 0; index < questionArr.length; index++) {
    questionArr[index].classList.add("hidden");
    questionArr[index].classList.remove("visible");
}

//gets stored losses
if (localStorage.getItem("losses") != null) {
    loseCounter = localStorage.getItem("losses");
    lose.textContent = loseCounter;
}

//get stored wins
if (localStorage.getItem("wins") != null) {
    winCounter = localStorage.getItem("wins");
    win.textContent = winCounter;
}




startBtn.addEventListener("click", function () {
    timerCount = 10
    questionNum = 0
    startTimer();
    hideAll();
    questionArr[0].classList.add("visible");
    questionArr[0].classList.remove("hidden");


})

function startTimer() {
    // Sets timer
    var timerInterval = setInterval(function () {
        timerCount--;
        timer.textContent = timerCount;
        if (timerCount <= 0) {
            // Clears interval
            clearInterval(timerInterval);
            hideAll();
            questionArr[5].classList.remove("hidden");
            questionArr[5].classList.remove("visible");
            loseCounter++
            lose.textContent = loseCounter;
            localStorage.setItem("losses", loseCounter);


        }
        if (questionNum == 4) {
            clearInterval(timerInterval);
        }
    }, 1000);

};

//creates an event listener for each correct button
for (let i = 0; i < correctArr.length; i++) {
    correctArr[i].addEventListener("click", function () {
        nextQuestion();
    });
};
//creates an event listener for each wrong choice
for (let i = 0; i < wrongArr.length; i++) {
    wrongArr[i].addEventListener("click", function () {
        timerCount--;
    });
};


//runs through questions, when through all gives win
function nextQuestion() {
    questionArr[questionNum].classList.add("hidden");
    questionArr[questionNum].classList.remove("visible");
    questionNum++;
    questionArr[questionNum].classList.add("visible");
    questionArr[questionNum].classList.remove("hidden");
    console.log(questionNum);
    if (questionNum === 4) {
        youWin()
    }
}

function youWin() {
    winCounter++
    win.textContent = winCounter;
    localStorage.setItem("wins", winCounter);
    clearInterval(timerInterval);
};

function hideAll() {
    for (let index = 0; index < questionArr.length; index++) {
        questionArr[index].classList.add("hidden");
        questionArr[index].classList.remove("visible");
    }
};
