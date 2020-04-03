import styled from "styled-components";

const SearchFormWrapper = styled.div`
  position: relative;
  margin: 0 auto;
  padding-left: 12px;
  padding-top: 6px;
  width: 45%;

  > .btnContainer {
    width: 100%;
    padding-top: 18px;
    position: absolute;
    top: 53px;
    z-index: 0;
  }
`;

export default SearchFormWrapper;
