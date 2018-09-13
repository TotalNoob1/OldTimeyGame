// Enemies our player must avoid
var Enemy = function(x,y,speed) {
    // Variables applied to each of our instances go here,
    // we've provided one for you to get started
    this.x = x;
    this.y = y;
    this.speed = speed;
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
    this.x = this.x + this.speed;

    this.render();
    if (this.x > 505){
      this.x =  0;
      this.speed = Math.floor((Math.random()*6)+4);

    }

};

// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};
// Now write your own player class
// This class requires an update(), render() and
// a handleInput() method.
class createPlayer {
  constructor(x,y){
    this.x = x;
    this.y = y;
    this.up = 0;
    this.down = 0;
    this.right = 0;
    this.left = 0;

    this.sprite = 'images/char-boy.png';
  }
  update(keyCode){
    if (this.x <= 404 && keyCode == 'right'){
      this.x = this.right + this.x;
      this.up = 0;
    }else if (this.x >= 6 && keyCode == 'left') {
      this.x = this.left + this.x;
      this.left = 0;
    }else if (this.y >= 46 && keyCode == 'up') {
      this.y = this.up + this.y;
      this.up = 0;
    }else if (this.y <= 384 && keyCode == 'down') {
      this.y = this.down + this.y;
      this.down = 0;
    }
  }
  render(){
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
  }
  handleInput(keyCode){
    if (keyCode == 'up'){
      this.up = -85;
    }
    if(keyCode == 'down'){
      this.down = 85;
    }
    if(keyCode == 'right'){
      this.right = 100;
    }
    if(keyCode == 'left' ){
      this.left = -100;
    }

  }
}

// Now instantiate your objects.

Enemy.prototype.constructor = Enemy;
let enemy1 =  new Enemy(50 , 60 , Math.floor((Math.random()*10)+1));
let enemy2 =  new Enemy(50 , 140 , Math.floor((Math.random()*10)+1));
let enemy3 =  new Enemy(50 , 220 , Math.floor((Math.random()*10)+1));
// Place all enemy objects in an array called allEnemies
// Place the player object in a variable called player
var allEnemies = [enemy1,enemy2,enemy3];
var player = new createPlayer(205,385,0,0);



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
    player.update(allowedKeys[e.keyCode]);


});
