# 🏎️SIMULADOR DE CORRIDA 

## **Descrição:**
Este simulador de corrida é inspirado na clássica série de jogos Mario Kart, trazendo a emoção das pistas diretamente para o console. O objetivo do projeto é criar uma lógica que simule uma corrida entre personagens, utilizando regras e mecânicas que refletem a dinâmica dos jogos de corrida.

## 🏃‍♂️Dados sobre os Players:
- Cada jogador é definido por 3 ***atributos*** principais:
  - Velocidade
  - Manobrabilidade
  - Poder
- Esses atributos são fundamentais para determinar o desempenho dos personagens em diferentes tipos de pista e são usados para calcular os resultados das corridas.


## 🥊 Regras e mecânica:

### 🎮Jogadores:

O simulador recebe dois personagens, cada um com seus próprios atributos, que irão disputar uma corrida.

### 🛣️Pistas:
- A corrida é realizada em uma pista composta por 5 rodadas, cada uma representada por um bloco de pista que é sorteado aleatoriamente.
- Os tipos de blocos são:
  - **Reta**: Os jogadores rolam um dado de 6 lados e somam o valor ao atributo ***Velocidade***. O jogador com a maior soma *ganha* um ponto.
  - **Curva**: Os jogadores rolam um dado de 6 lados e somam o valor ao atributo ***Manobrabilidade***. O jogador com a maior soma *ganha* um ponto.
  - **Confronto**: Os jogadores rolam um dado de 6 lados e somam o valor ao atributo ***Poder***. O jogador com a menor soma *perde* um ponto. No confronto, não há ganho de ponto, apenas perda.
- Nenhum jogador pode ter **pontuação negativa**, ou seja, os pontos não podem cair abaixo de zero.

### 🏆Condição de vitória:
- Ao final das 5 rodadas, o jogador que acumular mais pontos é declarado o vencedor da corrida. Quem possuir o melhor conjunto de habilidades, combinado com um pouco de sorte, levará o troféu!

## 🛠️Instalação:
 1. Clone o repositório:
```bash
git clone git@github.com:LohSilva/simulador_corrida.git
```
2. Navegue até a pasta onde está o projeto:
```bash
cd simulador_corrida
```
3. Instale as dependências:
```bash
npm install
```

## ▶️Execução:
Para iniciar a simulação, execute o seguinte comando:
```bash
node src/index.js
```
Após a execução do comando, a saída deve conter os dados de uma corrida entre 2 players, informando o resultado da competição!

<p>

<div align="center">
 <img src="https://github.com/LohSilva/simulador_corrida/blob/main/simulacao.png" width="600" />
</div>

</p>



