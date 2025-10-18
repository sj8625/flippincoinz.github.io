// Initialize counts from localStorage or start at 0
let headsCount = parseInt(localStorage.getItem('heads')) || 0;
let tailsCount = parseInt(localStorage.getItem('tails')) || 0;

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
    result.textContent = isHeads ? "Heads" : "Tails";
    result.style.opacity = "0";
    result.style.animation = "none";
    void result.offsetWidth;
    result.style.animation = "showResult 0.3s ease-in forwards";
  }, 1500); // Match animation duration
}

// Display saved counts on page load
window.onload = function () {
  document.getElementById('headsCount').textContent = headsCount;
  document.getElementByID('tailsCount').textContent = tailsCount;
  
  // Auto-flip after 2 seconds
  setTimeout(() => {
    flipCoin(); // This calls the function after 2 seconds
  }, 2000);
};

// Flip on button click
document.getElementById("flipButton").addEventListener("click", flipCoin);
