import styled from "styled-components";

const SearchInputWrapper = styled.div`
  > div.searchWraper {
    background: #fff;
    display: flex;
    border-radius: 8px;
    border: 1px solid #dfe1e5;
    box-shadow: none;
    border-radius: 24px;
    z-index: 3;
    height: 44px;
    margin: 0 auto;
    padding: 0px 15px;
    &.searching {
      border-bottom-left-radius: 0;
      border-bottom-right-radius: 0;
      border-color: rgba(223, 225, 229, 0);
      box-shadow: 0 1px 6px 0 rgba(32, 33, 36, 0.28);
    }
    &:hover,
    &.focus {
      box-shadow: 0 1px 6px 0 rgba(32, 33, 36, 0.28);
      border-color: rgba(223, 225, 229, 0);
    }

    > div.inputWraper {
      display: flex;
      flex: 1;
      flex-wrap: wrap;

      > input[type="text"] {
        background-color: transparent;
        border: none;
        margin: 0;
        padding: 0;
        color: rgba(0, 0, 0, 0.87);
        word-wrap: break-word;
        outline: none;
        display: flex;
        flex: 100%;
        tap-highlight-color: transparent;
      }
    }
    > div.btnWraper {
      display: flex;
      flex: 0 0 auto;
      align-items: center;
      flex-direction: row;
      cursor: pointer;
      > span {
        background: url(//www.gstatic.com/images/branding/googlemic/2x/googlemic_color_24dp.png)
          0 0 no-repeat;
        height: 24px;
        width: 24px;
        background-size: 24px;
        vertical-align: middle;
      }
    }
  }
`;

export default SearchInputWrapper;
