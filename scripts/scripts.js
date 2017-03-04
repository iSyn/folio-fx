// Page is loading
$(window).on("load", (() => {
    'use strict';
    $(".spinner-container").fadeOut(1000);
    $(window).scrollTop(0);
    setTimeout(() => {
      $('body').css('overflow', 'auto')
    }, 500)
}));//End Loading


$(() => {
  console.log('scripts.js connected')
  $(window).scrollTop(0);
  new WOW().init();

  // Animate.CSS
  let currentAnimation = 0
  let animations = [
    'flash',
    // 'pulse',
    // 'rubberBand',
    // 'shake',
    'headShake',
    'swing',
    // 'fadeIn',
    // 'fadeInUp',
    'fadeOut',
    'zoomIn',
    'zoomInDown',
    // 'zoomOutUp',
  ]

  setInterval(() => {
    $('.animateThis').removeClass(animations[currentAnimation])
    if (currentAnimation < animations.length-1) {
      currentAnimation++
      $('.animateThis').addClass(animations[currentAnimation])
    } else {
      currentAnimation = 0
      $('.animateThis').addClass(animations[currentAnimation])
    }
  }, 1500)

  $('.animateThis').addClass('flash')


  // OwlCarousel.JS
  $(".owl-carousel").owlCarousel({
    loop: true
  })

  // Baffle.JS
  let b = baffle('.baffle')
  b.set({
    characters: '~!@#$%^&*-+=',
    speed: 50
  })
  b.start()
  setInterval(() => {
    b.reveal(1000)
    setTimeout(() => {
      b.start()
    },1000)
  }, 3000)


  // Typed.JS
  $(".typed-example").typed({
      strings: [
        "Wow, what a useful website",
        // "The creator of this site must be super cool",
        "This plugin looks really neat!",
        "It's very customizable too!",
        "You can pause^500.^500.^500. inbetween words.",
        "It can aso fix er",
        "It can also fix errors!"
        ],
      typeSpeed: 30,
      loop: true,
      startDelay: 2000,
      backDelay: 1500,
  });

  // Particles.JS
  particlesJS('particles', {
    "particles": {
      "number": {
        "value": 1000,
        "density": {
          "enable": true,
          "value_area": 1578.2952832645453
        }
      },
      "color": {
        "value": "#fff"
      },
      "shape": {
        "type": "circle",
        "stroke": {
          "width": 0,
          "color": "#000000"
        },
        "polygon": {
          "nb_sides": 5
        },
      },
      "opacity": {
        "value": 1,
        "random": false,
        "anim": {
          "enable": true,
          "speed": 0.959040959040959,
          "opacity_min": 0.1,
          "sync": false
        }
      },
      "size": {
        "value": 2,
        "random": true,
        "anim": {
          "enable": false,
          "speed": 40,
          "size_min": 0.1,
          "sync": false
        }
      },
      "line_linked": {
        "enable": true,
        "distance": 20,
        "color": "#ffffff",
        "opacity": 0.8,
        "width": .5
      },
      "move": {
        "enable": true,
        "speed": 4.810236182596568,
        "direction": "none",
        "random": false,
        "straight": false,
        "out_mode": "out",
        "bounce": false,
        "attract": {
          "enable": false,
          "rotateX": 600,
          "rotateY": 1200
        }
      }
    },
    "interactivity": {
      "detect_on": "canvas",
      "events": {
        "onhover": {
          "enable": false,
          "mode": "repulse"
        },
        "onclick": {
          "enable": true,
          "mode": "push"
        },
        "resize": true
      },
      "modes": {
        "grab": {
          "distance": 400,
          "line_linked": {
            "opacity": 1
          }
        },
        "bubble": {
          "distance": 400,
          "size": 40,
          "duration": 2,
          "opacity": 8,
          "speed": 3
        },
        "repulse": {
          "distance": 200,
          "duration": 0.4
        },
        "push": {
          "particles_nb": 4
        },
        "remove": {
          "particles_nb": 2
        }
      }
    },
    "retina_detect": true
  })


})
