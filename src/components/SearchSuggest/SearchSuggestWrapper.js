import styled from "styled-components";

const SearchSuggestWrapper = styled.div`
  position: relative;
  text-align: left;
  margin-top: -1px;
  z-index: 1;
  cursor: default;
  user-select: none;
  .suggestWrapper {
    background: #fff;
    display: flex;
    flex-direction: column;
    list-style-type: none;
    margin: 0;
    padding: 0;
    box-shadow: 0 3px 8px 0 rgba(0, 0, 0, 0.2), 0 0 0 1px rgba(0, 0, 0, 0.08);
    border: 0;
    border-radius: 24px;
    border-top-left-radius: 0;
    border-top-right-radius: 0;
    box-shadow: 0 4px 6px 0 rgba(32, 33, 36, 0.28);
    overflow: hidden;
    padding-bottom: 4px;
    .btnContainer {
      height: 50px;
      margin-top: 15px;
      input[type="button"] {
        height: 36px;
        line-height: 27px;
        background-image: gradient(
          linear,
          left top,
          left bottom,
          from(#f5f5f5),
          to(#f1f1f1)
        );
        background-image: linear-gradient(top, #f5f5f5, #f1f1f1);
        border-radius: 2px;
        user-select: none;
        background-color: #f2f2f2;
        border: 1px solid #f2f2f2;
        border-radius: 4px;
        color: #5f6368;
        cursor: pointer;
        font-family: arial, sans-serif;
        font-size: 14px;
        margin: 11px 4px;
        min-width: 54px;
        padding: 0 16px;
        text-align: center;
        &:hover {
          background-image: gradient(
            linear,
            left top,
            left bottom,
            from(#f8f8f8),
            to(#f1f1f1)
          );
          background-image: linear-gradient(top, #f8f8f8, #f1f1f1);
          box-shadow: 0 1px 1px rgba(0, 0, 0, 0.1);
          background-color: #f8f8f8;
          background-image: linear-gradient(top, #f8f8f8, #f1f1f1);
          background-image: -o-linear-gradient(top, #f8f8f8, #f1f1f1);
          border: 1px solid #c6c6c6;
          box-shadow: 0 1px 1px rgba(0, 0, 0, 0.1);
          color: #222;
        }
      }
    }
    ul {
      flex: auto;
      padding-bottom: 0px;
      li {
        padding: 0px 16px;
        line-height: 22px;
        display: flex;
        align-items: center;
        min-width: 0;
        padding: 0;
        &:first-child {
          .suggestItem {
            border-top: 1px solid #dfe1e5;
            padding-top: 4px;
          }
        }
        &:hover {
          background-color: #eee;
        }
        .suggestItem {
          flex: auto;
          display: flex;
          margin: 0 20px;

          .info {
            display: flex;
            font-size: 16px;
            color: #212121;
            flex: auto;
            align-items: center;
            word-break: break-word;
            padding-right: 8px;
          }
          .action {
            display: flex;
            flex: 0 1 auto;
            align-self: stretch;
            > div {
              color: #36c;
              cursor: pointer;
              font: 13px arial, sans-serif;
              align-self: center;
              padding-right: 3px;
              text-decoration: none;
              &:hover {
                text-decoration: underline;
              }
            }
          }
        }
      }
    }
  }
`;

export default SearchSuggestWrapper;
