// calculator = {
//   add:function(x,y){
//     return (x+y)
//   },
//   subtract:function(x,y){
//     return (x-y)
//   },
//   multiply:function(x,y){
//     return (x*y)
//   },
//   divide:function(x,y){
//     return (x/y)
//   }
// };

var errorModule = function(){
  var expose = document.getElementById('error');

  expose.addEventListener('click', function(){
    var show = document.getElementsByTagName('div');
    for(var i=0; i < show.length; i++){
     show[i].style.display = "block"
    }
  })

 var conceal = document.getElementById('hidden');

  conceal.addEventListener('click', function(){
    var hide = document.getElementsByTagName('div');
    for(var i=0; i < hide.length; i++){
     hide[i].style.display = "none"
    }
  })

   var new_text = document.getElementById('edit');

  new_text.addEventListener('click', function(){
    var changeMessage = document.getElementsByTagName('div');
    for(var i=0; i < changeMessage.length; i++){
     changeMessage[i].innerHTML = "<h1>Why Do you need to say something else?</h1>"
    }
  })




};