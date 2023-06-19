/*--------------------- jquery ------------------*/
$('.linkWrap_btn').on('click', function () {
  $(this).parent('.news_linkWrap').toggleClass('link--open');
});
/*--------------------- scroll anime ------------------*/
$(function () {
  var toggleclass = $('.scroll--anime , .scroll--filter');
  $(window).on('load scroll', function () {
    var wh = $(this).height(),
      ws = $(this).scrollTop();
    toggleclass.each(function () {
      var toggoffset = $(this).offset().top;
      if (ws > (toggoffset - wh) + 20) {
        $(this).stop().addClass('scroll--start');
      }
    });
  });
});
/*--------------------- onload ------------------*/
window.onload = function () {
  var body = document.body;
  body.classList.toggle('page--open');
}
/*--------------------- 100vh ------------------*/
function setHeight() {
  let vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty('--vh', `${vh}px`);
}
setHeight();
window.addEventListener('resize', setHeight);
/*pagetop*/
if (document.getElementById('pagetop')) {
  var pagetop = document.getElementById("pagetop");
  pagetop.addEventListener('click', (e) => {
    e.preventDefault();
    window.scroll({
      top: 0,
      behavior: 'smooth'
    })
  });
}
/*--------------------- ancor-link ------------------*/
window.addEventListener('DOMContentLoaded', () => {
  const anchorLinks = document.querySelectorAll('a[href^="#"]');
  const anchorLinksArr = Array.prototype.slice.call(anchorLinks);

  anchorLinksArr.forEach(link => {
    link.addEventListener('click', e => {
      e.preventDefault();
      const targetId = link.hash;
      const targetElement = document.querySelector(targetId);
      const targetOffsetTop = window.pageYOffset + targetElement.getBoundingClientRect().top + 2;
      window.scrollTo({
        top: targetOffsetTop,
        behavior: "smooth"
      });
    });
  });
});
/*--------------------- menu-trigger ------------------*/
if (document.getElementById('menu-trigger')) {
  const trigger = document.getElementById('menu-trigger');
  trigger.addEventListener('click', function () {
    var body = document.body;
    body.classList.toggle('nav--open');
  });
}
/*--------------------- touch--anime ------------------*/
const hoverElems = document.querySelectorAll('.touch--anime');
for (let i = 0; i < hoverElems.length; i++) {
  hoverElems[i].addEventListener('touchstart', (e) => {
    hoverElems[i].classList.add('touch--start');
  }, {
    passive: true
  });
  hoverElems[i].addEventListener('touchend', () => {
    hoverElems[i].classList.remove('touch--start');
  });
}