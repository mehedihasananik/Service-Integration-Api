export const sendMessageToServer = async (message, files) => {
  try {
    const formData = new FormData();
    formData.append("sender_id", 19);
    formData.append("receiver_id", 18);
    formData.append("message", message);

    if (files && files.length > 0 && files.length <= 6) {
      for (const file of files) {
        formData.append("attachment[]", file);
      }
    } else if (files && files.length > 6) {
      console.log("Maximum number of attachments (6) exceeded.");
    }

    console.log(files);

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

    return { sender_id: 19, message: message };
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
          sender_id: 18,
          receiver_id: 19,
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
