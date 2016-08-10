//Start Hamburger menu animation
(function() {
    "use strict";
    var toggles = document.querySelectorAll(".c-hamburger,.navbar-item");
    var cHamburger = document.querySelectorAll(".c-hamburger");
    
    if (cHamburger.length === 1) {
        cHamburger = cHamburger[0];
    }

    for (var i = toggles.length - 1; i >= 0; i--) {
      var toggle = toggles[i];
      toggleHandler(toggle);
    }

    function toggleHandler(toggle) {
      toggle.addEventListener( "click", function(e) {
        e.preventDefault();
        
        (cHamburger.classList.contains("is-active") === true) ? cHamburger.classList.remove("is-active") : cHamburger.classList.add("is-active");
      });
    }
})();
//End Hamburger menu animation


//Start side bar affix
$( document ).ready(function() {
    $('#MyAffix').affix('checkPosition');
});

$('#MyAffix').affix({
  offset: {top:110, bottom: 60}
})

$(window).scroll(function() {
if ($(this).scrollTop() > 50){  
    $('#subNav').addClass("navbar-fixed-top");
    $('.subNavreplace').addClass("replace");
  }
  else{
    $('#subNav').removeClass("navbar-fixed-top");
    $('.subNavreplace').removeClass("replace");
  }
}); 
//End side bar affix

