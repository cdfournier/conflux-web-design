function doStuff (callback) {
  // do all app scripts here...
  callback();
}

doStuff(function () {
  document.body.className = 'visible';
});

var myElement = document.querySelector("header");
var headroom  = new Headroom(myElement);
headroom.init(); 

$("button.menu-toggle svg.menu-toggle-open").click(function() {
  $("body").addClass("open");
  $("header").addClass("open");
  $("button.menu-toggle").attr("aria-expanded",true);
  $("nav ul").attr("aria-hidden",false);
});
$("button.menu-toggle svg.menu-toggle-close").click(function() {
  $("body").removeClass("open");
  $("header").removeClass("open");
  $("button.menu-toggle").attr("aria-expanded",false);
  $("nav ul").attr("aria-hidden",true);
});
$(".close").click(function() {
  $("body").removeClass("open");
  $("header").removeClass("open");
  $("button.menu-toggle").attr("aria-expanded",false);
  $("nav ul").attr("aria-hidden",true);
});
window.onload = function() {
  if($(window).width()>768) {
    $("nav ul").attr("aria-hidden",false);
  }
};