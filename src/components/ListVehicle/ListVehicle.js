import React, { useState, useEffect } from "react";
import { useRouteMatch, Link } from "react-router-dom";

import ListVehicleWrapper from "./ListVehicleWrapper";
import Button from "../Button/Button";
import QuickEditInput from "../QuickEditInput/QuickEditInput";
import QuickEditTextArea from "../QuickEditTextArea/QuickEditTextArea";
import useNotification from "../../hooks/useNotification";
import * as CarService from "../../Services/CarService";

const Th = function({ children, ...props }) {
  const [visited, visit] = useState(false);

  return (
    <th
      onClick={() => visit(!visited)}
      className={visited ? "desc" : ""}
      {...props}
    >
      {children}
    </th>
  );
};

const Tr = function(props) {
  const [visited, visit] = useState(false);

  return (
    <tr onClick={() => visit(!visited)} className={visited ? "visited" : ""}>
      {props.children}
    </tr>
  );
};

export default function ListVehicle(props) {
  const { path } = useRouteMatch();
  const [cars, setCars] = useState([]);
  const [page, setPage] = useState(1);
  const { showError } = useNotification();

  useEffect(() => {
    (async () => {
      try {
        const cars = await CarService.listCar();
        setCars(cars);
      } catch (error) {
        showError(error);
      }
    })();
  }, []);

  const nextPage = async () => {
    try {
      const cars = await CarService.listCar(page + 1);
      setCars(cars);
      setPage(oldPage => oldPage + 1);
    } catch (error) {
      showError(error);
    }
  };

  const prePage = async () => {
    try {
      const cars = await CarService.listCar(page - 1);
      setCars(cars);
      setPage(oldPage => oldPage - 1);
    } catch (error) {
      showError(error);
    }
  };

  return (
    <ListVehicleWrapper className={`${props.className}`}>
      <table align="center">
        <thead>
          <tr>
            <td colSpan="9"></td>
            <td colSpan="2">
              <div>
                <div>Current Page : {page}</div>
                <div>
                  <Button label={"Pre"} onClick={prePage} />
                  <Button label={"Next"} onClick={nextPage} />
                </div>
              </div>
            </td>
          </tr>
        </thead>
        <tbody>
          <Tr>
            <Th className="desc">Truck plate</Th>
            <Th>Name</Th>
            <Th colSpan="8">Address</Th>
            <Th>Action</Th>
          </Tr>
          {cars.map((car, index) => (
            <Tr key={`car-${car.id}`}>
              <td>
                <QuickEditInput value={car.plate} />
              </td>
              <td>
                <QuickEditInput value={car.name} />
              </td>
              <td colSpan="8">
                <QuickEditTextArea value={car.address} />
              </td>
              <td>
                <div>
                  <span>
                    <Link to={`${path}/car/${car.id}`}>Edit</Link>
                  </span>
                  <span>Delete</span>
                </div>
              </td>
            </Tr>
          ))}
        </tbody>
      </table>
    </ListVehicleWrapper>
  );
}
