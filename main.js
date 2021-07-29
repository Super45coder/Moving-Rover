canvas = document.getElementById('myCanvas');
ctx = canvas.getContext("2d");

nasa_images = ["1.jfif", "2.jfif", "3.jpg", "4.jpg", "5.jpg", "6.jfif", "7.jfif"];
random_number = Math.floor(Math.random() * 4);
console.log(random_number);

background_image = nasa_images[random_number];
console.log("Background image is " + background_image);
rover_image = "rover.png";

rover_height = 90;
rover_width = 100;

rover_x = 10;
rover_y = 10;

function add(){
  background_imgTag = new Image();
  background_imgTag.onload = uploadBackground;
  background_imgTag.src = background_image;

  rover_imgTag = new Image();
  rover_imgTag.onload = uploadRover;
  rover_imgTag.src = rover_image;
}

function uploadBackground(){
    ctx.drawImage(background_imgTag, 0, 0, canvas.width, canvas.height);
}

function uploadRover(){
    ctx.drawImage(rover_imgTag, rover_x, rover_y, rover_width, rover_height);
}

window.addEventListener("keydown", key_down);
function key_down(e){
  keyPressed = e.keyCode;
  console.log(keyPressed);
  if (keyPressed == 37){
     left();
     console.log("left");
  }
  if (keyPressed == 38){
    up();
    console.log("up");
 }
  if (keyPressed == 39){
    right();
    console.log("right");
}
 if (keyPressed == 40){
    down();
    console.log("down");
 }
}

function left(){
    if (rover_x >= 0){
    rover_x = rover_x - 10;
    console.log("When left is pressed, x = " + rover_x + ", y = " + rover_y);
    uploadBackground();
    uploadRover();
    }
}

function up(){
    if (rover_y >= 0){
        rover_y = rover_y - 10;
        console.log("When up is pressed, x = " + rover_x + ", y = " + rover_y);
        uploadBackground();
        uploadRover();
    }
}

function right(){
    if(rover_x <= 700){
        rover_x = rover_x + 10;
        console.log("When right is pressed, x = " + rover_x + ", y = " + rover_y);
        uploadBackground();
        uploadRover();
    }
}

function down(){
    if(rover_y <= 500){
        rover_y = rover_y + 10;
        console.log("When down is pressed, x = " + rover_x + ", y = " + rover_y);
        uploadBackground();
        uploadRover();
    }
}