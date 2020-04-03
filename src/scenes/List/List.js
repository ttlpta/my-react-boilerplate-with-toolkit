import React from "react";
import { Switch, Route, useRouteMatch, Link } from "react-router-dom";

import ListWrapper from "./ListWrapper";

import {
  Logo,
  SearchInput,
  ListVehicle,
  AddVehicleForm
} from "../../components";
import Detail from "../Detail/Detail";

export default function List(props) {
  const { path } = useRouteMatch();

  return (
    <ListWrapper>
      <div className="search-container">
        <div>
          <Logo small className="logo" />
          <SearchInput className="search-input" />
        </div>
      </div>
      <AddVehicleForm />
      <div className="list-body">
        <ListVehicle className="list" />
        <div className="preview">
          <h3>Detail</h3>
          <Switch>
            <Route path={`${path}/car/:carId`} component={Detail} />
          </Switch>
        </div>
      </div>
    </ListWrapper>
  );
}
