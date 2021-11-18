import styled from "styled-components";
import { Card, Input as Inputs, Label as Labels } from "reactstrap";

export const Background = styled.div`
  width: 100%;
  height: 100vh;
  background: rgb(49, 0, 125);
  background: linear-gradient(
    90deg,
    rgba(49, 0, 125, 1) 0%,
    rgba(60, 21, 132, 1) 52%,
    rgba(49, 0, 125, 1) 100%
  );

  display: flex;
  justify-content: center;
  align-items: center;

  .row {
    align-items: center;
    justify-content: space-around;
  }
`;

export const CardItem = styled(Card)`
  background: #ffffff;
  color: #121212;
  padding: 40px;

  .title {
    margin-bottom: 30px;

    .logo{
      width: 140px;
    }
  }

  .body{
    margin: 10px;
    h1{
      font-size: 20px;
      padding: 10px 0;
    }
    a{
      text-decoration: none;
      color: #121212;
      
    }
  }
  .form {
    display: flex;
    flex-direction: column;
    gap: 15px;

    .secondary {
      background: #345a97;
    }

    > div.separator {
      display: flex;
      align-items: center;
      justify-content: center;
      position: relative;
      font-family: "Fredoka One", sans-serif;
      font-size: 16px;
      color: #a4a4a4;

      &::after,
      &::before {
        content: "";
        position: absolute;
        top: 13px;
        width: 44%;
        height: 1px;
        background-color: #f5f5f5;
      }

      &::after {
        right: 0;
      }

      &::before {
        left: 0;
      }
    }
  }
  .cta {
    width: 100%;
  }
`;

export const Input = styled(Inputs)`
  background: #f5f5f5;
  border: 0;
  padding: 12px 15px;
  border-radius: 5px;
  &::placeholder {
    font-size: 12px;
    opacity: 0.5;
  }
`;

export const Label = styled(Labels)`
  font-family: "Fredoka One", sans-serif;
  font-size: 14px;

  margin-bottom: 15px;
`;

export const Text = styled.div`
  h1 {
    font-family: "Fredoka One", sans-serif;
    color: #ffffff;
  }

  p {
    margin: 20px 0;
    color: #f5f5f5;
    opacity: 0.6;
  }

  .cta{
    display: flex;
    align-items: center;
    gap: 18px;
  }
  .primary{
    background: #ffffff !important;
    padding: 14px 30px;
    color: rgb(49, 0, 125);
    border: none;
    border-radius: 8px;
    font-size: 18px;
  }
`;
