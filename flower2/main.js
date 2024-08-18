const svg = document.getElementById("flower");

function generate() {
  //Remove old flower
  const circles = svg.querySelectorAll("circle");
  circles.forEach((circle) => {
    circle.remove();
  });

  // Decide types of flower
  const leafPoints = randomNumbers(4, 6);
  const leafLayer = randomNumbers(3, 5);
  const leafSize = randomNumbers(75, 150);

  //Creates flower
  for (let i = 0; i < leafLayer; i++) {
    const randomColor = randomHLS();
    const radius = randomNumbers(10, leafSize); //Radius from middle
    const r = randomNumbers(10, leafSize); //Radius of "Leaf"
    for (let i = 0; i < leafPoints; i++) {
      const angle = ((i * 360) / leafPoints) * (Math.PI / 180);
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
      console.log(circle);
      svg.appendChild(circle);
    }
  }

  //Show flower
  var tl = gsap.timeline({});
  tl.to("circle", {
    opacity: 0.2,
    stagger: 0.1,
    ease: "power4.inOut",
    duration: 0.5,
  });
}

//Random color
function randomHLS() {
  const hue = Math.floor(Math.random() * 360);
  return `hsl(${hue}, 50%, 60%)`;
}

//Random numbers
function randomNumbers(min, max) {
  let randomNum = Math.floor(Math.random() * (max - min + 1)) + min;
  return randomNum;
}

generate();
