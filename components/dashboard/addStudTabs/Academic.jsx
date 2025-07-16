import { Input } from "antd";
import React from "react";
import { FaBookOpen } from "react-icons/fa";

function Academic({ formData, setFormData }) {
  const academicDetails = [
    {
      label: "Current Course",
      placeholder: "Enter Current Course",
      id: "currentCourse",
      type: "text",
      required: true,
    },
    {
      label: "Department / Branch",
      placeholder: "Enter Department or Branch",
      id: "department",
      type: "text",
      required: true,
    },
    {
      label: "Year / Semester",
      placeholder: "Enter Year or Semester",
      id: "semester",
      type: "text",
      required: true,
    },
    {
      label: "College Admission Number",
      placeholder: "Enter Admission Number",
      id: "admissionNumber",
      type: "text",
      required: true,
    },
  ];

  const handleInputChange = (field, value) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  return (
    <div className="flex flex-col gap-5 text-black">
      <div className="flex flex-col gap-3">
        <h1 className="flex items-center gap-2">
          Academic Details <FaBookOpen className="text-xl" />
        </h1>
        <div className="p-4 bg-stone-50 rounded-xl grid grid-cols-2 2xl:grid-cols-2 gap-4">
          {academicDetails.map((input, index) => {
            return (
              <div key={index} className="flex flex-col gap-1 w-full">
                <label htmlFor={input.id} className="text-sm font-semibold">
                  {input.label}
                  {input.required && (
                    <span className="text-red-500 ml-1">*</span>
                  )}
                </label>
                <Input
                  size="large"
                  placeholder={input.placeholder}
                  type={input.type}
                  id={input.id}
                  className="w-full"
                  value={formData[input.id] || ""}
                  onChange={(e) => handleInputChange(input.id, e.target.value)}
                  required={input.required}
                />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Academic;
