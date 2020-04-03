import React from "react";
import { useForm } from "react-hook-form";

import useNotification from "../../hooks/useNotification";
import InputTxt from "../InputTxt/InputTxt";
import Button from "../Button/Button";
import AddVehicleFormWrapper from "./AddVehicleFormWrapper";
import * as CarService from "../../Services/CarService";

export default function AddVehicleForm(props) {
  const { register, handleSubmit, errors, reset } = useForm();
  const { showSuccess } = useNotification();

  const onSubmit = async data => {
    const success = await CarService.addCar(data);
    if (success) {
      showSuccess("success");
      reset();
    }
  };

  return (
    <AddVehicleFormWrapper>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="topSection">
          <InputTxt
            label="Truck plate"
            name="plate"
            ref={register({ required: true })}
            errorMsg={errors.plate ? "This field is required" : ""}
          />
          <InputTxt
            label="Name"
            name="name"
            ref={register({ required: true })}
            errorMsg={errors.name ? "This field is required" : ""}
          />
          <InputTxt
            label="Address"
            name="address"
            multiline
            ref={register({ required: true })}
            errorMsg={errors.name ? "This field is required" : ""}
          />
        </div>
        <div className="actionSection">
          <Button label="Submit" type="submit" />
          <Button label="Reset" onClick={reset} />
        </div>
      </form>
    </AddVehicleFormWrapper>
  );
}
