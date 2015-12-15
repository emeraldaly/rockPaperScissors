var buttonChoices = ["rock", "paper", "scissor"];

$(document).ready(function() {
  function bindControls() {
    $(".btn-primary").on("click", function() {
      var userChoice = $(this).attr("id");
      var randomIndex=Math.floor(Math.random() * buttonChoices.length);
      var computerChoice = buttonChoices[randomIndex];
      // var userScore = 0;
      // var computerScore = 0;
      // var roundCount = 1;
      // alert(userChoice + "/" + computerChoice)

    if(computerChoice === userChoice) {
      // alert("Tie")
      $("#myModal").modal("show");
      $(".modal-body").html(userChoice + "/" + computerChoice + " It's a Tie!");
    } 
    else if(computerChoice === "paper" && userChoice === "scissor") {
      // User gets a point
      // alert("You win")
      $("#myModal").modal("show");
      $(".modal-body").html(userChoice + "/" + computerChoice + " You Win!");
      // userScore++;
      // rockPaperScissor.gameState.userScore++;
    }
    else if(computerChoice === "scissor" && userChoice === "paper") {
      // Computer gets a point
      $("#myModal").modal("show");
      $(".modal-body").html(userChoice + "/" + computerChoice + " The Machine Wins!");
      // computerScore++;
      // rockPaperScissor.gameState.computerScore++;
      // alert("Computer won")
    }
    else if(computerChoice === "rock" && userChoice === "paper") {
      // User gets a point
      $("#myModal").modal("show");
      $(".modal-body").html(userChoice + "/" + computerChoice + " You Win!");
      // userScore++;
      // rockPaperScissor.gameState.userScore++;
    // alert("You win")
    }
    else if(computerChoice === "paper" && userChoice === "rock") {
      // Computer gets a point
      $("#myModal").modal("show");
      $(".modal-body").html(userChoice + "/" + computerChoice + " The Machine Wins!");
      // computerScore++;
      // rockPaperScissor.gameState.computerScore++;
    // alert("Computer won")
    }
    // else if(computerChoice === "rock" && userChoice === "lizard") {
    //   //Computer gets a point
    //   $("#myModal").modal("show");
    //   $(".modal-body").html("The Machine Wins!");
    // }
    // else if(userChoice === "lizard" && computerChoice === "rock") {
    //   //user gets a point
    //   $("#myModal").modal("show");
    //   $(".modal-body").html("You Win!");
    // }
    // else if(computerChoice === "lizard" && userChoice === "spock") {
    //   //Computer gets a point
    //   $("#myModal").modal("show");
    //   $(".modal-body").html("The Machine Wins!");
    // }
    // else if(userChoice === "spock" && computerChoice === "lizard") {
    //   //user gets a point
    //   $("#myModal").modal("show");
    //   $(".modal-body").html("You Win!");
    // }  
    // else if(computerChoice === "spock" && userChoice === "scissor") {
    //   //Computer gets a point
    //   $("#myModal").modal("show");
    //   $(".modal-body").html("The Machine Wins!");
    // }
    // else if(userChoice === "scissor" && computerChoice === "spock") {
    //   //user gets a point
    //   $("#myModal").modal("show");
    //   $(".modal-body").html("You Win!");
    // }
    // else if(userChoice === "scissor" && computerChoice === "lizard") {
    //   //Computer gets a point
    //   $("#myModal").modal("show");
    //   $(".modal-body").html("The Machine Wins!");
    // }
    // else if(computerChoice === "lizard" && userChoice === "scissor") {
    //   //User gets a point
    //   $("#myModal").modal("show");
    //   $(".modal-body").html("You Win!");
    // }
    // else if(computerChoice === "lizard" && userChoice === "paper") {
    //   //Computer gets a point
    //   $("#myModal").modal("show");
    //   $(".modal-body").html("The Machine Wins!");
    // }
    // else if(userChoice === "paper" && computerChoice === "lizard") {
    //   //user gets a point
    //   $("#myModal").modal("show");
    //   $(".modal-body").html("You Win!");
    // }
    // else if(userChoice === "paper" && computerChoice === "spock") {
    //   //computer gets a point
    //   $("#myModal").modal("show");
    //   $(".modal-body").html("The Machine Wins!");
    // }
    // else if(computerChoice === "spock" && userChoice === "paper") {
    //   //User gets a point
    //   $("#myModal").modal("show");
    //   $(".modal-body").html("You Win!");
    // }
    // else if(computerChoice === "spock" && userChoice === "rock") {
    //   //Computer gets a point
    //   $("#myModal").modal("show");
    //   $(".modal-body").html("The Machine Wins!");
    // }
    // else if(userChoice === "rock" && computerChoice === "spock") {
    //   //user gets a point
    //   $("#myModal").modal("show");
    //   $(".modal-body").html("You Win!");
    // }
    else if(computerChoice === "rock" && userChoice === "scissor") {
      // Computer gets a point
     $("#myModal").modal("show");
     $(".modal-body").html(userChoice + "/" + computerChoice + " The Machine Wins!");
      // computerScore++;
      // rockPaperScissor.gameState.computerScore++;
    // alert("Computer won")
    } 
    else if(computerChoice === "scissor" && userChoice === "rock") {
      // User gets a point
      $("#myModal").modal("show");
      $(".modal-body").html(userChoice + "/" + computerChoice + " You Win!");
      // userScore++;
      // rockPaperScissor.gameState.userScore++;
    // alert("You win")
    }

    });    
  };

  bindControls();

});