const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1,box2,box3;
var box4,box5,box6,box7,box8,box9,box10;
var ball;
var rope;

function setup() {
  createCanvas(1200,400);
  engine = Engine.create();
  world = engine.world;

  ball = new Ball(200, 200, 80, 80);
  rope = new Rope(ball.body, { x: 500, y: 50 });
  ground = new Ground(600,height,1200,20);
  box1 = new Box(800,320,70,70);
  box2 = new Box(870,320,70,70);
  box3 = new Box(800,240,70,70);
  box4 = new Box(870,240,70,70);
  box5 = new Box(800,160,70,70);
  box6 = new Box(870,160,70,70);
  box7 = new Box(800,80,70,70);
  box8 = new Box(870,80,70,70);
  box9 = new Box(800,0,70,70);
  box10 = new Box(870,0,70,70);
}

function draw(){
  background(180);
  Engine.update(engine);

  box1.display();
  box2.display();
  ground.display();
  box3.display();
  box4.display();
  box5.display();
  box6.display();
  box7.display();
  box8.display();
  box9.display();
  box10.display();  
  ball.display();
  rope.display()

}

function mouseDragged() {
  Matter.Body.setPosition(ball.body, { x: mouseX, y: mouseY });
}