var curSlide;

document.addEventListener('DOMContentLoaded', function(){

  // reverse the z index
  var z = 9999999;
  var slides = document.querySelectorAll('.slide');
  Array.prototype.forEach.call(slides, function(el, i){
    el.setAttribute('style','z-index:'+z);
    //el.setAttribute('tabindex',1);
    z--;
  });

  var slideshow = document.getElementById('slideshow');
  var firstSlide = slideshow.firstElementChild;
  curSlide = firstSlide;
  console.log(firstSlide);

  slideshow.addEventListener("click", function(e){
    moveForward();
  });

  slideshow.addEventListener("keydown", function(e){

    console.log('press');

    if(e.keyCode === 38){
      moveBack();
    }

    if(e.keyCode === 40){
      moveForward();
    } 

  });


});

function moveForward(){
  if(!curSlide){
    return;
  }
  curSlide.setAttribute('data-state','off');
  curSlide = curSlide.nextElementSibling;
}

function moveBack(){
  if(!curSlide){
    return;
  };
  curSlide = curSlide.previousElementSibling;
  curSlide.removeAttribute('data-state');
}



