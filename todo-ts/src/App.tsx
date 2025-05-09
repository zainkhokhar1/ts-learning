import React, { useState, useEffect } from "react";
import "./App.css";
import Container from "./components/create-todo/Container.tsx";
import ShowContainer from "./components/show-todos/Container.tsx";

type Todo = {
  content: string;
  createdAt: Date;
  completed: boolean;
};

function App() {
  const [allTodos, setAllTodos] = useState<Todo[]>([]);

  // Fetch todos from localStorage on initial render
  useEffect(() => {
    const storedTodos = localStorage.getItem("todos");
    if (storedTodos) {
      setAllTodos(JSON.parse(storedTodos));
    }
  }, []);

  // Listen for changes in localStorage and update state
  useEffect(() => {
    const handleStorageChange = () => {
      const storedTodos = localStorage.getItem("todos");
      if (storedTodos) {
        setAllTodos(JSON.parse(storedTodos)); // Update the state with the latest todos
      }
    };

    window.addEventListener("storage", handleStorageChange);

    return () => {
      window.removeEventListener("storage", handleStorageChange);
    };
  }, []);

  return (
    <div className="container">
      {/* Show the header of the todo app */}
      <header className="header">
        <h2>Ts Todo App</h2>
      </header>

      {/* Container to create a todo */}
      <Container allTodos={allTodos} setAllTodos={setAllTodos} />

      {/* Container to show the created todos */}
      <ShowContainer allTodos={allTodos} />
    </div>
  );
}

export default App;
