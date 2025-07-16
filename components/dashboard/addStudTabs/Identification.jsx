import { Upload, Button, message } from "antd";
import React from "react";
import { HiIdentification } from "react-icons/hi";
import { UploadOutlined } from "@ant-design/icons";

function Identification({ files, setFiles }) {
  const handlePassportPhotoChange = (info) => {
    const { fileList } = info;

    if (fileList.length > 0) {
      const file = fileList[0].originFileObj || fileList[0];

      // Validate file type
      const isImage = file.type?.startsWith("image/");
      if (!isImage) {
        message.error("Please upload an image file for passport photo!");
        return;
      }

      // Validate file size (max 5MB)
      const isLt5M = file.size / 1024 / 1024 < 5;
      if (!isLt5M) {
        message.error("Image must be smaller than 5MB!");
        return;
      }

      setFiles((prev) => ({
        ...prev,
        passportPhoto: file,
      }));
    } else {
      setFiles((prev) => ({
        ...prev,
        passportPhoto: null,
      }));
    }
  };

  const handleMarksheetsChange = (info) => {
    const { fileList } = info;

    const validFiles = fileList
      .map((file) => file.originFileObj || file)
      .filter((file) => {
        // Validate file type
        const isValidType =
          file.type?.includes("pdf") ||
          file.type?.includes("image") ||
          file.type?.includes("document");

        if (!isValidType) {
          message.error(`${file.name} is not a valid file type!`);
          return false;
        }

        // Validate file size (max 10MB)
        const isLt10M = file.size / 1024 / 1024 < 10;
        if (!isLt10M) {
          message.error(`${file.name} must be smaller than 10MB!`);
          return false;
        }

        return true;
      });

    setFiles((prev) => ({
      ...prev,
      marksheets: validFiles,
    }));
  };

  const passportPhotoProps = {
    beforeUpload: () => false, // prevent auto-upload
    onChange: handlePassportPhotoChange,
    maxCount: 1,
    accept: "image/*",
    showUploadList: {
      showPreviewIcon: true,
      showRemoveIcon: true,
    },
  };

  const marksheetsProps = {
    beforeUpload: () => false, // prevent auto-upload
    onChange: handleMarksheetsChange,
    multiple: true,
    accept: ".pdf,.jpg,.jpeg,.png,.doc,.docx",
    showUploadList: {
      showPreviewIcon: true,
      showRemoveIcon: true,
    },
  };

  return (
    <div className="flex flex-col gap-5 text-black">
      <div className="flex flex-col gap-3">
        <h1 className="flex items-center gap-2">
          Upload Documents <HiIdentification className="text-xl" />
        </h1>
        <div className="p-4 bg-stone-50 rounded-xl grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4">
          {/* Passport Photo Upload */}
          <div className="flex flex-col gap-1">
            <label className="text-sm font-semibold">
              Passport-size photo
              <span className="text-red-500 ml-1">*</span>
            </label>
            <Upload {...passportPhotoProps}>
              <Button icon={<UploadOutlined />} className="w-full">
                Click to Upload Photo
              </Button>
            </Upload>
            <span className="text-xs text-gray-500">
              Max size: 5MB, Format: JPG, PNG
            </span>
          </div>

          {/* Marksheets Upload */}
          <div className="flex flex-col gap-1">
            <label className="text-sm font-semibold">Mark sheets</label>
            <Upload {...marksheetsProps}>
              <Button icon={<UploadOutlined />} className="w-full">
                Click to Upload Documents
              </Button>
            </Upload>
            <span className="text-xs text-gray-500">
              Max size: 10MB each, Format: PDF, JPG, PNG, DOC
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Identification;
