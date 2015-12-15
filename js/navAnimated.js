function loopingAnimation() {
    $("#rock").fadeIn(200).delay(50).fadeOut(200);
    setTimeout(function() {
    $("#paper").fadeIn(200).delay(50).fadeOut(200);
    ) 450)
    setTimeout(function() {
      $("#scissorlose").fadeIn(200).delay(50).fadeOut(200);
    }, 900);
    
    }

  setInterval(loopingAnimation, 1350);