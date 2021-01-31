import React from "react";

function emojisComponents(props) {
  return (
    <dl className="card">
      <dt>{props.emoji} </dt>
      <dd>{props.names}</dd>
      <dd>{props.meaning}</dd>
    </dl>
  );
}

export default emojisComponents;
