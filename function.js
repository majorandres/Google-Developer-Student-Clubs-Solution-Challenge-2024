function setup() {
  
    createCanvas(windowWidth, windowHeight);
    angleMode(DEGREES);
    rectMode(CENTER);
    
  
  }
  
  function draw() {
    background(10,20,30);
    noFill()
   
    translate(width/2,height/2);
    // orbitControl();
    // rotateY(0.5);
    for(var i = 0; i < 100; i++){
        
  
      var r = map(sin(frameCount), -1, 1, 50, 255)
      var g = map(cos(frameCount / 2), -1, 1, 50, 255)
      var b = map(sin(frameCount / 4), -1, 1, 50, 255)
      var strokeWeightRandom = random(0.1,1.5);
      
      strokeWeight(strokeWeightRandom);
      push();
      rotate(tan((frameCount / (1/2)) + i) * 100);
       stroke(r,g,b);
      rect(0 + (i + 50),0 + (i + 50), 600 - i * 2, 600 - i * 2, 200 - i);
       rotate(asin((frameCount / (1/4)) + i) * 100);
      circle(0,0,200 - i * 2);
       rotate(acos((frameCount / (1/5)) + i) * 100);
      circle(0 + (i + 50),0 + (i + 50),400 - i * 2);
      pop();
      
    
    }
    
  }