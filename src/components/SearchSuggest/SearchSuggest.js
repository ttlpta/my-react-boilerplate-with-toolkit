import React, { useEffect } from "react";
import PropTypes from "prop-types";

import ButtonLink from "../ButtonLink/ButtonLink";
import SearchSuggestWrapper from "./SearchSuggestWrapper";

export default function SearchSuggest(props) {
  if (!props.searching) {
    return null;
  }

  return (
    <SearchSuggestWrapper>
      <div className="suggestWrapper">
        <ul>
          {props.items.map((item, idx) => (
            <li key={item.id}>
              <div className="suggestItem">
                <div className="info">
                  <b>{`${item.id} - ${item.plate} - ${item.name}`}</b>
                </div>
                <div className="action">
                  <div>Detail</div>
                  <div>Del</div>
                </div>
              </div>
            </li>
          ))}
        </ul>
        <div className="btnContainer">
          <center>
            <ButtonLink to="/list" label="Add new truck" />
            <ButtonLink to="/list" label="Go to the list" />
          </center>
        </div>
      </div>
    </SearchSuggestWrapper>
  );
}

SearchSuggest.propTypes = {
  searching: PropTypes.bool,
  items: PropTypes.array
};

SearchSuggest.defaultProps = {
  searching: false,
  items: []
};
