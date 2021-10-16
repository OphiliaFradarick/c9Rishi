var box ;

function setup(){

  createCanvas(600, 300);

  box = createSprite(250, 120);
  box.shapeColor = "lightgreen";

}

function draw(){

  background(0);

  drawSprites();

}