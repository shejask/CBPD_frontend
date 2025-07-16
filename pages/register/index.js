import Image from "next/image";
import { Button, Typography, message, Spin } from "antd";
import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/router";
import Stepper from "../../components/registerComponents/regSteps";
import { LoginOutlined, LoadingOutlined } from "@ant-design/icons";
import OrgDetails from "../../components/registerComponents/tabs/OrgDetails";
import MainContact from "../../components/registerComponents/tabs/MainContact";
import SecondaryContact from "../../components/registerComponents/tabs/SecondaryContact";
import { RegistrationProvider, useRegistrationContext } from "../../context/RegistrationContext";
import IntegrationStatus from "../../components/common/IntegrationStatus";

function RegisterPageContent() {
  const { Text } = Typography;
  const router = useRouter();
  const [currentStep, setCurrentStep] = useState(0);
  const { 
    formData, 
    loading, 
    submitRegistration, 
    validateStep 
  } = useRegistrationContext();

  const steps = [
    {
      title: "Organization Details",
      component: <OrgDetails />,
    },
    {
      title: "Main Contact",
      component: <MainContact />,
    },
    {
      title: "Secondary Contact",
      component: <SecondaryContact />,
    },
  ];

  const handleNext = async () => {
    // Validate current step before proceeding
    if (!validateStep(currentStep)) {
      message.error('Please fill in all required fields before proceeding.');
      return;
    }

    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      // Final step - submit the form
      await handleSubmit();
    }
  };

  const handlePrev = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleSubmit = async () => {
    try {
      const result = await submitRegistration();
      
      if (result.success) {
        message.success('Registration completed successfully!');
        
        setTimeout(() => {
          router.push('/login');
        }, 2000);
      }
    } catch (error) {
      console.error('Registration error:', error);
      message.error('Registration failed. Please try again.');
    }
  };

  const isLastStep = currentStep === steps.length - 1;
  const canProceed = validateStep(currentStep);

  return (
    <div className="w-full h-screen p-3 flex items-center justify-center bg-gray-50">
      <div className="flex flex-col h-full w-full items-center">
        <div className="flex items-start w-full justify-between">
          <Image
            src="/logo.png"
            className=""
            width={150}
            height={150}
            alt="logo"
          />
          <Text>
            Already a member?{" "}
            <Link href={"/login"} className="text-blue-500">
              Login
            </Link>
          </Text>
        </div>
        <div className="w-3/4 flex flex-col gap-5">
          <div className="flex flex-col gap-2 text-center">
            <h1 className="text-4xl text-black">Let's Get You Started</h1>
            <p className="text-gray-600">Enter the details to get going</p>
          </div>
          <Stepper currentStep={currentStep} />

          {/* Render current step component */}
          <div className="min-h-[400px]">
            {steps[currentStep].component}
          </div>

          {/* Navigation buttons */}
          <div className="flex justify-between gap-3">
            {currentStep > 0 && (
              <Button
                size="large"
                type="default"
                onClick={handlePrev}
                className="bg-white"
                icon={<LoginOutlined />}
                iconPosition="start"
                disabled={loading}
              >
                Previous
              </Button>
            )}

            <Button
              size="large"
              type={isLastStep ? "primary" : "default"}
              icon={loading ? <Spin indicator={<LoadingOutlined spin />} /> : <LoginOutlined />}
              iconPosition="end"
              className={`${
                isLastStep
                  ? "bg-blue-500 hover:bg-blue-700"
                  : "bg-black hover:bg-gray-800"
              } text-white ml-auto`}
              onClick={handleNext}
              loading={loading}
              disabled={!canProceed}
            >
              {isLastStep ? "Submit Registration" : "Next"}
            </Button>
          </div>

          {/* Progress indicator */}
          <div className="text-center text-sm text-gray-500">
            Step {currentStep + 1} of {steps.length}
          </div>
        </div>
      </div>
    </div>
  );
}

function RegisterPage() {
  return (
    <RegistrationProvider>
      <RegisterPageContent />
      {/* Show integration status in development */}
      {/* {process.env.NODE_ENV === 'development' && <IntegrationStatus />} */}
    </RegistrationProvider>
  );
}

export default RegisterPage;
