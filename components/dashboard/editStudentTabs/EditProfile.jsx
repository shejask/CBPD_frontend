import { Input, Select } from "antd";
import React from "react";
import { FaUserGraduate } from "react-icons/fa";
import CountryInput from "../../CountryInput";
import PhoneInput from "../../PhoneInput";

const { Option } = Select;

function EditProfile({ formData, onInputChange }) {
  const studentDetails = [
    {
      label: "Full Name",
      placeholder: "Enter Full Name",
      id: "fullName",
      type: "text",
    },
    {
      label: "Gender",
      placeholder: "Select Gender",
      id: "gender",
      type: "select",
      options: ["Male", "Female", "Other"],
    },
    {
      label: "Date of Birth",
      placeholder: "DD - MM - YYYY",
      id: "dateOfBirth",
      type: "date",
    },
    {
      label: "Joining Date",
      placeholder: "DD - MM - YYYY",
      id: "joiningDate",
      type: "date",
    },
    {
      label: "State",
      placeholder: "Enter State",
      id: "state",
      type: "text",
    },
    {
      label: "District",
      placeholder: "Enter District",
      id: "district",
      type: "text",
    },
    {
      label: "County",
      placeholder: "Enter County",
      id: "county",
      type: "text",
    },
  ];

  const handleCountryChange = (country) => {
    onInputChange("country", country);
  };

  const handlePhoneChange = (phoneNumber) => {
    onInputChange("phoneNumber", phoneNumber);
  };

  const renderInput = (input) => {
    if (input.type === "select") {
      return (
        <Select
          size="large"
          placeholder={input.placeholder}
          value={formData[input.id] || undefined}
          onChange={(value) => onInputChange(input.id, value)}
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
        onChange={(e) => onInputChange(input.id, e.target.value)}
        prefix={input.icon ? input.icon : null}
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
                </label>
                {renderInput(input)}
              </div>
            );
          })}
          
          {/* Phone Number with Country Code */}
          <PhoneInput
            value={formData.phoneNumber || ""}
            onChange={handlePhoneChange}
            label="Phone Number"
            placeholder="Enter phone number"
          />
          
          {/* Country Selection */}
          <CountryInput
            value={formData.country}
            onChange={handleCountryChange}
          />
        </div>
      </div>
    </div>
  );
}

export default EditProfile;
