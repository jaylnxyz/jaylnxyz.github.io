const start = document.getElementById("start")
const music = document.getElementById("music")

function startPage() {
    start.style.display = "none"
    document.getElementById("main").style.display = "inline"
    music.play()
    music.volume = 0.5
    start.removeEventListener("click", startPage)
}

start.addEventListener("click", startPage)
