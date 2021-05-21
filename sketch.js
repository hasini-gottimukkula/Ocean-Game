const Bodies = Matter.Bodies;
const Engine = Matter.Engine;
const World = Matter.World;
const Body = Matter.Body;

var engine;
var world;
var swimmer, gameState = "serve";

function setup() {
  createCanvas(windowWidth, windowHeight);
  engine = Engine.create();
  world = engine.world;

  swimmer = new Swimmer(206, 117, 200, 150);
}

function draw() {
  background("lightblue");
  text("(" + mouseX + ", " + mouseY + ")", mouseX, mouseY);
  if (gameState === "serve") {
    textSize(20);
    fill("black");
    text("Press the space key to play", width / 2 - 100, height / 2);
    if (keyDown("space")) {
      gameState = "play";
    }

  }
  else if (gameState === "play") {
    swimmer.display();
    if (keyDown("left")) {
      console.log("hi");
      Body.translate(swimmer.body, { x: -10, y: 0 });
    }
    else if (keyDown("right")) {
      Body.translate(swimmer.body, { x: 10, y: 0 });
    }
    else if (keyDown("up")) {
      Body.translate(swimmer.body, { x: 0, y: -10 });
    }
    else if (keyDown("down")) {
      Body.translate(swimmer.body, { x: 0, y: 10 });
    }
    camera.position.x = swimmer.body.position.x;
    camera.position.y = swimmer.body.position.y;
  }
  else if (gameState === "end") {

  }
}