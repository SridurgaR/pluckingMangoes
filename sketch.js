
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint
var tree, boyImage;


function preload()
{
	boyImage = loadImage("Images/boy.png");
	tree = loadImage("Images/tree.png");
}

function setup() {
	createCanvas(1300, 600);

	engine = Engine.create();
	world = engine.world;

	ground = new Ground (width/2,580,1300,15);
	console.log(ground);
	//tree = new Tree (850,300,600,600);
	mango1 = new Mango (810,150,45,45);
	mango2 = new Mango (890,220,45,45);
	rock = new Stone (150,510,60,60);
	launcher = new Launcher(rock.body,{x:235,y:420})


	console.log(rock);
	Engine.run(engine);
  
}


function draw() {
  background(0);
  ground.display();
  //tree.display();
  image(tree,550,80,500,500);
  launcher.display();
  image(boyImage,200,340,200,300);
  rock.display();
  console.log("rock");
  mango1.display();
  mango2.display();
  
detectCollision(rock,mango1);
detectCollision(rock,mango2);

}

function mouseDragged(){
	Body.setPosition(rock.body, {x: mouseX , y: mouseY});
}

function mouseReleased(){
	launcher.fly();
}

function keyPressed(){
	if(keyCode === 32) {
		Body.setPosition(rock.body, {x:235, y:420})
		launcher.attach(rock.body);
}
}
function detectCollision(rock,mango){
	mangoBodyPosition = mango.body.position;
	rockBodyPosition = rock.body.position;

	var distance = dist(rockBodyPosition.x, rockBodyPosition.y, mangoBodyPosition.x, mangoBodyPosition.y);
	if(distance <= mango.r + rock.r)
	{
		Body.setStatic(mango.body, false);
	}
}
