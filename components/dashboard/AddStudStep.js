import React from "react";
import { Steps } from "antd";

const StudStep = ({ currentStep }) => (
  <Steps
    size="small"
    current={currentStep}
    items={[
      {
        title: "Profile",
      },
      {
        title: "Academic Details",
      },
      {
        title: "Identification Documents",
      },
    ]}
  />
);

export default StudStep;
