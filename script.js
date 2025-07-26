window.onload = function () {
function flipCoin() {
  const coin = document.getElementById('coin');
  const resultDiv = document.getElementById('result');

  // Reset result and begin flip
  resultDiv.textContent = '';
  coin.style.transform = 'translateX(-50%) rotateY(720deg)';

  setTimeout(() => {
    const isHeads = Math.random() < 0.5;
    const coin = document.getElementById("coin");
    const result = document.getElementById("result");
    // Flip complete, reset rotation
    coin.style.transform = 'translateX(-50%) rotateY(0deg)';

    if (isHeads) {
      coin.style.transform = "translateY(0) rotateY(1440deg)";
      result.textContent = "Heads";
    } else {
      coin.style.transform = "translateY(0) rotateY(1620deg)";
      result.textContent = "Tails";
    }
  }, 600); // start after hand flicks
};
    // Choose result
    const isHeads = Math.random() < 0.5;
    const imageURL = isHeads
      ? 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4d/2006_1C_Obv.png/800px-2006_1C_Obv.png' // Heads
      : 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0d/2005_1C_Rev.png/800px-2005_1C_Rev.png'; // Tails

    coin.style.backgroundImage = `url('${imageURL}')`;
    resultDiv.textContent = isHeads ? 'Heads' : 'Tails';
  }, 1200);
}
