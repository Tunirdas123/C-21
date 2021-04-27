var fixedRect, movingRect;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(600, 400, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400,200,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;
  
  matter1=createSprite(300,250,70,120);
  matter2=createSprite(500,300,60,90);
  matter1.shapeColor="blue";
  matter2.shapeColor="pink";
}


function draw() {
  background(0,0,0);  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;

  if (isTouching(matter1,movingRect)){
    movingRect.shapeColor = "red";
    matter1.shapeColor = "red";
    
  }
  else{
    movingRect.shapeColor = "green";
    matter1.shapeColor ="blue";
  }

  drawSprites();
}
