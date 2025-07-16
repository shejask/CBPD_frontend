import { Input, Select } from "antd";
import CountryInput from "../../CountryInput";
import PhoneInput from "../../PhoneInput";
import { MailOutlined, LockOutlined, BankOutlined, EnvironmentOutlined, GlobalOutlined, NumberOutlined } from "@ant-design/icons";
import { useRegistrationContext } from "../../../context/RegistrationContext";
import { useEffect } from "react";

const { Option } = Select;
const { TextArea } = Input;

function OrgDetails() {
  const { formData, updateFormData } = useRegistrationContext();

  const industryOptions = [
    "Technology",
    "Healthcare", 
    "Education",
    "Finance",
    "Manufacturing",
    "Retail",
    "Government",
    "Non-Profit",
    "Consulting",
    "Real Estate",
    "Transportation",
    "Hospitality",
    "Media & Entertainment",
    "Agriculture",
    "Construction",
    "Energy",
    "Other",
  ];

  const orgDetails = [
    {
      label: "Organization Name",
      placeholder: "Enter Organization Name",
      type: "text",
      id: "orgName",
      icon: <BankOutlined />,
      required: true,
    },
    {
      label: "Industry Sector",
      placeholder: "Select Industry Sector",
      type: "select",
      id: "industrySector",
      icon: <BankOutlined />,
      options: industryOptions,
      required: true,
    },
    {
      label: "Business Address",
      placeholder: "Enter Business Address",
      type: "textarea",
      id: "businessAddress",
      icon: <EnvironmentOutlined />,
      required: true,
    },
    {
      label: "Postal Code",
      placeholder: "Enter Postal Code",
      type: "text",
      id: "postalCode",
      icon: <NumberOutlined />,
      required: true,
    },
    {
      label: "Website",
      placeholder: "Enter Website URL (e.g., https://example.com)",
      type: "url",
      id: "website",
      icon: <GlobalOutlined />,
      required: false,
    },
    {
      label: "Organization Email",
      placeholder: "Enter Organization Email",
      type: "email",
      id: "email",
      icon: <MailOutlined />,
      required: true,
    },
    {
      label: "Password",
      placeholder: "Enter Password",
      type: "password",
      id: "password",
      icon: <LockOutlined />,
      required: true,
    },
  ];

  const handleInputChange = (field, value) => {
    updateFormData({ [field]: value });
  };

  const handleCountryChange = (country) => {
    updateFormData({ country: country });
  };

  const handlePhoneChange = (phoneNumber) => {
    updateFormData({ mainTelephone: phoneNumber });
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
          showSearch
          optionFilterProp="children"
        >
          {input.options.map((option) => (
            <Option key={option} value={option}>
              {option}
            </Option>
          ))}
        </Select>
      );
    }

    if (input.type === "textarea") {
      return (
        <TextArea
          size="large"
          placeholder={input.placeholder}
          value={formData[input.id] || ''}
          onChange={(e) => handleInputChange(input.id, e.target.value)}
          rows={3}
          className="w-full resize-none"
        />
      );
    }

    return (
      <Input
        size="large"
        placeholder={input.placeholder}
        type={input.type}
        id={input.id}
        className="w-full"
        prefix={input.icon ? input.icon : null}
        value={formData[input.id] || ''}
        onChange={(e) => handleInputChange(input.id, e.target.value)}
        required={input.required}
      />
    );
  };

  return (
    <div className="w-full grid md:grid-cols-3 gap-x-5 gap-y-5">
      {/* Country Selection */}
      <CountryInput
        value={formData.country}
        onChange={handleCountryChange}
        required={true}
      />

      {orgDetails.map((input, index) => (
        <div key={index} className="w-full flex items-center gap-5">
          <div className="flex flex-col gap-5 w-full">
            <div className="flex flex-col gap-1 w-full">
              <label htmlFor={input.id} className="text-sm font-semibold">
                {input.label}
                {input.required && <span className="text-red-500 ml-1">*</span>}
              </label>
              {renderInput(input)}
            </div>
          </div>
        </div>
      ))}
      
      {/* Main Telephone with Country Code */}
      <div className="w-full flex items-center gap-5">
        <div className="flex flex-col gap-5 w-full">
          <PhoneInput
            value={formData.mainTelephone || ""}
            onChange={handlePhoneChange}
            label="Main Telephone Number"
            placeholder="Enter main telephone number"
            required={true}
          />
        </div>
      </div>
    </div>
  );
}

export default OrgDetails;
