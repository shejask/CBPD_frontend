import { Input, Select } from "antd";
import { useRegistrationContext } from "../../../context/RegistrationContext";
import PhoneInput from "../../PhoneInput";

const { Option } = Select;

function MainContact() {
  const { formData, updateFormData } = useRegistrationContext();

  const jobTitleOptions = [
    "Founder",
    "Co Founder",
    "CEO",
    "President", 
    "Director",
    "Manager",
    "Administrator",
    "Coordinator",
    "Principal",
    "Dean",
    "Head of Department",
    "Other",
  ];

  const mainContact = [
    {
      label: "First Name",
      placeholder: "Enter First Name",
      type: "text",
      id: "firstName",
      required: true,
    },
    {
      label: "Last Name",
      placeholder: "Enter Last Name",
      type: "text",
      id: "lastName",
      required: true,
    },
    {
      label: "Job Title",
      placeholder: "Select Job Title",
      type: "select",
      id: "jobTitle",
      required: true,
      options: jobTitleOptions,
    },
    {
      label: "Email Address",
      placeholder: "Enter Email Address",
      type: "email",
      id: "emailAddress",
      required: true,
    },
  ];

  const handleInputChange = (field, value) => {
    updateFormData({ [field]: value });
  };

  const handlePhoneChange = (phoneNumber) => {
    updateFormData({ phoneNumber: phoneNumber });
  };

  const handleMobileChange = (mobileNumber) => {
    updateFormData({ mobileNumber: mobileNumber });
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

    return (
      <Input
        size="large"
        placeholder={input.placeholder}
        type={input.type}
        id={input.id}
        className="w-full"
        value={formData[input.id] || ''}
        onChange={(e) => handleInputChange(input.id, e.target.value)}
        required={input.required}
      />
    );
  };

  return (
    <div className="w-full grid grid-cols-3 gap-x-5 gap-y-5">
      {mainContact.map((input, index) => (
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
      
      {/* Phone Number with Country Code */}
      <div className="w-full flex items-center gap-5">
        <div className="flex flex-col gap-5 w-full">
          <PhoneInput
            value={formData.phoneNumber || ""}
            onChange={handlePhoneChange}
            label="Phone Number"
            placeholder="Enter phone number"
            required={true}
          />
        </div>
      </div>
      
      {/* Mobile Number with Country Code */}
      <div className="w-full flex items-center gap-5">
        <div className="flex flex-col gap-5 w-full">
          <PhoneInput
            value={formData.mobileNumber || ""}
            onChange={handleMobileChange}
            label="Mobile Number"
            placeholder="Enter mobile number"
            required={false}
          />
        </div>
      </div>
    </div>
  );
}

export default MainContact;