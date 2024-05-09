"use client";

import React, { useState } from "react";
import { Picker } from "emoji-picker-react";

const Emojis = () => {
  const [emoji, setEmoji] = useState("");
  const [showImage, setShowImage] = useState(false);

  const handleEmojiClick = (event, emojiObject) => {
    setEmoji(emojiObject.emoji);
  };

  const toggleImage = () => {
    setShowImage(!showImage);
  };

  return (
    <div>
      {/* Button to toggle image visibility */}
      <button onClick={toggleImage}>
        {showImage ? "Hide Image" : "Show Image"}
      </button>

      {/* Emoji picker */}
      <Picker onEmojiClick={handleEmojiClick} />

      {/* Display image if showImage is true */}
      {showImage && (
        <div className="image-container">
          <img src="path_to_your_image.jpg" alt="Image" />
          <span className="selected-emoji">{emoji}</span>
        </div>
      )}
    </div>
  );
};

export default Emojis;
