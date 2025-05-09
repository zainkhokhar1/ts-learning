import React, { useState, useEffect } from "react";
import SingleTodo from "./SingleTodo.tsx";

type Todo = {
  content: string;
  createdAt: Date;
  completed: boolean;
};

type Props = {
  allTodos: Todo[];
};

const ShowContainer: React.FC<Props> = ({ allTodos }) => {
  return (
    <div className="show-container">
      <h3 className="heading-2">Todo's of all time</h3>
      <div className="flex-container">
        {allTodos.map((todo, index) => (
          <SingleTodo
            key={index}
            title={todo.content}
            completed={todo.completed}
            createdAt={new Date(todo.createdAt)}
          />
        ))}
      </div>
    </div>
  );
};

export default ShowContainer;
