document.addEventListener('DOMContentLoaded', function(){
  var box = document.getElementById('box-components');
  var elements = document.querySelectorAll('[data-box-component]');
  Array.prototype.forEach.call(elements, function(el, i){
    console.log(el);
    el.addEventListener('mouseover',function(e){
      box.setAttribute('data-focus',el.getAttribute('data-box-component'));
    });
    el.addEventListener('mouseout',function(e){
      box.removeAttribute('data-focus');
    });
  });
});

/*
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

  var elements = document.querySelectorAll('[data-show-margin]');
  Array.prototype.forEach.call(elements, function(el, i){

    console.log(getCssInt(el,'borderLeftWidth'));
    console.log(getCssInt(el,'marginTop'));

    var width = getCssInt(el,'width') + getCssInt(el,'borderRightWidth') + getCssInt(el,'borderLeftWidth');
    console.log('w',width);
    var height = parseInt(getComputedStyle(el)['height'].replace(/\D/g,''),10) + parseInt(getComputedStyle(el)['borderTopWidth'].replace(/\D/g,''),10) + parseInt(getComputedStyle(el)['borderBottomWidth'].replace(/\D/g,''),10);
    var right = getCssInt(el,'marginRight'); //getComputedStyle(el)['marginRight'].replace(/\D/g,'');
    var left = getCssInt(el,'marginLeft'); //getComputedStyle(el)['marginLeft'].replace(/\D/g,'');
    var top = getCssInt(el,'marginTop'); //getComputedStyle(el)['marginTop'].replace(/\D/g,'');
    var bottom = getCssInt(el,'marginBottom'); //getComputedStyle(el)['marginBottom'].replace(/\D/g,'');

    var size = {
      width: getCssInt(el,'width'),
      height: getCssInt(el,'height')
    }

    var border = {
      top: getCssInt(el,'borderTopWidth'),
      right: getCssInt(el,'borderRightWidth'),
      bottom: getCssInt(el,'borderBottomWidth'),
      left: getCssInt(el,'borderLeftWidth')
    }

    var margin = {
      top: getCssInt(el,'marginTop'),
      right: getCssInt(el,'marginRight'),
      bottom: getCssInt(el,'marginBottom'),
      left: getCssInt(el,'marginLeft')
    }

    var offset = {
      top: getCssInt(el,'borderTopWidth') + top,
      bottom: getCssInt(el,'borderBottomWidth') + bottom,
      left: getCssInt(el,'borderLeftWidth') + left,
      right: getCssInt(el,'borderRightWidth') + right
    }

    console.log(offset);

    var topDiv = document.createElement('DIV');
    var rightDiv = document.createElement('DIV');
    var bottomDiv = document.createElement('DIV');
    var leftDiv = document.createElement('DIV');

    topDiv.setAttribute('style','top:-'+offset.top+'px; height:'+margin.top+'px; width: '+(size.width + border.left + border.right) + 'px; left: -'+(border.left)+'px;');
    topDiv.setAttribute('class','show-margin');

    bottomDiv.setAttribute('style','bottom:-'+offset.bottom+'px; height:'+margin.bottom+'px; width: '+(size.width + border.left + border.right) + 'px; left: -'+(border.left)+'px;');
    bottomDiv.setAttribute('class','show-margin');

    rightDiv.setAttribute('style','right:-'+offset.right+'px; height:'+size.height+'px; width: '+ margin.right + 'px; top:-'+border.top+'px');
    rightDiv.setAttribute('class','show-margin');

    leftDiv.setAttribute('style','left:-'+offset.left+'px; height:'+size.height+'px; width: '+ margin.left + 'px; top:-'+border.top+'px');
    leftDiv.setAttribute('class','show-margin');

    el.appendChild(topDiv);
    el.appendChild(bottomDiv);
    el.appendChild(rightDiv);
    el.appendChild(leftDiv);

  });

  function getCssInt(el,property){
    return parseInt(getComputedStyle(el)[property].replace(/\D/g,''),10);
  }

});
*/