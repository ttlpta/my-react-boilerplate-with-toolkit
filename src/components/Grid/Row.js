import React from "react";
import RowWrapper from "./RowWrapper";

export default function Row(props) {

  return (
    <RowWrapper>
      { props.children }
    </RowWrapper>
  );
}