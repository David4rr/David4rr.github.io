const svg = document.getElementById("flower");
let starInterval; // Variabel untuk menyimpan interval animasi bintang

function generate() {
  // Remove old flower
  const circles = svg.querySelectorAll("circle");
  circles.forEach((circle) => {
    circle.remove();
  });

  // Refresh stars
  resetStars();

  // Decide types of flower
  const leafPoints = randomNumbers(4, 6);
  const leafLayer = randomNumbers(3, 5);
  const leafSize = randomNumbers(75, 150);

  // Create flower
  for (let i = 0; i < leafLayer; i++) {
    const randomColor = randomHLS();
    const radius = randomNumbers(10, leafSize); // Radius from middle
    const r = randomNumbers(10, leafSize); // Radius of "Leaf"
    for (let j = 0; j < leafPoints; j++) {
      // Change to `let j` to avoid conflict with outer loop
      const angle = ((j * 360) / leafPoints) * (Math.PI / 180);
      const x = 300 + radius * Math.cos(angle);
      const y = 300 + radius * Math.sin(angle);
      const circle = document.createElementNS(
        "http://www.w3.org/2000/svg",
        "circle"
      );
      circle.setAttribute("cx", x);
      circle.setAttribute("cy", y);
      circle.setAttribute("r", r);
      circle.setAttribute("fill", randomColor);
      svg.appendChild(circle);
    }
  }

  // Show flower
  var tl = gsap.timeline({});
  tl.to("circle", {
    opacity: 0.2,
    stagger: 0.1,
    ease: "power4.inOut",
    duration: 0.5,
  });
}

function resetStars() {
  // Clear the previous star interval if it exists
  if (starInterval) {
    clearInterval(starInterval);
  }

  // Clear the canvas
  ctx.clearRect(0, 0, W, H);
  ctx.fillStyle = "#112";
  ctx.fillRect(0, 0, W, H);

  // Restart the star animation
  starInterval = setInterval(animate, 800);
}

// Random color
function randomHLS() {
  const hue = Math.floor(Math.random() * 360);
  return `hsl(${hue}, 50%, 60%)`;
}

// Random numbers
function randomNumbers(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

generate(); // Initial call to generate flower and start star animation
