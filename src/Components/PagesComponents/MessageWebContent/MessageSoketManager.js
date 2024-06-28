// orderSocketManager.js
import io from "socket.io-client";

const SOCKET_URL_ONE = "http://localhost:3000";
const socket = io(SOCKET_URL_ONE);

let senderId = null;
let receiverId = null;

// Check if window and localStorage are available
if (typeof window !== "undefined" && typeof localStorage !== "undefined") {
  senderId = localStorage.getItem("senderId");
  receiverId = localStorage.getItem("receiverId");
}

let messageHandler = null;

socket.on("message", (data) => {
  if (messageHandler) {
    messageHandler(data);
  }
});

export const setChatHandler = (handler) => {
  messageHandler = handler;
};

export const sendChatToServer = async (message, files) => {
  try {
    const formData = new FormData();
    formData.append("sender_id", 19);
    formData.append("receiver_id", 18);
    formData.append("message", message);

    // Append selected files if available, but limit to 6
    if (files && files.length > 0) {
      const maxAttachments = 6;
      for (let i = 0; i < Math.min(files.length, maxAttachments); i++) {
        formData.append("attachment[]", files[i]);
      }
    }

    const response = await fetch("https://admin.envobyte.com/api/save/chat", {
      method: "POST",
      body: formData,
    });

    if (!response.ok) {
      throw new Error("Failed to send message");
    }

    return { sender_id: 1, message: message };
  } catch (error) {
    console.error("Error sending message:", error);
    throw error;
  }
};

export const fetchChatFromServer = async () => {
  try {
    const response = await fetch("https://admin.envobyte.com/api/chat/list", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        sender_id: 19,
        receiver_id: 18,
      }),
    });

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
