//BANNERS
const $simpleCarousel = document.querySelector(".js-carousel-simple");

new Glider($simpleCarousel, {
  slidesToShow: 1,
  slidesToScroll: 1,
  draggable: true,
  dots: ".js-carousel-simple-dots",
  scrollLock: true,
});


//animais
function img01 (){
    document.getElementById("swapimg").src="img/imagem-animais-fox-nature.jpg";
}
function img02 (){
    document.getElementById("swapimg").src="img/imagem-animais-firefox-nature.jpg";
}
function img03 (){
    document.getElementById("swapimg").src="img/imagem-animais-wolf-nature.jpg";
}
//floresta
function img04 (){
    document.getElementById("swapimg2").src="img/Imagem 10.jpg";
}
function img05 (){
    document.getElementById("swapimg2").src="img/Grupo 8.jpg";
}
function img06 (){
    document.getElementById("swapimg2").src="img/Imagem 12.jpg";
}
//montanha
function img07 (){
    document.getElementById("swapimg3").src="img/imagem-montanhas-pico-nature.jpg";
}
function img08 (){
    document.getElementById("swapimg3").src="img/imagem-montanha-montanha-nature.jpg";
}
function img09 (){
    document.getElementById("swapimg3").src="img/imagem-montanha-monte-nature.jpg";
}

