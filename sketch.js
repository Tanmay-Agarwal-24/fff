
var play=2;
var start=1;
var end=3;
var gamestate=play;
var me=0
var coine=0
var DT=-550
var ground8
var op1,op2,op3,op4,op5,op6,op7,op8,op9,op10
function preload(){
  
  jumpSound = loadSound("jump.mp3");
  dieSound = loadSound("die.mp3");
  checkPointSound = loadSound("checkPoint.mp3") ;
  ply1=loadImage("play1-1.png")
  coinimg=loadImage("coin.png")
   runimg=loadImage("run.png")
  op1b=loadImage("op1(black).png")
op2b=loadImage("op2(black).png")
  op3b=loadImage("op3(blue).png")
op3r=loadImage("op3(red).png")
  op3y=loadImage("op3(yellow).png")
op4b=loadImage("op4(blue).png")
  op4r=loadImage("op4(red).png")
op4y=loadImage("op4(yellow).png")
op5b=loadImage("op5(blue).png")
op5r=loadImage("op5(red).png")
op5y=loadImage("op5(yellow).png")
op6b=loadAnimation("op6.1.png","op6.2.png","op6.3.png")  
  

}

function setup() {
createCanvas(windowWidth,windowHeight);
 //createCanvas(500,350)
 // createCanvas(600,350)
  // createCanvas(700,350)
//createCanvas(500,300)
  //createCanvas(600,250)
   //createCanvas(500,250)
 // createCanvas(400,400)

 ground8=createSprite(width/2,height/1.25,width+width+width+width,20)
  ground1=createSprite(width/2,height-(height/height),width+width,height-(height/1.6))
  player1=createSprite(width-(width/1.5),ground8.y-(ground8.height/10),20,20)
  player1.addImage(ply1)
  player1.scale=0.4
  INground2=createSprite(width+(20),ground8.y-(ground8.height/14),width+(50),110)
  INground=createSprite(width-(width/1.5),ground8.y-(ground8.height/14),3,3)
  ground2=createSprite(width/2,height/1.1,width,10)
  ground3=createSprite(width/2,height/1.1,10,(height/5))
    ground4=createSprite(width/4,height/1.1,10,(height/5))
    ground5=createSprite(width/1.3,height/1.1,10,(height/5))
 ground6=createSprite(width/1,height/1.1,10,(height/5))
  ground7=createSprite(width/width,height/1.1,10,height/5)
coin=createSprite(width/1.4,height/6,20,20)
  coin.addImage(coinimg)
  coin.scale=0.035
score=createSprite(width/1.4,height/12,20,20)
  score.addImage(runimg)
  score.scale=0.05
  op1=createSprite (width+(20),height*2,200,200) 
  op2=createSprite (width+(20),height*5,200,200) 
  op3=createSprite (width+(20),height*5,200,200) 
  op4=createSprite (width+(20),height*5,200,200) 
  op5=createSprite (width+(20),height*5,200,200) 

 op6=createSprite (width+(20),height*5,200,200) 
  op7=createSprite (width+(20),height*5,200,200) 
  op8=createSprite (width+(20),height*5,200,200) 
  op9=createSprite (width+(20),height*5,200,200) 
  op10=createSprite (width+(20),height*5,200,200) 

}











function draw() {
background(128,0,0)
  text(mouseY,20,20)
INground.visible=false
INground2.visible=false
player1.collide(ground1)
player1.collide(ground8)
INground.collide(ground8)
player1.velocityY=player1.velocityY+0.5//
INground.velocityY=INground.velocityY+0.5// 
INground.collide(ground1)

  textSize(17)
fill('yellow')
text(me,score.x+20,score.y+5)
text(coine,coin.x+20,coin.y+5)
if (gamestate===play){ 

endlessGround()
me = me + Math.round(getFrameRate()/60);

if (player1.isTouching(INground)&&keyDown("w")){
player1.velocityY=-11      
}   
  if (player1.isTouching(INground)&&keyDown("space")){
player1.velocityY=-11      
}   
  if (player1.isTouching(INground)&&keyDown(UP_ARROW)){
player1.velocityY=-11      
}   
  if (player1.isTouching(INground)&&touches.length>0){
player1.velocityY=-11    
   
    touches=[]
}   
   if (mousePressedOver(player1)&&player1.isTouching(INground)){
player1.velocityY=-11    
   
    touches=[]
}   
  
DT=DT+10
  if (DT>200){
  
  DT=101
  
}
ground1.shapeColor="blue"
ground8.shapeColor="red"
if(frameCount%5===0){
ground2.shapeColor=(Math.round(random(0,400)))     
}
if(frameCount%7===0){
ground3.shapeColor=(Math.round(random(0,400)))     
}
if(frameCount%9===0){
ground4.shapeColor=(Math.round(random(0,400)))     
}
if(frameCount%11===0){
ground5.shapeColor=(Math.round(random(0,400)))     
}
if(frameCount%13===0){
ground6.shapeColor=(Math.round(random(0,400)))     
}
if(frameCount%15===0){
ground7.shapeColor=(Math.round(random(0,400)))     
}
var A=frameCount%140===0
var B=frameCount%70===0
if (Math.round (random(A,B))){
var selectop=Math.round(random(1,20));

if (selectop===1){
op1f()
  
}
if (selectop===2){
op2f() 
  
}
if (selectop===3){
op3f()
}
if (selectop===4){
op4f()
}
if (selectop===5){
op5f() 
}
if (selectop===6){
op6f()
}
if (selectop===7){
 op7f() 
}
if (selectop===8){
op8f()
}
if (selectop===9){
op9f()
}
if (selectop===10){
 op10f()
}
if (selectop===11){
op1f()
}
if (selectop===12){
op2f()
}
if (selectop===13){
op3f()
}
if (selectop===14){
op4f()
}
if (selectop===15){ 
op5f()  
}
if (selectop===16){
op6f() 
}
if (selectop===17){
op7f()
}
if (selectop===19){
op9f()  
}
  
}
  
if (player1.isTouching(op1))  {
 gamestate=end 
}
if (player1.isTouching(op2))  {
 gamestate=end 
}  
if (player1.isTouching(op3))  {
 gamestate=end 
}  
if (player1.isTouching(op4))  {
 gamestate=end 
}  
if (player1.isTouching(op5))  {
 gamestate=end 
}  
if (player1.isTouching(op6))  {
 gamestate=end 
}  
  if (player1.isTouching(op7))  {
 gamestate=end 
}  
  
 if (player1.isTouching(op8))  {
 gamestate=end 
}  if (player1.isTouching(op9))  {
 gamestate=end 
}   
  if (player1.isTouching(op10))  {
 gamestate=end 
}  
  
}
    op1.collide(ground8)
  op2.collide(ground8)
  op3.collide(ground8)
  op4.collide(INground2)
  
  op5.collide(INground2)
  op6.collide(INground2)
  op7.collide(ground8)
  op8.collide(ground8)
  op9.collide(ground8)
  op10.collide(ground8)
op8.setCollider('circle',0,0,40)
  op9.setCollider('circle',0,0,30)
   op10.setCollider('circle',0,0,28)
  op2.setCollider("rectangle",-10,10,165,70)
  /*
 op1.debug=true 
   op2.debug=true 
   op3.debug=true 
   op4.debug=true 
  op5.debug=true 
  op6.debug=true 
  op7.debug=true 
  op8.debug=true 
  op9.debug=true 
  op10.debug=true 
  */
 // console.log(DT)
  // console.log(gamestate)
 

     
     
       
  if (gamestate===end){
      
      ground8.velocityX=-0
ground7.velocityX=-0
  ground6.velocityX=-0
  ground5.velocityX=-0
  ground4.velocityX=-0
  ground3.velocityX=-0
    ground2.velocityX=-0
   
   op1.velocityX=-0;
       op2.velocityX=-0;
       op3.velocityX=-0;
       op4.velocityX=-0;
       op5.velocityX=-0;
       op6.velocityX=-0;
       op7.velocityX=-0;
       op8.velocityX=-0;
       op9.velocityX=-0;
       op10.velocityX=-0;
    player1.velocityY=-0;
    
    
      }
  
  
  
  
  
  if (op1.x<0){
  
  
  op1.lifetime=0
}
 
if (op2.x<0){
  
  
  op2.lifetime=0
}
 if (op3.x<0){
  
  
  op4.lifetime=0
}
 if (op5.x<0){
  
  
  op5.lifetime=0
}
 if (op6.x<0){
  
  
  op6.lifetime=0
}
  
  if (op7.x<0){
  
  
  op7.lifetime=0
}
 if (op8.x<0){
  
  
  op8.lifetime=0
}
 if (op9.x<0){
  
  
  op9.lifetime=0
}
  if (op10.x<0){
  
  
  op10.lifetime=0
}
 
 
  
  
  
  
  
 
  
   
  
  
  
  
  
  
  
  
  
drawSprites()  
}



function endlessGround(){
 
  ground8.velocityX=-8
ground7.velocityX=-8
  ground6.velocityX=-8
  ground5.velocityX=-8
  ground4.velocityX=-8
  ground3.velocityX=-8
    ground2.velocityX=-8
   
    
  
  if (ground8.x < -200) {
           ground8.x = ground8.width /2;

    

  }

  if (ground2.x < -10) {
           ground2.x = ground2.width /2;

    

  }
if (DT>100){
  if (ground3.x < -10) {
           ground3.x = ground2.width /2;

    

  }}

  
  if (ground4.x < -10) {
  ground4.x = ground2.width /2;
  }
    

  
  
  
  
  
 
  
  


  }




function op1f(){
op1=createSprite (width+(20),20,200,200) 
op1.velocityX=-4; 
op1.y=height/1.33
op1.addImage(op1b)
op1.scale=0.5;  
op1.lifetime=-1
  

}

function op2f(){
  
op2=createSprite (width+(20),20,200,200) 
op2.velocityX=-4; 
op2.y=height/1.33
op2.addImage(op2b)
op2.scale=0.5;    

op2.lifetime=-1
  


  
  
  
}


function op3f(){

op3=createSprite (width+(20),20,200,200) 
op3.velocityX=-4; 
op3.y=height/1.33
op3.addImage(op3r)
op3.scale=0.35;
  
op3.lifetime=-1
}


  
function op4f(){
op4=createSprite (width+(20),20,200,200) 
op4.velocityX=-4; 
op4.y=height/1.40
op4.addImage(op4r)
op4.scale=0.35;
    op4.lifetime=-1

  
  
}


function op5f (){
op5=createSprite (width+(20),20,200,200) 
op5.velocityX=-4; 
op5.y=height/1.40
op5.addImage(op4r)
op5.scale=0.35;
op5.lifetime=-1

}

function op6f(){
  
op6=createSprite (width+(20),20,200,200) 
op6.velocityX=-4; 
op6.y=height/1.40
op6.addImage(op5r)
op6.scale=0.35;
 op6.lifetime=-1
  
}
   



function op7f(){
op7=createSprite (width+(20),20,200,200) 
op7.velocityX=-4; 
op7.y=height/1.33
op7.addImage(op5r)
op7.scale=0.35;
op7.lifetime=-1  





}

function op8f(){
op8=createSprite (width+(20),20,200,200) 
op8.velocityX=-4; 
op8.y=height/1.33
op8.addAnimation("fff",op6b)
op8.scale=0.7;
op8.lifetime=-1  





}

function op9f(){
op9=createSprite (width+(20),20,200,200) 
op9.velocityX=-4; 
op9.y=height/1.33
op9.addAnimation("fff",op6b)
op9.scale=0.5;
 op9.lifetime=-1





}


function op10f(){
op10=createSprite (width+(20),20,200,200) 
op10.velocityX=-4; 
op10.y=height/1.33
op10.addAnimation("fff",op6b)
op10.scale=0.3;
  
op10.lifetime=-1




}






