$(document).ready(function() {

  function bindControls() {
    $(".btn-primary").on("click", function() {
      alert("I got clicked");
    });    
  };

  bindControls();

  var buttonChoices = ["rock", "paper", "scissor"];

  function randomButton() {
    var randomIndex=Math.floor(Math.random() * buttonChoices.length);
    $(".btn-primary").html(buttonChoices[randomIndex]).attr("data-selection", randomIndex);
  }
  $(".btn-primary").on("click", function() {
    var computerChoice = Math.floor(Math.random() * buttonChoices.length);
    var userChoice = parseInt($(this).attr("data-selection"));

    if(computerChoice === userChoice) {
      $(".modal-body").html("Tie!");
    } else if(computerChoice === 0 && userChoice === 2) {
      // Computer gets a point
      $(".modal-body").html("Computer wins!");
      rockPaperScissor.gameState.computerScore++;
    } else if(computerChoice === 0 && userChoice === 1) {
      // User gets a point
      $(".modal-body").html("User wins!");
    }
    else if(computerChoice === 1 && userChoice === 0) {
      // Computer gets a point
      $(".modal-body").html("Computer wins!");
    }
    else if(computerChoice === 1 && userChoice === 2) {
      // User gets a point
      $(".modal-body").html("User wins!");
    }
    else if(computerChoice === 2 && userChoice === 1) {
      // Computer gets a point
      $(".modal-body").html("Computer!");
    }
    else if(computerChoice === 2 && userChoice === 0) {
      // User gets a point
      $(".modal-body").html("User wins!");
    }
      rockPaperScissor.gameState.computerScore++;
    }); 
});