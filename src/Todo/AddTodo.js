import React, { useState } from "react";
import PropTypes from "prop-types";
function AddTodo({ onCreate }) {
  const [value, setValue] = useState("");
  function submitHandler(event) {
    event.preventDefault();
    if (value.trim) {
      onCreate(value);
      setValue("");
    }
  }
  return (
    <div className="container">
      <form className="adtodos" onSubmit={submitHandler}>
        <input
          id="textadd"
          className="text-back"
          type="text"
          value={value}
          onChange={(event) => setValue(event.target.value)}
        />
        <button id="botadd" className="add">
          Add doings
        </button>
      </form>
      <span id="err" className="error-fix">
        {" "}
        Ашипка{" "}
      </span>
    </div>
  );
}
AddTodo.propTypes = {
  onCreate: PropTypes.func.isRequired,
};
export default AddTodo;
