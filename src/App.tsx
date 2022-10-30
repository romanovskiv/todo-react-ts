import React, { useState, useRef, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';
import classNames from 'classnames';

import GlobalStyles from './components/styled/Global';
import { StyledMain } from './components/styled/Main.styled.js';
import Header from './components/Header';
import TodoInput from './components/TodoInput';
import TodoList from './components/TodoList';
import TodoFilters from './components/TodoFilters';

const LOCAL_STORAGE_KEY = 'todoApp.todos';

function App() {
  const [todos, setTodos] = useState<
    {
      id: string;
      todoName: string;
      complete: boolean;
    }[]
  >([]);
  const [filter, setFilter] = useState('all');
  const [filteredTodos, setFilteredTodos] = useState<
    {
      id: string;
      todoName: string;
      complete: boolean;
    }[]
  >([]);
  const [allFilterActive, setAllFilterActive] = useState(true);
  const [activeFilterActive, setActiveFilterActive] = useState(false);
  const [completedFilterActive, setCompletedFilterActive] = useState(false);

  const newTodoInput = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const storedTodos = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY) || '{}');
    if (storedTodos) {
      setTodos(storedTodos);
      setFilter('all');
      setFilteredTodos(storedTodos);
    }
    if (newTodoInput.current) newTodoInput.current.focus();
  }, []);

  useEffect(() => {
    if (todos.length !== 0) {
      localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(todos));
    }
    if (newTodoInput.current) newTodoInput.current.focus();
  }, [todos]);

  // ADD TODO
  function handleAddTodo() {
    if (newTodoInput.current) {
      const todoName = newTodoInput.current.value;
      if (todoName.trim() === '') {
        return;
      }
      if (todos.length >= 1) {
        setTodos([...todos, { id: uuidv4(), todoName: todoName, complete: false }]);
      } else {
        setTodos([{ id: uuidv4(), todoName: todoName, complete: false }]);
      }

      newTodoInput.current.value = '';
    }
  }

  // TOGGLE TODO COMPLETE/NOT COMPLETE
  function toggleTodo(id: string) {
    const newTodos = [...todos];
    const selectedTask = todos.find((todo) => todo.id === id);
    if (selectedTask) {
      selectedTask.complete = !selectedTask.complete;
      setTodos(newTodos);
    }
  }

  // CLEAR ALL TODOS MARKED COMPLETE
  function handleClear() {
    if (todos.length > 0) {
      const remainingTodos = todos.filter((todo) => !todo.complete);
      if (remainingTodos.length === 0) localStorage.clear();
      setTodos(remainingTodos);
    }
  }

  // CLEAR TODO WHEN X CLICKED
  function deleteTodo(id: string) {
    if (todos.length > 0 && window.confirm('Delete the item?')) {
      const remainingTodos = todos.filter((todo) => todo.id !== id);
      if (remainingTodos.length === 0) localStorage.clear();
      setTodos(remainingTodos);
    }
  }

  // COUNT ANY UNCOMPLETED TODOS
  function countRemaining() {
    if (todos.length > 0) {
      const count = todos.filter((todo) => !todo.complete);

      if (count.length === 1) {
        return `1 todo left`;
      } else {
        return `${count.length} todos left`;
      }
    }
  }

  // CHANGE LIST DISPLAYED BASED ON FILTER
  useEffect(() => {
    filterList();
  }, [todos, filter]);

  function filterList() {
    if (filter === 'all') {
      setFilteredTodos(todos);
      setAllFilterActive(true);
      setActiveFilterActive(false);
      setCompletedFilterActive(false);
    } else if (filter === 'active') {
      const activeTodos = todos.filter((todo) => !todo.complete);
      setFilteredTodos(activeTodos);
      setActiveFilterActive(true);
      setAllFilterActive(false);
      setCompletedFilterActive(false);
    } else if (filter === 'completed') {
      const completedTodos = todos.filter((todo) => todo.complete);
      setFilteredTodos(completedTodos);
      setCompletedFilterActive(true);
      setAllFilterActive(false);
      setActiveFilterActive(false);
    }
  }

  return (
    <StyledMain>
      <GlobalStyles />

      <Header />

      <TodoInput newTodoInput={newTodoInput} handleAddTodo={handleAddTodo} />

      <TodoList
        todos={filteredTodos}
        toggleTodo={toggleTodo}
        deleteTodo={deleteTodo}
        classNames={classNames}
      />

      <TodoFilters
        countRemaining={countRemaining}
        setFilter={setFilter}
        handleClear={handleClear}
        allFilterActive={allFilterActive}
        activeFilterActive={activeFilterActive}
        completedFilterActive={completedFilterActive}
      />
    </StyledMain>
  );
}

export default App;
