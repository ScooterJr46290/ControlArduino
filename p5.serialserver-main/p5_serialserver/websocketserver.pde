
// variable for websocket server
WebsocketServer server;

// variable for port
int serverPort = 8081;
int dataMsg = 100;
String preMsg = "0";

void webSocketServerEvent(String msg) {
  //println(dataMsg);
  if (msg != preMsg) {
    dataMsg = dataMsg == 100 ? 76 : 100;
  }
  preMsg = msg;
  
  JSONObject json = parseJSONObject(msg);
  //println(json);
  
  if (json == null) {
    println("no parsing");
  }
  
  else {
    // i was able to retrieve the method
    //String meth = json.getString("method");
    //dataMsg = json.getString("data");
  }
  
  
}

// TODO: method for stopping web socket server
// after closing all serialport connections
