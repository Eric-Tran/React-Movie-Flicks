//Header scroll resize

$(window).scroll(function(event) {
  var scrollPos = $(window).scrollTop();
  if ( scrollPos > 100) {
    $("nav").animate({
      height: '10%'
    }, {duration: 300, queue: false});
    $(".navbar-nav").animate({
      height: '50px'
    }, {duration: 300, queue: false});
    $(".navbar-header a").animate({
      'margin-top': '5px'
    }, {duration: 300, queue: false});
    $(".nav-link").animate({
      'margin-top': '15px'
    }, {duration: 300, queue: false});
    $(".searchbar").animate({
      top: '61px'
    }, {duration: 300, queue: false});
    $(".searchbar-input").animate({
      height: '40px',
      'font-size': '15px'
    }, {duration: 300, queue: false });
  }
  if ( scrollPos <= 100) {
    $("nav").animate({
      height: '20%'
    }, {duration: 300, queue: false });
    $(".navbar-nav").animate({
      height: '100px'
    }, {duration: 300, queue: false});
    $(".navbar-header a").animate({
      'margin-top': '30px'
    }, {duration: 300, queue: false});
    $(".nav-link").animate({
      'margin-top': '38px'
    }, {duration: 300, queue: false});
    $(".searchbar").animate({
      top: '116px'
    }, {duration: 300, queue: false});
    $(".searchbar-input").animate({
      height: '70px',
      'font-size': '20px'
    }, {duration: 300, queue: false });
  }
});

//Link over show sublinks
$(document).ready(function() {
  $(".nav-movie").mouseenter(function() {
    $(".movie-links").css('display','block');
  })
  $(".movie-links").mouseleave(function() {
      $(".movie-links").css('display','none');
  })
});

$(document).ready(function() {
  $(".nav-tv").mouseenter(function() {
    $(".tv-links").css('display','block');
  })
  $(".tv-links").mouseleave(function() {
      $(".tv-links").css('display','none');
  })
});