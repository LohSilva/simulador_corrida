const player1 = {
    NOME: "Mario",
    VELOCIDADE: 4,
    MANOBRABILIDADE: 3,
    PODER: 3,
    PONTOS: 0,
};

const player2 = {
    NOME: "Peach",
    VELOCIDADE: 3,
    MANOBRABILIDADE: 4,
    PODER: 2,
    PONTOS: 0,
};

const player3 = {
    NOME: "Yoshi",
    VELOCIDADE: 2,
    MANOBRABILIDADE: 4,
    PODER: 3,
    PONTOS: 0,
};

const player4 = {
    NOME: "Bowser",
    VELOCIDADE: 5,
    MANOBRABILIDADE: 2,
    PODER: 5,
    PONTOS: 0,
};

const player5 = {
    NOME: "Luigi",
    VELOCIDADE: 3,
    MANOBRABILIDADE: 4,
    PODER: 4,
    PONTOS: 0,
};

const player6 = {
    NOME: "Donkey Kong",
    VELOCIDADE: 2,
    MANOBRABILIDADE: 2,
    PODER: 5,
    PONTOS: 0,
};

//Função para escolha de players aleatoriamente 
function playerOnTheRun (players) {
    let indice1 = Math.floor (Math.random() * players.length);
    let indice2;

    do {
        indice2 = Math.floor (Math.random() * players.length);
    } while (indice2 === indice1);

    return [players[indice1], players[indice2]];
}
//Torna a função assincrona
async function rollDice() {
    return Math.floor(Math.random() * 6) + 1;
};

async function getRandomBlock() {
    let random = Math.random()
    let result
    
    switch (true) {
        case random < 0.33:
            result = "RETA";
            break;
        case random < 0.66:
            result = "CURVA";    
            break;
        default:
            result = "CONFRONTO";
    }
    return result;
};

async function logRollResult(characterName, block, diceResult, attribute) {
    console.log (`${characterName} 🎲 rolou um dado de ${block} ${diceResult} + ${attribute} = ${diceResult + attribute}`);
    
}

async function playRaceEngine(character1, character2) {
    for (let round = 1; round <= 5; round ++) {
        console.log (`🏁 Rodada ${round}`);

        //sortear bloco
        let block = await getRandomBlock();
        console.log (`Bloco: ${block}`);

         //rolar os dados
    let diceResult1 = await rollDice();
    let diceResult2 = await rollDice();

    //teste de habilidade
    let testSkill1 = 0;
    let testSkill2 = 0;

    if (block === "RETA") {
        testSkill1 = diceResult1 + character1.VELOCIDADE;
        testSkill2 = diceResult2 + character2.VELOCIDADE;

        await logRollResult(character1.NOME, "velocidade", diceResult1, character1.VELOCIDADE);
        await logRollResult(character2.NOME, "velocidade", diceResult2, character2.VELOCIDADE);
    }

    if (block === "CURVA") {
        testSkill1 = diceResult1 + character1.MANOBRABILIDADE;
        testSkill2 = diceResult2 + character2.MANOBRABILIDADE;

        await logRollResult(character1.NOME, "manobrabilidade", diceResult1, character1.MANOBRABILIDADE);
        await logRollResult(character2.NOME, "manobrabilidade", diceResult2, character2.MANOBRABILIDADE);
    }

    if (block === "CONFRONTO") {
        let powerResult1 = diceResult1 + character1.PODER;
        let powerResult2 = diceResult2 + character2.PODER;

        console.log (`${character1.NOME} confrontou com ${character2.NOME}!🥊`);

        await logRollResult(character1.NOME, "poder", diceResult1, character1.PODER);
        await logRollResult(character2.NOME, "poder", diceResult2, character2.PODER);

        if (powerResult1 > powerResult2 && character2.PONTOS > 0) {
            console.log (`${character1.NOME} venceu o confronto! ${character2.NOME} perdeu 1 ponto 🐢`);
            character2.PONTOS--;
        }
        
        if (powerResult2 > powerResult1 && character1.PONTOS > 0) {
            console.log (`${character2.NOME} venceu o confronto! ${character1.NOME} perdeu 1 ponto 🐢`);
            character1.PONTOS--;
        }      

        if (powerResult2 === powerResult1) {
            console.log ("Confronto empatado. Nenhum ponto foi perdido!");
        }        
    }

    //verificando o vencedor
    if (testSkill1 > testSkill2) {
        console.log (`${character1.NOME} marcou um ponto!`);
        character1.PONTOS++;
    } else if (testSkill2 > testSkill1) {
        console.log (`${character2.NOME} marcou um ponto!`);
        character2.PONTOS++;
    }

    console.log ("*-----**------**-----**-----**-----**-----**-----**-----**-----*\n");
    }   
};

async function declareWinner(character1, character2) {
    console.log ("Resultado final:")
    console.log (`${character1.NOME}: ${character1.PONTOS} ponto(s)`)
    console.log (`${character2.NOME}: ${character2.PONTOS} ponto(s)`)

    if (character1.PONTOS > character2.PONTOS) 
        console.log (`\n${character1.NOME} venceu a corrida. Parabéns!🏆`);
    else if (character2.PONTOS > character1.PONTOS) 
        console.log (`\n${character2.NOME} venceu a corrida. Parabéns!🏆`);
    else 
        console.log (`A corrida terminou empatada!`);
    
}
//Função auto invocável
(async function main() {
    //Lista com todos os players
    const players = [player1, player2, player3, player4, player5, player6];

    //Selecionando 2 players aleatoriamente
    const [randomPlayer1, randomPlayer2] = playerOnTheRun (players);
    console.log(
        `🏁 🚨 Corrida entre ${randomPlayer1.NOME} e ${randomPlayer2.NOME} começando...\n`
    );
    //await faz com que a função espere para ser executada
    await playRaceEngine(randomPlayer1, randomPlayer2);
    await declareWinner(randomPlayer1, randomPlayer2);
})();

