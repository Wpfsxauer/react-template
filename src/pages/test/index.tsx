import React from "react";
import "./index.less";
import { useBusiness, useComponent } from "./hook";

const CheckLicense: React.FC = () => {
  return useComponent(useBusiness());
};

export default CheckLicense;
