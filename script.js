// Lista de rodadas (duplas de imagens)
const rounds = [
  {
    real: "assets/goldensondika.jpg",
    fake: "assets/goldenlendo.jpg",
    realLabel: "A",
  },
  {
    real: "assets/gatosendogato.jpg",
    fake: "assets/gatocozinhando.png",
    realLabel: "B",
  },
  {
    real: "assets/pratofeliz.jpg",
    fake: "assets/comidarindo.png",
    realLabel: "A",
  }
];

let currentRound = 0;
let correctAnswers = 0; // contador de acertos

function renderRound() {
  const round = rounds[currentRound];
  const shuffle = Math.random() > 0.5;

  const imgA = document.getElementById("imgA");
  const imgB = document.getElementById("imgB");

  if (shuffle) {
    imgA.src = round.real;
    imgB.src = round.fake;
    round.realLabel = "A";
  } else {
    imgA.src = round.fake;
    imgB.src = round.real;
    round.realLabel = "B";
  }

  document.getElementById("result").textContent = "";
  document.getElementById("next").style.display = "none";

  updateScore();
}

function choose(choice) {
  const round = rounds[currentRound];
  const result = document.getElementById("result");

  if (choice === round.realLabel) {
    result.textContent = "✅ Acertou, miserávi! Essa é a imagem real!";
    result.style.color = "green";
    correctAnswers++;
  } else {
    result.textContent = "❌ Negativo! Seu 'sim' deu errado. A outra era a real!.";
    result.style.color = "red";
  }

  document.getElementById("next").style.display = "inline-block";
  updateScore();
}

function nextRound() {
  currentRound++;
  if (currentRound >= rounds.length) {
    document.getElementById("result").textContent =
      `🎉 Fim do jogo! Você acertou ${correctAnswers} de ${rounds.length}!`;
    document.getElementById("next").style.display = "none";
    return;
  }
  renderRound();
}

function updateScore() {
  const scoreElement = document.getElementById("score");
  scoreElement.textContent = `Placar: ${correctAnswers} / ${rounds.length}`;
}

// Inicial
renderRound();
