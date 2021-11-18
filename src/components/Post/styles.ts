import styled from "styled-components";
import { Button } from "../Button";

export const PostContainer = styled.div`
  padding: 60px 15px;

  .search {
    margin: 10px 0;
    h3 {
      font-family: "Fredoka One", sans-serif;
      font-size: 16px;
      margin-bottom: 15px;
    }

    label {
      background: #f3f3f3;
      width: 100%;
      display: flex;
      align-items: center;
      border-radius: 8px;
      gap: 8px;
      padding: 8px 15px;

      svg {
        font-size: 22px;
        opacity: 0.4;
      }
      input {
        border: 0;
        background: transparent;
        &::placeholder {
          font-size: 14px;
          opacity: 0.6;
        }

        &:focus {
          box-shadow: none;
        }
      }
    }
  }

  .counter {
    font-family: "Fredoka One", sans-serif;
    font-size: 18px;
    margin-top: 25px;
    color: #63409c;
  }

  .post-items {
    margin-top: 20px;
    border-radius: 8px;
    background: #f3f3f3;

    figure {
      position: relative;

      img {
        width: 100%;
        height: 180px;
        object-fit: cover;
        border-radius: 8px;
      }

      figcaption {
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        padding: 20px;
        display: flex;
        flex-direction: column;
        gap: 20px;

        h2 {
          font-family: "Fredoka One", sans-serif;
          font-size: 22px;
          margin-bottom: 15px;
          color: #ffffff;
        }

        .edit {
          width: 32px;
          height: 32px;
          margin-left: auto;
          background: #ffffff;
          padding: 10px;
          border-radius: 120px;
          display: flex;
          align-items: center;
          font-size: 12px;
          cursor: pointer;
          margin-top: -50px;
          margin-bottom: 30px;
        }
        .cta {
          display: flex;
          gap: 10px;

          .primary {
            padding: 8px 12px !important;
            &:last-child {
              background: #850089;
            }
          }
        }
      }
    }

    .content {
      padding: 10px 15px;
      display: flex;
      justify-content: space-between;
      align-self: center;
      gap: 2px;

      .date {
        flex: 1;
        text-align: center;
        //-right: 1px solid #b0b0b0;
        opacity: 0.6;

        h5 {
          font-family: "Fredoka One", sans-serif;
          font-size: 36px;
          margin: 0;
          color: #b0b0b0;
        }

        span {
          font-weight: 600;
        }
      }

      .desc {
        flex: 6;
        padding: 0 15px;
        opacity: 0.6;

        a {
          color: #850089;
          opacity: 1 !important;
          margin-left: 15px;
          font-weight: 600;
        }
      }
    }
  }
`;
export const Btn = styled(Button)`
  padding: 10px 25px;
  border-radius: 8px;
  border: 0;
  background: #63409c;

  &:focus {
    box-shadow: none;
  }
`;
