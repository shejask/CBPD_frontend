import { Input, Select } from "antd";
import {
  UserOutlined,
  MailOutlined,
  PhoneOutlined,
  MobileOutlined,
  IdcardOutlined,
  UsergroupAddOutlined,
} from "@ant-design/icons";

const { Option } = Select;

function EditSecondaryContact({ formData, setFormData }) {
  const handleInputChange = (field, value) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const jobTitleOptions = [
    "Assistant Manager",
    "Coordinator",
    "Administrator",
    "Secretary",
    "Assistant Director",
    "Vice Principal",
    "Assistant Dean",
    "Department Head",
    "Other",
  ];

  const secondaryContact = [
    {
      label: "First Name",
      placeholder: "Enter First Name",
      type: "text",
      id: "SfirstName",
      icon: <UserOutlined className="text-blue-500" />,
      required: false,
    },
    {
      label: "Last Name",
      placeholder: "Enter Last Name",
      type: "text",
      id: "SlastName",
      icon: <UserOutlined className="text-blue-500" />,
      required: false,
    },
    {
      label: "Job Title",
      placeholder: "Select Job Title",
      type: "select",
      id: "SjobTitle",
      icon: <IdcardOutlined className="text-purple-500" />,
      options: jobTitleOptions,
      required: false,
    },
    {
      label: "Email Address",
      placeholder: "Enter Email Address",
      type: "email",
      id: "SemailAddress",
      icon: <MailOutlined className="text-red-500" />,
      required: false,
    },
    {
      label: "Phone Number",
      placeholder: "Enter Phone Number",
      type: "tel",
      id: "SphoneNumber",
      icon: <PhoneOutlined className="text-green-500" />,
      required: false,
    },
    {
      label: "Mobile Number",
      placeholder: "Enter Mobile Number",
      type: "tel",
      id: "SmobileNumber",
      icon: <MobileOutlined className="text-orange-500" />,
      required: false,
    },
  ];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl p-6 border border-purple-200">
        <h4 className="text-lg font-semibold text-gray-800 mb-2 flex items-center gap-2">
          <UsergroupAddOutlined className="text-purple-500" />
          Secondary Contact Person
        </h4>
        <p className="text-sm text-gray-600">
          Optional backup contact person for your organization (recommended)
        </p>
      </div>

      {/* Contact Form */}
      <div className="bg-gradient-to-r from-slate-50 to-gray-50 rounded-xl p-6 border border-gray-200">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {secondaryContact.map((input, index) => (
            <div key={index} className="space-y-2">
              <label
                htmlFor={input.id}
                className="block text-sm font-semibold text-gray-700 flex items-center gap-2"
              >
                {input.icon}
                {input.label}
                {input.required && <span className="text-red-500">*</span>}
                {!input.required && (
                  <span className="text-gray-400 text-xs">(Optional)</span>
                )}
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
                  allowClear
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
                  className="w-full transition-all duration-200 hover:border-purple-400 focus:border-purple-500"
                  prefix={input.icon}
                />
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Secondary Contact Notice */}
      <div className="bg-blue-50 border border-blue-200 rounded-xl p-4">
        <div className="flex items-start gap-3">
          <UsergroupAddOutlined className="text-blue-600 mt-0.5" />
          <div>
            <h5 className="font-semibold text-blue-800 mb-1">
              Why Add a Secondary Contact?
            </h5>
            <p className="text-sm text-blue-700">
              Having a secondary contact ensures continuity of communication and
              provides an alternative point of contact when the primary contact
              is unavailable.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EditSecondaryContact;
