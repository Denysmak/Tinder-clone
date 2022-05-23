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

var counter = 1;
function increment() {
    if(counter < 4){
    counter++;
    console.log(counter);
    }
    else{

        counter = 4
    }
}
function decrement(){
if(counter > 1){
counter--
console.log(counter)
}
else{
counter = 1
}
}



let right = document.getElementById("right");
let left = document.getElementById("left");

right.addEventListener("click", function(){
increment()
tinderGirl.src = `./assets/tinderGirl1-${counter}.webp`
})

left.addEventListener("click", function(){

decrement();
    tinderGirl.src = `./assets/tinderGirl1-${counter}.webp`
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

