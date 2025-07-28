const board = document.getElementById("board");
const quadrado = document.getElementById("quadrado");
const jogadores = ["X", "O"];
let jogadorAtual = jogadores[0];
const mensagemFinal = document.createElement("h2");
mensagemFinal.textContent = "É a vez do X!";
mensagemFinal.style.marginTop = "30px";
mensagemFinal.style.textAlign = "center";
board.after(mensagemFinal);

const combinacoes = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

for (let i = 0; i < quadrado.length; i++) {
  quadrado[i].addEventListener("click", () => {
    if (quadrado[i].textContent !== "") {
      return;
    }
    if (checarVencedor(jogadorAtual)) {
      mensagemFinal.textContent = `Fim de Jogo! ${jogadorAtual} venceu!`;
      return;
    }
    jogadorAtual = jogadorAtual === jogadores[0] ? jogadores[1] : jogadores[0];
    if (jogadorAtual == jogadores[0]) {
      mensagemFinal.textContent = `É a vez do X!`;
    } else {
      mensagemFinal.textContent = `É a vez do O!`;
    }
  });
}

function checarVencedor(jogadorAtual) {
  for (let i = 0; i < combinacoes.length; i++) {
    const [a, b, c] = combinacoes[i];
    if (
      quadrado[a].textContent === jogadorAtual &&
      quadrado[b].textContent === jogadorAtual &&
      quadrado[c].textContent === jogadorAtual
    ) {
      return true;
    }
  }
  return false;
}

function empate() {
  for (let i = 0; i < quadrado.length; i++) {
    if (quadrado[i].textContent === "") {
      return false;
    }
  }
  return true;
}

function restart() {
  for (let i = 0; i < quadrado.length; i++) {
    quadrado[i].textContent = "";
  }
  mensagemFinal.textContent = "É a vez do X!";
  jogadorAtual = jogadores[0];
}
