const radius = 4;
const step = 4;

const paintRandomly = () => {
  for (let i = 0; i < canvas.width; i = i + step) {
    for (let j = 0; j < canvas.width; j = j + step) {
      createCircleRandomly(randomColour(), radius);
    }
  }
};

const drawLineOfCircle = (x, y, r) => {
  const lineStep = 1;
  const radiusStep = 0.25;
  const randomChange = (radiusStep * randomNumber(-50, 99)) / 100;
  if (x < 2 * canvas.width && y < 2 * canvas.height) {
    createCircleAtLocation(x, y, r, randomColour());
    drawLineOfCircle(
      x + lineStep,
      y + lineStep,
      r + radiusStep + (randomChange < radiusStep ? radiusStep : randomChange)
    );
  }
};

drawLineOfCircle(0, 0, 0);
// paintRandomly();
