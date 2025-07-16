import React from "react";
import { Steps } from "antd";
const EditStep = ({ currentStep }) => (
  <>
    <Steps
      progressDot
      current={currentStep}
      items={[
        {
          title: "Profile",
        },
        {
          title: "Academic Details",
        },
        {
          title: "Documents",
        },
      ]}
    />
  </>
);
export default EditStep;
