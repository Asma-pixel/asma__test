import React, { useContext } from "react";
import PropTypes from "prop-types";
import Context from "../context";
function TodoItem({ todo, index, onChange }) {
  const classes = [];
  const { removeTodo } = useContext(Context);
  if (todo.completed) {
    classes.push("done");
  }
  return (
    <li className="form">
      <span className={classes.join(" ")}>
        <input
          className="check"
          type="checkbox"
          onChange={() => onChange(todo.id)}
        />
        <strong>{index + 1}</strong>
        &nbsp;
        {todo.title}
      </span>
      <button className="cross" onClick={() => removeTodo(todo.id)}>
        &times;
      </button>
    </li>
  );
}
TodoItem.propTypes = {
  todo: PropTypes.object.isRequired,
  index: PropTypes.number,
  onChange: PropTypes.func.isRequired,
};
export default TodoItem;
