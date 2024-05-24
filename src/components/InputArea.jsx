import React from "react";
import Button from "./Button";

function InputArea(props) {
  return (
    <div className="form">
      <input
        onChange={props.onSomeChange}
        type="text"
        value={props.inputTextValue}
      />
      <Button afterClick={props.onSomeClick} />
    </div>
  );
}

export default InputArea;
