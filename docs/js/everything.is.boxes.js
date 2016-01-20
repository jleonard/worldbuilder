document.addEventListener('DOMContentLoaded', function(){
  var action = document.querySelector('[data-everything-is-boxes]');
  if(action){
    action.addEventListener('mouseover',function(e){
      document.body.classList.add('everything-is-boxes');
    });
    action.addEventListener('mouseout',function(e){
      document.body.classList.remove('everything-is-boxes');
    });
  }
  
});