const canvas = document.getElementById("canvas1");
const ctx = canvas.getContext("2d");
// console.log(ctx);

const CANVAS_WIDTH = (canvas.width = 600);
const CANVAS_HEIGHT = (canvas.height = 600);

//lets bring an image into the canvas
const playerImage = new Image();
playerImage.src = "shadow_dog.png";

let x = 0;
let y = 0;

const spriteWidth = 575;
const spriteHeight = 523;

// adjusting game speed
let gameFrame = 0;
const staggerFrame = 3;

// swap between animations

const spriteAnimations = [];
const animationStates = [
  {
    name: "idle",
    frames: 7,
  },
  {
    name: "jump",
    frames: 7,
  },
  {
    name: "fall",
    frames: 7,
  },
];

animationStates.forEach((state, index) => {
  let frames = {
    loc: [],
  };
  for (let j = 0; j < state.frames; j++) {
    let positionX = j * spriteWidth;
    let positionY = index * spriteHeight;
    let frame = { x: positionX, y: positionY };
    frames.loc.push(frame);
  }
  spriteAnimations[state.name] = frames;
});

console.log(spriteAnimations);

function animate() {
  ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);

  let position =
    Math.floor(gameFrame / staggerFrame) % spriteAnimations["jump"].loc.length;
  let frameX = position * spriteWidth;
  let frameY = spriteAnimations["jump"].loc[position].y;
  ctx.drawImage(
    playerImage,
    frameX,
    frameY,
    spriteWidth,
    spriteHeight,
    0,
    0,
    spriteWidth,
    spriteHeight
  );

  gameFrame++;

  requestAnimationFrame(animate);
}

animate();
