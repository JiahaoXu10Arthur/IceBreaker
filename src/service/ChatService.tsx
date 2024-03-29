import SockJS from "sockjs-client";
import { Client } from "@stomp/stompjs";
import { serverPort, websocketPort } from "../macro/MacroServer";

let client: Client | null = null;

const connect = (roomCode: string, onMessageReceived: (msg: any) => void) => {
  const socket = new SockJS(`${serverPort}/chat`);
  client = new Client({
    brokerURL: `${websocketPort}/chat`,
    webSocketFactory: () => socket,
    onConnect: () => {
      console.log("Connected to STOMP server"); // Logging connection
      setTimeout(() => {
        if (client && client.connected) {
          console.log("Subscribing to /topic/room");
          client.subscribe(`/topic/room/${roomCode}`, (message) => {
            onMessageReceived(JSON.parse(message.body));
          });
        } else {
          console.error("STOMP client is not connected");
        }
      }, 1000); // Delay of 1 second
    },
    onStompError: (frame) => {
      console.error("Broker reported error: " + frame.headers["message"]);
      console.error("Additional details: " + frame.body);
    },
  });

  client.activate();
};

const sendMsg = (msg: any) => {
  if (client && client.connected) {
    client.publish({
      destination: `/app/room/${msg.roomCode}/sendMessage`,
      body: JSON.stringify(msg),
    });
  }
};

export { connect, sendMsg };
