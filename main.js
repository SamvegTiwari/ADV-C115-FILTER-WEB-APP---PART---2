function preload(){}

function setup(){
canvas= createCanvas(300, 300);
canvas.center();
video=createCapture(VIDEO);
video.size(300,300)
video.hide();

posenet=ml5.poseNet(video, model_loaded);
posenet.on('pose', got_Poses);


}

function got_Poses(results){
    if(results.length>0){
        console.log(results);
        console.log("nosex="+results[0].pose.nose.x);
        console.log("nosey="+results[0].pose.nose.y);
}}


function model_loaded(){
console.log("I loaded the model");
}

function got_poses(result){
console.log(result);

}

function draw(){

}

function take_sanpshot(){
 save("Filtered.png" );
}