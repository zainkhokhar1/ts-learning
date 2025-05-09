import React, { useState } from "react";

type Prop = {
  title: string;
  completed: boolean;
  createdAt: Date;
};

const SingleTodo: React.FC<Prop> = ({ title, completed, createdAt }) => {
  const [isTodoCompleted, setIsTodoCompleted] = useState<boolean>(completed);

  const handleCompleted = (event: React.ChangeEvent<HTMLInputElement>) => {
    setIsTodoCompleted(event.target.checked);
  };

  return (
    <div className="single-todo">
      <div className="single-todo-inner">
        <span className="single-todo-heading">{title}</span>
        <span className="single-todo-input-container">
          <input
            type="checkbox"
            checked={isTodoCompleted}
            onChange={handleCompleted}
          />
        </span>
      </div>
      <div className="single-todo-createdAt">
        Created At:{" "}
        {createdAt.toDateString().slice(0, 7) +
          createdAt.toDateString().slice(10)}
      </div>
    </div>
  );
};

export default SingleTodo;
