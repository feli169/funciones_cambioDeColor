/*punto 3.2*/
function pintar(color= 'green'){
    ele = document.getElementById("ele1")
    ele.style.backgroundColor = color
}
/*codigo modificado punto 3.1*/
    ele = document.getElementById("ele1")
    ele.addEventListener("click", function(){
        pintar('yellow')
    });