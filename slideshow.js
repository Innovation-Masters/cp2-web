// Exibe uma mensagem de boas-vindas
alert("Bem-vindo!");

//----------------------------------------------------//

// Define um array com os caminhos das imagens para o slide show
let imagens = ['./img/bike1.webp', './img/bike2.webp', './img/bike3.jpg', './img/bike4.webp'];
let index = 0; // Índice da imagem atual
let time = 3000; // Tempo de transição entre imagens em milissegundos

// Função para o slide show
function slideShow(){
    // Define a imagem do elemento com o ID 'imgbanner' para a imagem atual
    document.getElementById("imgbanner").src = imagens[index];
    index++; // Incrementa o índice para a próxima imagem

    // Verifica se atingiu o final do array de imagens
    if(index == imagens.length){
        index = 0; // Reinicia o índice para o início do array
    }

    // Configura um temporizador para chamar recursivamente a função slideShow após o tempo especificado
    setTimeout(slideShow, time);
}

// Inicia o slide show
slideShow();
