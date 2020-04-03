import React, { Suspense, lazy, Fragment, useGlobal } from "reactn";
import {
  Switch,
  BrowserRouter as Router,
  Route,
  Redirect
} from "react-router-dom";
import { ThemeProvider } from "styled-components";

import { Loading } from "./components";

import initStore from "./store";

import Normalize from "./Normalize";
import NotificationPopup from "./components/NotificationPopup/NotificationPopup";
import themeLight from "./themes/defaultTheme";

const Login = lazy(() => import("./scenes/Login/Login"));
const Search = lazy(() => import("./scenes/Search/Search"));
const List = lazy(() => import("./scenes/List/List"));
const Detail = lazy(() => import("./scenes/Detail/Detail"));
const Page500 = lazy(() => import("./scenes/500/Page500"));
const Page404 = lazy(() => import("./scenes/404/Page404"));

initStore();

export default function App() {
  return (
    <Fragment>
      <Normalize />
      <NotificationPopup />
      <ThemeProvider theme={themeLight}>
        <Router>
          <Suspense fallback={Loading()}>
            <Page500>
              <Switch>
                <Route exact path="/login">
                  <Login />
                </Route>
                <PrivateRouter exact path="/">
                  <Search />
                </PrivateRouter>
                <PrivateRouter path="/list">
                  <List />
                </PrivateRouter>
                <PrivateRouter exact path="/detail/:carId">
                  <Detail />
                </PrivateRouter>
                <Route name="Page 404" component={Page404} />
              </Switch>
            </Page500>
          </Suspense>
        </Router>
      </ThemeProvider>
    </Fragment>
  );
}

function PrivateRouter({ children, ...rest }) {
  const [auth] = useGlobal("auth");

  return (
    <Route
      {...rest}
      render={({ location }) =>
        auth.isLogined ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: location }
            }}
          />
        )
      }
    />
  );
}
