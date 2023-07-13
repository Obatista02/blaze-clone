const imgs = document.getElementById("img");
const img = document.querySelectorAll("#img .banner-slide-cover");

let idx =0;
function carrossel(){
  idx++;

  if(idx > img.length - 1){
    idx = 0;
  }
  imgs.style.transform = `translateX(${-idx *1160}px)`;
}

setInterval(carrossel, 2000);



function init(){
}
export default{
  init
}