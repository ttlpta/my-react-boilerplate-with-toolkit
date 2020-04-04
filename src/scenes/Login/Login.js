import React, { useDispatch } from "reactn";
import { useForm } from "react-hook-form";
import { useHistory, useLocation } from "react-router-dom";

import InputTxt from "../../components/InputTxt/InputTxt";
import Button from "../../components/Button/Button";
import { Grid, Column, Row } from "../../components/Grid";
import * as AuthService from "../../Services/AuthService";
import useNotification from "../../hooks/useNotification";
import { authReducer } from "../../reducers";

export default function Login(props) {
  const { register, handleSubmit, errors } = useForm();
  const { showError, showSuccess } = useNotification();
  const history = useHistory();
  const location = useLocation();
  const doLogin = useDispatch(authReducer.login);

  const onSubmit = async data => {
    try {
      const login = await AuthService.login(data);
      if (login) {
        showSuccess("Success");
        doLogin({ isLogined: true });
        const { from } = location.state || { from: { pathname: "/" } };
        history.replace(from);
      }
    } catch (error) {
      showError(error);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <InputTxt
          label="Username"
          name="username"
          ref={register({ required: true })}
          errorMsg={errors.username ? "This field is required" : ""}
        />
        <InputTxt
          label="Password"
          name="password"
          ref={register({ required: true })}
          errorMsg={errors.password ? "This field is required" : ""}
        />
        <Button label="Submit" type="submit" />
      </form>
      <Grid>
        <Row>
          <Column xs="12" sm="6" md="8" lg="3">
            xs-12 sm-6 md-8
          </Column>
          <Column sm="6" md="4" lg="9">
            xs-12 sm-6 md-4
          </Column>
        </Row>
      </Grid>
    </div>
  );
}
