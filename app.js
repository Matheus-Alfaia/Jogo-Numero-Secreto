
let listaNumSorteados = [];
let numLimite = 10;
let numeroAleatorio = gerarNumero();
let tentativas =1;

exibirMensagemInicial();

function exibirTexto(tag,texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    responsiveVoice.speak(texto,'Brazilian Portuguese Female', {rate:1.3});
}

function exibirMensagemInicial(){
    exibirTexto('h1', 'Jogo do numero secreto');
    exibirTexto('p', 'Escolha um numero entre 1 e 10');
}


function verificarChute(){
     let chute = document.querySelector('input').value;

     if (chute == numeroAleatorio){
      exibirTexto('h1','Acertou');
     
      let palavraTentativas = tentativas > 1 ? 'tentativas' : 'tentativa';
      let mensagemTentativas = `Voce descobriu o numero secreto com ${tentativas} ${palavraTentativas}!`;
      exibirTexto('p', mensagemTentativas);  
      document.getElementById('reiniciar').removeAttribute('disabled');
    }
    else{
        if(chute>numeroAleatorio){
            exibirTexto('p','Errou, o numero secreto é menor');
        }else{
            exibirTexto('p','Errou my friend, o numero secreto é maior');
        }
        tentativas++;
        limparCampo();
    }
   
}
function gerarNumero(){
    let qtdNumEscolhido = listaNumSorteados.length;
    let numeroEscolhindo = parseInt(Math.random() * numLimite) + 1;
    if (qtdNumEscolhido == numLimite){
        listaNumSorteados = [];
    }

    if(listaNumSorteados.includes(numeroEscolhindo)){
        return gerarNumero(); //olha aí a recursividade
    }
    else{
        listaNumSorteados.push(numeroEscolhindo);
        //console.log(listaNumSorteados);
        return numeroEscolhindo;
    }
}
function limparCampo(){
    chute = document.querySelector('input');
    chute.value = '';
}
function reiniciarJogo(){
    numeroAleatorio = gerarNumero();
    limparCampo();
    tentativas = 1;
    exibirMensagemInicial();
    document.getElementById('reiniciar').setAttribute('disabled', true);
}
