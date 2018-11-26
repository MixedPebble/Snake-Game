/*
* Global Variables
*/
var game;
var width = 800;
var height = 600;
var gravity = 300;
var player;
var body;
var dot;
var cursors;

/*
* config is used by Phaser to initialize the game
* preload loads assets
* create initializes what's in the game and definining how they work/interact
* update is for handling user input
*/

var config = {
  type: Phaser.AUTO,
  width: width,
  height: height,
  physics: {
    default: 'arcade',
    arcade: {
      debug:false
    }
  },
  scene:{
    preload: preload,
    create: create,
    update: update
  }
};
game = new Phaser.Game(config);



function preload(){
  this.load.image('SnakeHead','http://localhost:3000/assets/head2.png');
  this.load.image('dot','http://localhost:3000/assets/dot2.png');
}
function create(){
  createPlayer(this);
  createInput(this);
  createDot(this);
  createBody(this);
  createOverLap(this);
  createCollide(this);
}
function update(){
  updatePlayerMovement();
}


function createPlayer(world){
  player = world.physics.add.sprite(width/2,height/2,'SnakeHead');
  player.setCollideWorldBounds(true);
}
function createOverLap(world){
  world.physics.add.overlap(player,dot,collectDot,null,this);
}
function createCollide(world){
  //TODO: Create wall collision
  //TODO: Create body collision
}
function createBody(world){
  //TODO: Create Snake body
}
function createInput(world){
  cursors = world.input.keyboard.createCursorKeys();
}
function createDot(world){
  dot = world.physics.add.sprite(width/3,height/3,'dot');
  moveDot();
}
function collectDot(player,dot){
  console.log("collected");
  moveDot();
  updateScore();
}
function updateScore(){
  //TODO: Create score functionality
}
function updatePlayerMovement(){
  if (cursors.left.isDown)
  {
    player.setVelocityX(-160);
    player.setVelocityY(0);

  }
  if (cursors.right.isDown)
  {
    player.setVelocityX(160);
    player.setVelocityY(0);

  }
  if (cursors.up.isDown)
  {
    player.setVelocityY(-160);
    player.setVelocityX(0);
  }
  if (cursors.down.isDown)
  {
    player.setVelocityY(160);
    player.setVelocityX(0);
  }
}
function moveDot(){
  var x = (player.x < 400) ? Phaser.Math.Between(width/2, width) : Phaser.Math.Between(0, width);
  var y = (player.y < height/2) ? Phaser.Math.Between(height/2, height) : Phaser.Math.Between(0, height);
  dot.disableBody(true,true);
  dot.enableBody(true,x,y,true,true);
}
