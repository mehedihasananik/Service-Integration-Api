// orderSocketManager.js
import io from "socket.io-client";

const SOCKET_URL_ONE = "http://localhost:3000";
const socket = io(SOCKET_URL_ONE);

let messageHandler = null;

socket.on("message", (data) => {
  if (messageHandler) {
    messageHandler(data);
  }
});

export const setMessageHandler = (handler) => {
  messageHandler = handler;
};

export const sendMessageToServer = async (message, files) => {
  try {
    const formData = new FormData();
    formData.append("sender_id", 19);
    formData.append("receiver_id", 18);
    formData.append("message", message);

    // Append selected files if available
    if (files && files.length > 0) {
      for (const file of files) {
        formData.append("attachment[]", file);
      }
    }
    console.log(files);
    // http://192.168.0.103:8000
    const response = await fetch(
      "http://192.168.0.103:8000/api/save/chat/order",
      {
        method: "POST",
        body: formData,
      }
    );

    if (!response.ok) {
      throw new Error("Failed to send message");
    }

    return { sender_id: 19, message: message };
  } catch (error) {
    console.error("Error sending message:", error);
    throw error;
  }
};

export const fetchMessagesFromServer = async () => {
  try {
    const response = await fetch(
      "http://192.168.0.103:8000/api/save/chat/list",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          sender_id: 19,
          receiver_id: 18,
        }),
      }
    );

    if (!response.ok) {
      throw new Error("Failed to fetch messages");
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching messages:", error);
    throw error;
  }
};

export const disconnectSocket = () => {
  socket.disconnect();
};
