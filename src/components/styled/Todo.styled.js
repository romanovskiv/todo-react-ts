import styled from 'styled-components';
import checkIcon from './../../images/icon-check.svg';

export const StyledTodo = styled.div`
  min-height: 3.75rem;
  padding: 1rem;
  margin-bottom: 1rem;
  border: 1px solid #f0f0f0;
  border-radius: 0.4rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  color: ${({ theme }) => theme.todosText};

  &:hover,
  .todo-name:hover,
  .custom-checkbox:hover,
  input:hover,
  .todo-delete:hover {
    cursor: pointer;
  }

  .todo-name {
    overflow-wrap: anywhere;
    padding: 0.25rem;
    margin-left: 2rem;
    margin-top: 0.5rem;
    font-size: 0.83rem;
    display: flex;
    align-items: center;
    justify-content: start;
    width: 80%;
    position: relative;
    left: -2.5rem;
    transition: color 150ms linear;
    -webkit-touch-callout: none;
    -webkit-user-select: none;
    -khtml-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    &:hover {
      color: ${({ theme }) => theme.mainText};
    }
  }

  .complete-todo {
    text-decoration: line-through;
    color: #6c757d;
  }

  .todo-checkbox {
    opacity: 0;
    position: absolute;

    &:checked + .custom-checkbox {
      background: url(${checkIcon}), #28a745;
      background-repeat: no-repeat;
      background-position: center;

      &::after {
        content: '';
        position: absolute;
        top: 0.75rem;
        right: 0;
        left: 2.25rem;
        height: 2px;
      }
    }
  }

  .custom-checkbox {
    height: 1.3rem;
    min-width: 1.3rem;
    border: 1px solid ${({ theme }) => theme.complete};
    border-radius: 50%;
    margin-right: 0.75rem;
    transition: border 150ms linear;
  }

  .todo-delete {
    background: none;
    border: none;
    transition: color 150ms linear;
  }

  @media (min-width: 1440px) {
    &:hover > .todo-delete {
      visibility: visible;
    }

    .todo-name {
      font-size: 1rem;
    }

    .todo-delete {
      visibility: hidden;
    }
  }
`;
