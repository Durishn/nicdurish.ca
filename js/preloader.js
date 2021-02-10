/*****************
 * Preloader
 *****************/
$(document).ready(function () {
  // if ($(document).scrollTop() < 250) {
    $(".splash-center-div").css("opacity", 1);
  // }
  $(".splash-center-div").css("position", "fixed");

  
  // if (sessionStorage.getItem('dontLoad') == null){
  jQuery("#preloader").removeClass("displaynone");
  $(".content-wrapper").css("opacity", "1");
  setTimeout(function () {
    jQuery("#preloader").addClass("loaded");
  }, 500);
  jQuery(".spinner").delay(400).fadeOut("fast");
  
  
  // jQuery(".content-wrapper").hide().delay(2000).fadeIn("fast");
//   sessionStorage.setItem("dontLoad", "true");
  // }
});
