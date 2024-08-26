int now;
int deltaTime = 100;

void setup() {

  // create canvas
  size(500, 500);

  printSerialList();

  portName = "none";

  server = new WebsocketServer(this, serverPort, "/");

  setupColors();
  setupText();
  setupControlP5();
  findLocalIP();
}

void draw () {

  drawBackground();
  drawText();

  if (portName != "none") {
    portWrite();
    delay(deltaTime/10);
    portRead();
  }
  
  if (millis() > now + deltaTime ) {
  //server.sendMessage("0");
  now = millis();
  }
  delay(deltaTime);
}
