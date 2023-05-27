function setup(){
    video = createCapture(VIDEO);
    video.size(500,500);

    canvas = createCanvas(500,500);
    canvas.position(560,95);

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function modelLoaded(){
    console.log('PoseNet is Initialized');
}

function gotPoses(){
    if(results.length > 0){
        console.log(results);

        noseX = results[0].pose.nose.x;
        noseY = results[0].pose.nose.y;
        console.log("Nose X = " + noseX + ", Nose Y = " + noseY);

        rightWristX = results[0].pose.rightWrist.x;
        leftWristX = results[0].pose.leftWrist.x;
        difference = Math.floor(leftWristX - rightWristX);
        console.log("Left Wrist X = " + leftWristX + ", Right Wrist X = " + rightWristX + ", Difference = " + difference);
    }
}

function draw(){
    background("#969A97");
}