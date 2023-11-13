import React from "react";
import { Route, Routes } from "react-router-dom";
import Board from "../Screens/Board";
import App from "../App";
import Success from "../Screens/Success";
import Client from "../Screens/Client";

type Props = {};

export default function Navigation({}: Props) {
  return (
    <Routes>
      <Route path="/" element={<Client />} />
      <Route path="/success" element={<Success />} />
    </Routes>
  );
}
