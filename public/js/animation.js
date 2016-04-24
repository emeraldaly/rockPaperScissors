$(document).ready(function () {


function loopingAnimation() {
    $("#scissorOpen").fadeIn(200).delay(50).fadeOut(200);

    setTimeout(function() {
      $("#scissorClose").fadeIn(200).delay(50).fadeOut(200);
    }, 450);
    
    }

  setInterval(loopingAnimation, 900);

  

  function loopingAnimation() {
    $("#rock").fadeIn(200).delay(50).fadeOut(200);

    setTimeout(function() {
      $("#rockBroke").fadeIn(200).delay(50).fadeOut(200);
    }, 450);
    
  }

  setInterval(loopingAnimation, 900);

  
  
  function loopingAnimation() {
    $("#paper").fadeIn(200).delay(50).fadeOut(200);

    setTimeout(function() {
      $("#paperRip").fadeIn(200).delay(50).fadeOut(200);
    }, 450);
    
}

  setInterval(loopingAnimation, 900);
  


});
