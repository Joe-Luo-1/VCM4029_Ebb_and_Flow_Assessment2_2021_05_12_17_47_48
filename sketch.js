let parrots = [];
let parrots2 = [];

let parrotj = [];
let parrotreverj = [];
let parrotking = [];

var index1 = 1;
var index2 = 1;

var speed1 = 2;
var speed2 = -2;

var direction = 1;
var scales = 50;
// var ya =200
// var yc =200
var i = 1;
var v = 1;
var z = 1;

function preload() {
  for (let i = 1; i <= 7; i++)
    parrotj[i] = loadImage("assets/Jump" + i + ".png");

  for (let v = 1; v <= 7; v++)
    parrotreverj[v] = loadImage("assets/Reverjump" + v + ".png");

  king1 = loadImage("assets/Kingchirp1.png");
  king2 = loadImage("assets/Kingchirp2.png");
  bushes= loadImage("assets/bushes.png");
  trees= loadImage("assets/trees.png")
}

function mousePressed() {
  var rand1 = random(0, 5);
  var scale1 = random(0, 2);
  // var ya = 250
  // ya = 200 + random(-5,0)
  var a = new Parrot(200, 193, rand1, scale1);
  parrots.push(a);

  var rand2 = random(0, 5);
  var scale2 = random(3, 5);
  var b = new Parrot(200, 200, rand2, scale2);
  parrots.push(b);

  var rand3 = random(0, 5);
  var scale3 = random(15, 25);
  // var yc = 280
  // var yc = 200+random(5,8)
  // yc = 200 + random(5,8)
  var c = new Parrot(200, 205, rand3, scale3);
  parrots.push(c);
}

function doubleClicked() {
  var rand4 = random(-4, 0);
  var scale4 = random(0, 2);
  var d = new Parrotrever(200, 193, rand4, scale4);
  parrots2.push(d);

  var rand5 = random(-3, 0);
  var scale5 = random(2, 6);
  var e = new Parrotrever(200, 200, rand5, scale5);
  parrots2.push(e);

  var rand6 = random(-4, 0);
  var scale6 = random(9, 12);
  var f = new Parrotrever(200, 205, rand6, scale6);
  parrots2.push(f);

  var rand7 = random(-5, 0);
  var scale7 = random(10, 16);
  var g = new Parrotrever(200, 205, rand7, scale7);
  parrots2.push(g);
}

function Parrotrever(x, y, rand, scale) {
  this.x = x;
  this.y = y;
  this.dir = -direction;
  this.rand = rand;
  this.speed = speed2 + this.rand;
  this.yspeed = -5;
  this.gravity = 0.5;
  this.scale = scales + scale;

  this.display = function () {
    imageMode(CENTER);
    image(this.img, this.x, this.y, this.scale, this.scale);
  };

  this.update = function () {
    this.x = this.x + this.speed;

    this.y += this.yspeed;
    this.yspeed += this.gravity;

    if (this.y == 193) {
      this.yspeed = -5;
    }
    if (this.y == 200) {
      this.yspeed = -5;
    }
    if (this.y == 205) {
      this.yspeed = -5;
    }
    if (this.dir == -1) {
      this.img = parrotreverj[index2];
    }
  };
}

function Parrot(x, y, rand, scale) {
  this.x = x;
  this.y = y;
  this.dir = direction;
  this.rand = rand;
  this.speed = speed1 + this.rand;
  this.yspeed = -5;
  this.gravity = 0.5;
  this.scale = scales + scale;

  this.display = function () {
    imageMode(CENTER);
    image(this.img, this.x, this.y, this.scale, this.scale);
  };

  this.update = function () {
    this.x = this.x + this.speed;

    this.y += this.yspeed;
    this.yspeed += this.gravity;

    if (this.y == 193) {
      this.yspeed = -5;
    }
    if (this.y == 200) {
      this.yspeed = -5;
    }
    if (this.y == 205) {
      this.yspeed = -5;
    }

    if (this.dir == 1) {
      this.img = parrotj[index1];
    }

    if (this.x > 405 || this.x < -5) {
      this.scale = 0.1;
    }
  };
}

function setup() {
  createCanvas(400, 300);
  frameRate(60);
  background(255);
}

function draw() {
  imageMode(CENTER);
  background('#7FB685');

  if (frameCount % 3 == 0) index1++;
  if (index1 >= 7) index1 = 1;
  for (var i = 0; i <= parrots.length - 1; i++) {
    parrots[i].update();
    parrots[i].display();
  }

  if (frameCount % 3 == 0) index2++;
  if (index2 >= 7) index2 = 1;
  for (var v = 0; v <= parrots2.length - 1; v++) {
    parrots2[v].update();
    parrots2[v].display();
  }
  
  if (mouseIsPressed){
  image(king2,190, 153, 200, 200);
    }else {
    image(king1,190, 153, 200, 200)
    }
    image(bushes,230,265,500,110)
  image(trees,200,-20,500,136)
}
