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
      $('.wrapper').css('filter', 'blur(3px)');
      $('footer').css('filter', 'blur(3px)');

      
      if($('.wrapper').css('z-index')) {
        
      }
    },
    mouseleave: function() {
      $(this).find(".depth_wrap").slideUp(0);
      $('.wrapper').css('filter', '');
      $('footer').css('filter', '');
    }
  });
});



var searchExpand = $(".offcanvas");
// 검색 버튼 이벤트
$('#search').click(function() {
  $(this).css('transition', '1s')
  $(this).css('z-index', '1600');


  if(searchExpand.hasClass('show')) {
    $('#search').addClass('stretch');
    $('#search .bi-search').css('width', '30px');
  }

  // 검색창 외부를 클릭하면 검색창 닫힘
  $(document).mouseup(function (e){
    // 이벤트가 발생한 요소 반환
    // $("#search").click(function(event){
    //   console.log(event.target);
    // });
  
    if(searchExpand.has(e.target).length == 0) {
      $('#search').removeClass('stretch');
      $('#search').css('transition', '');
      $('#search .bi-search').css('width', '');
    } 
  });
});

$('.offcanvas .btn-close').click(function() {
  $('#search').removeClass('stretch');
  $('#search').css('transition', '');
  $('#search .bi-search').css('width', '');
});
