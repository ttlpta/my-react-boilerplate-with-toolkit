import styled from "styled-components";
import device from "./device";

const getWidthString = span => {
  if(!span) return;

  const width = span / 12 * 100;

  return `width : ${width}%`
};

export default styled.div`
  float : left;
  ${({xs}) => xs ? getWidthString(xs) : 'width : 100%'};
  
  @media ${device.mobileS} {
    ${({sm}) => sm && getWidthString(sm)};
  };

  @media ${device.tablet}{
    ${({md}) => md && getWidthString(md)};
  };

  @media ${device.laptop} {
    ${({lg}) => lg && getWidthString(lg)};
  };
`;