int baudRate = 9600;
int waitTime = 100;

int LED = 13;

void setup() {
  Serial.begin(baudRate);
  pinMode(LED, OUTPUT);
  digitalWrite(LED, LOW);
}

void loop() {
    if (Serial.available()>0){
    //int inByte = ;
    //inByte.trim();
    // Process the received character
    if (Serial.read() == 100) {
      digitalWrite(LED, HIGH); // Turn on the LED (example action)
      //Serial.println("High received");
    } else /*if (Serial.read() == 76)*/ {
      digitalWrite(LED, LOW); // Turn off the LED (example action)
      //Serial.println("Low received");
    }
    }
    delay(waitTime);
}
