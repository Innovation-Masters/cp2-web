function validar(){
    // Declarando as variáveis
    let usuario = document.getElementById("usuario").value.toLowerCase(); // Obtém o valor do campo de usuário em letras minúsculas
    let senha = document.getElementById("senha").value; // Obtém o valor do campo de senha

    // Verifica se o usuário é "admin" e a senha é "12345"
    if(usuario === "admin" && senha === "12345"){
        window.open("quiz.html"); // Abre a página "quiz.html"
    } else {
        alert("Usuário ou senha inválidos"); // Exibe um alerta se o usuário ou a senha forem inválidos
    }
}

function trocar(cor){
    document.body.style.background = cor; // Muda o plano de fundo do corpo da página para a cor especificada
    document.getElementById('voltar').style.backgroundColor = cor; // Muda a cor de fundo do elemento com o ID 'voltar' para a cor especificada
}
