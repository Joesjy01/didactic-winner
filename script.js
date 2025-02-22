/* script.js */
document.addEventListener('DOMContentLoaded', () => {
  const audioPlayer = document.getElementById('audioPlayer');
  const playlistItems = document.querySelectorAll('#playlistList li');
  
  playlistItems.forEach(item => {
    item.addEventListener('click', function() {
      // Retirer la classe active des autres éléments
      playlistItems.forEach(i => i.classList.remove('active'));
      this.classList.add('active');
      
      // Changer la source du lecteur audio et lancer la lecture
      const src = this.getAttribute('data-src');
      audioPlayer.src = src;
      audioPlayer.play();
    });
  });
  
  // Gestion du formulaire de contact (exemple simple)
  const contactForm = document.getElementById('contactForm');
  contactForm.addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Merci pour votre message !');
    contactForm.reset();
  });
});