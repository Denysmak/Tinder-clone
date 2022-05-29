let principal = document.getElementById("principal");
let explora = document.getElementById("explora")
let curtida = document.getElementById("curtida");
let mensagem = document.getElementById("mensagem")
let headerToImage = document.getElementById("headerToImage")
var fire = document.getElementById("fire");
let lupa = document.getElementById("lupa");
let diamond = document.getElementById("diamond");
let chat = document.getElementById("chat")
let tinderGirl = document.getElementById("tinderGirl");
let tags = document.getElementById("tags");
let tags2 = document.getElementById("tags2");
let tags3 = document.getElementById("tags3");
let online = document.getElementById("online");
let information = document.getElementById("information")

var counter = 1;
function increment() {
    
    if(counter < 3){counter++;}
    

    else { counter = 3 }
}
function decrement(){
if(counter > 1){counter--}
else{counter = 1}

}
console.log(counter)
let right = document.getElementById("right");
let left = document.getElementById("left");


right.addEventListener("click", function(){
increment()
tinderGirl.src = `./assets/tinderGirl1-${counter}.webp`
if (counter === 1) {
tags.style.display = "flex"
tags2.style.display = "none"
tags3.style.display = "none"
online.style.display = "flex"
information.style.height = "40%"
    }
else if (counter ===2){

    tags.style.display = "none"
    tags2.style.display = "flex"
    tags3.style.display = "none"
    online.style.display = "none"
    information.style.height = "30%"
}
else if (counter === 3) {

    tags.style.display = "none"
    tags2.style.display = "none"
    tags3.style.display = "flex"
    online.style.display = "none"
    information.style.height = "18%"
}



})
left.addEventListener("click", function(){
decrement();
    tinderGirl.src = `./assets/tinderGirl1-${counter}.webp`
    if (counter === 1) {
        tags.style.display = "flex"
        tags2.style.display = "none"
        tags3.style.display = "none"
        online.style.display = "flex"
        information.style.height = "40%"
    }
    else if (counter === 2) {

        tags.style.display = "none"
        tags2.style.display = "flex"
        tags3.style.display = "none"
        online.style.display = "none"
        information.style.height = "30%"
    }
    else if (counter === 3) {

        tags.style.display = "none"
        tags2.style.display = "none"
        tags3.style.display = "flex"
        online.style.display = "none"
        information.style.height = "18%"
    }

})
window.onload = fire.style.color = "rgb(235, 135, 135"











function changeToExplorar(e){
principal.style.display = "none"
explora.style.display = "flex"
curtida.style.display = "none"
mensagem.style.display = "none"
headerToImage.style.backgroundImage = "linear-gradient(white,rgb(223, 223, 223))"
e.parentElement.children[0].style.color = "black"
e.style.color = "rgb(235, 135, 135)"
e.parentElement.children[2].style.color = "black"
e.parentElement.children[3].style.color = "black"
}
function changeToPrincipal(e) {
principal.style.display = "flex"
explora.style.display = "none"
curtida.style.display = "none"
mensagem.style.display = "none"
headerToImage.style.backgroundImage = "linear-gradient(white,rgb(223, 223, 223))"
e.style.color = "rgb(235, 135, 135)"
e.parentElement.children[1].style.color = "black"
e.parentElement.children[2].style.color = "black"
e.parentElement.children[3].style.color = "black"
}
function changeToCurtida(e) {
principal.style.display = "none"
headerToImage.style.backgroundImage = "linear-gradient(white,rgb(223, 223, 223))"
explora.style.display = "none"
curtida.style.display = "flex"
mensagem.style.display = "none"
e.parentElement.children[1].style.color = "black"
e.parentElement.children[0].style.color = "black"
e.parentElement.children[3].style.color = "black"
e.style.color = "orange"
}
function changeToMensagem(e) {
principal.style.display = "none"
explora.style.display = "none"
curtida.style.display = "none"
mensagem.style.display = "flex"
headerToImage.style.backgroundImage = "linear-gradient(white,white)"
e.parentElement.children[0].style.color = "black"
e.parentElement.children[1].style.color = "black"
e.parentElement.children[2].style.color = "black"
e.style.color = "rgb(235, 135, 135)"
}

