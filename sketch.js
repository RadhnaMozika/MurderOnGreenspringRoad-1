var player, panel;
var bgImg;

function preload()
{

  bgImg = loadImage("images/Greenspring-Dawnice.png");
	
}

function setup() {
  createCanvas(1350, 650);
  
  player = new Player();
  panel = new Panel();
	
}


function draw() {


  console.log("X "+player.body.x);[]
  console.log("Y "+player.body.y);


  background(0);

  image(bgImg, 0, 0, 10000, 10000);

  player.move();
  panel.movement();
  panel.write();

  

  drawSprites();

  if(player.body.isTouching(panel.laverneCameron)){
    panel.laverne_Account();
  }

  if(player.body.isTouching(panel.jonathonPabst)){
    panel.jonathon_Account();
  }

  if(player.body.isTouching(panel.vernePatterson)){
    panel.verne_Account();
  }

  if(player.body.isTouching(panel.katherineMiriumHegann)){
    panel.katherine_Account();
  }

  if(player.body.isTouching(panel.dennisHarw)){
    panel.dennis_Account();
  }
  
  if(player.body.isTouching(panel.byStander1)){
    panel.Account1();
   }
   if(player.body.isTouching(panel.byStander2)){
    panel.Account2();
   }
    if(player.body.isTouching(panel.byStander3)){
    panel.Account3();
   }
   if(player.body.isTouching(panel.byStander4)){
    panel.Account4();
   }
   if(player.body.isTouching(panel.byStander5)){
    panel.Account5();
   }
   if(player.body.isTouching(panel.byStander6)){
    panel.Account6();
   }

  
 
}



/*

create all sprites

find images

create clues (+ murder scene, etc.)

figure out the game over screen and animation

game start and end screen


 */