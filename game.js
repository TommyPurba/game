
let buttonColours =["red", "blue", "green", "yellow"];
let gamePatten = [];
let userClickPatten=[];
let press = false;
let level = 0;


$(".btn").click(function() {
    let userChosenColour = $(this).attr("id");
    userClickPatten.push(userChosenColour);


    playSound(userChosenColour);
    animatePress(userChosenColour);


    checkAnswer(userClickPatten.length-1);
  });


function nextSequence() {
    let randomNumber = Math.floor(Math.random()*4);
    let randomChosenColour = buttonColours[randomNumber];
    gamePatten.push(randomChosenColour);
    level++;
    $("#level-title").text("Level " + level);
    userClickPatten = [];
    playSound(randomChosenColour);
}

function playSound(name) {
    $("#" + name).fadeIn(100).fadeOut(100).fadeIn(100);
    let audio = new Audio("sounds/" + name + ".mp3");
    audio.play();
}


function animatePress(coen){

    $('#' + coen).addClass("pressed");
    
    setTimeout(function (){
    
    $("#"+ coen ).removeClass("pressed")
    
    },100)
    
    };


    $(document).keypress(function(){
     if(!press){
        $("#level-title").text("Level " + level);
        nextSequence();
        press = true;   
     }
       
    });


    function checkAnswer(currentLevel) {
        if(gamePatten[currentLevel] === userClickPatten[currentLevel]){
            console.log("right");

            if(userClickPatten.length === gamePatten.length){
                setTimeout(function () {
                    nextSequence();
                  }, 1000);
            }
        }
        else {
            $("body").addClass("game-over");
    
                setTimeout(function (){
                
                    $("body").removeClass("game-over")
                    
                },200)
                $("#level-title").text("game over !!! please any key to play again");
                let audios = new Audio("sounds/wrong.mp3");
                    audios.play();
                    startOver()
            }
    }



    function startOver() {
        level = 0;
        gamePatten = [];
        press = false;
    }


