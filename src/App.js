import React, { useState } from "react";
import "./styles.css";

var emojiDictionary = {
  "😄": "Grinning Face with Smiling Eyes",
  "🥴": "Woozy Face",
  "🙄": "Face with Rolling Eyes to express disapproval ",
  "🌚": "Conveys Ironic sentiments ",
  "🤣": "Rolling on the Floor Laughing",
  "😳": "Flushed Face",
  "🤢": "Nauseated Face",
  "❤️": "Red Heart",
  "🤡": "Foolish",
  "😏": "Smirk Face"
};

var emojisweknow = Object.keys(emojiDictionary);
export default function App() {
  const [meaning, setMeaning] = useState("");

  function emojiInputHandler(event) {
    var userInput = event.target.value;

    var meaning = emojiDictionary[userInput];

    if (meaning === undefined) {
      meaning = "we dont have it in our database ! sorry :((";
    }

    //console.log(meaning);
    setMeaning(meaning);
  }

  function emojiClickHandler(emoji) {
    var meaning = emojiDictionary[emoji];
    setMeaning(meaning);
  }

  return (
    <div className="App">
      <h1> Emoji Intepreter :)</h1>

      <input onChange={emojiInputHandler} />

      <h2> {meaning} </h2>

      <h3> emojis we know </h3>
      {emojisweknow.map(function (emoji) {
        return (
          <span
            onClick={() => emojiClickHandler(emoji)}
            style={{ fontSize: "1.2rem", cursor: "pointer" }}
            key={emoji}
          >
            {" "}
            {emoji}{" "}
          </span>
        );
      })}
    </div>
  );
}

/**
 * things to notice is -
 * instead of class we use className in javascript
 * style takes an obj instead of string
 */
