// Hent burgerknappen og menuen
const menuBtn = document.querySelector('.menu-btn');
const menu = document.querySelector('.menu');

// Toggle visningen af menuen
menuBtn.addEventListener('click', () => {
  menu.classList.toggle('active');
});

document.getElementById('newsletter-form').addEventListener('submit', function(e) {
  e.preventDefault(); // Forhindrer sideopdatering

  // Vis popup-vinduet
  const popup = document.getElementById('popup');
  popup.style.display = 'flex';

  // Tøm inputfeltet (valgfrit)
  this.reset();
});

// Luk popup-vinduet ved klik på kryds
document.getElementById('close-popup').addEventListener('click', function() {
  const popup = document.getElementById('popup');
  popup.style.display = 'none';
});

// Luk popup-vinduet ved klik udenfor indholdet (valgfrit)
window.addEventListener('click', function(event) {
  const popup = document.getElementById('popup');
  if (event.target === popup) {
    popup.style.display = 'none';
  }
});