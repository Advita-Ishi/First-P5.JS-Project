function preload() {

}

function setup() {
    canvas = createCanvas(500,350);
    canvas.position(110,250);
    video = createCapture(VIDEO);
    video.hide();
}

function draw() {
    image(video,0,0,300,300);
    fill('green');
    rect(0,150,350,20);
    fill('red')
    circle(0,150,250,20)
    
}

function take_snapshot() {
    save('advita.png');
}

