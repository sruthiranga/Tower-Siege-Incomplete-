const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var object, stand;

var block1, block2, block3, block4, block5, block6, block7, block8, block9, block10, block11, block12, block13, block14, block15, block16;

var polygon_img;

var score = 0;

var gameState = "onsling"

function setup() {
  createCanvas(800,400);
  createSprite(400, 200, 50, 50);

  engine = Engine.create();
	world = engine.world;

  object = new Ground(200, 100, 100, 20);

  stand = new Ground(385, 300, 250, 20);

  //level 1
  block1 = new Box(300, 275, 30, 40);
  block2 = new Box(330, 275, 30, 40);
  block3 = new Box(360, 275, 30, 40);
  block4 = new Box(390, 275, 30, 40);
  block5 = new Box(420, 275, 30, 40);
  block6 = new Box(450, 275, 30, 40);
  block7 = new Box(480, 275, 30, 40);

  //level 2
  block8 = new Box(330, 235, 30, 40);
  block9 = new Box(360, 235, 30, 40);
  block10 = new Box(390, 235, 30, 40);
  block11 = new Box(420, 235, 30, 40);
  block12 = new Box(450, 235, 30, 40);
  
  //level 3
  block13 = new Box(360, 195, 30, 40);
  block14 = new Box(390, 195, 30, 40);
  block15 = new Box(420, 195, 30, 40);
  
  //top
  block16 = new Box(390, 155, 30, 40);

  polygon = Bodies.circle(50, 200, 20);
  World.add(world, polygon);
  
  slingshot1 = new SlingShot(this.polygon, {x: 100, y: 200})

  Engine.run(engine);

  polygon_img = loadImage("polygon.png");

}

function draw() {
  background(0,0,0);  
  imageMode(CENTER);
  image(polygon_img, polygon.position.x, polygon.position.y, 40, 40);

  object.display();
  stand.display();

  block1.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display();
  block6.display();
  block7.display();
  block8.display();
  block9.display();
  block10.display();
  block11.display();
  block12.display();
  block13.display();
  block14.display();
  block15.display();
  block16.display();

  
  block1.score();
  block2.score();
  block3.score();
  block4.score();
  block5.score();
  block6.score();
  block7.score();
  block8.score();
  block9.score();
  block10.score();
  block11.score();
  block12.score();
  block13.score();
  block14.score();
  block15.score();
  block16.score();

  slingshot1.display();

  text("Score:"+score, 750, 40);
  drawSprites();
}

function mouseDragged(){
  if (gameState!=="launched"){
      Matter.Body.setPosition(this.polygon, {x: mouseX , y: mouseY});
  }
}


function mouseReleased(){
  slingshot1.fly();
  gameState = "launched";
}

function keyPressed(){
  if(keyCode === 32){
    slingshot1.attach(polygon.body);
  }
}