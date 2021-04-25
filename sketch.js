var dog,dogImg;
var happyDog,happyImg;
var database;
var foodS;
var foodStock;

function preload()
{
dogImg=loadImage("images/dogImg.png");
happyImg=loadImage("images/dogImg1.png");
}

function setup() {
	createCanvas(500, 500);
  database=firebase.database();
  console.log(database);
  foodStock=database.ref('Food');
  foodStock.on("value",readStock);
  dog=createSprite(250,200);
  dog.addImage(dogImg);
  dog.scale=0.5;
  
}


function draw() {  
  background(46,139,87);

  if(keyWentDown(UP_ARROW)){
    writeStock(foodS);
    dog.addImage(happyImg)
  }

  drawSprites();
  textSize(15);
  fill("red");
  text("Press UP_ARROW key to feed Tom milk!",125,400);


}

function readStock(data){
  foodS=data.val();
}

function writeStock(x){
  database.ref('/').update({
    Food:x
  })
}

