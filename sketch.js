
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint
var tree, boy, fruit,fruit2,fruit3,fruit4,fruit5;
var connect,rock;
function preload()
{
  tree = loadImage("../Images/tree.png");
  boy = loadImage("../Images/boy.png");
}

function setup() 
{
	createCanvas(800, 600);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
   rock = new Stone()
   connect = new Attach(rock.body,{x:90,y:470})
   fruit = new Fruit(683,170)
   fruit2 = new Fruit(746,208)
   fruit3 = new Fruit(681,210)
   fruit4 = new Fruit(769,274)
   fruit5 = new Fruit(641,271) 
	Engine.run(engine);
  
}


function draw() 
{
	rectMode(CENTER);
	background(255);
	image(tree,600,75,200,550);
	image(boy,50,390,200,290);
	if(mouseIsPressed)
	{
		console.log(mouseX + " x + ", mouseY + " y")
	}
	rock.display();
	connect.display();
	fruit.display();
	fruit2.display();
	 fruit3.display();
	 fruit4.display();
	 fruit5.display();
	 Collision(fruit,rock);
	 Collision(fruit2,rock);
	 Collision(fruit3,rock);
	 Collision(fruit4,rock);
	 Collision(fruit5,rock);	
}

function mouseDragged()
{
	Matter.Body.setPosition(rock.body,{x:mouseX,y:mouseY});

}

function mouseReleased()
{
	connect.fly(); 
}

function Collision(mango,stone)
{
  mp = mango.body.position
  sp = stone.body.position

  var dis = dist(sp.x,sp.y,mp.x,mp.y)
  if (dis<=mp.r+sp.r)
  {
	  Matter.body.setStatic(mango.body,false)
  }
}