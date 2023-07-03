function mostrar(){
    var obj = event.target.dataset.nome;
      
      if (document.getElementById(obj).hidden === false) {
          document.getElementById(obj).hidden = true
      } else {
          document.getElementById(obj).hidden = false
      }
}


function iniciar(){
  document.getElementById("esconder-orignal").addEventListener("click",mostrar);
  document.getElementById("esconder-cassino").addEventListener("click",mostrar);
  document.getElementById("esconder-sport").addEventListener("click",mostrar);
  document.getElementById("esconder-laterais").addEventListener("click",mostrar);
}

window.addEventListener("load", iniciar);
function init(){
  
}
export default{
  init
}