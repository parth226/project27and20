
var r = 0;
var b = 0;
var g = 0;



function setup(){
createCanvas(1200,400);
}


function draw(){

let r = map(mouseX,0,407,0,255);
let b = map(mouseX,0,805,0,255)
let g = map(mouseX,0,904,0,255)
background(r,g,b);
fill("blue")
ellipse(mouseX,200,20,10);
}
   

