import kaplay from "kaplay";

const k = kaplay({
  width: 1920,
  height: 1080,
  letterbox: true,
  background: [0, 0, 0],
  global: false,
  touchToMouse: true,
  buttons: {
    // create a key for a button
    jump: {
      keyboard: ["space"],
      mouse: "left",
    },
  },
  debugKey: "d",
  debug: true,
  //   showFps: true,
  //   showMemory: true,
  //   showVersion: true,
  //   showRenderer: true,
});

export default k;
