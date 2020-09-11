
var back;

var bananaimage;
var monkey ;
var monkeyAnimation;
var obstaclegroup;
var back;
var backimage;
var ground;
var stoneimage;
var score=0;
function preload(){
  bananaimage=loadImage("banana.png");
 monkeyAnimation=loadAnimation("Monkey_01.png","Monkey_02.png","Monkey_03.png","Monkey_04.png","Monkey_05.png","Monkey_06.png","Monkey_07.png","Monkey_08.png","Monkey_09.png","Monkey_10.png");
  backimage=loadAnimation("jungle.jpg")
    stoneimage=loadImage("stone.png")
}
function setup(){
  createCanvas(400, 400);
  
  back=createSprite(200,200,400,400)
  monkey=createSprite(50,320,20,20)
    monkey.addAnimation("ma",monkeyAnimation)
   monkey.scale=0.2

 
ground=createSprite(200,385,800,20)
 
  back.addAnimation("ba",backimage);

  stonegroup=new Group();
  bananagroup=new Group();
}

function draw (){
  
  background(220);
 
  ground.velocityX=-3
  
  if(ground.x<0){
   ground.x=200; 
    
  }
  
  if(keyDown("space")){
   monkey.velocityY=-40; 
    
  }
  
  if (stonegroup.isTouching(monkey)){
   monkey.destroy(); 
  }
  
  
      if(bananagroup.isTouching(monkey)){
    score=score+1;
   bananagroup.destroyEach(); 
    
  }
    
    

  if (frameCount % 130 === 0) {
    var  banana = createSprite(600,90,40,10);
    banana.addImage(bananaimage);
    banana.scale = 0.1;
    banana.velocityX = -3;

    banana.lifetime = 200;
    
      
    bananagroup.add(banana);
  
  }
    
  
  monkey.velocityY = monkey.velocityY+3;
monkey.collide(ground)  
  spawnstone();
 ground.visible=false;
 
  drawSprites();
    
  fill("white")
       textSize=24;
text("score="+score,350,20,20,20)

}

  

function spawnstone() {

  if (frameCount % 130 === 0) {
    var  stone = createSprite(600,325,40,10);
    stone.addImage(stoneimage);
    stone.scale = 0.3;
    stone.velocityX = -3;

    stone.lifetime = 200;
    
    
    stonegroup.add(stone);
  }
  
}
