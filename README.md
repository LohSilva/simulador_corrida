# 🏎️SIMULADOR DE CORRIDA 

## **Descrição:**
O desafio é criar uma lógica de um jogo de vídeo game para simular corrida, baseada na série de jogos de corrida Mario Kart. A lógica deve levar em consideração uma série de regras e mecânica, que será listada abaixo.

## 🏃‍♂️Dados sobre os Players:
- O jogador é composto por 3 ***atributos***:
  - Velocidade;
  - Manobrabilidade e;
  - Poder.
- São esses atributos que utilizaremos para compor o resultado final da corrida.


## 🥊 Regras e mecânica:

### 🎮Jogadores:

O computador deve receber dois personagens para disputar a corrida em um objeto cada.

### 🛣️Pistas:
- Os personagens irão correr em uma pista aleatória de 5 rodadas.
- A cada rodada, será sorteado um bloco da pista que pode ser ***reta***, ***curva*** ou ***confronto***.
  - Caso o bloco da pista seja uma **RETA**, o jogador deve jogar um dado de 6 lados e somar o atributo **VELOCIDADE**, quem vencer leva um ponto.
  - Caso o bloco da pista seja uma **CURVA**, o jogador deve jogar um dado de 6 lados e somar o atributo **MANOBRABILIDADE**, quem vencer leva um ponto.
  - Caso o bloco da pista seja uma **CONFRONTO**, o jogador deve jogar um dado de 6 lados e somar o atributo **PODER**, quem perder perde um ponto. Nesta regra não há soma de ponto.
  - Nenhum jogador pode ter pontuação negativa (Ou seja, valores abaixo de 0).

### 🏆Condição de vitória:
- Ao final, vence quem acumulou mais pontos.