var PLAY = 1;
var END = 0;
var gameState = PLAY;
var score = 0;

var bgImg;
var ROBOT, robotsGroup;

var PowerB, powerGroup;
var LaserMan, LaserManIMG;

var LaserB, LaserIMG;

function preload() {
  bgImg = loadImage("CITY view for LASER MAN.jpg");
  ROBOT = loadImage("ROBOTS.jpg");
  PowerB = loadImage("PB.jpeg");
  LaserManIMG = loadImage("LMG.jpg")
  LaserIMG = loadImage("laserB.jpg")
  // ROBOT.scale = 0.5;
}

function setup() {
  createCanvas(windowWidth, windowHeight);

  robotsGroup = new Group();
  powerGroup = new Group();
}

function draw() {
    background(bgImg);

  LaserMan = createSprite(400, 200, 50, 50);
  LaserMan.addImage(LaserManIMG);
  LaserMan.scale = 0.1;

  Robots();
  PowerBall();

  // if(keyCode === 38) {
  //   LaserMan.velocityY = -10;
  // }

  // if(keyIsDown === 40) {
  //   LaserMan.y = LaserMan.y +10
  // }
LaserMan.y = mouseY;
  drawSprites();
}

function mouseDragged() {
  LaserB = createSprite(LaserMan.x, LaserMan.y, 60, 50)
  LaserB.addImage(LaserIMG);
  LaserB.scale = 0.5;
  LaserB.velocityX = 7;

}

// function mouseDragged() {
//   LaserMan.velocityY = mouseY
  
// }

// function mouseReleased() {
//   LaserMan.velocityY = LaserMan.velocityY +10

// }

function Robots() {
  if (frameCount % 90 === 0) {
    var Vrobot = createSprite(width + 20, height - 300, 40, 10);
    Vrobot.y = Math.round(random(height - 100, height - 490));
    Vrobot.addImage(ROBOT);
    Vrobot.scale = 0.08;
    Vrobot.velocityX = -6;

    Vrobot.lifetime = 300;

    robotsGroup.add(Vrobot);
  }
}

function PowerBall() {
  if (frameCount % 900 === 0) {
    var Power = createSprite(width + 20, height - 300, 40, 10);
    Power.y = Math.round(random(height - 100, height - 490));
    Power.addImage(PowerB);
    Power.scale = 0.08;
    Power.velocityX = -7;

    Power.lifetime = 300;

    powerGroup.add(Power);
  }
}