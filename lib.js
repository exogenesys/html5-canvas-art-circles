const canvas = document.getElementById("myCanvas");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const randomNumber = (min, max) => {
  var num = Math.floor(Math.random() * max) + min; // this will get a number between 1 and 99;
  // num *= Math.floor(Math.random() * 2) == 1 ? 1 : -1;
  // this will add minus sign in 50% of cases
  return num;
};

const randomHexString = () => {
  const randomHexNumber = randomNumber(0, 255);
  let colourString = randomHexNumber.toString(16);
  if (randomHexNumber <= parseInt("F", 16)) {
    colourString = "0" + randomHexNumber.toString(16);
  }
  return colourString;
};

const randomShadeOfGray = () => {
  const colourString = randomHexString();
  return "#" + colourString + colourString + colourString;
};

const randomColour = () => {
  return "#" + randomHexString() + randomHexString() + randomHexString();
};

const randomLocation = (whichHalf) => {
  let widthStart, widthFinish;
  if (whichHalf === "FIRST_HALF" || whichHalf === "SECOND_HALF") {
    widthStart = whichHalf ? 0 : canvas.width / 2;
    widthFinish = whichHalf ? canvas.width / 2 : canvas.width;
  } else {
    widthStart = 0;
    widthFinish = canvas.width;
  }
  const x = randomNumber(widthStart, widthFinish);
  const y = randomNumber(0, canvas.height);
  return { x, y };
};

const createCircleAtLocation = (x, y, r, colour) => {
  // column, width, x
  // row, height, y
  ctx.beginPath();
  ctx.arc(x, y, r, 0, 2 * Math.PI);
  ctx.fillStyle = colour;
  ctx.fill();
};

const createCircleRecusively = (column, row) => {
  createCircleAtLocation(column, row, radius, randomColour());
  if (row < canvas.height && column < canvas.width) {
    if (canvas.width - column < 5) {
      createCircleRecusively(0, row + step);
    } else {
      createCircleRecusively(column + step, row);
    }
  }
};

const createCircleRandomly = (colour, radius) => {
  const { x, y } = randomLocation();
  const newRadius = randomNumber(radius, radius);
  createCircleAtLocation(x, y, newRadius, randomColour());
};
