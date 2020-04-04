import styled from "styled-components";

export default styled.div`
  ${({ fluid }) => fluid ? 'width : 100%' : ''}
`;