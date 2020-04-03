import React, { useState } from "react";

import QuickEditTextAreaWrapper from "./QuickEditTextAreaWrapper";

export default function QuickEditTextArea(props) {
  const [editing, edit] = useState(false);

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
    <QuickEditTextAreaWrapper>
      {editing && (
        <textarea
          rows={3}
          onChange={handleChange}
          onKeyDown={handleKeyDown}
          onBlur={() => edit(false)}
          value={props.value}
          autoFocus
        ></textarea>
      )}
      {!editing && <span onDoubleClick={handleDbClick}>{props.value}</span>}
    </QuickEditTextAreaWrapper>
  );
}
