import styled from 'styled-components';

export const StyledHeader = styled.header`
  height: 6rem;
  display: flex;
  justify-content: space-between;
  align-items: center;

  .title {
    color: #000;
    padding-top: 0.5rem;
    letter-spacing: 10px;
    font-weight: 700;
  }

  @media (min-width: 1440px) {
    margin-top: 1rem;
  }
`;
