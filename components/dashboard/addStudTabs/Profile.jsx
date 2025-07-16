import { Input, Select } from "antd";
import React from "react";
import { FaUserGraduate } from "react-icons/fa";
import CountryInput from "../../CountryInput";
import PhoneInput from "../../PhoneInput";

const { Option } = Select;

function Profile({ formData, setFormData }) {
  const studentDetails = [
    {
      label: "Full Name",
      placeholder: "Enter Full Name",
      id: "fullName",
      type: "text",
      required: true,
    },
    {
      label: "Gender",
      placeholder: "Select Gender",
      id: "gender",
      type: "select",
      required: true,
      options: ["Male", "Female", "Other"],
    },
    {
      label: "Date of Birth",
      placeholder: "Select Date of Birth",
      id: "dateOfBirth",
      type: "date",
      required: true,
    },
    {
      label: "Joining Date",
      placeholder: "Select Joining Date",
      id: "joiningDate",
      type: "date",
      required: true,
    },
    {
      label: "State",
      placeholder: "Enter State",
      id: "state",
      type: "text",
      required: true,
    },
    {
      label: "District",
      placeholder: "Enter District",
      id: "district",
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

  const handleCountryChange = (country) => {
    setFormData((prev) => ({
      ...prev,
      country: country,
    }));
  };

  const handlePhoneChange = (phoneNumber) => {
    setFormData((prev) => ({
      ...prev,
      phoneNumber: phoneNumber,
    }));
  };

  const renderInput = (input) => {
    if (input.type === "select") {
      return (
        <Select
          size="large"
          placeholder={input.placeholder}
          value={formData[input.id] || undefined}
          onChange={(value) => handleInputChange(input.id, value)}
          className="w-full"
        >
          {input.options.map((option) => (
            <Option key={option} value={option}>
              {option}
            </Option>
          ))}
        </Select>
      );
    }

    return (
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
    );
  };

  return (
    <div className="flex flex-col gap-5 text-black">
      <div className="flex flex-col gap-3">
        <h1 className="flex items-center gap-2">
          Student Details{" "}
          <span>
            <FaUserGraduate className="text-xl" />
          </span>
        </h1>
        <div className="p-4 bg-stone-50 rounded-xl grid grid-cols-3 2xl:grid-cols-4 gap-4">
          {studentDetails.map((input, index) => {
            return (
              <div key={index} className="flex flex-col gap-1 w-full">
                <label htmlFor={input.id} className="text-sm font-semibold">
                  {input.label}
                  {input.required && (
                    <span className="text-red-500 ml-1">*</span>
                  )}
                </label>
                {renderInput(input)}
              </div>
            );
          })}
          <CountryInput
            value={formData.country}
            onChange={handleCountryChange}
            required={true}
          />
          {/* Phone Number with Country Code */}
          <PhoneInput
            value={formData.phoneNumber || ""}
            onChange={handlePhoneChange}
            label="Phone Number"
            placeholder="Enter phone number"
            required={true}
          />

          {/* Country Selection */}
        </div>
      </div>
    </div>
  );
}

export default Profile;
