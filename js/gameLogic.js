var buttonChoices = ["rock", "paper", "scissor"];

$(document).ready(function() {
  $("#stopGame").hide(); 
  $("#gameCounter").hide();
  $("#gameGo").hide();
  $("#directions").hide();
  
  $("#startGame").on("click", function () {
    $("#directions").show();
    $(this).hide();
  });

  $("#go").on("click", function () {
    $("#stopGame").show();
    $("#gameCounter").show();
    $("#gameGo").show();
  });

  $("#stopGame").on("click", function () {
    $("#startGame").show();
    $("#gameCounter").hide();
    $("#gameGo").hide();
    $("#directions").hide();
    $(this).hide();
  });

  function bindControls() {
    $(".btn-primary").on("click", function() {
      var userChoice = $(this).attr("id");
      var randomIndex=Math.floor(Math.random() * buttonChoices.length);
      var computerChoice = buttonChoices[randomIndex];
      alert(userChoice + "/" + computerChoice);

    if(computerChoice === userChoice) {
      alert("Tie!");
//0-rock; 1-paper; 2-scissor
    } 
    else if(computerChoice === "rock" && userChoice === "scissor") {
      // Computer gets a point
      alert("Computer wins!");
    
    } 
    else if(computerChoice === "rock" && userChoice === "paper") {
      // User gets a point
      alert("User wins!");
    }
    else if(computerChoice === "paper" && userChoice === "rock") {
      // Computer gets a point
      alert("Computer wins!");
    }
    else if(computerChoice === "paper" && userChoice === "scissor") {
      // User gets a point
      alert("User wins!");
    }
    else if(computerChoice === "scissor" && userChoice === "paper") {
      // Computer gets a point
      alert("Computer!");
    }
    else if(computerChoice === "scissor" && userChoice === "rock") {
      // User gets a point
      alert("User wins!");
    }

    });    
  };

  bindControls();

  
});