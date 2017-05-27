$(document).ready(function(){
  // Animate nav links
  $(".nav-link").on('mouseover', function(){
    $(this).css("color","grey");
    $(this).animate({marginLeft: "10px"},200);
  });
  $(".nav-link").on('mouseout', function(){
    $(this).css("color","whitesmoke");
    $(this).animate({marginLeft: "0px"},200);
  });

})