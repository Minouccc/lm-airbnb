import styled from "styled-components";

export const RightWrapper = styled.div`
  flex: 1;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  color: ${(props) => props.theme.text.primaryColor};
  font-size: 14px;
  font-weight: 600px;

  .btns {
    display: flex;
    box-sizing: content-box;
    .btn {
      box-sizing: content-box;
      height: 18px;
      line-height: 18px;
      padding: 12px 15px;
      border-radius: 22px;
      cursor: pointer;

      &:hover {
        background-color: #f5f5f5;
      }
    }
    .btn:nth-child(3) {
      position: relative;
      top: 1px;
    }
  }

  .profile {
    position: relative;
    display: flex;
    width: 77px;
    height: 42px;
    justify-content: space-evenly;
    align-items: center;
    margin-right: 24px;
    box-sizing: border-box;
    border: 1px solid #ccc;
    border-radius: 25px;
    background-color: #fff;
    color: ${(props) => props.theme.text.primaryColor};
    cursor: pointer;
    transition: box-shadow 200ms ease;

    ${(props) => props.theme.mixins.boxShadow};

    .panel {
      position: absolute;
      top: 60px;
      right: 0;
      width: 240px;
      background-color: #fff;
      border-radius: 10px;
      box-shadow: 0 0 6px rgba(0, 0, 0, 0.2);
      color: #666;

      .top {
        border-bottom: 1px solid #ddd;
      }
      .top,
      .bottom {
        padding: 10px 0;

        .item {
          height: 40px;
          line-height: 40px;
          padding: 0 16px;

          &:hover {
            background-color: #f5f5f5;
          }
        }
      }
    }
  }
`;
