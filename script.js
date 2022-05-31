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
let information = document.getElementById("information");
let dozemeses = document.getElementById("dozemeses");
let seismeses = document.getElementById("seismeses");
let ummes = document.getElementById("ummes");
let plus = document.getElementById("plus");
let arrow = document.getElementById("arrow");
let X = document.getElementById("X");
let one = document.getElementById("one");
let five = document.getElementById("five");
let ten = document.getElementById("ten");
let price1 = document.getElementById("price1")
let price2 = document.getElementById("price2");
let price3 = document.getElementById("price3");
let Xtwo = document.getElementById("Xtwo");
let boltButton = document.getElementById("boltButton")
let bolt = document.getElementsByClassName("bolt")[0];
let NO = document.getElementById("NO");
let nope = document.getElementsByClassName("nope")[0];
let nopeTag = document.getElementsByClassName("nopeTag")[0];

nope.addEventListener("click", function(){

nopeTag.style.display = "flex"

})

nope.addEventListener("mouseover", function(){
  this.children[0].style.height = "40px";
 
})

nope.addEventListener("mouseout", function () {
    this.children[0].style.height = "30px"
})




bolt.addEventListener("mouseover", function(){
this.children[0].style.fontSize = "30px"
})
bolt.addEventListener("mouseout", function () {
    this.children[0].style.fontSize = "20px"
})

bolt.addEventListener("click", function(){

boltButton.style.display = "inline"


})

Xtwo.addEventListener("click", function(){

    boltButton.style.display = "none"

})


NO.addEventListener("click", function () {

    boltButton.style.display = "none"

})






function blueClickOne(e){
 price1.style.height = "34%";
 price1.style.backgroundColor = "rgb(95, 95, 184)"
 e.children[0].children[0].style.color = "rgb(53, 190, 53)";
 e.style.borderLeft = "0.5px solid black";
 e.style.borderRight = "0.5px solid black";
 five.style.border = "none";
 ten.style.border = "none";
 price2.children[0].style.backgroundColor = "rgb(141, 192, 192)";
 price2.style.backgroundColor = "white"
 price3.children[0].style.backgroundColor = "rgb(141, 192, 192)";
 price3.style.backgroundColor = "white";
 price2.style.height = "34%";
 price3.style.height = "34%";
 price3.children[1].style.color = "black"
    price2.children[1].style.color = "black";
}


function blueClickTwo(e){
  e.style.borderLeft = "0.5px solid black";
  e.style.borderRight = "0.5px solid black";
  one.style.border = "none";
  ten.style.border = "none";
  one.children[0].style.backgroundColor = "white";
  one.children[0].style.height = "11.5%";
  one.children[0].children[0].style.color = "black";
  price2.style.height = "55%";
  price3.style.height = "34%";
  price2.style.backgroundColor = "rgb(95, 95, 184)";
  price2.children[0].style.backgroundColor = "rgb(95, 95, 184)"
  price3.children[0].style.backgroundColor = "rgb(141, 192, 192)";
  price3.style.backgroundColor = "white";
  price2.children[1].style.color = "rgb(53, 190, 53)"
  price3.children[1].style.color = "black"
}

function blueClickThree(e) {
    e.style.borderLeft = "0.5px solid black";
    e.style.borderRight = "0.5px solid black";
    one.style.border = "none";
    five.style.border = "none";
    one.children[0].style.backgroundColor = "white";
    one.children[0].style.height = "11.5%";
    one.children[0].children[0].style.color = "black";
    price2.children[0].style.backgroundColor = "rgb(141, 192, 192)";
    price3.style.height = "55%";
    price2.style.height = "34%";
    price2.style.backgroundColor = "white";
    price3.style.backgroundColor = "rgb(95, 95, 184)";
    price3.children[0].style.backgroundColor = "rgb(95, 95, 184)";
    price3.children[1].style.color = "rgb(53, 190, 53)";
    price2.children[1].style.color = "black";
}





X.addEventListener("click", function(){

    plus.style.display = "none"

})

arrow.addEventListener("click", function(){
plus.style.display = "flex"
    seismeses.style.border = "2px solid red"
    seismeses.style.backgroundColor = "white"
})


function clickMesesDoze(e){
e.style.border = "2px solid red"
e.style.backgroundColor = "white"
seismeses.style.backgroundColor = "rgb(226, 226, 226)"
seismeses.style.border = "none"
ummes.style.backgroundColor = "rgb(226, 226, 226)"
ummes.style.border = "none"
}
function clickMesesSeis(e) {
e.style.border = "2px solid red"
e.style.backgroundColor = "white"
    dozemeses.style.backgroundColor = "rgb(226, 226, 226)"
    dozemeses.style.border = "none"
    ummes.style.backgroundColor = "rgb(226, 226, 226)"
    ummes.style.border = "none"
}
function clickMesesUm(e) {
e.style.border = "2px solid red"
e.style.backgroundColor = "white"
    seismeses.style.backgroundColor = "rgb(226, 226, 226)"
    seismeses.style.border = "none"
    dozemeses.style.backgroundColor = "rgb(226, 226, 226)"
    dozemeses.style.border = "none"
}




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
window.onload = fire.style.color = "rgb(235, 135, 135";












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

