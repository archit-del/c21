var fixedRect, movingRect;
var rect1,rect2
var go1,go2,go3,go4

function setup() {
  createCanvas(800,800);

  fixedRect = createSprite(400, 200, 50, 50);
  movingRect = createSprite(100,100,50,80)
  fixedRect.shapeColor="aqua"
  movingRect.shapeColor="aqua"
  go1 = createSprite(100,100,50,50);
  go2 = createSprite(200,100,50,50);
  go3 = createSprite(300,100,50,50);
  go4 = createSprite(400,100,50,50);
  go1.shapeColor="aqua"
  go2.shapeColor="aqua"
  go3.shapeColor="aqua"
  go4.shapeColor="aqua"
   rect1 = createSprite(200,100,50,80);
  rect2 = createSprite(200,800,80,30);
  rect1.shapeColor="yellow"
  rect2.shapeColor="green"
  rect1.velocityY=5
  rect2.velocityY=-5
}

function draw() {
  background(0);  

  movingRect.x = mouseX;
  movingRect.y = mouseY;

  

  // 25 mr 
  //25 fr
  //50
  console.log(movingRect.x - fixedRect.x)

  if( isTouching(movingRect,go1)) {
    go1.shapeColor="red"
    movingRect.shapeColor="red"
  }else{
    go1.shapeColor="aqua"
    movingRect.shapeColor="aqua"
  }
  bounceoff() 
  drawSprites();
}



