import React from "react";
import { Steps } from "antd";

const Stepper = ({ currentStep }) => (
  <Steps
    size="small"
    current={currentStep}
    items={[
      {
        title: "Organization Details",
      },
      {
        title: "Main Contact",
      },
      {
        title: "Secondary Contact",
      },
    ]}
  />
);

export default Stepper;
