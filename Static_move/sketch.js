const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var ground;
var cube;
var cube2;

function setup(){
    createCanvas(400,400);
    engine = Engine.create();
    world = engine.world;

    var stat_options ={
        isStatic: true,
        restitution: 0.5,
        friction : 10,
    }
    var move_options ={
        isStatic: false,
        restitution: 0.75,
        friction : 1,
    }

    ground = Bodies.rectangle(200,390,400,20,stat_options);
    cube = Bodies.rectangle(200, 150, 30, 30, stat_options);
    cube2 = Bodies.rectangle(180, 50, 60, 60, move_options);
    World.add(world,ground);
    World.add(world, cube);
    World.add(world, cube2);
}

function draw(){
    background("red");

    Engine.update(engine);

    rectMode(CENTER);
    rect(ground.position.x,ground.position.y,400,20);
    rectMode(CENTER);
    rect(cube.position.x, cube.position.y, 30, 30);
    rectMode(CENTER);
    rect(cube2.position.x, cube2.position.y, 60, 60);
}