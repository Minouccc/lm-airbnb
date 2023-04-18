import styled from "styled-components";

export const PaginationWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 30px;
  .info {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    .ant-pagination-item {
      border-radius: 50%;
      margin: 0 7px;
      a {
        color: #000;
      }
      &:hover {
        text-decoration: underline;
        a {
          color: #000;
        }
      }
    }
    .ant-pagination-item-active {
      background-color: #222;
      border-color: #222;
      border-radius: 50%;

      a {
        color: #fff;
      }
      &:hover {
        text-decoration: underline;
        a {
          color: #fff;
        }
      }
    }

    .ant-pagination-options,
    .ant-select-selector {
      display: none;
    }

    .desc {
      margin-top: 15px;
    }
  }
`;
