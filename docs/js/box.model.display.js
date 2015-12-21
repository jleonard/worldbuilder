document.addEventListener('DOMContentLoaded', function(){

  var elements = document.querySelectorAll('[data-show-margin-left]');
  Array.prototype.forEach.call(elements, function(el, i){
    var m = getComputedStyle(el)['marginLeft'].replace(/\D/g,'');
    console.log(m);
    var div = document.createElement('DIV');
    div.setAttribute('class','bm-margin bm-margin-left');
    div.setAttribute('style','left:-'+m+'px; width:'+m+'px');
    el.appendChild(div);
  });

  var elements = document.querySelectorAll('[data-show-margin-right]');
  Array.prototype.forEach.call(elements, function(el, i){
    var m = getComputedStyle(el)['marginRight'].replace(/\D/g,'');
    console.log(m);
    var div = document.createElement('DIV');
    div.setAttribute('class','bm-margin bm-margin-right');
    div.setAttribute('style','right:-'+m+'px; width:'+m+'px');
    el.appendChild(div);
  });

});