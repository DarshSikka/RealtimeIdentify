var machine = 'https://teachablemachine.withgoogle.com/models/QqXnw7mPd/model.json';
var doc = document;
function preload() {

}

function setup() {
    canvas = createCanvas(300, 300);
    video = createCapture(VIDEO);
    canvas.set(200, 300);
    video.hide();
    x = ml5.imageClassifier(machine, function () {
        console.log('k', ml5.version)
    });
}

function draw() {
    image(video, 0, 0, 300, 300);
    x.classify(video, function (error, results) {
        if (error) {
            console.error(error);
        } else {
            doc.getElementById('ob').innerHTML = results[0].label;
            doc.getElementById('obA').innerHTML = (results[0].confidence * 100).toFixed(0) + "%";
        }
    })
}