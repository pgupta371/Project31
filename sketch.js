const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1, pig1;
var particles = []; 
var plinkos = []; 
var divisons = []; 
var divisonsHieght = 300;
function preload() {
   
    }

function setup(){
    var canvas = createCanvas(485,800);
    engine = Engine.create();
    world = engine.world;
  
    ground = new Ground(480,height,8800,20);
    div1 = new Ground(0, 775, 10, 300);
    div2 = new Ground(80, 775, 10, 300);
    div3 = new Ground(160, 775, 10, 300);
    div4 = new Ground(240, 775, 10, 300);
    div5 = new Ground(320, 775, 10, 300);
    div6 = new Ground(400, 775, 10, 300);
    div7 = new Ground(480, 775, 10, 300);


    for(var k = 0; k<=width;k = k+ 50 ){
        plinkos.push(new Plinko(k,100, 10));
    }
    for(var k = 0; k<=width - 10;k = k+ 50 ){
        plinkos.push(new Plinko(k,200, 10));
    }
    for(var k = 0; k<=width - 20;k = k + 50 ){
        plinkos.push(new Plinko(k,300, 10));
    }
    for(var k = 0; k<=width - 30;k = k+ 50 ){
        plinkos.push(new Plinko(k,400, 10));
    }
    for(var k = 0; k<=width - 30; k = k + 50 ){
        plinkos.push(new Plinko(k,500, 10));
    }

}

function draw(){
    background(0);
    Engine.update(engine);
    
    ground.display();
    div1.display();
    div2.display();
    div3.display();
    div4.display();
    div5.display();
    div6.display();
    div7.display();

    for (var i = 0; i < plinkos.length; i++) { 
        plinkos[i].display();
    }
    for (var j = 0; j < particles.length; j++) { 
        particles[j].display();
    }
    if(frameCount%90 === 0){
        particles.push(new Particles(random(width/2-10, width/2+10), 10, 10));
    }
    

    
}
