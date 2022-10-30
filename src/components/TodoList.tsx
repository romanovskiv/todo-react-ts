import React from 'react';
import Todo from './Todo';

type TodosState = {
  id: string;
  todoName: string;
  complete: boolean;
};
type TodoListType = {
  todos: TodosState[];
  toggleTodo: (id: string) => void;
  deleteTodo: (id: string) => void;
  classNames: () => string;
};

export default function TodoList({ todos, toggleTodo, deleteTodo, classNames }: TodoListType) {
  return (
    <div>
      {todos.length > 0 &&
        todos.map((todo) => {
          return (
            <Todo
              key={todo.id}
              todo={todo}
              toggleTodo={toggleTodo}
              deleteTodo={deleteTodo}
              classNames={classNames}
            />
          );
        })}
    </div>
  );
}
