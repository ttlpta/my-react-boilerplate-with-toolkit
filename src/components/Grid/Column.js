import React from "react";
import ColumnWrapper from "./ColumnWrapper";

export default function Column({children, ...props}) {

  return (
    <ColumnWrapper {...props}>
      { children }
    </ColumnWrapper>
  );
}