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

    // 🪄 Show result dynamically with JS-driven animation
    result.style.opacity = "0"; // reset in case it's already visible
    result.style.animation = "none"; // force animation restart
    void result.offsetWidth; // reflow trick to reset animation
    result.style.animation = "showResult 0.3s ease-in forwards";
  }, 2000);
};
