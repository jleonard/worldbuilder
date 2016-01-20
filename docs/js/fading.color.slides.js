var colors = ['slate','black','red','navy','purple','fuchsia','aqua','yellow','orange'];

document.addEventListener('DOMContentLoaded', function(){
  var slides = document.querySelectorAll('.slide.fade');
  Array.prototype.forEach.call(slides, function(el, i){
    setInterval(function(){
      el.setAttribute('data-color',colors[Math.floor(Math.random() * colors.length)]);
    },2000);
  });
});