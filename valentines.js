let currentIndex = 0;
const images = document.querySelectorAll(".carousel img");
const dotsContainer = document.getElementById("dots");
const music = document.getElementById("bgMusic");

// Create dots
images.forEach((_, index) => {
    const dot = document.createElement("div");
    dot.classList.add("dot");
    if(index === 0) dot.classList.add("active");

    dot.addEventListener("click", () => {
        currentIndex = index;
        showImage(currentIndex);
    });

    dotsContainer.appendChild(dot);
});

const dots = document.querySelectorAll(".dot");

function showImage(index) {
    images.forEach(img => img.classList.remove("active"));
    dots.forEach(dot => dot.classList.remove("active"));

    images[index].classList.add("active");
    dots[index].classList.add("active");

    currentIndex = index;
}

// Autoplay after first click (browser restriction)
document.body.addEventListener("click", () => {
    music.play().catch(() => {});
}, { once: true });

// Music toggle
function toggleMusic() {
    if (music.paused) {
        music.play();
    } else {
        music.pause();
    }
}

function nextImage() {
    currentIndex = (currentIndex + 1) % images.length;
    showImage(currentIndex);
}

function prevImage() {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    showImage(currentIndex);
}

// Auto slide every 4 seconds
setInterval(nextImage, 4000);

function createHeart() {
    const heart = document.createElement("div");
    heart.classList.add("heart");
    heart.style.left = Math.random() * window.innerWidth + "px";
    heart.style.animationDuration = Math.random() * 2 + 3 + "s";
    document.body.appendChild(heart);
    setTimeout(() => {
        heart.remove();
    }, 5000);
}

setInterval(createHeart, 350);

showImage(currentIndex);

function toggleMusic() {
      if (music.paused) {
        music.play();
      } else {
        music.pause();
      }
    }

    // Autoplay after first click (browser restriction)
    document.body.addEventListener("click", () => {
      music.play().catch(() => {});
    }, { once: true });

    // Floating hearts
    function createHeart() {
      const heart = document.createElement("div");
      heart.classList.add("heart");

      const hearts = ["💖", "💘", "💕", "💗", "🌹", "❤️"];
      heart.innerHTML = hearts[Math.floor(Math.random() * hearts.length)];

      heart.style.left = Math.random() * 100 + "vw";
      heart.style.fontSize = Math.random() * 20 + 15 + "px";
      heart.style.animationDuration = Math.random() * 3 + 4 + "s";

      document.body.appendChild(heart);

      setTimeout(() => {
        heart.remove();
      }, 6000);
    }
