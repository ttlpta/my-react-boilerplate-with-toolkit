import React from "react";
import GridWrapper from "./GridWrapper";

export default function Grid(props) {

  return (
    <GridWrapper>
      { props.children }
    </GridWrapper>
  );
}