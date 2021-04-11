
;(function($,window,document,undefined){
    "use strict";

    $(document).ready(function(){

        $('.circle').waypoint(function() {
            $('.circle').toggleClass('active');
        }, { offset: '100%' });

        

      $('section').each( function(){
          var el = $(this);
          var el_id = el.attr("id");
          var anchor = $('a[href="#'+el_id+'"]');

          el.waypoint({
              handler: function(direction) {
                  $('nav-link').removeClass('active');
                  anchor.toggleClass('active');
                  if('technical_skills' === el_id){
                      $('chart').toggleClass('active');
                  }
              },
              offset: '50%'
          });
      });

   

   

        var sticky = new Waypoint.Sticky({
            element: $('.stick')[0]
          });


        $("#back-to-top").click(function() {
            $("html, body").animate({ scrollTop: 0 }, "slow");
            return false;
        });

        $('.nav-link').click(function() {
            var link = $(this);
            var target = $(this.hash);
            $('html, body').animate(
                {
                    scrollTop: target.offset().top-80
                },
                {
                duration: 1000,
                easing: 'swing'
            });
        });

        $('section').each( function() {
 
            // cache the section element
            var el      = $(this);
 
            // get the id so we can find the nav link it corresponds to
            var el_id   = el.attr("id");
 
            // get the nav link object for our waypoint handler function
            var anchor  = $('a[href="#'+el_id+'"]');
        
            //make each section a waypoint
            el.waypoint({
                handler: function(direction) {
 
                    $('.nav-link').removeClass('active');
 
                    //now we activate the one we want
                    anchor.toggleClass('active');
 
                },
                
                offset: '50%'
            });
        });

    });

    $(window).on('load', function(){

      
     
        
        $('.spinner').fadeOut();
        $('.loader').delay(600).fadeOut('slow');
        $('body').delay(600).css({
            'overflow': 'visible'
        });

    });

})(jQuery, window, document);

// $(document).ready(function(){
 
//     // hide our element on page load
   
//     $('.circle').waypoint(function() {
//         $('.circle').toggleClass('active');
//     }, { offset: '100%' });

    
   
//   });

