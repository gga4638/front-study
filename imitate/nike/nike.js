var toastElList = [].slice.call(document.querySelectorAll('.toast'))
var toastList = toastElList.map(function (toastEl) {
  return new bootstrap.Toast(toastEl, {autohide: false})
})

var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
  return new bootstrap.Tooltip(tooltipTriggerEl)
})

// var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
// var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
//   return new bootstrap.Tooltip(tooltipTriggerEl, {
//   	'customClass': 'custom-tooltip'
//   })
// })


// swiper-slide
var swiper = new Swiper(".mySwiper", {
  watchSlidesProgress: true,
  slidesPerView: 1.5,
  freeMode: true,
  scrollbar: {
    el: ".swiper-scrollbar",
    hide: "true",
  },
  navigation: {
    nextEl: ".button-next",
    prevEl: ".button-prev",
  },
  breakpoints: {
    576: {
      slidesPerView: 2
    },
    768: {
      slidesPerView: 3
    }
  }
});

// Hide Header on on scroll down
var didScroll; 
var lastScrollTop = 0; 
var delta = 5; 
var navbarHeight = $('header').outerHeight();
var scrollupHeight = $('.scrollup').outerHeight(); 


$(window).scroll(function(event){ 
  didScroll = true; 
}); 

setInterval(function() { 
   if (didScroll) { 
     hasScrolled(); 
     didScroll = false; 
  } 
}, 250); 

function hasScrolled() { 
  var st = $(this).scrollTop(); 

  // If they scrolled down and are past the navbar, add class .nav-up. 
  // This is necessary so you never see what is "behind" the navbar. 
  if (st > lastScrollTop && st > navbarHeight){ 
    // Scroll Down 
    $('header').removeClass('nav-down').addClass('nav-up'); 
    $('.scrollup').removeClass('nav-down').addClass('nav-up'); 
  } else { 
    // Scroll Up 
      if($(window).height() <= $(document).height()) { 
        $('header').removeClass('nav-up').addClass('nav-down'); 
        $('.scrollup').removeClass('nav-up').addClass('nav-down'); 
      } 
    } 
  lastScrollTop = st; 

  if($(window).scrollTop() <= 300) {
    $('.scrollup').removeClass('nav-down').addClass('nav-up'); 
  }
}

$('.dropdown').hover(function(){ 
  $('.btn', this).trigger('click'); 
});

$('.nav-item').on({
  'mouseenter': function () { //들어왔을때
      $('.dropdown-menu').stop().slideDown(300);
  },
  'mouseleave': function () { //나갔을때
      $('.dropdown-menu').stop().slideUp(300);
  }
});

