song= "";
leftWristX = "";
leftWristY = "";
rightWristX = "";
righWristY = "";

function setup()
{
    canvas = createCanvas(600,500);
    canvas.center();

    video = createCapture(VIDEO);
    video.hide();
    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}



function draw()
{
    image(video, 0, 0, 600, 500);
}

function preload()
{
    song = loadSound("music.mp3");
}

function play()
{
    song.play();
    song.setVolume(1);
    song.rate(1);
}

function pause()
{
    song.pause();
}

function modelLoaded()
{
  console.log('poseNet is Initialized YAY!');
}

function gotPoses(results)
{
     if(results.length > 0)
     {
        console.log(results);
        leftWristX = results[0].pose.leftWrist.x;
        leftWristY = results[0].pose.leftWrist.y;
        console.log("leftWristX = " + leftWristX + "leftWristY = " + leftWristY);

        rightWristX =  results[0].pose.rightWrist.x;
        rightWristY =  results[0].pose.rightWrist.y;
        console.log("rightWristX = " + rightWristX + "rightWristY = " + rightWristY);


     }
}