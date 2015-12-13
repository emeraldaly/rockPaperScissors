var buttonChoices = ["rock", "paper", "scissor", "lizard", "spock"];

$(document).ready(function() {
  $("#stopGame").hide(); 
  $("#gameCounter").hide();
  $("#gameGo").hide();
  $("#directions").hide();
  
  $("#startGame").on("click", function () {
    $("#stopGame").hide(); 
    $("#gameCounter").hide();
    $("#gameGo").hide();
    $("#directions").show();
    $(this).hide();
  });

  $("#go").on("click", function () {
    $("#stopGame").show(); 
    $("#gameCounter").show();
    $("#gameGo").show();
    $("#directions").hide();
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
    } 
    else if(computerChoice === "paper" && userChoice === "scissor") {
      // User gets a point
      alert("User wins!");
    }
    else if(computerChoice === "scissor" && userChoice === "paper") {
      // Computer gets a point
      alert("Computer!");
    }
    else if(computerChoice === "rock" && userChoice === "paper") {
      // User gets a point
      alert("User wins!");
    }
    else if(computerChoice === "paper" && userChoice === "rock") {
      // Computer gets a point
      alert("Computer wins!");
    }
    else if(computerChoice === "rock" && useChoice === "lizard") {
      //Computer gets a point
      alert("Computer wins!");
    }
    else if(userChoice === "lizard" && computerChoice === "rock") {
      //user gets a point
      alert("User wins!");
    }
    else if(computerChoice === "lizard" && useChoice === "spock") {
      //Computer gets a point
      alert("Computer wins!");
    }
    else if(userChoice === "spock" && computerChoice === "lizard") {
      //user gets a point
      alert("User wins!");
    }  
    else if(computerChoice === "spock" && useChoice === "scissor") {
      //Computer gets a point
      alert("Computer wins!");
    }
    else if(userChoice === "scissor" && computerChoice === "spock") {
      //user gets a point
      alert("User wins!");
    }
    else if(userChoice === "scissor" && computerChoice === "lizard") {
      //Computer gets a point
      alert("Computer wins!");
    }
    else if(computerChoice === "lizard" && useChoice === "scissor") {
      //User gets a point
      alert("User wins!");
    }
    else if(computerChoice === "lizard" && useChoice === "paper") {
      //Computer gets a point
      alert("Computer wins!");
    }
    else if(userChoice === "paper" && computerChoice === "lizard") {
      //user gets a point
      alert("User wins!");
    }
    else if(userChoice === "paper" && computerChoice === "spock") {
      //computer gets a point
      alert("Computer wins!");
    }
    else if(computerChoice === "spock" && useChoice === "paper") {
      //User gets a point
      alert("User wins!");
    }
    else if(computerChoice === "spock" && useChoice === "rock") {
      //Computer gets a point
      alert("Computer wins!");
    }
    else if(userChoice === "rock" && computerChoice === "spock") {
      //user gets a point
      alert("User wins!");
    }
    else if(computerChoice === "rock" && userChoice === "scissor") {
      // Computer gets a point
      alert("Computer wins!");
    } 
    else if(computerChoice === "scissor" && userChoice === "rock") {
      // User gets a point
      alert("User wins!");
    }

    });    
  };

  bindControls();

});