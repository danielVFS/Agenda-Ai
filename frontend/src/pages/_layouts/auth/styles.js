import styled from 'styled-components';
import { darken } from 'polished';

export const Wrapper = styled.div`
  height: 100%;
  background: linear-gradient(-90deg, #c31432, #240b36);
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Content = styled.div`
  width: 100%;
  max-width: 315px;
  text-align: center;

  form {
    display: flex;
    flex-direction: column;

    input {
      border: 0;
      border-radius: 4px;
      height: 44px;
      padding: 0 15px;
      color: #fff;
      margin: 0 0 10px;
      background: rgba(0, 0, 0, 0.1);

      &::placeholder {
        color: rgba(255, 255, 255, 0.4);
      }
    }

    span {
      color: #ff0000;
      align-self: flex-start;
      margin: 0 0 10px;
      font-weight: bold;
      border: 1px solid #ff0000;
      width: 100%;
      padding: 10px;
    }

    button {
      margin: 5px 0 0;
      height: 44px;
      font-size: 15px;
      font-weight: bold;
      color: #000;
      border-radius: 4px;
      background-color: #fff;
      border: 0;
      transition: background 0.2s;

      &:hover {
        background: ${darken(0.1, '#FFF')};
      }
    }

    a {
      color: rgba(255, 255, 255, 0.8);
      margin-top: 15px;
      font-size: 15px;
      opacity: 0.8;

      &:hover {
        opacity: 1;
      }
    }
  }
`;
