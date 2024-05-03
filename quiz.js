function responder(numeroPergunta) {
    let resposta;
    switch (numeroPergunta) {
        case 1:
            // Pergunta 1: Freio
            resposta = prompt("Qual é a sua resposta para a pergunta 1?");
            if (resposta && resposta.toLowerCase() === "freio") {
                alert("Resposta correta!");
            } else {
                alert("Resposta incorreta. A resposta correta é 'freio'.");
            }
            break;
        case 2:
            // Pergunta 2: Câmbio
            resposta = prompt("Qual é a sua resposta para a pergunta 2?");
            if (resposta && resposta.toLowerCase() === "cambio") {
                alert("Resposta correta!");
            } else {
                alert("Resposta incorreta. A resposta correta é 'cambio'.");
            }
            break;
        case 3:
            // Pergunta 3: Selim
            resposta = prompt("Qual é a sua resposta para a pergunta 3?");
            if (resposta && resposta.toLowerCase() === "selim") {
                alert("Resposta correta!");
            } else {
                alert("Resposta incorreta. A resposta correta é 'selim'.");
            }
            break;
        case 4:
            // Pergunta 4: Bomba de Ar
            resposta = prompt("Qual é a sua resposta para a pergunta 4?");
            if (resposta && resposta.toLowerCase() === "bomba de ar") {
                alert("Resposta correta!");
            } else {
                alert("Resposta incorreta. A resposta correta é 'bomba de ar'.");
            }
            break;
        case 5:
            // Pergunta 5: Suporte
            resposta = prompt("Qual é a sua resposta para a pergunta 5?");
            if (resposta && resposta.toLowerCase() === "suporte") {
                alert("Resposta correta!");
            } else {
                alert("Resposta incorreta. A resposta correta é 'suporte'.");
            }
            break;
        case 6:
            // Pergunta 6: Pedal
            resposta = prompt("Qual é a sua resposta para a pergunta 6?");
            if (resposta && resposta.toLowerCase() === "pedal") {
                alert("Resposta correta!");
            } else {
                alert("Resposta incorreta. A resposta correta é 'pedal'.");
            }
            break;
        case 7:
            // Pergunta 7: Roda
            resposta = prompt("Qual é a sua resposta para a pergunta 7?");
            if (resposta && resposta.toLowerCase() === "roda") {
                alert("Resposta correta!");
            } else {
                alert("Resposta incorreta. A resposta correta é 'roda'.");
            }
            break;
        case 8:
            // Pergunta 8: Guidão
            resposta = prompt("Qual é a sua resposta para a pergunta 8?");
            if (resposta && resposta.toLowerCase() === "guidão") {
                alert("Resposta correta!");
            } else {
                alert("Resposta incorreta. A resposta correta é 'guidão'.");
            }
            break;
        case 9:
            // Pergunta 9: Protetor de Corrente
            resposta = prompt("Qual é a sua resposta para a pergunta 9?");
            if (resposta && resposta.toLowerCase() === "protetor de corrente") {
                alert("Resposta correta!");
            } else {
                alert("Resposta incorreta. A resposta correta é 'protetor de corrente'.");
            }
            break;
        case 10:
            // Pergunta 10: Bagageiro
            resposta = prompt("Qual é a sua resposta para a pergunta 10?");
            if (resposta && resposta.toLowerCase() === "bagageiro") {
                alert("Resposta correta!");
            } else {
                alert("Resposta incorreta. A resposta correta é 'bagageiro'.");
            }
            break;
        default:
            // Caso padrão para perguntas não reconhecidas
            alert("Pergunta não reconhecida.");
    }
}
