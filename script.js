const coin = document.getElementById('coin');
const button = document.getElementById('flipButton');
const result = document.getElementById('result');

button.addEventListener('click', () => {
  result.textContent = '';
  coin.style.transition = 'transform 1s ease-in-out';
  
  // Flip up
  coin.style.transform = 'translate(-50%, -300px) rotateY(1080deg)';

  setTimeout(() => {
    // Fall back down
    coin.style.transform = 'translate(-50%, -170px) rotateY(1800deg)';

    // Show heads/tails after animation
    setTimeout(() => {
      const side = Math.random() < 0.5 ? 'Heads' : 'Tails';
      result.textContent = side;
    }, 1000);
  }, 1000);
});
