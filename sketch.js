const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var base1,base2;
var block1;
var ground;
var engine;
var world;




function setup() {
  createCanvas(900,400);

  engine = Engine.create();
  world = engine.world;

  base1 = new Base(400,300)
  base2 = new Base(650,200)

  block1 = new Block(330,235)
  block2 = new Block(360,235)
  block3 = new Block(390,235)
  block4 = new Block(420,235)
  block5 = new Block(450,235)

  block6 = new Block(360,195)
  block7 = new Block(390,195)
  block8 = new Block(420,195)

  block9 = new Block(390,155)
  


  ground = new Ground(450,390,900,20)


 // Engine.run(engine);
}

function draw() {
  background(155);
  Engine.update(engine)

  text("x:"+mouseX+"y"+mouseY,mouseX,mouseY)

base1.display();
base2.display();

block1.display();
block2.display();
block3.display();
block4.display();
block5.display();
block6.display();
block7.display();
block8.display();
block9.display();




ground.display();




}
