const carrosel = document.querySelector(".colecao-carrosel"),
arrowIcons = document.querySelectorAll(".colecao-titulo i"),
firtImg = carrosel.querySelectorAll("img")[0];


let isDragStar = false, prevPageX,prevScrollLeft;
let firstImgWidth = firtImg.clientWidth + 25;

arrowIcons.forEach(icon =>{
  icon.addEventListener("click", () =>{
    carrosel.scrollLeft += icon.id == "left" ? -firstImgWidth :firstImgWidth;
  })
});

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