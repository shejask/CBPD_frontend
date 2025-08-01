import React, { useEffect, useState } from "react";
import { LoginOutlined } from "@ant-design/icons";
import { IoChevronBack } from "react-icons/io5";
import ImportBulkAndUser from "@/components/ImportBulkAndUser";
import Link from "next/link";
import StudStep from "@/components/dashboard/AddStudStep";
import Profile from "@/components/dashboard/addStudTabs/Profile";
import Academic from "@/components/dashboard/addStudTabs/Academic";
import Identification from "@/components/dashboard/addStudTabs/Identification";
import { Button, message } from "antd";
import { useRouter } from "next/router";

function Index() {
  const [currentStep, setCurrentStep] = useState(0);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({});
  const [files, setFiles] = useState({});
  const router = useRouter();
  // const { id } = router.query; // Get organization ID from URL
  const [id, setUrl] = useState("");

  useEffect(() => {
    setUrl(localStorage.getItem("id"));
  }, []);

  const steps = [
    {
      title: "Profile",
      component: <Profile formData={formData} setFormData={setFormData} />,
    },
    {
      title: "Academic Details",
      component: <Academic formData={formData} setFormData={setFormData} />,
    },
    {
      title: "Identification Documents",
      component: <Identification files={files} setFiles={setFiles} />,
    },
  ];

  const handleNext = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handlePrev = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleSubmit = async () => {
    setLoading(true);
    try {
      // Validate required fields
      const requiredFields = [
        "fullName",
        "gender",
        "phoneNumber",
        "dateOfBirth",
        "joiningDate",
        "state",
        "district",
        "county",
        "currentCourse",
        "department",
        "semester",
        "admissionNumber",
      ];

      const missingFields = requiredFields.filter((field) => !formData[field]);

      if (missingFields.length > 0) {
        message.error(
          `Please fill in all required fields: ${missingFields.join(", ")}`
        );
        setLoading(false);
        return;
      }

      // Create FormData for file upload
      const submitData = new FormData();

      // Add all form fields
      Object.keys(formData).forEach((key) => {
        submitData.append(key, formData[key]);
      });

      // Add files
      if (files.passportPhoto) {
        submitData.append("passportPhoto", files.passportPhoto);
      }

      if (files.marksheets && files.marksheets.length > 0) {
        files.marksheets.forEach((file) => {
          submitData.append("marksheets", file);
        });
      }

      // Submit to API
      const response = await fetch(`https://admin.cbpd.co.uk/api/institution/${id}/students`, {
        method: "POST",
        body: submitData,
        credentials: "include", // Include cookies if using authentication
      });

      const result = await response.json();

      if (result.success) {
        message.success("Student created successfully!");
        router.push("/dashboard");
      } else {
        message.error(result.error || "Failed to create student");
      }
    } catch (error) {
      console.error("Error creating student:", error);
      message.error("Failed to create student. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full px-5 py-5 min-h-screen text-black flex flex-col gap-5">
      <div className="flex items-center justify-between w-full">
        <Link href={"/dashboard"}>
          <div className="flex items-center gap-2 cursor-pointer hover:scale-105 duration-75">
            <IoChevronBack className="text-2xl cursor-pointer" />
            <h1 className="text-xl font-medium cursor-pointer">
              Add New Student
            </h1>
          </div>
        </Link>
        <ImportBulkAndUser />
      </div>
      <hr />
      <div className="w-full flex flex-col gap-5">
        <StudStep currentStep={currentStep} />
        {steps[currentStep].component}
        <div className="flex justify-between gap-3">
          {currentStep > 0 && (
            <Button
              size="large"
              type="default"
              onClick={handlePrev}
              className="bg-white"
              icon={<LoginOutlined />}
              iconPosition="start"
            >
              Previous
            </Button>
          )}

          <Button
            size="large"
            type={currentStep === steps.length - 1 ? "primary" : "default"}
            icon={<LoginOutlined />}
            iconPosition="end"
            className={`${
              currentStep === steps.length - 1
                ? "bg-blue-500 hover:bg-blue-700 hover:text-white"
                : "bg-black"
            } text-white ml-auto`}
            onClick={
              currentStep === steps.length - 1 ? handleSubmit : handleNext
            }
            loading={loading}
          >
            {currentStep === steps.length - 1 ? "Submit" : "Next"}
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Index;
