import React from "react";
import { Steps } from "antd";
const InstEditStep = ({ currentStep }) => (
  <>
    <Steps
      progressDot
      current={currentStep}
      items={[
        {
          title: "Organization",
        },
        {
          title: "Main",
        },
        {
          title: "Secondary",
        },
      ]}
    />
  </>
);
export default InstEditStep;
