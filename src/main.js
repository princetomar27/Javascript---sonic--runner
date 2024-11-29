import { run } from "node:test";
import k from "./kaplayCtx";
import mainMenuScene from "./scenes/mainMenuScene";

k.loadSprite("chemical-bg", "graphics/chemical-bg.png");
k.loadSprite("platforms-bg", "graphics/platforms.png");

k.loadSprite(
  "sonic",
  "graphics/sonic.png",
  // For sonic spinning animation
  {
    sliceX: 8, // how many frames do we have
    sliceY: 2, // how many frames per column we have
    anims: {
      run: { from: 0, to: 7, loop: true, speed: 30 },
      jump: { from: 8, to: 15, loop: true, speed: 100 },
    },
  }
);

k.loadSprite("ring", "graphics/ring.png", {
  sliceX: 16,
  sliceY: 1,
  anims: {
    spin: { from: 0, to: 15, loop: true, speed: 30 },
  },
});

k.loadSprite("motobug", "graphics/motobug.png", {
  sliceX: 5,
  sliceY: 1,
  anims: {
    run: { from: 0, to: 4, loop: true, speed: 8 },
  },
});

k.loadFont("mania", "fonts/mania.ttf");

k.loadSound("city", "sounds/city.mp3");
k.loadSound("jump", "sounds/Jump.wav");
k.loadSound("ring", "sounds/Ring.wav");
k.loadSound("destroy", "sounds/Destroy.wav");
k.loadSound("hurt", "sounds/Hurt.wav");
k.loadSound("hyper-ring", "sounds/HeperRing.wav");

k.scene("main-menu", () => mainMenuScene);

k.scene("game", () => {});

k.scene("gameover", () => {});

// default scene of our application
k.go("main-menu");
