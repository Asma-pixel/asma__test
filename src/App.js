import React from "react";
import TodoList from "./Todo/TodoList";
import Context from "./context";
import AddTodo from "./Todo/AddTodo";
function App() {
  let [todos, setTodos] = React.useState([
    { id: 1, comleted: false, title: "Купи слона" },
    { id: 2, comleted: false, title: "Купи машину" },
    { id: 3, comleted: false, title: "Купи мышь" },
  ]);

  function toggleTodo(id) {
    setTodos(
      todos.map((todo) => {
        if (todo.id === id) {
          todo.completed = !todo.completed;
        }
        return todo;
      })
    );
  }
  function removeTodo(id) {
    setTodos(todos.filter((todo) => todo.id != id));
  }
  function addTodo(title) {
    setTodos(
      todos.concat([
        {
          title,
          id: Date.now(),
          comleted: false,
        },
      ])
    );
  }
  return (
    <Context.Provider value={{ removeTodo }}>
      <div className="wrapper">
        <h1>React learning</h1>
        <AddTodo onCreate={addTodo} />
        <TodoList todos={todos} onToggle={toggleTodo} />
      </div>
    </Context.Provider>
  );
}

export default App;
