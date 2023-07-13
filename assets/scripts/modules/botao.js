let myButton = document.querySelectorAll('.main-subtipos-list>button');

myButton.forEach(function(key){
    key.addEventListener('click', function(){
        removeStyles();
        this.setAttribute('class', 'buttonClicked');
    });
})

function removeStyles(){
    for(let i = 0;i < myButton.length;i++){
        document.querySelectorAll('.main-subtipos-list>button')[i].removeAttribute('class');
    }
}


function init(){
}
export default{
  init
}