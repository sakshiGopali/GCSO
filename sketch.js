var car;
var weight,speed;
var wall;


function setup() {
  createCanvas(800,400);
  speed=random(5,10);
  weight=random(400,1500);
  car = createSprite(50, 200, 50, 50);
  wall = createSprite(1500,200,60,height/2)
  
}

function draw() {
  background(250,250,250); 
  
  car.velocityX=speed;

  if (car.x-wall.x<wall.width/2+car.width/2
     && wall.x-car.x<wall.width/2+car.width/2
     &&car.y-wall.y<wall.width/2+car.width/2
     && wall.y-car.y<wall.width/2+car.width/2) {

  }

  if (wall.x-car.x<(car.width+wall.width/2)){
     car.velocit=0;
    var deformation=0.5 * weight * speed * speed/22500;
    if (deformation<180){
      car.shapeColor = color(250,0,0);
    }
    if (deformation<180 && deformation>100){
      car.shapeColor = color(230,230,0);
    }
    if (deformation<100){
      car.shapeColor = color(0,255,0);
    }
  }
  drawSprites();
}