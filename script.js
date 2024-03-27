
/*
COMP 125 Lab 11 - Adding to an Array with mouse clicks
Step 1 - add a line of code to function mousePressed() that will add a new object to the array when the mouse is pressed. The first part (creating a new object where the mouse is pressed) is done for you. Just add the line that appends it to the array.
Step 2 - add comments explaining each line of code in this sketch.
*/
// An array to store Dot objects
var dots = new Array(1);

// Setup function runs once at the beginning
function setup() {
  createCanvas(500, 300); // Create a canvas of size 500x300 pixels
  dots[0] = new Dot(width/2, height/2); // Create a Dot object at the center of the canvas
}

 // Draw function runs repeatedly
function draw() {
  background(200); // this lines purpose is to Set background color to light gray
  
  // Loop through each dot in the dots array
  for(let i = 0; i < dots.length; i++){
    dots[i].move(); // this Moves the dot
    dots[i].display(); // this Displays the dot
  }
  
  textSize(24); // sets the text size
  fill(100, 0, 200); // sets the text fill color
  text("'dots' array length: " + dots.length, 100, 100); // displayss the length of the dots array
}

// Mousepressed function runs when the mouse is *pressed question 1 instruction*
function mousePressed(){
  let obj = new Dot(mouseX, mouseY); // Creates a new Dot at the mouse position
  
  // Adds the newly created Dot to the dots array
  dots.push(obj); // Adds the new Dot object to the end of the dots array
}

// Dot class constructor
function Dot(X, Y){
  // the Dot properties
  this.x = X; // X-coordinate
  this.y = Y; // Y-coordinate
  this.w = random (20, 50); // Random width within a range
  this.sx = random(-5, 5); // Random horizontal speed within a range
  this.sy = random(-5, 5); // Random vertical speed within a range
  this.r = random(0, 255); // this code randomizes red color component
  this.g = random(0, 255); //this code randomizes green color component
  this.b = random(0, 255); // this code randomizes blue color component
  
  // Method to draw the dot on the screen
  this.display = function(){
    fill(this.r, this.g, this.b); // Sets the fill color based on dot's color components
    ellipse(this.x, this.y, this.w, this.w); // Draws the dot as an ellipse
  }
  
  // Move method to update dot's position
  this.move = function(){
    this.x += this.sx; // Adjust X-coordinate according to horizontal speed
    this.y += this.sy; // Adjust Y-coordinate according to vertical speed
     
    // this line says that if the dot reaches the canvas boundary, make it bounce back
    if (this.x < 0 || this.x > width){
      this.sx *= -1; // Reverse horizontal speed
    }
    if (this.y < 0 || this.y > height){
      this.sy *= -1; // Reverse vertical speed
    }
  }
}
