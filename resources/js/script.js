$(document).ready(function(){


    /* sticky nav bar */
    $('.js--section-features').waypoint(function(direction){
        if(direction == "down"){
           $('nav').addClass('sticky')
        }else{
            $('nav').removeClass('sticky')
        }
}, {
    offset:'60px'
})

/*  scroll top */
$('.js--scroll-to-plan').click(function(){
    $('html,body').animate({scrollTop:$('.js--now-on-plan').offset().top}, 3000)
})

// to signup section
$('.js--now-on-plan').click(function(){
    $('html,body').animate({scrollTop:$('.js--sign-up-section').offset().top}, 1000)
})

$('.js--scroll-to-features').click(function(){
    $('html,body').animate({scrollTop:$('.js--section-features').offset().top}, 2000)
})

$(window).scroll(function(){
  if($(this).scrollTop() > 40 ){
    $('.scrolltop').fadeIn()
  }else{
    $('.scrolltop').fadeOut()
  }
})
$('.scrolltop').click(function(){

    $('html,body').animate({scrollTop:0}, 2000)
})



// Select all links with hashes
$('a[href*="#"]')
  // Remove links that don't actually link to anything
  .not('[href="#"]')
  .not('[href="#0"]')
  .click(function(event) {
    // On-page links
    if (
      location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
      && 
      location.hostname == this.hostname
    ) {
      // Figure out element to scroll to
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      // Does a scroll target exist?
      if (target.length) {
        // Only prevent default if animation is actually gonna happen
        event.preventDefault();
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000, function() {
          // Callback after animation
          // Must change focus!
          var $target = $(target);
          $target.focus();
          if ($target.is(":focus")) { // Checking if the target was focused
            return false;
          } else {
            $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
            $target.focus(); // Set focus again
          };
        });
      }
    }
  });

//   Animation of page

$('.js--section-features').waypoint(function(direction){
    $('.js--wp-1').addClass('animated fadeIn')
}, {
    offset:'60px'
})

$('.js--section-how-it-work').waypoint(function(direction){
    $('.js--wp-2').addClass('animated slideInUp')
}, {
    offset:'60px'
})
$('.js--citi-section').waypoint(function(direction){
    $('.js--wp-3').addClass('animated fadeIn')
}, {
    offset:'60px'
})
$('.js--now-on-plan').waypoint(function(direction){
    $('.js--wp-4').addClass('animated pulse')
}, {
    offset:'60px'
})

$('.mobile-nav-icon').click(function(){
    var nav = $('.js--main-nav')
    var icon = $('.mobile-nav-icon i')
     nav.slideToggle(200)
    if(icon.hasClass('icon ion-md-menu')){
      // console.log("ok")
        icon.addClass('icon ion-md-close')
        icon.removeClass('icon ion-md-menu')
    }else{
      
        icon.removeClass('icon ion-md-close')
        icon.addClass('icon ion-md-menu')
        
    }
   
     
})

})