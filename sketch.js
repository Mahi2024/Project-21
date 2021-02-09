var canvas;
var music;
var ball, edges, box1, box2, box3, box4;

function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);

    box1 = createSprite(0,580,360,30);
    box1.shapeColor = "black";

    box2 = createSprite(295,580,200,30);
    box2.shapeColor = "lime";

    box3 = createSprite(515,580,200,30);
    box3.shapeColor = "pink";

    box4 = createSprite(740,580,200,30);
    box4.shapeColor = "yellow";

    ball = createSprite(0,0,40,40);
    ball.shapeColor = "white";
    ball.velocityX = 4;
    ball.velocityY = 9;
}

function draw() {
    background(rgb(169,169,169));
    //create edgeSprite
edges = createEdgeSprites();
ball.bounceOff(edges);
if(box1.isTouching(ball)&&ball.bounceOff(box1)){
ball.shapeColor = "black";
}
if(box2.isTouching(ball)&&ball.bounceOff(box2)){
    ball.shapeColor = "lime";
    }
    if(box3.isTouching(ball)&&ball.bounceOff(box3)){
        ball.shapeColor = "pink";
        }
        if(box4.isTouching(ball)&&ball.bounceOff(box4)){
            ball.shapeColor = "yellow";
            }

            drawSprites();
}
