
function preload(){
shipAni = loadAnimation("ship-1.png", "ship-2.png","ship-3.png", "ship-4.png")
seaimg = loadImage("sea.png")
}

function setup(){
  createCanvas(400,400);

  sea = createSprite(200,200);
  sea.addImage(seaimg)
  sea.scale = 0.25

  ship = createSprite(110,180,40,40)
  ship.addAnimation("sailing",shipAni)
  ship.scale = 0.3
 
}

function draw() {
  background("blue");
 
  sea.velocityX = -3

  if (sea.x < 30) {
    sea.x = 200
  }

  drawSprites()
}