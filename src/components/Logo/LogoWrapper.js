import styled from "styled-components";

const LogoWrapper = styled.h3`
  color: ${props => props.theme.LOGO_COLOR};
  font-size: ${props =>
    props.small ? props.theme.LOGO_FONTSIZE_SMALL : props.theme.LOGO_FONTSIZE};
`;

export default LogoWrapper;
