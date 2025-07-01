window.onload = function () {
  setTimeout(() => {
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
  }, 600); // start after hand flicks
};

