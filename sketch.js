//Tower Seige Game
//declare variables for the behaviour indicators <FLAGS>
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var userEngine,userWorld;
var polygon,sling;
var ground1,ground2;
var block1,block2,block3,block4,block5,block6,block7,block8,block9,block10,block11,block12,block13;
var block14,block15,block16,block17,block18,block19,block20,block21,block22,block23,block24,block25;

function setup(){
    //creating the canvas
    var canvas = createCanvas(1200,400);

    userEngine = Engine.create();
	userWorld = userEngine.world;
    //giving values to the variables
    ground1 = new Ground(300,305,225,10)
    ground2 = new Ground(600,235,175,10);

    polygon = new Polygon(100,225,20);
    sling = new String(polygon.body,{x:100,y:225})
    
    //first layer
    block1 = new Block(320,285,30,40);
    block2 = new Block(350,285,30,40);
    block3 = new Block(380,285,30,40);
    block4 = new Block(410,285,30,40);
    block5 = new Block(440,285,30,40);
    block6 = new Block(470,285,30,40);
    block7 = new Block(500,285,30,40);
    //second layer
    block8 = new Block(350,245,30,40);
    block9 = new Block(380,245,30,40);
    block10 = new Block(410,245,30,40);
    block11 = new Block(440,245,30,40);
    block12 = new Block(470,245,30,40);
    //third layer
    block13 = new Block(380,205,30,40);
    block14 = new Block(410,205,30,40);
    block15 = new Block(440,205,30,40);
    //top
    block16 = new Block(410,165,30,40);
    //first layer
    block17 = new Block(620,215,30,40);
    block18 = new Block(650,215,30,40);
    block19 = new Block(680,215,30,40);
    block20 = new Block(710,215,30,40);
    block21 = new Block(740,215,30,40);
    //second layer
    block22 = new Block(650,175,30,40);
    block23 = new Block(680,175,30,40);
    block24 = new Block(710,175,30,40);
    //top
    block25 = new Block(680,135,30,40);

}

function draw(){
    background(0);

    ground1.display();
    ground2.display();

    polygon.display();
    sling.display();

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
    block17.display();
    block18.display();
    block19.display();
    block20.display();
    block21.display();
    block22.display();
    block23.display();
    block24.display();
    block25.display();
}

function mouseDragged(){
    Matter.Body.setPosition(polygon.body, { x: mouseX, y: mouseY });
}

function mouseReleased(){
    sling.detch();
}