import { StyledTodoInput } from './styled/TodoInput.styled';

type TodoInputType = {
  newTodoInput: React.RefObject<HTMLInputElement>;
  handleAddTodo: () => void;
};

export default function TodoInput({ newTodoInput, handleAddTodo }: TodoInputType) {
  return (
    <StyledTodoInput>
      <input
        className="todo-input"
        ref={newTodoInput}
        type="text"
        placeholder="Type your todo..."
      />
      <button className="todo-submit" onClick={handleAddTodo}>
        +
      </button>
    </StyledTodoInput>
  );
}
