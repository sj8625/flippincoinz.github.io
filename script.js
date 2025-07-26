document.getElementById("flipButton").addEventListener("click", flipCoin);

function flipCoin() {
  const coin = document.getElementById('coin');
  const resultDiv = document.getElementById('result');

  resultDiv.textContent = '';

  // Start flip animation
  coin.style.transform = 'translateX(-50%) rotateY(720deg)';

  setTimeout(() => {
    coin.style.transform = 'translateX(-50%) rotateY(0deg)';

    const isHeads = Math.random() < 0.5;
    const imageURL = isHeads
      ? 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4d/2006_1C_Obv.png/800px-2006_1C_Obv.png' // Heads
      : 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0d/2005_1C_Rev.png/800px-2005_1C_Rev.png'; // Tails

    coin.style.backgroundImage = `url('${imageURL}')`;
    resultDiv.textContent = isHeads ? 'Heads' : 'Tails';
  }, 1200);
}
