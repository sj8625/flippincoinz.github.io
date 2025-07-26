document.getElementById("flip-button").addEventListener("click", () => {
  const coin = document.getElementById("coin");
  const result = document.getElementById("result");

  result.textContent = "";

  // Animate flip
  coin.style.transform = "rotateY(720deg)";

  setTimeout(() => {
    coin.style.transform = "rotateY(0deg)";
    const outcome = Math.random() < 0.5 ? "Heads" : "Tails";
    result.textContent = outcome;
  }, 1200);
});
