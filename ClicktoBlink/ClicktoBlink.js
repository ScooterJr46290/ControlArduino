// Serial write example
const exampleName = '08-writeExample';
let yellow, black, serial, serialPortName = 'COM5';
let htmlInputPortName, button, outMessage = 100;

function setup() {
    createCanvas(300, 300);
    yellow = color(255, 255, (255 * 2) / 8);
    black = color(0);
    textAlign(LEFT, CENTER);

    htmlInputPortName = createInput(serialPortName);
    button = createButton('update port');
    button.mousePressed(updatePort);

    serial = new p5.SerialPort();

    console.log('p5.serialport.js ' + serial.version);

    // Get a list of the ports available
    serial.open(serialPortName);
    serial.on('error', serialError);

    console.log("WebSocket Server: " + serial.serverName);
}

function draw() {
    background(yellow);
    fill(black);
    text(exampleName, (5 * width) / 100, (5 * height) / 100);
    text('click to change the LED', 10, 10);
}

function updatePort() {
    serialPortName = htmlInputPortName.value();
    serial.open(serialPortName);
    console.log("Updated Port: " + serialPortName);
}

function mouseReleased() {
    outMessage = outMessage === 100 ? 76 : 100;
    let dataObject = {
      method: "write",
      data: outMessage
    };
    serial.emit(dataObject);
    console.log(outMessage);
}

function serialError(err) {
    console.error("Serial Error: " + err);
}
