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
let tags4 = document.getElementById("tags4");
let tags5 = document.getElementById("tags5")
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
let oneTwo = document.getElementById("one2");
let fiveTwo = document.getElementById("five2");
let tenTwo = document.getElementById("ten2");
let price1 = document.getElementById("price1")
let price2 = document.getElementById("price2");
let price3 = document.getElementById("price3");
let price12= document.getElementById("price1-2")
let price22 = document.getElementById("price2-2");
let price32 = document.getElementById("price3-2");
let Xtwo = document.getElementById("Xtwo");
let boltButton = document.getElementById("boltButton")
let bolt = document.getElementsByClassName("bolt")[0];
let NO = document.getElementById("NO");
let nope = document.getElementsByClassName("nope")[0];
let nopeTag = document.getElementsByClassName("nopeTag")[0];
let heart = document.getElementsByClassName("heart")[0];
let curtiTag = document.getElementsByClassName("curtiTag")[0];
let tagUm = document.getElementById("tagUm")
let tagDois = document.getElementById("tagDois")
let tagTres = document.getElementById("tagTres")
let tagQuatro = document.getElementById("tagQuatro")
let tagCinco = document.getElementById("tagCinco")
let tagOne = document.getElementById("tagOne");
let tagTwo = document.getElementById("tagTwo");
let tagthree = document.getElementById("tagThree");
let tagFour = document.getElementById("tagFour");
let imagemPrincipal = document.querySelector(".imagemPrincipal")
let text = document.querySelector(".text");
let star = document.querySelector(".star");
let Xthree = document.getElementById("Xthree");
let boltButton2 = document.getElementById("boltButton2")
let NO2 = document.getElementById("NO2");
let economizeFive2 = document.getElementById("economizefive2");
let five2 = document.getElementById("five2");
let tinderGirlName = document.getElementById("tinderGirlName")
let tinderGirlAge = document.getElementById("tinderGirlAge")









Xthree.addEventListener("click", function(){

this.parentElement.parentElement.style.display = "none"

})



star.addEventListener("click", function(){
    
    if (counter1 === 4) { boltButton2.style.display = "none"}   
else{
    boltButton2.style.display = "flex"}

})
NO2.addEventListener("click", function () {
    boltButton2.style.display = "none"
})



function changeToGirl2(){
   counter1 = 2;
   tinderGirl.src = "./assets/tinderGirl2-1.webp"
   nopeTag.style.display = "none"
   curtiTag.style.display = "none"
   counter2 = 1;
    tagUm.innerText = "Maquiagem"
    tagDois.innerText = "Dança"
    tagTres.innerText = "Arte"
    tagQuatro.innerText = "Filmes"
    tagCinco.innerText = "Marvel"
    information.style.height = "30%"
    tags.style.display = "flex"
    tags2.style.display = "none"
    tags3.style.display = "none"
    online.style.display = "flex"
    tags3.children[0].children[1].innerText = "Mora no/em Fortaleza"
    tags3.children[1].children[1].innerText = "630 km de distância"
    tags3.children[0].style.width = "80%"
    tinderGirlName.innerText = "Alice"
    tinderGirlAge.innerText = "24"

}

function changeToGirl3(){
    counter1 = 3;
    tinderGirl.src = "./assets/tinderGirl3-1.webp"
    nopeTag.style.display = "none"
    curtiTag.style.display = "none"
    counter2 = 1;
    tagUm.innerText = "Netflix"
    tagDois.innerText = "Tatuagens"
    tagTres.innerText = "Academia"
    tagQuatro.innerText = "Vinho"
    tagCinco.innerText = "Meditação"
    information.style.height = "40%"
    tags.style.display = "flex"
    tags2.style.display = "none"
    tags3.style.display = "none"
    online.style.display = "flex"
    tags3.children[0].children[1].innerText = "Mora no/em São Paulo"
    tags3.children[1].children[1].innerText = "2130 km de distância"
    tags3.children[0].style.width = "80%";
    tags4.style.display = "none"
    tinderGirlName.innerText = "Sophia"
    tinderGirlAge.innerText = "25"
}

function changeToNobody(){
counter1 = 4;
 imagemPrincipal.style.display = "none";
 text.style.display = "none"
 nopeTag.style.display = "none"
 curtiTag.style.display = "none"
 arrow.style.backgroundColor = "white";
 arrow.style.color = "orange";
 nope.style.backgroundColor = "white";
 nope.children[0].style.color = "rgb(157, 157, 157)";
 nope.style.border = "none";
 star.style.backgroundColor = "white";
 star.style.color = "rgb(157, 157, 157)";
 star.style.border = "none";
 heart.style.backgroundColor = "white";
 heart.style.color = "rgb(157, 157, 157)";
 heart.style.border = "none";
 bolt.style.border = "none";
 bolt.style.backgroundColor = "white";
}



nope.addEventListener("click", function(){

if(counter1 === 1){
nopeTag.style.display = "flex"    
setTimeout(changeToGirl2,450)  ; 
}
else if(counter1 ===2){
nopeTag.style.display = "flex"    
    setTimeout(changeToGirl3,450); 
}
else if (counter1 === 3) {
    nopeTag.style.display = "flex"
    setTimeout(changeToNobody, 450)
}
else if (counter1 === 4) {
    nopeTag.style.display = "none"
}
})

heart.addEventListener("click", function () {

    if (counter1 === 1) {
        curtiTag.style.display = "flex"
        setTimeout(changeToGirl2, 450)
    }
    else if(counter1 === 2){
        curtiTag.style.display = "flex"
        setTimeout(changeToGirl3, 450)
    }
    else if (counter1 === 3) {
        curtiTag.style.display = "flex"
        setTimeout(changeToNobody, 450)
    }
    else if (counter1 === 4) {
        nopeTag.style.display = "none"
    }
})



nope.addEventListener("mouseover", function(){
  this.children[0].style.height = "40px";
 
})

nope.addEventListener("mouseout", function () {
    this.children[0].style.height = "30px"
})




bolt.addEventListener("mouseover", function(){
this.children[0].style.fontSize = "30px";
this.style.border = "1px solid rgb(215, 77, 215)"

})
bolt.addEventListener("mouseout", function () {
    this.children[0].style.fontSize = "20px"
    this.style.border = "none"
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

function blueClickOneTwo(e) {
    price12.style.height = "34%";
    price12.style.backgroundColor = "rgb(95, 95, 184)"
    e.children[0].children[0].style.color = "rgb(53, 190, 53)";
    e.style.borderLeft = "0.5px solid black";
    e.style.borderRight = "0.5px solid black";
    fiveTwo.style.border = "none";
    tenTwo.style.border = "none";
    price22.children[0].style.backgroundColor = "rgb(141, 192, 192)";
    price22.style.backgroundColor = "white"
    price32.children[0].style.backgroundColor = "rgb(141, 192, 192)";
    price32.style.backgroundColor = "white";
    price22.style.height = "34%";
    price32.style.height = "34%";
    price32.children[1].style.color = "black"
    price22.children[1].style.color = "black";
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


function blueClickTwoTwo(e) {
    e.style.borderLeft = "0.5px solid black";
    e.style.borderRight = "0.5px solid black";
    oneTwo.style.border = "none";
    tenTwo.style.border = "none";
    oneTwo.children[0].style.backgroundColor = "white";
    oneTwo.children[0].style.height = "11.5%";
    oneTwo.children[0].children[0].style.color = "black";
    price22.style.height = "55%";
    price32.style.height = "34%";
    price22.style.backgroundColor = "rgb(95, 95, 184)";
    price22.children[0].style.backgroundColor = "rgb(95, 95, 184)"
    price32.children[0].style.backgroundColor = "rgb(141, 192, 192)";
    price32.style.backgroundColor = "white";
    price22.children[1].style.color = "rgb(53, 190, 53)"
    price32.children[1].style.color = "black"
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
function blueClickThreeTwo(e) {
    e.style.borderLeft = "0.5px solid black";
    e.style.borderRight = "0.5px solid black";
    oneTwo.style.border = "none";
    // fiveTwo.style.border = "none";
    economizeFive2.style.backgroundColor = "rgb(141, 192, 192)"
    five2.style.border = "none"
    oneTwo.children[0].style.backgroundColor = "white";
    oneTwo.children[0].style.height = "11.5%";
    oneTwo.children[0].children[0].style.color = "black";
    price2.children[0].style.backgroundColor = "rgb(141, 192, 192)";
    price32.style.height = "55%";
    price22.style.height = "34%";
    price22.style.backgroundColor = "white";
    price32.style.backgroundColor = "rgb(95, 95, 184)";
    price32.children[0].style.backgroundColor = "rgb(95, 95, 184)";
    price32.children[1].style.color = "rgb(53, 190, 53)";
    price22.children[1].style.color = "black";
   
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



var counter1 = 1;
var counter2 = 1;
function increment() {
    
    if(counter2 < 3){counter2++;}
    

    else { counter2 = 3 }
}
function decrement(){
if(counter2 > 1){counter2--}
else{counter2 = 1}

}

let img2 = document.createElement("img");
img2.src = "./assets/tinderGirl1-2.webp"

img2.onload = console.log("teste")

let right = document.getElementById("right");
let left = document.getElementById("left");


right.addEventListener("click", function(){
increment()


    
  


   tinderGirl.src = `./assets/tinderGirl${counter1}-${counter2}.webp`
   
if (counter2 === 1) {

 tags.style.display = "flex"
 tags2.style.display = "none"
 tags3.style.display = "none"
 online.style.display = "flex"


if(counter1 === 1){

information.style.height = "40%"
}

}

else if (counter2 ===2){

    tags.style.display = "none"
    tags2.style.display = "flex"
    tags3.style.display = "none"
    online.style.display = "none"
    if(counter1 === 1){
    information.style.height = "30%"
    }
    else if (counter1 === 2) {
        information.style.height = "30%"
        tags2.style.display = "none"
        
        tags4.style.display = "flex"
    }
    else if (counter1 === 3) {
        information.style.height = "30%"
        tags2.style.display = "none"
        tags4.style.display = "none"
        tags5.style.display = "flex"
    }

}
else if (counter2 === 3) {

    tags.style.display = "none"
    tags2.style.display = "none"
    tags3.style.display = "flex"
    online.style.display = "none"
    tags4.style.display = "none"
    tags5.style.display = "none"
    information.style.height = "18%"
  
}



})
left.addEventListener("click", function(){
decrement();
    tinderGirl.src = `./assets/tinderGirl${counter1}-${counter2}.webp`
    if (counter2 === 1) {
        tags.style.display = "flex"
        tags2.style.display = "none"
        tags3.style.display = "none"
        online.style.display = "flex"
        tags4.style.display = "none"
        if (counter1 === 1) {
        information.style.height = "40%"}
        // else if (counter2 === 1) {
        //     information.style.height = "30%"
        //     tags4.style.display = "none"
        // }
        else if (counter1 === 3) {
            information.style.height = "40%"
            tags4.style.display = "none"
            console.log("teste")
            tags5.style.display = "none"
        }
     
    }
    else if (counter2 === 2) {

        tags.style.display = "none"
        tags2.style.display = "flex"
        tags3.style.display = "none"
        online.style.display = "none"
        if (counter1 === 1) {
            information.style.height = "30%"
        }
       else if(counter1 === 2){
       information.style.height = "30%"
            tags2.style.display = "none"
            tags4.style.display = "flex" 
       }
        else if (counter1 === 3) {
            information.style.height = "30%"
            tags2.style.display = "none"
            tags4.style.display = "none"
            tags5.style.display = "flex"
        }
    }
    else if (counter2 === 3) {

        tags.style.display = "none"
        tags2.style.display = "none"
        tags3.style.display = "flex"
        online.style.display = "none"
        if (counter1 === 1) {
        information.style.height = "18%"}
        else if(counter1 === 2){
        information.style.height = "10%"
        }
        else if (counter1 === 3) {
            information.style.height = "10%"
            tags5.style.display = "none"
        }
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

