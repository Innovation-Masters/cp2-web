let imagens=['.img/corinthians.png','.img/sp.png','.img/palmeiras.png','.img/flamengo.jpg']
let index=0
let time = 1
function slideShow(){
    document.getElementById("imgbanner").src=imagens[index];
    index++;
    if(index == imagens.length){
        index=0;

    }
    setTimeout('slideShow()' , time)
}
slideShow()