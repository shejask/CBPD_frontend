import { Input, Upload, Button, message } from "antd";
import React from "react";
import { HiIdentification } from "react-icons/hi";
import { UploadOutlined, EyeFilled } from "@ant-design/icons";

function EditIdentification({ formData, onInputChange, onFileChange }) {
  const handlePassportPhotoUpload = (info) => {
    const file = info.file;
    if (file.status !== "uploading") {
      onFileChange("passportPhoto", file);
    }
  };

  const handleMarksheetsUpload = (info) => {
    const files = info.fileList.map((file) => file.originFileObj || file);
    onFileChange("marksheets", files);
  };

  const passportPhotoProps = {
    beforeUpload: (file) => {
      const isImage = file.type.startsWith("image/");
      if (!isImage) {
        message.error("You can only upload image files!");
        return false;
      }
      const isLt2M = file.size / 1024 / 1024 < 2;
      if (!isLt2M) {
        message.error("Image must be smaller than 2MB!");
        return false;
      }
      return false; // prevent auto-upload
    },
    onChange: handlePassportPhotoUpload,
    showUploadList: {
      showPreviewIcon: true,
      showRemoveIcon: true,
    },
    maxCount: 1,
  };

  const marksheetsProps = {
    beforeUpload: (file) => {
      const isValidType =
        file.type === "application/pdf" || file.type.startsWith("image/");
      if (!isValidType) {
        message.error("You can only upload PDF or image files!");
        return false;
      }
      const isLt5M = file.size / 1024 / 1024 < 5;
      if (!isLt5M) {
        message.error("File must be smaller than 5MB!");
        return false;
      }
      return false; // prevent auto-upload
    },
    onChange: handleMarksheetsUpload,
    showUploadList: {
      showPreviewIcon: true,
      showRemoveIcon: true,
    },
    multiple: true,
  };

  return (
    <div className="flex flex-col gap-5 text-black">
      {/* Section Two - Upload Fields */}
      <div className="flex flex-col gap-3">
        <h1 className="flex items-center gap-2">
          Upload Documents <HiIdentification className="text-xl" />
        </h1>
        <div className="p-4 bg-stone-50 rounded-xl grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4">
          {/* Passport Photo Upload */}
          <div className="flex flex-col gap-1">
            <label className="text-sm font-semibold">Passport-size photo</label>
            <Upload {...passportPhotoProps}>
              <Button icon={<UploadOutlined />} className="w-full">
                Upload Photo
              </Button>
            </Upload>
            {formData.passportPhoto &&
              typeof formData.passportPhoto === "string" && (
                <div className="mt-2 text-xs text-gray-500">
                  Current: Photo uploaded
                </div>
              )}
          </div>

          {/* Marksheets Upload */}
          <div className="flex flex-col gap-1">
            <label className="text-sm font-semibold">Mark sheets</label>

            {/* Show current marksheets */}
            {formData.marksheets &&
              formData.marksheets.length > 0 &&
              Array.isArray(formData.marksheets) &&
              typeof formData.marksheets[0] === "string" && (
                <div className="mb-2">
                  <div className="grid grid-cols-2 gap-2">
                    {formData.marksheets.map((marksheet, index) => (
                      <div key={index} className="relative">
                        {marksheet.toLowerCase().includes(".pdf") ? (
                          // PDF file display
                          <div className="w-full h-24 bg-red-100 rounded-lg border border-gray-300 flex items-center justify-center">
                            <div className="text-center">
                              <div className="text-red-600 text-2xl mb-1">
                                📄
                              </div>
                              <p className="text-xs text-gray-600">
                                PDF Document
                              </p>
                            </div>
                          </div>
                        ) : (
                          // Image file display
                          <img
                            src={marksheet}
                            alt={`Marksheet ${index + 1}`}
                            className="w-full h-24 object-cover rounded-lg border border-gray-300"
                          />
                        )}
                        <a
                          href={marksheet}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="absolute top-1 right-1  text-black rounded-full w-10 h-10 flex items-center justify-center text-2xl hover:bg-gray-500"
                        >
                          <EyeFilled />
                        </a>
                      </div>
                    ))}
                  </div>
                  <p className="text-xs text-gray-500 mt-1">
                    Current marksheets ({formData.marksheets.length} files)
                  </p>
                </div>
              )}

            <Upload {...marksheetsProps}>
              <Button icon={<UploadOutlined />} className="w-full">
                {formData.marksheets && formData.marksheets.length > 0
                  ? "Change Marksheets"
                  : "Upload Marksheets"}
              </Button>
            </Upload>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EditIdentification;
