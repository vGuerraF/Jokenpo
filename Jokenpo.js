const prompt = require(`prompt-sync`)();


jokenpo: while(true){
console.clear();
console.log(`Esse é o jogo JOKENPO!! Sua pontuação aumenta conforme vai ganhando partidas do computador.
Ganha no final quem tiver a maior pontuação. 
Aperte ENTER para continuar.`);
prompt();
let jogoEscolhas = ['PEDRA', 'PAPEL', 'TESOURA'];

let rodadas = +prompt(`Quantas rodadas deseja jogar? `);
let contador1 = 0;
let contador2 = 0;

for(i = 0; i < rodadas; i++){

    for(i = 0; i < rodadas; i++){
        let escolha = prompt(`Escolha um: ${jogoEscolhas}. `).toUpperCase();
        let resultado = randomjogo(jogoEscolhas);

    while(escolha != `PEDRA` && escolha != `PAPEL` && escolha != `TESOURA`){
        escolha = prompt(`Resposta inválida, escolha somente: ${jogoEscolhas}: `).toUpperCase()
    };

    if(escolha == 'PEDRA' && resultado == `TESOURA`){
        contador1++
        console.log(`
            Você GANHOU essa rodada.
            Sua escolha: ${escolha}.
            Escolha do programa: ${resultado}\n`)
            
    } else if(escolha == 'PEDRA' && resultado == `PAPEL`){
        contador2++
        console.log(`
            Você PERDEU essa rodada.
            Sua escolha: ${escolha}.
            Escolha do programa: ${resultado}\n`)
    } else if(escolha == 'PEDRA' && resultado == `PEDRA`){
        contador1++
        contador2++
        console.log(`
            Você EMPATOU essa rodada.
            Sua escolha: ${escolha}.
            Escolha do programa: ${resultado}\n`)
    };
    if(escolha == 'PAPEL' && resultado == `TESOURA`){
        contador2++
        console.log(`
            Você PERDEU essa rodada.
            Sua escolha: ${escolha}.
            Escolha do programa: ${resultado}\n`)

    } else if(escolha == 'PAPEL' && resultado == `PEDRA`){
        contador1++
        console.log(`
            Você GANHOU essa rodada.
            Sua escolha: ${escolha}.
            Escolha do programa: ${resultado}\n`)

    } else if(escolha == `PAPEL` && resultado == `PAPEL`){
        contador1++
        contador2++
        console.log(`
            Você EMPATOU essa rodada
            Sua escolha: ${escolha}.
            Escolha do programa: ${resultado}\n`)

    };
    if(escolha == 'TESOURA' && resultado == `TESOURA`){
        contador1++
        contador2++
        console.log(`
            Você EMPATOU essa rodada.
            Sua escolha: ${escolha}.
            Escolha do programa: ${resultado}\n`)

    } else if(escolha == 'TESOURA' && resultado == `PEDRA`){
        contador2++
        console.log(`
            Você PERDEU essa rodada
            Sua escolha: ${escolha}.
            Escolha do programa: ${resultado}\n`)

    } else if(escolha == `TESOURA` && resultado == `PAPEL`){
        contador1++
         console.log(`
            Você GANHOU essa rodada. 
            Sua escolha: ${escolha}.
            Escolha do programa: ${resultado}\n`)
        
    };
    }
      if(contador1 > contador2){
        console.log(`
            VITÓRIA!!!
            Você GANHOU o jogo com ${contador1} pontos,
            enquanto o progama PERDEU com ${contador2} pontos.\n`)
        } else if(contador1 < contador2){
            console.log(`
            DERROTA!!!
            Você PERDEU o jogo com ${contador1} pontos,
            enquanto o progama GANHOU com ${contador2} pontos.\n`)
        } else{
            console.log(`
            EMPATE!!!
            Você EMPATOU o jogo com o programa, ambos com ${contador1} pontos.\n`)
        }
        let sn = prompt(`Quer jogar novamente? `).toLowerCase();
        if(sn == `sim`){
            continue jokenpo;
        } else{
            break jokenpo;
        };
    };
};

function randomjogo(jogoEscolhas) {

    const randomizar = Math.floor(Math.random() * jogoEscolhas.length);
  
    const item = jogoEscolhas[randomizar];
  
    return item;
  }
