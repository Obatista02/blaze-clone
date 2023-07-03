var btnExpandir = document.querySelector('#btn-expandir')
var menuSide = document.querySelector('.menu-lateral')

btnExpandir.addEventListener('click', function(){
  menuSide.classList.toggle('expandir')
})



function init(){
}
export default{
  init
}