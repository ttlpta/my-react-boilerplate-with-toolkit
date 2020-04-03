import styled from "styled-components";

export default styled.div`
  display: flex;
  flex-direction: column;
  padding: 5px;
  label {
    margin-bottom: 3px;
    color: #676767;
  }
  input {
    height: 36px;
    border-radius: 3px;
    border: 1px solid #d4d4d4;
  }
  textarea {
    resize: none;
    border-radius: 3px;
    border: 1px solid #d4d4d4;
  }
`;
