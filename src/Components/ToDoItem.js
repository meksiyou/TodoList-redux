import React from "react";
import { Button } from "semantic-ui-react";

const ToDoItem = ({ toDo }) => (
  <div className="Item">
    <h3> {toDo} </h3>
    <Button.Group>
      <Button>Done</Button>
      <Button>Edit</Button>
      <Button>Delete</Button>
    </Button.Group>
  </div>
);

export default ToDoItem;
