alert("Bem-vindo!")

let imagens=['./img/corinthians.png','./img/flamengo.jpg','./img/palmeiras.png', './img/sp.png'];
let index=0; 
let time =3000;

function slideShow(){
    document.getElementById("imgbanner").src=imagens[index];
    index++;

    if(index == imagens.length){
        index=0;
    }
    setTimeout('slideShow()', time);
}

slideShow();