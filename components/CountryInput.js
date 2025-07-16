import React, { useState, useEffect } from "react";
import Select from "react-select";

function CountryInput({ value, onChange, label = "Country", required = false }) {
  const customStyles = {
    control: (provided, state) => ({
      ...provided,
      minHeight: "40px",
      height: "40px",
      borderColor: state.isFocused ? "#1890ff" : "#d9d9d9",
      boxShadow: state.isFocused ? "0 0 0 2px rgba(24, 144, 255, 0.2)" : "none",
      "&:hover": {
        borderColor: "#40a9ff",
      },
      borderRadius: "9px",
    }),
    valueContainer: (provided) => ({
      ...provided,
      height: "40px",
      padding: "0 11px",
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

  const [selectedCountry, setSelectedCountry] = useState(null);

  const countryOptions = [
    {
      value: "IN",
      label: "India",
      flag: "https://flagcdn.com/24x18/in.png",
      phoneCode: "+91",
    },
    {
      value: "US",
      label: "United States",
      flag: "https://flagcdn.com/24x18/us.png",
      phoneCode: "+1",
    },
    { 
      value: "CA", 
      label: "Canada", 
      flag: "https://flagcdn.com/24x18/ca.png",
      phoneCode: "+1",
    },
    {
      value: "GB",
      label: "United Kingdom",
      flag: "https://flagcdn.com/24x18/gb.png",
      phoneCode: "+44",
    },
    {
      value: "AU",
      label: "Australia",
      flag: "https://flagcdn.com/24x18/au.png",
      phoneCode: "+61",
    },
    { 
      value: "DE", 
      label: "Germany", 
      flag: "https://flagcdn.com/24x18/de.png",
      phoneCode: "+49",
    },
    { 
      value: "FR", 
      label: "France", 
      flag: "https://flagcdn.com/24x18/fr.png",
      phoneCode: "+33",
    },
    { 
      value: "JP", 
      label: "Japan", 
      flag: "https://flagcdn.com/24x18/jp.png",
      phoneCode: "+81",
    },
    { 
      value: "CN", 
      label: "China", 
      flag: "https://flagcdn.com/24x18/cn.png",
      phoneCode: "+86",
    },
    { 
      value: "BR", 
      label: "Brazil", 
      flag: "https://flagcdn.com/24x18/br.png",
      phoneCode: "+55",
    },
    { 
      value: "RU", 
      label: "Russia", 
      flag: "https://flagcdn.com/24x18/ru.png",
      phoneCode: "+7",
    },
    { 
      value: "IT", 
      label: "Italy", 
      flag: "https://flagcdn.com/24x18/it.png",
      phoneCode: "+39",
    },
    { 
      value: "ES", 
      label: "Spain", 
      flag: "https://flagcdn.com/24x18/es.png",
      phoneCode: "+34",
    },
    { 
      value: "MX", 
      label: "Mexico", 
      flag: "https://flagcdn.com/24x18/mx.png",
      phoneCode: "+52",
    },
    {
      value: "KR",
      label: "South Korea",
      flag: "https://flagcdn.com/24x18/kr.png",
      phoneCode: "+82",
    },
    {
      value: "SG",
      label: "Singapore",
      flag: "https://flagcdn.com/24x18/sg.png",
      phoneCode: "+65",
    },
    {
      value: "NL",
      label: "Netherlands",
      flag: "https://flagcdn.com/24x18/nl.png",
      phoneCode: "+31",
    },
    { 
      value: "SE", 
      label: "Sweden", 
      flag: "https://flagcdn.com/24x18/se.png",
      phoneCode: "+46",
    },
    { 
      value: "NO", 
      label: "Norway", 
      flag: "https://flagcdn.com/24x18/no.png",
      phoneCode: "+47",
    },
    {
      value: "CH",
      label: "Switzerland",
      flag: "https://flagcdn.com/24x18/ch.png",
      phoneCode: "+41",
    },
    {
      value: "AE",
      label: "United Arab Emirates",
      flag: "https://flagcdn.com/24x18/ae.png",
      phoneCode: "+971",
    },
    {
      value: "SA",
      label: "Saudi Arabia",
      flag: "https://flagcdn.com/24x18/sa.png",
      phoneCode: "+966",
    },
  ];

  // Set default to India if no value provided
  useEffect(() => {
    if (!value && !selectedCountry) {
      const defaultCountry = countryOptions.find(country => country.value === "IN");
      setSelectedCountry(defaultCountry);
      if (onChange) {
        onChange(defaultCountry);
      }
    } else if (value && typeof value === 'string') {
      const country = countryOptions.find(country => country.value === value);
      setSelectedCountry(country);
    } else if (value && typeof value === 'object') {
      setSelectedCountry(value);
    }
  }, [value]);

  const handleCountryChange = (selectedOption) => {
    setSelectedCountry(selectedOption);
    if (onChange) {
      onChange(selectedOption);
    }
  };

  // Custom option component for displaying flag with country name
  const CustomOption = ({ innerProps, label, data }) => (
    <div
      {...innerProps}
      className="flex items-center gap-2 p-2 cursor-pointer hover:bg-gray-100"
    >
      <img src={data.flag} alt={`${label} flag`} className="w-6 h-4" />
      <span>{label}</span>
      <span className="text-gray-500 text-sm ml-auto">{data.phoneCode}</span>
    </div>
  );

  // Custom single value component for selected option
  const CustomSingleValue = ({ data }) => (
    <div className="flex items-center gap-2">
      <img src={data.flag} alt={`${data.label} flag`} className="w-6 h-4" />
      <span>{data.label}</span>
    </div>
  );

  return (
    <div className="w-full flex items-center gap-5">
      <div className="flex flex-col w-full">
        <div className="flex flex-col gap-1 w-full">
          <label htmlFor="country" className="text-sm font-semibold">
            {label}
            {required && <span className="text-red-500 ml-1">*</span>}
          </label>
          <Select
            id="country"
            options={countryOptions}
            value={selectedCountry}
            onChange={handleCountryChange}
            placeholder="Select Country"
            components={{
              Option: CustomOption,
              SingleValue: CustomSingleValue,
            }}
            styles={customStyles}
            isSearchable
            className="w-full"
          />
        </div>
      </div>
    </div>
  );
}

export default CountryInput;