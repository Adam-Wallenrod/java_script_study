// setup canvas

var canvas = document.querySelector('canvas');
var ctx = canvas.getContext('2d');

var width = canvas.width = window.innerWidth;
var height = canvas.height = window.innerHeight;

// function to generate random number

function random(min,max) {
  var num = Math.floor(Math.random()*(max-min)) + min;
  return num;
}


function Shape(x, y, velX, velY, exists) {
  this.x = x;
  this.y = y;
  this.velX = velX;
  this.velY = velY;
  this.exists = exists;
  
}


function Ball (x, y, velX, velY, color, size, exists) {
  Shape.call(this, x, y, velX, velY, exists);

  this.size = size;
  this.color = color;

}

Ball.prototype.draw = function() {
  ctx.beginPath();
  ctx.fillStyle = this.color;
  ctx.arc(this.x, this.y, this.size, 0, 2*Math.PI);
  ctx.fill();
}

Ball.prototype.update = function() {
  if ((this.x + this.size) >= width) {
    this.velX = -(this.velX);
  }
  
  if ((this.x - this.size) <= 0) {
    this.velX = -(this.velX);
  }
  
  if ((this.y + this.size) >= height) {
    this.velY = -(this.velY);
  }

  if ((this.y - this.size) <= 0) {
    this.velY = -(this.velY);
  }

  this.x += this.velX;
  this.y += this.velY;

}

Ball.prototype.collisionDetect = function() {
  for (var j = 0; j < balls.length; j++) {
    if (!(this === balls[j])) {
      var dx = this.x - balls[j].x;
      var dy = this.y - balls[j].y;
      var distance = Math.sqrt(dx * dx + dy * dy);

      if (distance < this.size + balls[j].size) {
        balls[j].color = this.color = 'rgb(' + random(0,255) + ',' + random(0,255) + ',' + random(0,255) + ')';
      }
    }
  }  
}


///EvilCircle() constructor definition
//function EvilCircle(x, y, color, size, velX, velY, exists) {
function EvilCircle(x, y, velX, velY, color, size, exists) {

  Shape.call(this, x, y, exists);

  this.color = 'white';
  this.size = 10;
  this.velX = 20;
  this.velY = 20;

}

EvilCircle.prototype.draw = function () {
  ctx.beginPath();
  ctx.lineWidith = 5;
  ctx.strokeStyle = this.color;
  ctx.arc(this.x, this.y, this.size, 0, 2*Math.PI);
  ctx.stroke();
  
}


EvilCircle.prototype.checkBounds = function() {
  if ((this.x + this.size) >= width) {
   // this.velX = -(this.velX);
      this.x -= this.size; 
  }
  
  if ((this.x - this.size) <= 0) {
   // this.velX = -(this.velX);
      this.x += this.size;
  }
  
  if ((this.y + this.size) >= height) {
   // this.velY = -(this.velY);
      this.y -= this.size;
  }

  if ((this.y - this.size) <= 0) {
   // this.velY = -(this.velY);
      this.y += this.size;
  }

}

EvilCircle.prototype.setControls = function() {
  var _this = this;
  window.onkeydown = function(e) {
    if (e.keyCode === 65) {
      _this.x -= _this.velX;
    } else if (e.keyCode === 68) {
      _this.x += _this.velX;
    } else if (e.keyCode === 87) {
      _this.y -= _this.velY;
    } else if (e.keyCode === 83) {
      _this.y += _this.velY;
    }
  }

}


///Loop

var balls = [];
var zly = new EvilCircle(0,0,this,this,this,this,true);
zly.setControls();

function loop() {
  ctx.fillStyle = 'rgba(0, 0, 0, 0.5)';
  ctx.fillRect(0, 0, width, height);

  while (balls.length < 7) {
    var ball = new Ball(
      random(0,width),
      random(0,height),
      random(-7,7),
      random(-7,7),
      'rgb(' + random(0,255) + ',' + random(0,255) + ',' + random(0,255) + ')',
      random(10,20),
      true
  );
  balls.push(ball);
  }

  for (var i = 0; i < balls.length; i++) {
    balls[i].draw();
    balls[i].update();
    balls[i].collisionDetect();
    }
   
  zly.draw();
  zly.checkBounds();
  requestAnimationFrame(loop);
}

loop();
