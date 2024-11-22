function setup() {
 video = createCanvas(640, 480);
  video.center()
  cam = createCapture(VIDEO)
  cam.hide()
  terminator = ml5.poseNet(cam,encendido)
  terminator.on("pose",respuesta)
}
manox = 500
manoy = 1
function draw() {
  image(cam,0,0,640,480)
  image(poupro,manox-50,manoy-50,50,50)
}

function preload(){
  poupro = loadImage("https://m.media-amazon.com/images/I/61xaftLmCuL.jpg")
}
function encendido(){
  console.log("hasta la vista")
}
function respuesta(poses){
if(poses[0]){
  manox = poses[0].pose.leftWrist.x
    manoy = poses[0].pose.leftWrist.y

}
}