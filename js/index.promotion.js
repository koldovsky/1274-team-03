const timer = document.querySelectorAll('.timer__square');
const targetDate = new Date('2024-10-10T00:00:00');

function updateCountdown() {
  const now = new Date();
  const remainingTime = targetDate - now;
 
  const days = Math.floor(remainingTime / (1000 * 60 * 60 * 24));
  const hours = Math.floor((remainingTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((remainingTime % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((remainingTime % (1000 * 60)) / 1000);
 
  document.getElementById('days').innerHTML = days.toString().padStart(2, '0');
  document.getElementById('hours').innerHTML = hours.toString().padStart(2, '0');
  document.getElementById('minutes').innerHTML = minutes.toString().padStart(2, '0');
  document.getElementById('seconds').innerHTML = seconds.toString().padStart(2, '0');
}
 
setInterval(updateCountdown, 1000);