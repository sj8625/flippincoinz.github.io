// Initialize counts from localStorage or start at 0
let headsCount = parseInt(localStorage.getItem('heads')) || 0;
let tailsCount = parseInt(localStorage.getItem('tails')) || 0;
let streakCount = parseInt(localStorage.getItem('streak')) || 0;

let chart;

function renderChart() {
  const ctx = document.getElementById('outcomeChart').getContext('2d');

  chart = new Chart(ctx, {
    type: 'pie',
    data: {
      labels: ['Heads', 'Tails'],
      datasets: [{
        data: [headsCount, tailsCount],
        backgroundColor: ['#8a2be2', '#00bcd4'],
        borderWidth: 1
      }]
    },
    options: {
      responsive: false,
      plugins: {
        legend: {
          display: true
        }
      }
    }
  });
}

function flipCoin() {
  const isHeads = Math.random() < 0.5;
  const coin = document.getElementById("coin");
  const result = document.getElementById("result");

  // Reset animation
  coin.style.animation = "none";
  void coin.offsetWidth;

  // Play animation
  coin.style.animation = "flipCoin 1.5s ease-in-out forwards";

  setTimeout(() => {
    const outcome = isHeads ? "Heads" : "Tails";
    result.textContent = outcome;

    if (isHeads) {
      headsCount++;
      localStorage.setItem('heads', headsCount);
    } else {
      tailsCount++;
      localStorage.setItem('tails', tailsCount);
    }

    chart.data.datasets[0].data = [headsCount, tailsCount];
    chart.update();

    streakCount++;
    localStorage.setItem('streak', streakCount);
  }, 1500);
}

window.onload = function () {
  renderChart();

  setTimeout(() => {
    flipCoin();
  }, 2000);

  document.getElementById("flipButton").addEventListener("click", flipCoin);
};
