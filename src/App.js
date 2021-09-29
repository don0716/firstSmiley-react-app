import React, { useState } from "react";
import "./styles.css";

var emojiDictionary = {
  "😀": "smile",
  "😃": "happy",
  "😅": "annoyed",
  "😂": "laughing with tears",
  "😊": "blush",
  "😇": "innocent",
  "🙂": "not so sure if i'm happy",
  "🙃": "upside down smile",
  "😉": "wink wink",
  "😍": "In LOVE",
  "😘": "kiss"
};

export default function App() {
  var [meaning, setMeaning] = useState("");

  function changeEmojiHandler(emoji) {
    var userInput = emoji.target.value;
    var meaning = emojiDictionary[userInput];

    if (meaning == undefined) {
      meaning = "We do not have this in our database";
    }
    setMeaning(meaning);
  }

  return (
    <div className="App">
      <h1>inside outt!</h1>
      <input onChange={changeEmojiHandler}></input>
      <div>Meaning: {meaning}</div>
    </div>
  );
}

/**
 *
 * VISER --. View -> Interact -> State in Event handler  -> Render
 */
