const carrosel = document.querySelector(".main-subtipos-list");

let isDragStar = false, prevPageX,prevScrollLeft;

const dragStar = (e) =>{
  isDragStar = true;
  prevPageX = e.pageX;
  prevScrollLeft = carrosel.scrollLeft;
}

const dragging =(e) =>{
  if(!isDragStar) return;
  e.preventDefault();
  let positionDiff = e.pageX - prevPageX;
  carrosel.scrollLeft = prevScrollLeft - positionDiff;
}
const dragStop= ()=>{
  isDragStar = false;
}

carrosel.addEventListener("mousedown", dragStar);
carrosel.addEventListener("mousemove", dragging);
carrosel.addEventListener("mouseup", dragStop);



function init(){
}
export default{
  init
}