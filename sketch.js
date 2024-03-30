var towerImg, tower;
var doorImg, door, doorsGroup;
var climberImg, climber, climbersGroup;
var ghost, ghostImg;
var invisibleG2, invisibleG,invisibleG3;
var gameState = "play"

function preload(){
  towerImg = loadImage("tower.png");
  doorImg = loadImage("door.png");
  climberImg = loadImage("climber.png");
  ghostImg = loadImage("ghost-standing.png");
  spookySound = loadSound("spooky.wav");
}

function setup() {
  createCanvas(600, 600);
  
  
  
  
  
  tower = createSprite(300,300);
  tower.addImage("tower",towerImg);
  tower.velocityY = 1;
  
  
  ghost = createSprite(200,200);
  ghost.addImage("ghost",ghostImg);
  ghost.scale = 0.3;

   door = createSprite(250,90);
  door.addImage("door",doorImg);
   
  climber = createSprite(250,145);
  climber.addImage("climber",climberImg);
  climber.scale = 0.6;


 invisibleG = createSprite(200,400,800,10);
 invisibleG.visible = true;

 invisibleG2 = createSprite(80,100,10,1000);
 invisibleG2.visible = false;


invisibleG3 = createSprite(500,100,10,1000);
invisibleG3.visible = false;
  
}

function draw() {
  background(200);
  
  if(tower.y > 400){
      tower.y = 300
}
ghost.y=World.mouseY;
 ghost.x=World.mouseX;

 ghost.collide(invisibleG);
 ghost.collide(invisibleG2);
 ghost.collide(invisibleG3);

 


drawSprites();
}
