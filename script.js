function flipCoin() {
  const isHeads = Math.random() < 0.5;
  const coin = document.getElementById("coin");
  const result = document.getElementById("result");

  if (isHeads) {
    coin.style.transform = "translateY(0) rotateY(1440deg)";
    result.textContent = "Heads";
  } else {
    coin.style.transform = "translateY(0) rotateY(1620deg)";
    result.textContent = "Tails";
  }

  result.style.opacity = "0";
  result.style.animation = "none";
  void result.offsetWidth;
  result.style.animation = "showResult 0.3s ease-in forwards";
}

window.onload = function () {
  setTimeout(() => {
    flipCoin(); // This calls the function after 2 seconds
  }, 2000);
};

document.getElementById("flipButton").addEventListener("click", flipCoin);
