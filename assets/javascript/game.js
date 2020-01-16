$(document).ready(() => {

  //program generates a random number between 19 and 120
  let randomNumber = Math.floor(Math.random() * ((120 - 19) + 1) + 19);
  $('#randNum').html(randomNumber);

  //each crystal has a hidden value i.e. random number between1 and 12
  let sapphire = Math.floor(Math.random() * 12) + 1;
  let gem = Math.floor(Math.random() * 12) + 1;
  let emerald = Math.floor(Math.random() * 12) + 1;
  let ruby = Math.floor(Math.random() * 12) + 1;


  //player clicks the crystals to display value to totScore
  let wins = 0; //#wins
  let losses = 0;  //#losses

  let totScore = 0;
  $('#totScore').text(totScore);

  function win() {
      wins = wins + 1;
      $('#wins').text(wins);
      resetTwo();
      reset();
  }

  function lose() {
      losses = losses + 1;
      $('#losses').text(losses);
      resetTwo();
      reset();
  }

  $('#sapphire').click(() => {
      totScore = totScore + gem;
      $('#totScore').text(totScore);
      if (totScore === randomNumber) {
        console.log("win")
          win();
          alert("You win!");
          reset();
          resetTwo();
      } else if (totScore > randomNumber) {
        console.log("lose")
          lose();
          alert("You lose!");
          reset();
          resetTwo();
      }
      console.log(totScore + " " +randomNumber);
      
  });

  $('#gem').click(() => {
      totScore = totScore + emerald;
      $('#totScore').text(totScore);
      if (totScore === randomNumber) {
          win();
          alert("You win!");
          reset();
          resetTwo();
      } else if (totScore > randomNumber) {
          lose();
          alert("You lose!");
          reset();
          resetTwo();
      }
  });

  $('#emerald').click(() => {
      totScore = totScore + ruby;
      $('#totScore').text(totScore);
      if (totScore === randomNumber) {
          win();
          alert("You win!");
          reset();
          resetTwo();
      } else if (totScore > randomNumber) {
          lose();
          alert("You lose!");
          reset();
          resetTwo();
      }
  });

  $('#ruby').click(() => {
      totScore = totScore + sapphire;
      $('#totScore').text(totScore);
      if (totScore === randomNumber) {
          win();
          alert("You win!");
          reset();
          resetTwo();
      } else if (totScore > randomNumber) {
          lose();
          alert("You lose!");
          reset();
          resetTwo();
      }
  });

  function reset() {
      totScore = 0;
      $('#totScore').text(totScore);
  }

  function resetTwo() {
      randomNumber = Math.floor(Math.random() * ((120 - 19) + 1) + 19);
      $('#randNum').html(randomNumber);
      sapphire = Math.floor(Math.random() * 12) + 1;
      gem = Math.floor(Math.random() * 12) + 1;
      emerald = Math.floor(Math.random() * 12) + 1;
      ruby= Math.floor(Math.random() * 12) + 1;
  }
});