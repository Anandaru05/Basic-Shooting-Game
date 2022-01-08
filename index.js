const container = document.querySelector(".container");
const bloodSpot = document.querySelector(".bloodSpot");
const startBtn = document.querySelector(".startBtn");

const Ghost = document.createElement("img");
Ghost.setAttribute("class", "Ghost");
Ghost.setAttribute("src", "Ghost.png");

const contHeight = container.offsetHeight;
const contWidth = container.offsetWidth;

setInterval(() => {
  const randTop = Math.random() * (contHeight - 100);
  const randLeft = Math.random() * (contWidth - 100);

  Ghost.style.position = "absolute";
  Ghost.style.top = randTop + "px";
  Ghost.style.left = randLeft + "px";
}, 1000);

let points = 0;

startBtn.addEventListener("click", () => {
  container.appendChild(Ghost);

  startBtn.innerText = "POINT: " + points;
});

window.addEventListener("click", (e) => {
  bloodSpot.style.top = e.pageY + "px";
  bloodSpot.style.left = e.pageX + "px";

  if (e.target === Ghost) points++;

  startBtn.innerText = "POINTS: " + points;
});

const cursor = document.querySelector(".cursor");
window.addEventListener("mousemove", (e) => {
  cursor.style.top = e.pageY + "px";
  cursor.style.left = e.pageX + "px";
});