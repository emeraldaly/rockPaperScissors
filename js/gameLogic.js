var buttonChoices = ["rock", "paper", "scissor"];

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

    if(computerChoice === userChoice) {
      $("#myModal").modal("show");
      $(".modal-body").html(userChoice + "/" + computerChoice + " It's a Tie!");
    } 
    else if(computerChoice === "paper" && userChoice === "scissor") {
      // User gets a point
      $("#myModal").modal("show");
      $(".modal-body").html(userChoice + "/" + computerChoice + " You Win!");
    }
    else if(computerChoice === "scissor" && userChoice === "paper") {
      // Computer gets a point
      $("#myModal").modal("show");
      $(".modal-body").html(userChoice + "/" + computerChoice + " The Machine Wins!");
    }
    else if(computerChoice === "rock" && userChoice === "paper") {
      // User gets a point
      $("#myModal").modal("show");
      $(".modal-body").html(userChoice + "/" + computerChoice + " You Win!");
    }
    else if(computerChoice === "paper" && userChoice === "rock") {
      // Computer gets a point
      $("#myModal").modal("show");
      $(".modal-body").html(userChoice + "/" + computerChoice + " The Machine Wins!");
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
    } 
    else if(computerChoice === "scissor" && userChoice === "rock") {
      // User gets a point
      $("#myModal").modal("show");
      $(".modal-body").html(userChoice + "/" + computerChoice + " You Win!");
    }

    });    
  };

  bindControls();

});