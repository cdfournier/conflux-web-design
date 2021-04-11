// CHANGE CSS WHEN PAGE LOADS
function loaded (callback) {
  callback();
};
loaded(function () {
  document.body.className = 'visible';
});


// HEADROOM
var myElement = document.querySelector('header');
var headroom  = new Headroom(myElement);
headroom.init(); 


// ANIMATE OBJECTS AS THEY COME ON SCREEN
const addVisible = document.querySelectorAll('.animate');
const io_options = {
  root: null,
  rootMargin: '0px 0px 0px 0px',
  threshold: 0
};
const io_observer = new IntersectionObserver(io_callback, io_options);

addVisible.forEach(element => {
    io_observer.observe(element);
});

function io_callback (entries, observer) {
    entries.forEach(entry => {
    entry.target.classList.toggle('show', entry.isIntersecting);
  });
};


// MOBILE NAVIGATION
$('button.menu-toggle svg.menu-toggle-open').click(function() {
  $('body').addClass('open');
  $('header').addClass('open');
  $('button.menu-toggle').attr('aria-expanded',true);
  $('nav ul').attr('aria-hidden',false);
});
$('button.menu-toggle svg.menu-toggle-close').click(function() {
  $('body').removeClass('open');
  $('header').removeClass('open');
  $('button.menu-toggle').attr('aria-expanded',false);
  $('nav ul').attr('aria-hidden',true);
});
$('.close').click(function() {
  $('body').removeClass('open');
  $('header').removeClass('open');
  $('button.menu-toggle').attr('aria-expanded',false);
  $('nav ul').attr('aria-hidden',true);
});
window.onload = function() {
  if($(window).width()>768) {
    $('nav ul').attr('aria-hidden',false);
  }
};