// Enemies our player must avoid
var Enemy = function(x,y,v) {
    // Variables applied to each of our instances go here,
    // we've provided one for you to get started
    this.x = x;
    this.y = y;
    this.speed = v;

    // The image/sprite for our enemies, this uses
    // a helper we've provided to easily load images
    this.sprite = 'images/enemy-bug.png';
};
// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function(dt) {
    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.
    this.x = this.x + this.speed * dt;
    if (this.x>=808){
      this.x = 0;
    }
    if(this.y - player.y <= 101 && this.y - player.y>= -101){
      if(this.x - player.x <=101 && this.x - player.x >= -101){
        player.reset();
      }
    }
};

// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

// Now write your own player class
// This class requires an update(), render() and
// a handleInput() method.
var Player = function() {
    // Variables applied to each of our instances go here,
    // we've provided one for you to get started
    this.x = 202;
    this.y = 404;

    // The image/sprite for our enemies, this uses
    // a helper we've provided to easily load images
    this.sprite = 'images/char-boy.png';
    console.log("Player");

};
// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Player.prototype.update = function() {
    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.
    if(this.y === 0){
      this.reset();
    }
};

// Draw the enemy on the screen, required method for game
Player.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
    console.log("player.render");
};

Player.prototype.handleInput = function(allowedKeys){

    if (allowedKeys === "left"){
      if (this.x - 101 >= 0){
        this.x = this.x - 101;
      }
    }

    if (allowedKeys === "right"){
      if (this.x + 101 <= 404){
        this.x = this.x + 101;
      }
    }

    if (allowedKeys === "up"){
      if (this.y - 101 >= 0 ){
        this.y = this.y - 101;
      }
      console.log("player.up");
    }

    if (allowedKeys === "down"){
      if (this.y + 101 <= 404){
        this.y = this.y + 101;
      }
    }

    console.log("player.handleInput");
};

Player.prototype.reset = function(){
    this.x = 202;
    this.y = 404;
};
// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
// Place the player object in a variable called player
var allEnemies = [];
var enemy1 = new Enemy(0,101,350);
var enemy2 = new Enemy(0,180,100);
var enemy3 = new Enemy(0,150,150);
var enemy4 = new Enemy(0,80,200);
allEnemies.push(enemy1);
allEnemies.push(enemy2);
allEnemies.push(enemy3);
allEnemies.push(enemy4);


var player = new Player();

// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);
});
