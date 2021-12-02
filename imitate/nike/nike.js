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

// scroll 위로 올릴 때만 navbar, content-top 보이기
var scrollPosition = 0;
$(window).scroll(function() {
  console.log($('#header').height());
  if(scrollPosition - $(window).scrollTop() > 0 && $(window).scrollTop() >= 60) {
    $('.scrollup').addClass('content-top');
    $('.navbar').addClass('fixed');

  } else {
    $('.scrollup').removeClass('content-top');
    $('.navbar').removeClass('fixed');

  }

  scrollPosition = $(window).scrollTop();
});

$(function() {
  $(".inner_item").on({
    mouseenter: function() {
      $(this).find(".depth_wrap").slideDown("fast");
    },
    mouseleave: function() {
      $(this).find(".depth_wrap").slideUp("fast");
    }
  });
});

// nk_gnb 검색 버튼 이벤트
$('#search').click(function() {

});