alert("Bem-vindo!")
//------------------------------------------------------//

let imagens = ['./img/bike1.webp', './img/bike2.webp', './img/bike3.jpg', './img/bike4.webp'];
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