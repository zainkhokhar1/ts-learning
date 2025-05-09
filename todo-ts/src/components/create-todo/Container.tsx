import React, { useState, useEffect } from "react";

type Todo = {
  content: string;
  createdAt: Date;
  completed: boolean;
};

type Props = {
  allTodos: Todo[];
  setAllTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
};

const Container: React.FC<Props> = ({ allTodos, setAllTodos }) => {
  const [text, setText] = useState<string>("");

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setText(event.target.value);
  };

  const handleCreateTodo = () => {
    const newTodo: Todo = {
      content: text,
      createdAt: new Date(),
      completed: false,
    };

    const updatedTodos = [...allTodos, newTodo];
    setAllTodos(updatedTodos); // Update state
    localStorage.setItem("todos", JSON.stringify(updatedTodos)); // Update localStorage
    setText(""); // Clear input
  };

  return (
    <div className="create-container">
      {/* heading */}
      <h3>Create Todo's</h3>

      <section className="input-container">
        <label htmlFor="input">Enter the Todo</label>
        <section className="inner-container">
          <input
            type="text"
            id="input"
            value={text}
            onChange={handleInputChange}
          />
          <button onClick={handleCreateTodo}>Create Todo</button>
        </section>
      </section>
    </div>
  );
};

export default Container;
