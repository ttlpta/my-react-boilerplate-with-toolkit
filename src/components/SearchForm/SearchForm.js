import React from "react";

import SearchInput from "../SearchInput/SearchInput";
import ButtonLink from "../ButtonLink/ButtonLink";
import SearchFormWrapper from "./SearchFormWrapper";

export default function SearchForm() {

  return (
    <SearchFormWrapper>
      <SearchInput hasSuggestion={true} />
      <div className="btnContainer">
        <center>
          <ButtonLink to="/list" label="Add new truck" />
          <ButtonLink to="/list" label="Go to the list" />
        </center>
      </div>
    </SearchFormWrapper>
  );
}
