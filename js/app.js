$(document).ready(function(){
   
    

    $(window).on('load',function(){
        $('.preloader').addClass('complete')
    });




    $(window).on('scroll',function(){
        var scroll = $(window).scrollTop();
        if(scroll>=50){

            $(".sticky").addClass("stickyadd");
        }else{

            $(".sticky").removeClass("stickyadd");
        }
    })

    var typed = new Typed(".element",{

        strings:["Andrew Nasser","a developer",],
        smartBackspace:true,
        typeSpeed:100,
        backSpeed:100,
        loop:true,
        loopCount:Infinity,
        startDelay:1000
    });

    //progress bar

    var waypoint = new Waypoint({
        element: document.getElementById('exp-id'),
        handler: function(direction) {
            var p = document.querySelectorAll('.progress-bar');
    p[0].setAttribute("style","width:100%;transition:1s all");
    p[1].setAttribute("style","width:95%;transition:1.5s all");
    p[2].setAttribute("style","width:90%;transition:1.8s all");
    p[3].setAttribute("style","width:85%;transition:2s all");
    p[4].setAttribute("style","width:70%;transition:2.5s all");

          
        },
        offset:'90%'
      });

      var filterizd = $('.filter-container').filterizr({
          animationDuration: .5,
      });
  // owl carousel

  
    $(".owl-carousel").owlCarousel({

        loop: true,
        autoplay: true,
        autoplayTimeout:4000,
        items:1

    });
  
    
});


// animation 

const observer = new IntersectionObserver(entries => {
    // Loop over the entries
    entries.forEach(entry => {
      // If the element is visible
      if (entry.isIntersecting) {
        // Add the animation class
        entry.target.classList.add('animate__bounceInLeft','animate__animated','animate__delay-1s');
      }
    });
  });
  
  observer.observe(document.querySelector('.img-anim'));




