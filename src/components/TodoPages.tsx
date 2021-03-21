import React, { useState, useEffect } from "react";
import { TodoForm } from "../components/toDoForm";
import { TodoList } from "../components/TodoList";
import { ITodo } from "../iterfaces";

declare var confirm: (question: string) => boolean;

export const TodoPage: React.FC = () => {
  const [todos, setTodos] = useState<ITodo[]>([]);

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("todos") || "[]") as ITodo[];
    setTodos(saved);
  }, []);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const addHandler = (title: string) => {
    const newTodo: ITodo = {
      title: title,
      id: Date.now(),
      complited: false,
    };
    setTodos((prev) => [newTodo, ...prev]);
  };

  const toggleHandler = (id: number) => {
    setTodos((prev) =>
      prev.map((todo) => {
        if (todo.id === id) {
          todo.complited = !todo.complited;
        }
        return todo;
      })
    );
  };

  const removeHandler = (id: number) => {
    const shoudRemove = confirm("You want to delet element?");
    if (shoudRemove) {
      setTodos((prev) => prev.filter((todo) => todo.id !== id));
    }
  };

  return (
    <React.Fragment>
      <TodoForm onAdd={addHandler} />
      <TodoList
        todos={todos}
        onToggle={toggleHandler}
        onRemove={removeHandler}
      />
    </React.Fragment>
  );
};
