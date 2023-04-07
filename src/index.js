const mainCard = document.getElementById('main-card');
const music = document.getElementById('music');

Number.prototype.clamp = function(min, max) {
    return Math.min(Math.max(this, min), max);
};

function startPage() {
    document.getElementById('start').style.display = 'none';

    document.getElementById('card').style.display = 'inline';
    document.getElementById('socials').style.display = 'inline';

    const audioContext = new AudioContext();
    const source = audioContext.createMediaElementSource(music);
    const analyser = audioContext.createAnalyser();

    analyser.fftSize = 256;

    analyser.connect(audioContext.destination);
    source.connect(analyser);
    const data = new Uint8Array(analyser.frequencyBinCount);

    music.play();
    setInterval(() => {
        analyser.getByteFrequencyData(data);
        let sum = 0;
        for (let i = 0; i < data.length; i++) {
            sum += data[i];
        }
        const average = sum / data.length;

        mainCard.style.fontSize = `${average.clamp(10, 150)}px`;
    }, 10)

    particlesJS.load('particles-js', 'assets/particles.json');

    document.removeEventListener('click', startPage);
}

document.addEventListener('click', startPage);

function sleep(milliseconds) {
    return new Promise(resolve => setTimeout(resolve, milliseconds));
}

async function slideText(slidingMode, destination, result) {
    if (slidingMode == 'ending') {
        for (let i = 0; i < destination.length; i++) {
            result = result.slice(0, -1);
            
            document.title = result || '​';
            window.location.href = `#${result}`;

            await sleep(50);
        }

        slideText('starting', destination, result);
    } 
    else if (slidingMode == 'starting') {
        for (let i of destination) {
            result += i;

            document.title = result;
            window.location.href = `#${result}`;
            
            await sleep(50);
        }

        slideText('ending', destination, result);
    }
}

slideText('starting', 'rise-z.github.io/site/', '');
