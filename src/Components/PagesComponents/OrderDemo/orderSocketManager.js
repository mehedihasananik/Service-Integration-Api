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

export const sendMessageToServer = async (message, selectedFile) => {
  try {
    const formData = new FormData();
    formData.append("sender_id", 1);
    formData.append("receiver_id", 18);
    formData.append("message", message);
    if (selectedFile) {
      formData.append("attachment", selectedFile);
    }
    const response = await fetch(
      "http://192.168.10.16:8000/api/save/chat/order",
      {
        method: "POST",
        body: formData,
      }
    );

    if (!response.ok) {
      throw new Error("Failed to send message");
    }

    return { sender_id: 1, message: message };
  } catch (error) {
    console.error("Error sending message:", error);
    throw error;
  }
};

export const fetchMessagesFromServer = async () => {
  try {
    const response = await fetch(
      "http://192.168.10.16:8000/api/save/chat/list",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          sender_id: 1,
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
