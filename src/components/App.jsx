import React, { useState } from "react";
import Heading from "./Heading";
import ToDoItem from "./ToDoItem";
import Button from "./Button";
import InputArea from "./InputArea";

function App() {
  const [inputText, setInputText] = useState("");
  const [items, setItems] = useState([]);

  //Function to Handle new value entered in input field
  function handleChange(event) {
    const newValue = event.target.value;
    setInputText(newValue);
  }

  //Function To Add Items To ToDoList
  function addItem() {
    setItems((prevItems) => {
      return [...prevItems, inputText];
    });
    setInputText("");
  }

  //Function to Delete Items From To Do List
  function deleteItem(id) {
    console.log(id);
    setItems((prevItems) => {
      return prevItems.filter((item, index) => {
        return index != id;
      });
    });
  }

  return (
    <div className="container">
      <Heading />
      <InputArea
        onSomeChange={handleChange}
        inputTextValue={inputText}
        onSomeClick={addItem}
      />
      <div>
        <ul>
          {items.map((todoItem, index) => (
            <ToDoItem
              key={index}
              id={index}
              text={todoItem}
              afterChecked={deleteItem}
            />
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
