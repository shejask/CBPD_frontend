"use client";
import React, { useRef, useState, useEffect } from "react";
import {
  ImportOutlined,
  UserOutlined,
  UploadOutlined,
  LogoutOutlined,
  ProfileOutlined,
} from "@ant-design/icons";
import { Button, Upload, Modal, message, Dropdown } from "antd";
import Link from "next/link";
import { useRouter } from "next/navigation";
import institutionApi from "@/lib/api/institutionApi";

function ImportBulkAndUser() {
  const [uploadModal, setUploadModal] = useState(false);
  const [institutionId, setInstitutionId] = useState();
  const fileInputRef = useRef(null);
  const router = useRouter();

  useEffect(() => {
    const id = localStorage.getItem("id");
    setInstitutionId(id);
  }, []);

  const handleFileButtonClick = () => {
    fileInputRef.current?.click();
  };

  const handleUpload = async (e) => {
    e.preventDefault();

    const formData = new FormData();

    if (fileInputRef.current?.files?.[0]) {
      formData.append("bulkFile", fileInputRef.current.files[0]);
    }

    try {
      const response = await institutionApi.bulkImport(formData, institutionId);

      if (response.success) {
        message.success("Upload successfully!");
        console.log(response);
        setUploadModal(!uploadModal);
      }
    } catch (error) {
      console.error("Upload error:", error);
      message.error("Bulk Uploading failed. Please try again.");
    }
  };

  const downloadSheetWithApi = async () => {
    try {
      // Make sure your institutionApi.downloadExcel method returns blob data
      const response = await institutionApi.downloadExcel(institutionId);

      if (response.success) {
        // Assuming response.data contains the blob or file data
        const blob = response.data;
        const filename = response.filename || `student_template.xlsx`;

        // Create download link
        const url = window.URL.createObjectURL(blob);
        const a = document.createElement("a");
        a.href = url;
        a.download = filename;
        document.body.appendChild(a);
        a.click();

        // Cleanup
        window.URL.revokeObjectURL(url);
        document.body.removeChild(a);

        message.success("Template downloaded successfully");
      }
    } catch (error) {
      console.error("Download error:", error);
      message.error("Download Failed. Please try again.");
    }
  };

  const handleLogout = () => {
    localStorage.setItem("login", "false");
    message.success("Logged out successfully");
    // Optionally redirect to login page
    router.push("/"); // Adjust the path as needed
  };

  const handleProfileClick = () => {
    router.push("/dashboard/instituteProfile");
  };

  // Dropdown menu items
  const menuItems = [
    {
      key: "profile",
      label: "Profile",
      icon: <ProfileOutlined />,
      onClick: handleProfileClick,
    },
    {
      key: "logout",
      label: "Logout",
      icon: <LogoutOutlined />,
      onClick: handleLogout,
    },
  ];

  return (
    <div className="flex items-center gap-3">
      <Button
        onClick={() => setUploadModal(true)}
        type="primary"
        icon={<ImportOutlined />}
      >
        Import Bulk
      </Button>

      <Modal
        title="Import Bulk Students Data"
        centered
        open={uploadModal}
        onOk={() => setUploadModal(false)}
        onCancel={() => setUploadModal(false)}
        footer={[
          <div className="flex items-center gap-2" key="footer">
            <input
              type="file"
              ref={fileInputRef}
              style={{ display: "none" }}
              accept=".csv, application/vnd.openxmlformats-officedocument.spreadsheetml.sheet, application/vnd.ms-excel"
            />
            <Button icon={<UploadOutlined />} onClick={handleFileButtonClick}>
              Choose File
            </Button>
            <Button onClick={handleUpload} type="primary">
              Upload
            </Button>
          </div>,
        ]}
      >
        <div>
          <p>
            Here you can upload Students Data via Google Sheets, Excel, or CSV.
          </p>
          <p>
            Here is a sample format of the data.{" "}
            <span
              onClick={downloadSheetWithApi}
              className="text-blue-500 cursor-pointer"
            >
              Download now.
            </span>
          </p>
        </div>
      </Modal>

      <Dropdown
        menu={{ items: menuItems }}
        trigger={["click"]}
        placement="bottomRight"
      >
        <Button
          type="text"
          icon={<UserOutlined style={{ fontSize: "20px" }} />}
          className="flex items-center justify-center"
        />
      </Dropdown>
    </div>
  );
}

export default ImportBulkAndUser;
