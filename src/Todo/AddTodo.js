import React, { useState } from "react";
import PropTypes from "prop-types";
function AddTodo({ onCreate }) {
  const [Valid, setValid] = useState(true);
  const [value, setValue] = useState("");
  function submitHandler(event) {
    event.preventDefault();
    if (value.replace(/\s+/g, "") !== "") {
      onCreate(value.trim());
      setValue("");
      setValid(true);
    } else {
      setValid(false);
    }
  }
  return (
    <div className={Valid ? "container" : "container-error"}>
      <form className="adtodos" onSubmit={submitHandler}>
        <input
          className="text"
          type="text"
          value={value}
          onChange={(event) => setValue(event.target.value)}
        />
        <button className="add">Add doings</button>
      </form>
      <span className="err"> Не добавляй пустоту :'( </span>
    </div>
  );
}
AddTodo.propTypes = {
  onCreate: PropTypes.func.isRequired,
};
export default AddTodo;
