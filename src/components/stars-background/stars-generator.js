function randomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

const STAR_COUNT = 100;
let result = "";
for (let i = 0; i < STAR_COUNT; i++) {
  result += `${randomNumber(0, 100)}vw ${randomNumber(-100, 100)}vh #fff,`;
}
console.log(result.substring(0, result.length - 1));

// ${randomNumber(0, 3)}px ${randomNumber(0, 3)}px

