import styled from 'styled-components';

export const FormStyled = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 15px;

  & label{
    display: flex;
    flex-direction: column;
    gap: 10px;
    color: white;
  }

  & input {
    width: 240px;
    height: 20px;
    margin-left: 0px;
  }

  & .name {
    width: 240px;
    height: 20px;
    margin-left: 2px;
  }

  & button {
    padding: 5px 10px;
    background-color: #f0f0f0;
    border: 0px;
    border-radius: 5px;
    cursor: pointer;
    transition: transform 200ms ease-in-out, background-color 200ms ease-in;
  }

  & button:hover {
    background-color: #1a73e8;
    color: white;
    transform: scale(1.05);
  }

`;





