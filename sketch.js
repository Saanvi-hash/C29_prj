const Engine = Matter.Engine
const Bodies = Matter.Bodies
const World = Matter.World
const Constraint = Matter.Constraint

var engine , world;
var box1 , box2 , box3 , box4 , box5 , box6 , box7;
var ground1, ground2;
var plr;
var chain;

function setup() {
  createCanvas(800,400)
 engine = Engine.create();
 world = engine.world
 ground1 = new Ground(400,350,800,50)
 ground2 = new Ground(600,250,400,50)
 box1 = new Box(300, 50, 50, 50)
 box2 = new Box(200, 50, 50, 50)
 box3 = new Box(650,50,50,50)
 box4 = new Box(550,50,50,50)
 box5 = new Box(400, 50, 50, 50)
 box6 = new Box(450,50,50,50)
 plr = new Player(100,85,75,75)
 chain = new Sling(plr.body ,{x:100,y:50})
}

function draw() {
  background(0,0,0);  
Engine.update(engine);
fill("brown")
ground1.display()
fill("brown")
ground2.display()
fill("red")
box1.display()
fill("aqua")
box2.display()
fill("yellow")
box3.display()
fill("blue")
box4.display()
fill("violet")
box5.display()
fill("opal")
box6.display()
fill("green")
plr.display()
chain.display()
}

function mouseDragged(){
  Matter.Body.setPosition(plr.body , {x:mouseX , y:mouseY })
}

function mouseReleased(){
  chain.launch()
}