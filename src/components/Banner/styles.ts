import styled from "styled-components";
import { Button } from "../Button";

export const BannerContent = styled.div`
  position: relative;
  width: 100%;
  height: 260px;
  background: rgb(49, 0, 125);
  background: linear-gradient(
    90deg,
    #63409c 0%,
    #583495 52%,
    rgba(49, 0, 125, 1) 100%
  );

  display: flex;
  align-items: flex-end;
  .config{
    position: absolute;
    top: 20px;
    right: 100px;
    display: flex;
    align-items: center;
    color: #63409c;

    span{
      font-size: 14px;
      font-weight: 600;
      color: #ffffff;
    }

    label{
      width: 38px;
      height: 38px;
      margin-left: 10px;
      background: #ffffff;
      padding: 10px;
      border-radius: 120px;
      display: flex;
      align-items: center;
    }
  }
`;

export const Avatar = styled.div`
  width: 200px;
  height: 200px;
  border-radius: 120px;
  border: 6px solid #dedede;
  margin-left: auto;
  margin-bottom: -70px;
  background: #ffffff;

  display: flex;
  justify-content: center;
  align-items: center;

  font-size: 60px;
  color: #583495;

  font-family: "Fredoka One", sans-serif;

`;

export const BannerItens = styled.div`
  position: relative;
  padding: 0 15px;
   h1 {
    font-size: 32px;
    font-family: "Fredoka One", sans-serif;
    color: #ffffff;
  }

  h2 {
    font-size: 18px;
    font-family: "Fredoka One", sans-serif;
    color: #dedede;
    opacity: 0.6;
    margin: 10px 0 25px;
  }

  .cta{
    display: flex;
    gap: 10px;
    margin: 8px 0;

  }

  .agende{
    position: absolute;
    bottom: 20px;
    right: 0;
    display: flex;
    align-items: center;
    color: #ffffff;

    span{
      font-size: 14px;
      font-weight: 600;
    }

    label{
      width: 38px;
      height: 38px;
      margin-left: 10px;
      background: #63409c;
      padding: 10px;
      border-radius: 120px;
      display: flex;
      align-items: center;
    }
  }
`;

export const Btn = styled(Button)`
  margin-bottom: 20px;

  padding: 10px 20px;
  border-radius: 8px;
  border: 0;

  &:first-child{
    color: rgb(49, 0, 125);
    background: #ffffff;
  }

  &:last-child{
    background: #63409c;
  }
`;
