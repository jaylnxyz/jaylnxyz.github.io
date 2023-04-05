const overlay = document.getElementById('overlay')
const song = document.getElementById('song');

overlay.addEventListener('click', () => {
    overlay.style.display = 'none';
    document.getElementById('main').style.display = 'inline'

    particlesJS.load('particles-js', 'assets/particles.json');
    song.play();
})
