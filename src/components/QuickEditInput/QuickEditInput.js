import React, { useState, useRef } from "react";

import QuickEditInputWrapper from "./QuickEditInputWrapper";

export default function QuickEditInput(props) {
  const [editing, edit] = useState(false);
  const inputRef = useRef(null);

  function handleKeyDown(e) {
    if (e.keyCode == 13) {
      edit(false);
    }
  }

  function handleChange(e) {}

  function handleDbClick() {
    edit(true);
  }

  return (
    <QuickEditInputWrapper>
      {editing && (
        <input
          type="text"
          value={props.value}
          autoFocus
          ref={inputRef}
          onChange={handleChange}
          onKeyDown={handleKeyDown}
          onBlur={() => edit(false)}
        />
      )}
      {
        !editing && (
          <span onDoubleClick={handleDbClick}>{props.value}</span>
        )
      }
    </QuickEditInputWrapper>
  );
}
