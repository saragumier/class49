var boy, boyImage;
var bgImg, bg, bg1, bg1Img;
var bag, bagImg;
var fish1,fish1Img;
var fish2, fish2Img;
var can, canImg;
var bag, bagImg,bagsGroup;
var score = 0;
var reef, reefImg;
var play, play1, end;
var gameState = "play";

function preload(){
  boyImage = loadImage("boy.png");
  bgImg = loadImage("bg.png");
  bg1Img = loadImage("bg1.jpg");
  bagImg = loadImage("bag.png");
  fish1Img = loadImage("fish1.png");
  fish2Img = loadImage("fish2.png");
  canImg = loadImage("can.png");
  reefImg = loadImage("reef.png");
}
function setup() {
  createCanvas(1200, 600);
  bg = createSprite(0, 0, 1200, 400);
  bg.addImage(bgImg);
  bg1 = createSprite(0, 0, 1200, 400);
  bg1.addImage(bg1Img);
  bg.velocityX = -3;
  bg1.velocityX = -3;
  boy =  createSprite(100, 300);
  boy.addImage(boyImage);
  boy.scale = 0.3;
  bagsGroup= createGroup();
  fish1Group = createGroup();
  fish2Group = createGroup();
  canGroup = createGroup();
}

function draw() {
  if (gameState==="play"){
    if (bg.x<0){
      bg.x = bg.width/2;
    }
    boy.y = mouseY;
if (bagsGroup.isTouching(boy)){
  bagsGroup.destroyEach();
  score = score+5;
}
if (canGroup.isTouching(boy)){
  canGroup.destroyEach();
  score = score+5;
}
console.log(score);
if (score%20===0){
  console.log(score);
  console.log(gameState);
  gameState="play1";
}
else {
  gameState="end";
}
  spawnFish1();
  spawnFish2();
  spawnBags();
  spawnCan();
  spawnReef();
  }
  else if (gameState==="play1"){
    if (bg.x<0){
      bg.x = bg.width/2;
    }
    boy.y = mouseY;
if (bagsGroup.isTouching(boy)){
  bagsGroup.destroyEach();
  score = score+5;
}
if (canGroup.isTouching(boy)){
  canGroup.destroyEach();
  score = score+5;
}
  spawnFish1();
  spawnFish2();
  spawnBags();
  spawnCan();
  spawnReef();
  }


  drawSprites();
  fill("white");
  strokeWeight(4);
  textSize(20);
  text("Score: " + score, displayWidth-300, 50);
}


function spawnBags()
{
if (frameCount%200===0){
  bag = createSprite(1100, Math.round(random(32, 500),10,20));
  bag.addImage(bagImg);
  bag.velocityX = -4;
  bag.scale = 0.03;

bagsGroup.add(bag);
  
}
}

function spawnFish1()
{
if (frameCount%100===0){
  fish1 = createSprite(1100, Math.round(random(32, 500),10,20));
  fish1.addImage(fish1Img);
  fish1.velocityX = -4;
  fish1.scale = 0.1;

fish1Group.add(fish1);
  
}
}

function spawnFish2()
{
if (frameCount%100===0){
  fish2 = createSprite(1100, Math.round(random(32, 500),10,20));
  fish2.addImage(fish2Img);
  fish2.velocityX = -4;
  fish2.scale = 0.1;

fish2Group.add(fish2);
  
}
}
function spawnCan()
{
if (frameCount%150===0){
  can = createSprite(1100, Math.round(random(32, 500),10,20));
  can.addImage(canImg);
  can.velocityX = -4;
  can.scale = 0.03;

canGroup.add(can);
  
}
}
function spawnReef()
{
if (frameCount%60===0){
  reef = createSprite(1100,600,10,20);
  reef.addImage(reefImg);
  reef.velocityX = -3;
  reef.scale = 0.03;

// reefGroup.add(reef);
  
}
}