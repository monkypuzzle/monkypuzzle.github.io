$(document).ready(function(){
  // Animate nav links
  $("body").on('mouseover', ".nav-link", function(){
    $(this).css("color","grey");
    $(this).animate({marginLeft: "10px"}, 200);
  });
  $("body").on('mouseout', ".nav-link", function(){
    $(this).css("color","whitesmoke");
    $(this).animate({marginLeft: "0px"},200);
  });

})

