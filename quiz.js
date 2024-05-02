function responder(numeroPergunta) {
    let resposta;
    switch (numeroPergunta) {
        case 1:
            resposta = prompt("Qual é a sua resposta para a pergunta 1?");
            if (resposta && resposta.toLowerCase() === "freio") {
                alert("Resposta correta!");
            } else {
                alert("Resposta incorreta. A resposta correta é 'freio'.");
            }
            break;
        case 2:
            resposta = prompt("Qual é a sua resposta para a pergunta 2?");
            if (resposta && resposta.toLowerCase() === "cambio") {
                alert("Resposta correta!");
            } else {
                alert("Resposta incorreta. A resposta correta é 'cambio'.");
            }
            break;
        case 3:
            resposta = prompt("Qual é a sua resposta para a pergunta 3?");
            if (resposta && resposta.toLowerCase() === "selim") {
                alert("Resposta correta!");
            } else {
                alert("Resposta incorreta. A resposta correta é 'selim'.");
            }
            break;
        case 4:
            resposta = prompt("Qual é a sua resposta para a pergunta 4?");
            if (resposta && resposta.toLowerCase() === "bomba de ar") {
                alert("Resposta correta!");
            } else {
                alert("Resposta incorreta. A resposta correta é 'bomba de ar'.");
            }
            break;
        case 5:
            resposta = prompt("Qual é a sua resposta para a pergunta 5?");
            if (resposta && resposta.toLowerCase() === "suporte") {
                alert("Resposta correta!");
            } else {
                alert("Resposta incorreta. A resposta correta é 'suporte'.");
            }
            break;
        case 6:
            resposta = prompt("Qual é a sua resposta para a pergunta 6?");
            if (resposta && resposta.toLowerCase() === "pedal") {
                alert("Resposta correta!");
            } else {
                alert("Resposta incorreta. A resposta correta é 'pedal'.");
            }
            break;
        case 7:
            resposta = prompt("Qual é a sua resposta para a pergunta 7?");
            if (resposta && resposta.toLowerCase() === "roda") {
                alert("Resposta correta!");
            } else {
                alert("Resposta incorreta. A resposta correta é 'roda'.");
            }
            break;
        case 8:
            resposta = prompt("Qual é a sua resposta para a pergunta 8?");
            if (resposta && resposta.toLowerCase() === "guidão") {
                alert("Resposta correta!");
            } else {
                alert("Resposta incorreta. A resposta correta é 'guidão'.");
            }
            break;
        case 9:
            resposta = prompt("Qual é a sua resposta para a pergunta 9?");
            if (resposta && resposta.toLowerCase() === "protetor de corrente") {
                alert("Resposta correta!");
            } else {
                alert("Resposta incorreta. A resposta correta é 'protetor de corrente'.");
            }
            break;
        case 10:
            resposta = prompt("Qual é a sua resposta para a pergunta 10?");
            if (resposta && resposta.toLowerCase() === "bagageiro") {
                alert("Resposta correta!");
            } else {
                alert("Resposta incorreta. A resposta correta é 'bagageiro'.");
            }
            break;
        default:
            alert("Pergunta não reconhecida.");
        }
    }