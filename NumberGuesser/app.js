//Game Values
let min = 1,
    max = 10,
    winningNum = getRandomNumber(min,max),
    guessesLeft = 3;
  
//UI Elements
const game = document.querySelector('#game'),
      minNum = document.querySelector('.min-num'),
      maxNum = document.querySelector('.max-num'),
      guessBtn = document.querySelector('#guess-btn'),
      guessInput = document.querySelector('#guess-input'),
      message = document.querySelector('.message');

//Assign UI Min and Max
minNum.textContent = min;
maxNum.textContent = max;

//Play Again Event Listener
game.addEventListener('mousedown', function(e){
  if(e.target.classList.contains('play-again')){
    window.location.reload();
  }
});

//Listen For Guess
guessBtn.addEventListener('click',function(){
  let guess = parseInt(guessInput.value);

  //Validate
  if(isNaN(guess) || guess < min || guess > max){
    setMessage(`Please enter a number between ${min} and ${max}`,'red');
  }

  //Check If Won
  if(guess === winningNum){
    //Game Over - Won
    gameOver(true,`${winningNum} is correct, YOU WIN!`, 'green');
  }
  else{
    //Wrong Number
    guessesLeft -= 1;
    if(guessesLeft === 0){
      //Game Over - Lost
      gameOver(false, `Game Over, you lost. The correct number was ${winningNum}.`);
    }    
    else{
      //Game Continues - Wrong Answer
      //Change Border Color
      guessInput.style.borderColor = 'red';
      //Clear Input
      guessInput.value = '';
      //Notify User Its The Wrong Number
      setMessage(`${guess} is not correct, ${guessesLeft} guesses left.`,'red');
    } 
  }
});

//Game Over
function gameOver(won, msg){
  let color;
  won == true ? color = 'green' : color = 'red';
  //Disable Input
  guessInput.disabled = true;
  //Change Border Color
  guessInput.style.borderColor = color;
  //Set Text Color
  message.style.color = color;
  //Set Message
  setMessage(msg);

  //Plage Again
  guessBtn.value = 'Play Again';
  guessBtn.className += 'play-again';
}

//Get Winning Number
function getRandomNumber(min, max){
  return Math.floor(Math.random()*(max-min+1)+min);
}

//Set Message
function setMessage(msg, color){
  message.textContent = msg;
  message.style.color = color;
}