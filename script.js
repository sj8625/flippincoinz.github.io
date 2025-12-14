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
        data: ['Heads', 'Tails'],
        backgroundColor: ['#8a2be2', '#00bcd4'],
        borderWidth: 1
      }]
    },
    
    options: {
      responsive: false,
      plugins: {
        legend: {
          position: 'bottom'
        }
      }
    }
  });
}

function flipCoin() {
  const isHeads = Math.random() < 0.5;
  const coin = document.getElementById("coin");
  const result = document.getElementById("result");

  // ✅ Reset coin animation
  coin.style.animation = "none";
  void coin.offsetWidth; // Force reflow

  // ✅ Apply flip animation
  coin.style.animation = "flipCoin 1.5s ease-in-out forwards";

  // ✅ Delay result until animation finishes
  setTimeout(() => {
    const outcome = isHeads ? "Heads" : "Tails";
    result.textContent = outcome;
    result.style.opacity = "0";
    result.style.animation = "none";
    void result.offsetWidth;
    result.style.animation = "showResult 0.3s ease-in forwards";
    
    // ✅ Update Heads/Tails counters
    if (isHeads) {
      headsCount++;
      localStorage.setItem('heads', headsCount);
    } else {
      tailsCount++;
      localStorage.setItem('tails', tailsCount);
    }

    chart.data.datasets[0].data = [headsCount, tailsCount];
    chart.update();

    // ✅ Update streak counter
    streakCount++;
    localStorage.setItem('streak', streakCount);
  }, 1500); // Match animation duration
}

// ✅ Wrap all DOM-dependent logic inside window.onload
// Display saved counts on page load
window.onload = function () {
  renderChart();
    
  // Auto-flip after 2 seconds
  setTimeout(() => {
    flipCoin(); // This calls the function after 2 seconds
  }, 2000);

// Flip on button click
document.getElementById("flipButton").addEventListener("click", flipCoin);
};
