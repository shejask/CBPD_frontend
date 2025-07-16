import { Input, Select } from "antd";
import PhoneInput from "../../PhoneInput";
import {
  UserOutlined,
  MailOutlined,
  PhoneOutlined,
  MobileOutlined,
  IdcardOutlined,
  CrownOutlined,
} from "@ant-design/icons";

const { Option } = Select;

function EditMainContact({ formData, setFormData }) {
  const handleInputChange = (field, value) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handlePhoneChange = (phoneNumber) => {
    setFormData((prev) => ({
      ...prev,
      phoneNumber: phoneNumber,
    }));
  };

  const handleMobileChange = (mobileNumber) => {
    setFormData((prev) => ({
      ...prev,
      mobileNumber: mobileNumber,
    }));
  };

  const jobTitleOptions = [
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
      icon: <UserOutlined className="text-blue-500" />,
      required: true,
    },
    {
      label: "Last Name",
      placeholder: "Enter Last Name",
      type: "text",
      id: "lastName",
      icon: <UserOutlined className="text-blue-500" />,
      required: true,
    },
    {
      label: "Job Title",
      placeholder: "Select Job Title",
      type: "select",
      id: "jobTitle",
      icon: <IdcardOutlined className="text-purple-500" />,
      options: jobTitleOptions,
      required: true,
    },
    {
      label: "Email Address",
      placeholder: "Enter Email Address",
      type: "email",
      id: "emailAddress",
      icon: <MailOutlined className="text-red-500" />,
      required: true,
    },
  ];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-6 border border-blue-200">
        <h4 className="text-lg font-semibold text-gray-800 mb-2 flex items-center gap-2">
          <CrownOutlined className="text-blue-500" />
          Primary Contact Person
        </h4>
        <p className="text-sm text-gray-600">
          This person will be the main point of contact for your organization
        </p>
      </div>

      {/* Contact Form */}
      <div className="bg-gradient-to-r from-slate-50 to-gray-50 rounded-xl p-6 border border-gray-200">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {mainContact.map((input, index) => (
            <div key={index} className="space-y-2">
              <label
                htmlFor={input.id}
                className="block text-sm font-semibold text-gray-700 flex items-center gap-2"
              >
                {input.icon}
                {input.label}
                {input.required && <span className="text-red-500">*</span>}
              </label>

              {input.type === "select" ? (
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
              ) : (
                <Input
                  size="large"
                  placeholder={input.placeholder}
                  type={input.type}
                  value={formData[input.id] || ""}
                  onChange={(e) => handleInputChange(input.id, e.target.value)}
                  className="w-full transition-all duration-200 hover:border-blue-400 focus:border-blue-500"
                  prefix={input.icon}
                />
              )}
            </div>
          ))}
          
          {/* Phone Number with Country Code */}
          <div className="space-y-2">
            <PhoneInput
              value={formData.phoneNumber || ""}
              onChange={handlePhoneChange}
              label="Phone Number"
              placeholder="Enter phone number"
              required={true}
            />
          </div>
          
          {/* Mobile Number with Country Code */}
          <div className="space-y-2">
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

      {/* Contact Information Notice */}
      <div className="bg-green-50 border border-green-200 rounded-xl p-4">
        <div className="flex items-start gap-3">
          <MailOutlined className="text-green-600 mt-0.5" />
          <div>
            <h5 className="font-semibold text-green-800 mb-1">
              Contact Information
            </h5>
            <p className="text-sm text-green-700">
              This contact information will be used for official communications
              and notifications regarding your organization.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EditMainContact;
