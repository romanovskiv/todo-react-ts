import styled from 'styled-components';

export const StyledFilters = styled.section`
  background: ${({ theme }) => theme.bgTodos};
  position: relative;
  height: 3.75rem;
  border-bottom-left-radius: 0.4rem;
  border-bottom-right-radius: 0.4rem;
  padding: 0 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 0.83rem;
  border: 1px solid #f0f0f0;

  .remaining {
    color: ${({ theme }) => theme.mainText};
  }

  .filters {
    height: 3.75rem;
    width: 100%;
    position: absolute;
    left: 0;
    bottom: -5rem;
    display: flex;
    justify-content: space-evenly;
    border-radius: 0.4rem;
    padding: 0 4.75rem;
    background: ${({ theme }) => theme.bgTodos};

    .filter {
      font-size: 0.9rem;
      font-weight: 500;

      &:hover {
        cursor: pointer;
        opacity: 0.8;
      }
    }

    .active-filter {
      color: #007bff;
    }
  }

  .filter,
  .clear {
    background: none;
    border: none;
    color: ${({ theme }) => theme.mainText};
    transition: all 150ms linear;
  }

  .clear:hover {
    cursor: pointer;
    color: rgb(168, 0, 0);
  }

  @media (min-width: 1440px) {
    height: 3rem;
    justify-content: space-between;

    .filters {
      position: relative;
      bottom: 0;
      height: 100%;
      width: 10rem;
      padding: 0;
      box-shadow: none;

      .filter {
        font-size: 0.83rem;
      }
    }
  }
`;
