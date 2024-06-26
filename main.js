

function setup()
{
    canvas = createCanvas(300, 300);
    canvas.center();
    video = createCanvas(VIDEO);
    video.hide();
    classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/EzzeOnMEJ/model.json',modelLoaded);
}
      


  console.log('ml5 version:', ml5.version);
  


function draw() {
    image(video, 0, 0, 300, 300);
    classifier.classify(video, gotResult);
}

function gotResult(error, results) {
  if (error) {
    console.error(error);

  } else {
    console.log(results);
    document.getElementById("result_object_name").innerHTML = result[0].label;
    document.getElementById("result_object_accuracy").innerHTML = result[0].confidence.toFixed(3);
  }
}


