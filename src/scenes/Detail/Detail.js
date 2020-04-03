import React from "react";
import { useParams } from "react-router-dom";

export default function Detail(props) {
  const { carId } = useParams();

  return <div>Detail {carId}</div>;
}
