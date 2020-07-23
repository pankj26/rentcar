$(document).ready(function(){
    /*--------For the sticky navigation------*/
    $('.js--section-features').waypoint(function(direction){
        if (direction=="down"){
            $('nav').addClass('sticky');
        }else{
            $('nav').removeClass('sticky');
        }
    });                                      
    
    
    /*-----Scroll on buttons*/
    $('.js--scroll-to-plans').click(function(){
        $('html,body').animate({scrollTop:$('.js--section-plans').offset().top},1000);   
});
    $('.js--scroll-to-start').click(function(){
        $('html,body').animate({scrollTop:$('.js--section-features').offset().top},1000);   
});
    
 $(function(){   
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
 });
    /* animation on Scro;;*/
$('.js--wp-1').waypoint(function(direction){
    $('.js--wp-1').classList.add('animate__animated', 'animate__fadeIn');;
}) 
})


/*------Mobilenav----------*/

$('.js--nav-icon').click(function(){
    var nav=$('.js--main-nav');
    var icon=('.js--mobile-icon');
    
    nav.slideToggle(200);
    if(icon.hasClass('mobile-icon')){
        icon.addClass('close-outline');
        icon.removeClass('mobile-icon');
    }else{
        icon.addClass('mobile-icon');
        icon.removeClass('close-outline');
    }
});










