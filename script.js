const coin = document.getElementById('coin');
const button = document.getElementById('flipButton');
const result = document.getElementById('result');

button.addEventListener('click', () => {
  result.textContent = ''; // Clear result
  coin.style.transition = 'transform 1s ease-in-out';
  coin.style.transform = 'translate(-50%, -200px) rotateY(1080deg)';

  setTimeout(() => {
    // Bring the coin back down
    coin.style.transform = 'translate(-50%, 0) rotateY(1800deg)';

    // Show result
    setTimeout(() => {
      const side = Math.random() < 0.5 ? 'Heads' : 'Tails';
      result.textContent = side;
    }, 1000);
  }, 1000);
});
