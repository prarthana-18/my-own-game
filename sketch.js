var wall1,wall2,wall3,wall4,wall5,wall6,wall7,wall8,wall9,wall10,wall11,wall12,wall13,wall14,wall15,wall16,wall17,wall18,wall19,wall20;
var girl,girlimg;
var house,houseimg;
var obstacle,obstacleimg;
var ob2,ob3,ob4;
var ob2img,ob3img,ob4img;

function preload(){
  girlimg=loadImage("images/girl_still-removebg-preview.png");
  houseimg=loadImage("images/house.png");
  obstacleimg=loadImage("images/ob 1.png");
  ob2img=loadImage("images/ob2.png");
  ob3img=loadImage("images/ob3.jpg");
  ob4img=loadImage("images/ob4.png");
}
function setup() {
  createCanvas(800,400);
 
  
    wall1=createSprite(10,100,100,20);
  wall1.shapeColor='brown';
    wall2=createSprite(90,1,20,90);
  wall2.shapeColor='brown';
    wall3=createSprite(145,16,100,20);
  wall3.shapeColor='brown';
    wall4=createSprite(110,114,20,90);
  wall4.shapeColor='brown';
    wall5=createSprite(150,100,80,20);
  wall5.shapeColor='brown';
    wall6=createSprite(280,60,100,20);
  wall6.shapeColor='brown';
    wall7=createSprite(330,60,20,100);
  wall7.shapeColor='brown';
    wall8=createSprite(250,150,100,20);
  wall8.shapeColor='brown';
    wall9=createSprite(370,210,20,150);
  wall9.shapeColor='brown';
    wall10=createSprite(150,280,20,100);
  wall10.shapeColor='brown';
    wall11=createSprite(40,190,50,20);
  wall11.shapeColor='brown';
    wall12=createSprite(40,230,20,70);
  wall12.shapeColor='brown';
    wall13 = createSprite(40,270,200,20);
  wall13.shapeColor='brown';
    wall14= createSprite(70,360,20,100);
  wall14.shapeColor='brown';
    wall15= createSprite(240,210,20,100);
  wall15.shapeColor='brown';
    wall16=createSprite(250,300,90,20);
  wall16.shapeColor='brown';
    wall17=createSprite(310,350,20,90);
  wall17.shapeColor='brown';
    wall18=createSprite(170,360,80,20);
  wall18.shapeColor='brown';
    wall19=createSprite(360,390,50,20);
  wall19.shapeColor='brown';

 house=createSprite(395,345,15,15);
 house.addImage("i",houseimg);
 house.scale=0.3;

 obstacle=createSprite(300,270,10,10)
 obstacle.addImage("a",obstacleimg);
 obstacle.scale=0.12;

  girl=createSprite(15,40,10,10);
  girl.addImage("1",girlimg);
  girl.scale=0.2;

  ob2=createSprite(200,190,8,8);
  ob2.addImage("j",ob2img);
  ob2.scale=0.09;

  ob3=createSprite(120,50,10,10);
  ob3.addImage("z",ob3img);
  ob3.scale=0.1;

  ob4=createSprite(370,150,10,10);
  ob4.addImage("n",ob4img);
  ob4.scale=0.2;


}

function draw() {
  background(255,255,255);
  
  girl.bounceOff(wall2);

  if(keyDown(RIGHT_ARROW)){
    girl.x=girl.x+2;
  }
  if(keyDown( LEFT_ARROW)){
    girl.x=girl.x-2;
  }
  if(keyDown( UP_ARROW)){
    girl.y=girl.y-2;
  }
  if(keyDown( DOWN_ARROW)){
    girl.y=girl.y+2;
  }
if (girl.isTouching(ob2)){
 girl.x=15;
 girl.y=40;
}
  girl.collide(wall2);
  girl.collide(wall3);
  girl.collide(wall4);
  girl.collide(wall5);
  girl.collide(wall6);
  girl.collide(wall7);
  girl.collide(wall8);
  girl.collide(wall9);
  girl.collide(wall10);
  girl.collide(wall11);
  girl.collide(wall12);
  girl.collide(wall13);
  girl.collide(wall14);
  girl.collide(wall15);
  girl.collide(wall16);
  girl.collide(wall17);
  girl.collide(wall18);
  girl.collide(wall19);
  

  drawSprites();
}