const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
var engine, world;
var hammer;

function setup(){
var canvas = createCanvas(1200,600);
engine = Engine.create();
world = engine.world;

plane = new Plane(600,height,1200,20);
hammer = new Hammer(100,100,150,40);
iron = new Iron(200,500,50,150);
stone = new Stone(300,400,100,100);
rubber = new Rubber(500,400,40,1000);
}
function draw(){
background("lightBlue");
Engine.update(engine);
plane.display();
hammer.display();
iron.display();
stone.display();
rubber.display();
}