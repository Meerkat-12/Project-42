var iss,canvas,spacecraft;
var hasDocked=false;

function preload(){
  issImg = loadImage("Images/iss.png");
  canvasImg = loadImage("Images/spacebg.jpg");
  spacecraftImg = loadImage("Images/spacecraft1.png");
  spacecraftLeftImg = loadImage("Images/spacecraft4.png");
  spacecraftRightImg = loadImage("Images/spacecraft3.png");
  spacecraftUpImg = loadImage("Images/spacecraft2.png");
}



function setup() {
  canvas = createCanvas(1200,550);

  iss=createSprite(600, 300, 50, 50);
  iss.addImage(issImg);
  iss.scale=0.9
  
  spacecraft = createSprite(545,320,20,20);
  spacecraft.addImage(spacecraftImg);
  spacecraft.scale=0.2;

}

function draw() {
  background(canvasImg); 
   if(!hasDocked){
     if(keyDown("LEFT_ARROW")){
       spacecraft.addImage(spacecraftLeftImg);
       spacecraft.velocityX = spacecraft.velocityX-0.01;
       console.log(spacecraft.x,spacecraft.y);
        }
     if(keyDown("RIGHT_ARROW")){
       spacecraft.addImage(spacecraftRightImg);
       spacecraft.velocityX = spacecraft.velocityX+0.01;
       console.log(spacecraft.x,spacecraft.y);
     }
     if(keyDown("DOWN_ARROW")){
       spacecraft.addImage(spacecraftUpImg);
       spacecraft.velocityY = spacecraft.velocityY+0.01;
       console.log(spacecraft.x,spacecraft.y);
     }
     if(keyDown("UP_ARROW")){
       spacecraft.addImage(spacecraftImg);
       spacecraft.velocityY = spacecraft.velocityY-0.01;
       console.log(spacecraft.x,spacecraft.y);
    
     }
     
     
   }
   //spacecraft.velocityX=0;
   //spacecraft.velocityY = 0;
   
    text ("hello",545,340);
    fill("green");
    
   if(spacecraft.x==545&&spacecraft.y==320){
      hasDocked=true
      spacecraft.x=0;
      text ("Docking Successful!!!",900,500);
      textFont("algerian");
      fill("white");
      textSize(25);
   }
  drawSprites();
}