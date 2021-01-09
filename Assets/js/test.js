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
console.log(typeof document.querySelector('#win'))

var questionArr = document.querySelectorAll('section')



{
    for (let index = 0; index < questionArr.length; index++) {
        questionArr[index].classList.add("hidden");
        questionArr[index].classList.remove("visible");

    }
    //     getWins();
    //     getLosses();
}


startBtn.addEventListener("click", function () {
    startTimer();
    questionArr[0].classList.add("visible");

})

function startTimer() {
    // Sets timer
    var timerInterval = setInterval(function () {
        timerCount--;
        timer.textContent = timerCount;
        if (timerCount <= 0) {
            // Clears interval
            clearInterval(timerInterval);
            gameOver()
            return timerInterval;
        }
    }, 1000);

};


for (let i = 0; i < correctArr.length; i++) {
    correctArr[i].addEventListener("click", function () {
        nextQuestion();
    });
    console.log(i)

}

for (let i = 0; i < wrongArr.length; i++) {
    wrongArr[i].addEventListener("click", function () {
        timerCount--;
    });
}
// document.querySelector(".choice-correct").addEventListener("click", function () {
//     nextQuestion();
// });

//document.querySelector(".choice-wrong").addEventListener("click", function () {
// timerCount -= 10;
// });



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
    win = win + 1;
};
