let xMax= 400;
let yMax= 600; //variabili globali
let xrocket= xMax/2;
let yrocket= xMax*0.6;

function setup() {
  createCanvas(xMax, yMax);
}

function draw() {
  background(20,24,40);

  push();
  //corpo del rocket
  fill(220);
  stroke(40);
  strokeWeight(2);
  rectMode(CENTER);//partenza coordinate dell'angolo
  rect(xrocket, yrocket+30, 80, 180, 20);
  //nose del rocket
  fill(200,40,40); 
  triangle(xrocket-40,yrocket-60, xrocket, yrocket-120, xrocket+40, yrocket-60);
  //window
  fill(40,150,220); 
  stroke(255);
  strokeWeight(3);
  ellipse(xrocket, yrocket+20, 48, 48);

  //left and right wings
  fill(180,30,30);
  stroke(40);
  strokeWeight(2);
  triangle(xrocket-40, yrocket+90, xrocket-80, yrocket+130, xrocket-20, yrocket+90);
  triangle(xrocket+40, yrocket+90, xrocket+80, yrocket+130, xrocket+20, yrocket+90);

  pop(); //termine modifiche 

  push();
  randomSeed(99) //seme di generazione casuale
  noStroke(); //eliminare outline
  for(i=0; i<120; i++){ //120 stelle
    let sx = (i*37)%width;
    let sy = (i*73)%height;
    fill(255,255,255, random(150,255)); //numero casuale per col
    ellipse(sx, sy, random(1, 2.8)); //numero casuale per dim
    /*if(i%2 == 0){
      fill(255, 255, 150);
      ellipse(sx, sy, 1);
    }else if(i%3 == 0){
      fill (200, 100, 255);
      ellipse(sx, sy, 1.5);
    }else {
      fill(255,255,100);
      ellipse(sx, sy, 2.8);
  }*/
    }
  pop();
  xrocket = (xrocket + 1)%(xMax+120); //animazione
  //la percentuale restituisce valori fra 0 e valmax
  }