document.addEventListener('DOMContentLoaded', function(){
  var nav = document.getElementById('sidenav');
  if(nav){
    var h3 = document.querySelectorAll('h3');
    var list = '';
    Array.prototype.forEach.call(h3, function(el, i){
      var id = el.textContent.toLowerCase().replace(/\W+/g, '');
      var a = document.createElement('A');
      a.setAttribute('name',id);
      a.style.height = '1px';
      el.parentNode.insertBefore(a,el);
      list += '<li><a href="#' + id + '">' + el.textContent + '</a></li>';
    });
    nav.innerHTML = list;
  }
});