const date = new Date();
const time = date.toLocaleDateString("default", {
    month: "long",
    day: "numeric",
    year: "numeric"
}).toLowerCase()

document.getElementById("time").innerHTML = `${time}, today is a new day.`
