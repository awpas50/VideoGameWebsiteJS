let menuIcon = document.querySelector('.menu-icon');
let notificationIcon = document.querySelector('#bell-icon');

let navbar = document.querySelector('.menu');
let notification = document.querySelector('.notification');

menuIcon.onclick = () => {
  menuIcon.classList.toggle('move');
  navbar.classList.toggle('active');
  notification.classList.remove('active');
}

notificationIcon.onclick = () => {
  notification.classList.toggle('active');
}

// Swiper script
var swiper1 = new Swiper(".trending-content", {
  slidesPerView: 1,
  spaceBetween: 10,
  pagination: {
    el: ".swiper-pagination-trending",
    clickable: true,
    renderBullet: function (index, className) {
      return '<span class="' + className + '">' + (index + 1) + "</span>";
    },
  },
  autoplay: {
    delay: 5000,
    disableOnInteraction: false,
  },
  breakpoints: {
    640: {
      slidesPerView: 2,
      spaceBetween: 10,
    },
    768: {
      slidesPerView: 3,
      spaceBetween: 15,
    },
    1068: {
      slidesPerView: 4,
      spaceBetween: 20,
    },
  },
});

var swiper2 = new Swiper(".home-content", {
  slidesPerView: 1,
  spaceBetween: 10,
  pagination: {
    el: ".swiper-pagination-home",
    clickable: true,
    renderBullet: function (index, className) {
      return '<span class="' + className + '">' + (index + 1) + "</span>";
    },
  },
  autoplay: {
    delay: 5000,
    disableOnInteraction: false,
  },
});

// Custom Scroll Bar
window.onscroll = function () { myfunction() };
document.getElementById('scroll-bar').style.width = 0;
function myfunction() {
  
  var windScroll = document.body.scrollTop || document.documentElement.scrollTop;
  var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  var scrolled = (windScroll / height) * 100;
  document.getElementById('scroll-bar').style.width = scrolled + '%';
  document.getElementById('percentage').innerHTML = Math.round(scrolled) + "%";
}