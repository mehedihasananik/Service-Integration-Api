// orderSocketManager.js
import io from "socket.io-client";

const SOCKET_URL_ONE = "http://localhost:3000";
const socket = io(SOCKET_URL_ONE);
const senderId = localStorage.getItem("senderId");
const receiverId = localStorage.getItem("receiverId");

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
    formData.append("sender_id", senderId);
    formData.append("receiver_id", receiverId);
    formData.append("message", message);

    // Append selected files if available and not exceeding the maximum limit
    if (files && files.length > 0 && files.length <= 6) {
      for (const file of files) {
        formData.append("attachment[]", file);
      }
    } else if (files && files.length > 6) {
      // Show an error message or handle the case when the maximum number of attachments is exceeded
      console.log("Maximum number of attachments (6) exceeded.");
    }

    console.log(files);
    // http://192.168.10.15:8000
    const response = await fetch(
      "https://admin.envobyte.com/api/save/chat/order",
      {
        method: "POST",
        body: formData,
      }
    );

    if (!response.ok) {
      throw new Error("Failed to send message");
    }

    return { sender_id: senderId, message: message };
  } catch (error) {
    console.error("Error sending message:", error);
    throw error;
  }
};
export const fetchMessagesFromServer = async () => {
  try {
    const response = await fetch(
      "https://admin.envobyte.com/api/save/chat/list",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          sender_id: receiverId,
          receiver_id: senderId,
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
