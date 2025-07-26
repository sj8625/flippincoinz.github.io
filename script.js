document.getElementById("flip-button").addEventListener("click", flipCoin);

function flipCoin() {
  const coin = document.getElementById("coin-image");
  const resultDiv = document.getElementById("result");

  // Reset any previous result
  resultDiv.textContent = "";

  // Trigger flip animation
  coin.style.transform = "rotateY(720deg)";

  setTimeout(() => {
    coin.style.transform = "rotateY(0deg)";

    const result = Math.random() < 0.5 ? "Heads" : "Tails";
    resultDiv.textContent = result;
  }, 1200);
}
