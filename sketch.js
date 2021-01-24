var starImg, fairyImg, bgImg;
var fairy , fairyVoice;
var star, starBodyvar ,star_options;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	starImg = loadImage("images/star.png");
	fairyImg = loadAnimation("images/fairyImage1.png","images/fairyImage2.png");
	bgImg = loadImage("images/starNight.png");
	fairyVoice = loadSound("sound/JoyMusic.mp3");

}

function setup() {
	createCanvas(800, 750);

    

	fairy = createSprite(130, 520);
	fairy.addAnimation("fairyflying",fairyImg);  
	fairy.scale =0.25;

	star = createSprite(650,30);
	star.addImage(starImg);
	star.scale = 0.3;

	
	 star_options={
		restitution:0.5,
	    isStatic : true 
	}

	engine = Engine.create();
	world = engine.world;

	starBody = Bodies.circle(650 , 30 , 5 , star_options);
	World.add(world, starBody);
	
	star.x=starBody.position.x
	star.y=starBody.position.y
	
	

}


function draw() {
  background(bgImg);
  Engine.update(engine);
 // fairyVoice.play();

  keyPressed();

  if (star.y > 480){
	star.velocityY=0
	fairy.x=510
	//fairyVoice.stop();
  }
  drawSprites();

}

function keyPressed() {
	// code for movement of fairy 
    if (keyDown("RIGHT_ARROW")) {
		fairy.x = fairy.x + 4
	  }
	  if (keyDown("LEFT_ARROW")) {
		fairy.x = fairy.x - 4
	  }
	  if (keyDown("DOWN_ARROW")) {
		star.velocityY=3
	  }
	}


