//start button
//create button
// add event listener
//button starts countdown
//button presents problem to user


//timer
//create timer
//broadcast timer to user
//timer is tied to lose condition
//present lose card, record for local storage

//problem
//choose random problem from list
//display problem to user
//create toggle from blank to letter
//create event listener to record keypress
//win is ties to solving problem
//solving problem is pressing correct keystrokes
//if statement?
//present win card, record for local storage


//win and lose streak
//recorded from timer or problem outcome
//needs to be recorded to local storage
//needs to be called when app loads

var startBtn = document.querySelector('.start-button')
//console.log(startBtn)
startBtn.addEventListener("click", function (e) {
    e.preventDefault();
    //alert("working");
    var timerCount = 10;
    var timerId = setInterval(function(){
        timerCount--;
        if(timerCount === 0){
            ("game over");
            clearInterval(timerId);
        }
    }
})