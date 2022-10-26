music1 = "";
music2 = "";

function preload()
{
    function preload() {
        music1 = loadSound("Avicii - The Nights (320 kbps).mp3");
        music2 = loadSound("Harry Potter - Main Theme.mp3");
    }
}

function setup()
{
        Canvas = createCanvas(600, 600);
        Canvas.center();
    
        video = createCapture(VIDEO);
        video.hide();
}

function draw() {
    image(video, 0, 0, 650, 600);
    fill("#FF0000");
    stroke("#FF0000");
}