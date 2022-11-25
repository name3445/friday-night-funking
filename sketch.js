var bg, bgImg;
var player, shooterImg, shooter_shooting;
var score = 0;
var arrow1;

var PLAY = 2;
var END = 1;
var gamestate = PLAY;
function preload() {
  bg=loadImage("assets/background.png")
  downarrow = loadImage("assets/down.png");
  uparrow = loadImage("assets/up.png");
  leftarrow = loadImage("assets/left.png");
  rightarrow = loadImage("assets/right.png");
bfDown=loadAnimation("assets/Down/bfDown0.png","assets/Down/bfDown1.png","assets/Down/bfDown2.png","assets/Down/bfDown3.png","assets/Down/bfDown5.png")
bfRight=loadAnimation("assets/Right/bfRight0.png","assets/Right/bfRight1.png","assets/Right/bfRight2.png","assets/Right/bfRight3.png","assets/Right/bfRight5.png")
bfLeft=loadAnimation("assets/Left/bfLeft0.png","assets/Left/bfLeft1.png","assets/Left/bfLeft2.png","assets/Left/bfLeft3.png","assets/Left/bfLeft5.png")
bfUp=loadAnimation("assets/Up/bfUp0.png","assets/Up/bfUp1.png","assets/Up/bfUp2.png","assets/Up/bfUp3.png","assets/Up/bfUp5.png")
}

function setup() {
  createCanvas(windowWidth, windowHeight);

  arrowdownGroup = new Group();
  arrowupGroup = new Group();
  arrowleftGroup = new Group();
  arrowrightGroup = new Group();
  
  
  arrowPlayerLEFT = createSprite(width / 2 -200, height/2-150, 40, 40);
  arrowPlayerLEFT.addImage(leftarrow);
  arrowPlayerLEFT.scale=0.04
  arrowPlayerLEFT.visible=false

  arrowPlayerDOWN = createSprite(width / 2 -50, height/2-150, 40, 40);
  arrowPlayerDOWN.addImage(downarrow);
  arrowPlayerDOWN.scale=0.6
  arrowPlayerDOWN.visible=false

  arrowPlayerUP = createSprite(width / 2 +50, height/2-150, 40, 40);
  arrowPlayerUP.addImage(uparrow);
  arrowPlayerUP.scale=0.4
  arrowPlayerUP.visible=false

  arrowPlayerRIGHT = createSprite(width / 2 +200, height/2-150, 40, 40);
  arrowPlayerRIGHT.addImage(rightarrow);
  arrowPlayerRIGHT.scale=0.2
  arrowPlayerRIGHT.visible=false
  
  bf =createSprite(width/2+250,height-200,50,50)
 
  bf.addAnimation('d',bfDown);
  bf.addAnimation('l',bfLeft);
  bf.addAnimation('r',bfRight);
  bf.addAnimation('u',bfUp);

  
}

function draw() {
  background(0);
    image(bg,0,0,windowWidth, windowHeight)
  

if(gamestate=== PLAY){

  arrowPlayerUP.visible=true
  arrowPlayerRIGHT.visible=true
  arrowPlayerLEFT.visible=true
  arrowPlayerDOWN.visible=true

  if (keyWentDown("k")) {
   if(arrowupGroup.isTouching(arrowPlayerUP)){
    for(var i=0;i<arrowupGroup.length; i++){
     if(arrowupGroup[i].isTouching(arrowPlayerUP)){
      console.log("foi")
      score+=Math.trunc(random(100,2000))
      arrowupGroup[i].destroy()
     bf.changeAnimation("u")

     }
    }
   }
  }
  if (keyWentDown("l")) {
    if(arrowrightGroup.isTouching(arrowPlayerRIGHT)){
      for(var i=0;i<arrowrightGroup.length; i++){
       if(arrowrightGroup[i].isTouching(arrowPlayerRIGHT)){
        console.log("foi")
        score+=Math.trunc(random(100,2000))
        arrowrightGroup[i].destroy()
        bf.changeAnimation("r")
       }
      }
     }
   }
   if (keyWentDown("a")) {
    if(arrowleftGroup.isTouching(arrowPlayerLEFT)){
      for(var i=0;i<arrowleftGroup.length; i++){
       if(arrowleftGroup[i].isTouching(arrowPlayerLEFT)){
        console.log("foi")
        score+=Math.trunc(random(100,2000))
        arrowleftGroup[i].destroy()
        bf.changeAnimation("l")
       }
      }
     }
   }
   if (keyWentDown("s")) {
    if(arrowdownGroup.isTouching(arrowPlayerDOWN)){
      for(var i=0;i<arrowdownGroup.length; i++){
       if(arrowdownGroup[i].isTouching(arrowPlayerDOWN)){
        console.log("foi")
        score+=Math.trunc(random(100,2000))
        arrowdownGroup[i].destroy()
        bf.changeAnimation("d")
       }
      }
     }
   }
   if (score >= 75000){
    gamestate = END
   }
  textSize(50)
  text("score: " +score, width/2-100, height/2-250)
  HandleArrowLeft()
  HandleArrowRight()
  HandleArrowUp()
  HandleArrowDown()
  }
  
 
  
  drawSprites();

  if(gamestate== END){
    textSize(100)
    stroke ("red")
    fill ("yellow")
    text("you win",width/2-150, height/2)
  
  }
}
  



function HandleArrowLeft() {
  if (frameCount % 100 === 0) {
    arrowleft = createSprite(width / 2 -200, height, 40, 40);
    arrowleft.addImage("left", leftarrow); 
    arrowleft.velocityY = random(-9,-40)
    arrowleft.scale=0.04
    arrowleft.setCollider("rectangle",0,0,10,10)
    arrowleft.lifetime=200
    arrowleftGroup.add(arrowleft);
  }
}
function HandleArrowDown() {
  if (frameCount % 100 === 0) {
    arrowdown = createSprite(width / 2-50, height, 40, 40);
    arrowdown.addImage("down", downarrow);
    arrowdown.velocityY = random(-9,-40)
    
    arrowdown.scale=0.6
    arrowdown.lifetime=200
    arrowdownGroup.add(arrowdown);
  }
}
function HandleArrowUp() {
  if (frameCount % 100 === 0) {
    arrowup = createSprite(width / 2 + 50, height, 40, 40);
    arrowup.addImage("down", uparrow);
    arrowup.scale=0.4
    arrowup.velocityY = random(-9,-40)

    arrowup.lifetime=200
    arrowupGroup.add(arrowup);
  }
}

function HandleArrowRight() {
  if (frameCount % 100 === 0) {
    arrowright = createSprite(width / 2 +200, height, 40, 40);
    arrowright.addImage("right", rightarrow);    
    arrowright.velocityY = random(-9,-40)
    arrowright.scale=0.2
 
    arrowright.lifetime=200
    arrowrightGroup.add(arrowright);
  }
}
