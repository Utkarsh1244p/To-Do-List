import React from "react";

function Button(props) {
  return (
    <button onClick={props.afterClick}>
      <span>Add</span>
    </button>
  );
}

export default Button;
