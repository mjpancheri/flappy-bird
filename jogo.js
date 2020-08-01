console.log('[DevSoutinho] Flappy Bird');
console.log('Inscreva-se no canal :D https://www.youtube.com/channel/UCzR2u5RWXWjUh7CwLSvbitA');

const sprites = new Image();
sprites.src = './sprites.png';

const canvas = document.querySelector('canvas');
const contexto = canvas.getContext('2d');

const background = {
  sX: 390,
  sY: 0,
  w: 275,
  h: 204,
  x: 0,
  y: canvas.height - 204,
  draw() {
    contexto.fillStyle = '#70c5ce';
    contexto.fillRect(0, 0, canvas.width, canvas.height);
    contexto.drawImage(
      sprites,
      background.sX, background.sY,
      background.w, background.h,
      background.x, background.y,
      background.w, background.h,
    );
    contexto.drawImage(
      sprites,
      background.sX, background.sY,
      background.w, background.h,
      (background.x + background.w), background.y,
      background.w, background.h,
    );
  }
}

const floor = {
  sX: 0,
  sY: 610,
  w: 224,
  h: 112,
  x: 0,
  y: canvas.height - 112,
  draw() {
    contexto.drawImage(
      sprites,
      floor.sX, floor.sY,
      floor.w, floor.h,
      floor.x, floor.y,
      floor.w, floor.h,
    );
    contexto.drawImage(
      sprites,
      floor.sX, floor.sY,
      floor.w, floor.h,
      (floor.x + floor.w), floor.y,
      floor.w, floor.h,
    );
  }
}

const flappyBird = {
  sX: 0,
  sY: 0,
  w: 33,
  h: 24,
  x: 10,
  y: 50,
  gravity: 0.25,
  speed: 0,
  refresh() {
    flappyBird.speed += flappyBird.gravity;
    flappyBird.y += flappyBird.speed;
  },
  draw() {
    contexto.drawImage(
      sprites,
      flappyBird.sX, flappyBird.sY,
      flappyBird.w, flappyBird.h,
      flappyBird.x, flappyBird.y,
      flappyBird.w, flappyBird.h,
    );
  }
}

function loop() {
  flappyBird.refresh();
  background.draw();
  floor.draw();
  flappyBird.draw();
  

  requestAnimationFrame(loop);
}

loop();