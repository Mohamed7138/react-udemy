import React from "react";
import Emojis from "./emojis";
import EmojiPedia from "./emjipedia";

function createEmoji(Emojis) {
  return (
    <EmojiPedia key={Emojis.id} name={Emojis.names} meaning={Emojis.meaning} />
  );
}

function App() {
  return <div>{Emojis.map(createEmoji)}</div>;
}

export default App;
