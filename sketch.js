const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
var engine, world;

function preload(){
  back=loadImage("war.jpg");
}
function setup() {
  createCanvas(700,500);
    engine = Engine.create();
    world = engine.world;

 
 

   ground=new Ground (200,500,1200,30);
   
   }

function draw() {
  background(back);  
  Engine.update(engine);
  
  ground.display();
}