const overlay = document.getElementById('overlay')
const song = document.getElementById('song');
const namex = document.getElementById('name');

overlay.addEventListener('click', async () => {
    overlay.style.display = 'none';
    document.getElementById('main').style.display = 'inline'

    particlesJS.load('particles-js', 'assets/particles.json');

    /*

    const context = new (AudioContext || webkitAudioContext)();
    const analyser = context.createAnalyser();
    const source = context.createMediaElementSource(song);

    source.connect(analyser);
    analyser.connect(context.destination);

    analyser.fftSize = 512;*/
    
    song.play();
})