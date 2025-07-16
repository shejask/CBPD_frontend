import React, { useState, useEffect } from "react";
import { Input } from "antd";
import Select from "react-select";

function PhoneInput({ 
  value, 
  onChange, 
  label = "Phone Number", 
  placeholder = "Enter phone number",
  required = false,
  defaultCountryCode = "+91"
}) {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [selectedCountryCode, setSelectedCountryCode] = useState(null);

  const countryCodeOptions = [
    { value: "+91", label: "+91", country: "India", flag: "🇮🇳" },
    { value: "+1", label: "+1", country: "US/Canada", flag: "🇺🇸" },
    { value: "+44", label: "+44", country: "UK", flag: "🇬🇧" },
    { value: "+61", label: "+61", country: "Australia", flag: "🇦🇺" },
    { value: "+49", label: "+49", country: "Germany", flag: "🇩🇪" },
    { value: "+33", label: "+33", country: "France", flag: "🇫🇷" },
    { value: "+81", label: "+81", country: "Japan", flag: "🇯🇵" },
    { value: "+86", label: "+86", country: "China", flag: "🇨🇳" },
    { value: "+55", label: "+55", country: "Brazil", flag: "🇧🇷" },
    { value: "+7", label: "+7", country: "Russia", flag: "🇷🇺" },
    { value: "+39", label: "+39", country: "Italy", flag: "🇮🇹" },
    { value: "+34", label: "+34", country: "Spain", flag: "🇪🇸" },
    { value: "+52", label: "+52", country: "Mexico", flag: "🇲🇽" },
    { value: "+82", label: "+82", country: "South Korea", flag: "🇰🇷" },
    { value: "+65", label: "+65", country: "Singapore", flag: "🇸🇬" },
    { value: "+31", label: "+31", country: "Netherlands", flag: "🇳🇱" },
    { value: "+46", label: "+46", country: "Sweden", flag: "🇸🇪" },
    { value: "+47", label: "+47", country: "Norway", flag: "🇳🇴" },
    { value: "+41", label: "+41", country: "Switzerland", flag: "🇨🇭" },
    { value: "+971", label: "+971", country: "UAE", flag: "🇦🇪" },
    { value: "+966", label: "+966", country: "Saudi Arabia", flag: "🇸🇦" },
  ];

  const customSelectStyles = {
    control: (provided, state) => ({
      ...provided,
      minHeight: "40px",
      height: "40px",
      borderColor: state.isFocused ? "#1890ff" : "#d9d9d9",
      boxShadow: state.isFocused ? "0 0 0 2px rgba(24, 144, 255, 0.2)" : "none",
      "&:hover": {
        borderColor: "#40a9ff",
      },
      borderRadius: "9px 0 0 9px",
      borderRight: "none",
      minWidth: "100px",
    }),
    valueContainer: (provided) => ({
      ...provided,
      height: "40px",
      padding: "0 8px",
      display: "flex",
      alignItems: "center",
    }),
    placeholder: (provided) => ({
      ...provided,
      color: "#d2d5df",
    }),
    input: (provided) => ({
      ...provided,
      margin: "0px",
    }),
    indicatorSeparator: () => ({
      display: "none",
    }),
    indicatorsContainer: (provided) => ({
      ...provided,
      height: "40px",
      display: "flex",
      alignItems: "center",
    }),
  };

  // Initialize with default country code
  useEffect(() => {
    if (!selectedCountryCode) {
      const defaultOption = countryCodeOptions.find(option => option.value === defaultCountryCode);
      setSelectedCountryCode(defaultOption);
    }
  }, [defaultCountryCode]);

  // Parse existing value
  useEffect(() => {
    if (value && typeof value === 'string') {
      // Try to extract country code and phone number
      const countryCode = countryCodeOptions.find(option => value.startsWith(option.value));
      if (countryCode) {
        setSelectedCountryCode(countryCode);
        setPhoneNumber(value.substring(countryCode.value.length));
      } else {
        setPhoneNumber(value);
      }
    }
  }, [value]);

  const handleCountryCodeChange = (selectedOption) => {
    setSelectedCountryCode(selectedOption);
    updateFullPhoneNumber(selectedOption.value, phoneNumber);
  };

  const handlePhoneNumberChange = (e) => {
    const number = e.target.value.replace(/[^\d]/g, ''); // Only allow digits
    setPhoneNumber(number);
    updateFullPhoneNumber(selectedCountryCode?.value || defaultCountryCode, number);
  };

  const updateFullPhoneNumber = (countryCode, number) => {
    const fullNumber = number ? `${countryCode}${number}` : '';
    if (onChange) {
      onChange(fullNumber);
    }
  };

  // Custom option component
  const CustomOption = ({ innerProps, label, data }) => (
    <div
      {...innerProps}
      className="flex items-center gap-2 p-2 cursor-pointer hover:bg-gray-100"
    >
      <span className="text-lg">{data.flag}</span>
      <span className="font-medium">{data.label}</span>
      <span className="text-gray-500 text-sm">{data.country}</span>
    </div>
  );

  // Custom single value component
  const CustomSingleValue = ({ data }) => (
    <div className="flex items-center gap-1">
      <span className="text-sm">{data.flag}</span>
      <span className="font-medium">{data.label}</span>
    </div>
  );

  return (
    <div className="flex flex-col gap-1 w-full">
      <label className="text-sm font-semibold">
        {label}
        {required && <span className="text-red-500 ml-1">*</span>}
      </label>
      <div className="flex">
        <Select
          options={countryCodeOptions}
          value={selectedCountryCode}
          onChange={handleCountryCodeChange}
          components={{
            Option: CustomOption,
            SingleValue: CustomSingleValue,
          }}
          styles={customSelectStyles}
          isSearchable
          placeholder="+91"
          className="flex-shrink-0"
        />
        <Input
          size="large"
          placeholder={placeholder}
          value={phoneNumber}
          onChange={handlePhoneNumberChange}
          className="flex-1"
          style={{
            borderRadius: "0 9px 9px 0",
            borderLeft: "none",
            height: "40px",
          }}
          maxLength={15}
        />
      </div>
      {phoneNumber && selectedCountryCode && (
        <div className="text-xs text-gray-500 mt-1">
          Full number: {selectedCountryCode.value}{phoneNumber}
        </div>
      )}
    </div>
  );
}

export default PhoneInput;