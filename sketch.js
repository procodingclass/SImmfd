

var box1, box2, box3,ground;
var ball;

function setup() {
  createCanvas(850, 400);

  ball = new Ball(50, 100, 30);

  ground = new Box(0, 380,850, 20);


  box1 = new Box(100, 100, 70, 70);
  box2 = new Box(200, 100, 70, 70);
  box3 = new Box(300, 100, 70, 70);

}

function draw() {
  background(180);
 
  ground.display();
  box1.display();
  box2.display();
  box3.display();

  ball.display();
}
