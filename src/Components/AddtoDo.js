import React from "react";

const AddToDo = () => {
  return (
    <div>
      <div className="ui fluid action input">
        <input type="text" placeholder="Add tasks" />
        <div className="ui button">Add</div>
      </div>
    </div>
  );
};

export default AddToDo;
