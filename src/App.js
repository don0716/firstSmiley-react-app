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

var emojisWeKnow = Object.keys(emojiDictionary);

export default function App() {
  var [meaning, setMeaning] = useState("");

  function changeEmojiHandler(emoji) {
    var userInput = emoji.target.value;
    var meaning = emojiDictionary[userInput];

    if (meaning === undefined) {
      meaning = "We do not have this in our database";
    }
    setMeaning(meaning);
  }

  function emojiClickHandler(emoji) {
    var meaning = emojiDictionary[emoji];
    setMeaning(meaning);
  }

  return (
    <div className="App">
      <h1>Emoji Interpreter!</h1>
      <input onChange={changeEmojiHandler}></input>
      <div>{meaning}</div>

      <div> Emojis We Know! </div>

      {emojisWeKnow.map(function (emoji) {
        return (
          <span
            onClick={() => emojiClickHandler(emoji)}
            style={{ cursor: "pointer", padding: "0.5rem", fontSize: "1rem" }}
            key={emoji}
          >
            {" "}
            {emoji}
          </span>
        );
      })}
    </div>
  );
}

/**
 *
 * VISER --. View -> Interact -> State in Event handler  -> Render
 */
