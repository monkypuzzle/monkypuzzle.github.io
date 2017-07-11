$(document).ready(function(){

  $(".link.expand").on("click", function(){
    if (navHidden) {
      $(".link.expand").html(closeIcon)
      showNav();
      navHidden = false;
    }
    else {
      hideNav();
      navHidden = true;
    }
  });

  $(".link").mouseenter(function(){
    showFilter();
  });
  $(".link").mouseleave(function(){
    hideFilter();
    hideNav();
  });

});

var hideNav = function(){
  var $sectionLinks = $(".section-link");
  var i = 100
  $sectionLinks.each(function(){
    $(this).slideUp(i);
    i = i + 50;
  })
  $(".link.expand").html(moreIcon);
}

var showNav = function(){
  $(".section-link").slideDown(200).css("display","flex");
}

var showFilter = function(){
  $(".nav-text").fadeIn(100);
  $(".filter").fadeIn(100);
}

var hideFilter = function(){
  $(".nav-text").fadeOut(100);
  $(".filter").fadeOut(100);
}

var navHidden = true;
var closeIcon = "<span class='nav-text'>close</span><svg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round' class='feather feather-x close'><line x1='18' y1='6' x2='6' y2='18'></line><line x1='6' y1='6' x2='18' y2='18'></line></svg>"
var moreIcon = "<span class='more nav-text'>navigation</span><svg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round' class='feather feather-more-vertical more'><circle cx='12' cy='12' r='2'></circle><circle cx='12' cy='4' r='2'></circle><circle cx='12' cy='20' r='2'></circle></svg>"