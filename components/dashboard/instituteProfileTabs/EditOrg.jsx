import { Input, Select } from "antd";
import CountryInput from "../../CountryInput";
import {
  MailOutlined,
  LockOutlined,
  BankOutlined,
  EnvironmentOutlined,
  PhoneOutlined,
  GlobalOutlined,
  NumberOutlined,
} from "@ant-design/icons";

const { Option } = Select;

function EditOrgDetails({ formData, setFormData }) {
  const handleInputChange = (field, value) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const industryOptions = [
    "Technology",
    "Healthcare",
    "Education",
    "Finance",
    "Manufacturing",
    "Retail",
    "Government",
    "Non-Profit",
    "Other",
  ];

  const orgDetails = [
    {
      label: "Organization Name",
      placeholder: "Enter Organization Name",
      type: "text",
      id: "orgName",
      icon: <BankOutlined className="text-blue-500" />,
      required: true,
    },
    {
      label: "Industry Sector",
      placeholder: "Select Industry Sector",
      type: "select",
      id: "industrySector",
      icon: <BankOutlined className="text-purple-500" />,
      options: industryOptions,
      required: true,
    },
    {
      label: "Business Address",
      placeholder: "Enter Business Address",
      type: "textarea",
      id: "businessAddress",
      icon: <EnvironmentOutlined className="text-green-500" />,
      required: true,
    },
    {
      label: "Postal Code",
      placeholder: "Enter Postal Code",
      type: "text",
      id: "postalCode",
      icon: <NumberOutlined className="text-orange-500" />,
      required: true,
    },
    {
      label: "Main Telephone Number",
      placeholder: "Enter Main Telephone Number",
      type: "tel",
      id: "mainTelephone",
      icon: <PhoneOutlined className="text-blue-500" />,
      required: true,
    },
    {
      label: "Website",
      placeholder: "Enter Website URL (e.g., https://example.com)",
      type: "url",
      id: "website",
      icon: <GlobalOutlined className="text-cyan-500" />,
      required: false,
    },
    {
      label: "Organization Email",
      placeholder: "Enter Organization Email",
      type: "email",
      id: "email",
      icon: <MailOutlined className="text-red-500" />,
      required: true,
    },
    // {
    //   label: "Password",
    //   placeholder: "Enter New Password (leave blank to keep current)",
    //   type: "password",
    //   id: "password",
    //   icon: <LockOutlined className="text-gray-500" />,
    //   required: false,
    // },
  ];

  return (
    <div className="space-y-6">
      {/* Country Input */}
      <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-6 border border-blue-200">
        <h4 className="text-lg font-semibold text-gray-800 mb-4 flex items-center gap-2">
          <EnvironmentOutlined className="text-blue-500" />
          Location Information
        </h4>
        <CountryInput
          value={formData.country}
          onChange={(value) => handleInputChange("country", value)}
        />
      </div>

      {/* Organization Details */}
      <div className="bg-gradient-to-r from-slate-50 to-gray-50 rounded-xl p-6 border border-gray-200">
        <h4 className="text-lg font-semibold text-gray-800 mb-6 flex items-center gap-2">
          <BankOutlined className="text-blue-500" />
          Organization Information
        </h4>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {orgDetails.map((input, index) => (
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
              ) : input.type === "textarea" ? (
                <Input.TextArea
                  size="large"
                  placeholder={input.placeholder}
                  value={formData[input.id] || ""}
                  onChange={(e) => handleInputChange(input.id, e.target.value)}
                  rows={3}
                  className="w-full resize-none"
                />
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
        </div>
      </div>

      {/* Security Notice */}
      <div className="bg-amber-50 border border-amber-200 rounded-xl p-4">
        <div className="flex items-start gap-3">
          <LockOutlined className="text-amber-600 mt-0.5" />
          <div>
            <h5 className="font-semibold text-amber-800 mb-1">
              Security Notice
            </h5>
            <p className="text-sm text-amber-700">
              Leave the password field blank if you don't want to change your
              current password. Only enter a new password if you want to update
              it.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EditOrgDetails;
