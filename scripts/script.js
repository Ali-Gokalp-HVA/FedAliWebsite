console.log("hi");

// --- Hamburger menu ---
const openKnop = document.querySelector(".open-menu");
const sluitKnop = document.querySelector(".sluit-menu");

openKnop.onclick = toonMenu;
sluitKnop.onclick = sluitMenu;

function toonMenu() {
  document.getElementById("mobiel-menu").classList.add("toonMenu");
}

function sluitMenu() {
  document.getElementById("mobiel-menu").classList.remove("toonMenu");
}

// --- Mijn lettergrootte controls ---
function changeFontSize(step) {
  let currentSize = parseFloat(window.getComputedStyle(document.documentElement).fontSize);
  let newSize = currentSize + step;
  document.documentElement.style.fontSize = newSize + "px";
}

document.getElementById("verklein").addEventListener("click", function () {
  changeFontSize(-2);
});

document.getElementById("reset").addEventListener("click", function () {
  document.documentElement.style.fontSize = "16px";
});

document.getElementById("vergroten").addEventListener("click", function () {
  changeFontSize(2);
});


// --- Logo animatie en dat het weer weg gaat anders blijft
// de otter in een eindeloze draai ---
const logo = document.querySelector(".logo img");

logo.addEventListener("click", (event) => {
  event.preventDefault();
  logo.classList.add("spin");

  setTimeout(() => {
    logo.classList.remove("spin");
    window.location.href = "index.html";
  }, 600);
});

// --- Mijn otter laadscherm ---
window.addEventListener("load", () => {
  const laadscherm = document.getElementById("laadscherm");

  setTimeout(() => {
    laadscherm.classList.add("uit");
  }, 500);
});

// --- Naar boven gaan knop ---
document.getElementById("scroll-omhoog").addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
});

// --- Carrousel ---
const gallery = document.querySelector('.gallerij');

// Dupliceerd mijn gallery voor oneindige scroll
gallery.innerHTML += gallery.innerHTML;

const imgWidth = gallery.querySelector("img").offsetWidth + 16;

gallery.addEventListener("click", () => {
  gallery.scrollLeft += imgWidth;

  if (gallery.scrollLeft >= gallery.scrollWidth / 2) {
    gallery.scrollLeft = 0;
  }
});
