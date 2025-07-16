import InstEditStep from "@/components/dashboard/EditInsStep";
import EditMainContact from "@/components/dashboard/instituteProfileTabs/EditMain";
import EditOrgDetails from "@/components/dashboard/instituteProfileTabs/EditOrg";
import EditSecondaryContact from "@/components/dashboard/instituteProfileTabs/EditSec";
import ImportBulkAndUser from "@/components/ImportBulkAndUser";
import {
  EditOutlined,
  LoginOutlined,
  SaveOutlined,
  LoadingOutlined,
} from "@ant-design/icons";
import { Button, message, Spin } from "antd";
import Image from "next/image";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import { IoChevronBack } from "react-icons/io5";
import { useRouter } from "next/router";
import institutionApi from "@/lib/api/institutionApi";

function InstituteProfile() {
  const router = useRouter()
  const [currentStep, setCurrentStep] = useState(0);
  const [loading, setLoading] = useState(false);
  const [saving, setSaving] = useState(false);
  const [instituteData, setInstituteData] = useState(null);
  const [formData, setFormData] = useState({
    // Organization Details
    orgName: "",
    industrySector: "",
    businessAddress: "",
    postalCode: "",
    mainTelephone: "",
    website: "",
    email: "",
    password: "",
    country: "", // Added country field
    // Main Contact
    firstName: "",
    lastName: "",
    jobTitle: "",
    emailAddress: "",
    phoneNumber: "",
    mobileNumber: "",
    // Secondary Contact
    SfirstName: "",
    SlastName: "",
    SjobTitle: "",
    SemailAddress: "",
    SphoneNumber: "",
    SmobileNumber: "",
  });

  const steps = [
    {
      title: "Organization Details",
      component: (
        <EditOrgDetails formData={formData} setFormData={setFormData} />
      ),
    },
    {
      title: "Main Contact",
      component: (
        <EditMainContact formData={formData} setFormData={setFormData} />
      ),
    },
    {
      title: "Secondary Contact",
      component: (
        <EditSecondaryContact formData={formData} setFormData={setFormData} />
      ),
    },
  ];

  const handleNext = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handlePrev = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const [id, setId] = useState("");

  useEffect(() => {
    setId(localStorage.getItem("id"));
  }, []);

  const fetchInstituteDetails = async () => {
    if (!id) return;

    setLoading(true);
    try {
      const response = await institutionApi.getInstituteDetails(id);
      if (response.success) {
        const data = response.data;
        setInstituteData(data);
        
        

        // Populate form data with fetched data
        setFormData({
          orgName: data.orgName || "",
          industrySector: data.industrySector || "",
          businessAddress: data.businessAddress || "",
          postalCode: data.postalCode || "",
          mainTelephone: data.mainTelephone || "",
          website: data.website || "",
          email: data.email || "",
          password: "", // Don't pre-fill password
          country: data.country || "", // Add country if available
          firstName: data.firstName || "",
          lastName: data.lastName || "",
          jobTitle: data.jobTitle || "",
          emailAddress: data.emailAddress || "",
          phoneNumber: data.phoneNumber || "",
          mobileNumber: data.mobileNumber || "",
          SfirstName: data.SfirstName || "",
          SlastName: data.SlastName || "",
          SjobTitle: data.SjobTitle || "",
          SemailAddress: data.SemailAddress || "",
          SphoneNumber: data.SphoneNumber || "",
          SmobileNumber: data.SmobileNumber || "",
        });
      } else {
        message.error(response.error || "Failed to load institute details");
      }
    } catch (error) {
      console.error("Error fetching institute details:", error);
      message.error("Failed to load institute details");
    } finally {
      setLoading(false);
    }
  };

  const handleSave = async () => {
    setSaving(true);
    try {
      // Prepare payload - exclude empty password if not changed
      const payload = { ...formData };
      if (!payload.password) {
        delete payload.password;
      }

      const response = await institutionApi.editInstituteDetails(id, payload);
      if (response.success) {
        message.success("Institute details updated successfully!");
        // Update local state with new data
        setInstituteData(response.data.data || response.data);
        // Optionally redirect to dashboard
        setTimeout(() => {
          router.push("/dashboard");
        }, 1500);
      } else {
        message.error(response.error || "Failed to update institute details");
      }
    } catch (error) {
      console.error("Error updating institute details:", error);
      message.error("Failed to update institute details");
    } finally {
      setSaving(false);
    }
  };

  // Validation function for current step
  const validateCurrentStep = () => {
    const currentStepData = steps[currentStep];

    if (currentStep === 0) {
      // Organization Details validation
      const requiredFields = [
        "orgName",
        "industrySector",
        "businessAddress",
        "postalCode",
        "mainTelephone",
        "email",
      ];
      const missingFields = requiredFields.filter(
        (field) => !formData[field]?.trim()
      );

      if (missingFields.length > 0) {
        message.error("Please fill in all required fields");
        return false;
      }
    } else if (currentStep === 1) {
      // Main Contact validation
      const requiredFields = [
        "firstName",
        "lastName",
        "jobTitle",
        "emailAddress",
        "phoneNumber",
      ];
      const missingFields = requiredFields.filter(
        (field) => !formData[field]?.trim()
      );

      if (missingFields.length > 0) {
        message.error("Please fill in all required fields");
        return false;
      }
    }
    // Secondary contact is optional, so no validation needed

    return true;
  };

  const handleNextWithValidation = () => {
    if (validateCurrentStep()) {
      handleNext();
    }
  };

  useEffect(() => {
    fetchInstituteDetails();
  }, [id]);

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 flex items-center justify-center">
        <div className="text-center">
          <Spin
            size="large"
            indicator={<LoadingOutlined style={{ fontSize: 48 }} spin />}
          />
          <p className="mt-4 text-gray-600 text-lg">
            Loading institute details...
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Header */}
      <div className="bg-white shadow-sm border-b border-gray-200">
        <div className="flex items-center justify-between px-6 py-4">
          <Link href="/dashboard">
            <div className="flex items-center gap-3 cursor-pointer group">
              <div className="p-2 rounded-full bg-gray-100 group-hover:bg-gray-200 transition-colors">
                <IoChevronBack className="text-xl text-gray-600" />
              </div>
              <div>
                <h1 className="text-xl font-semibold text-gray-800">
                  Edit Institute Profile
                </h1>
                <p className="text-sm text-gray-500">
                  Update your organization details and contact information
                </p>
              </div>
            </div>
          </Link>
          <ImportBulkAndUser />
        </div>
      </div>

      {/* Hero Section */}
      <div className="relative h-40 bg-gradient-to-r from-blue-600 to-purple-600 overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <Image
          src="/portal/editBg.avif"
          alt="Edit Background"
          height={1000}
          width={1000}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white">
            <h2 className="text-2xl font-bold mb-2">
              {instituteData?.orgName || "Institute Profile"}
            </h2>
            <p className="text-blue-100">Keep your information up to date</p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className=" mx-auto px-6 py-8">
        {/* Progress and Action Header */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6 mb-8">
          <div className="flex items-center justify-between">
            <div className="flex-1">
              <InstEditStep currentStep={currentStep} />
            </div>
            <div className="flex items-center gap-3">
              <Button
                type="primary"
                size="large"
                icon={<SaveOutlined />}
                onClick={handleSave}
                loading={saving}
                className="bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 border-0 shadow-lg"
              >
                {saving ? "Saving..." : "Save Changes"}
              </Button>
            </div>
          </div>
        </div>

        {/* Form Content */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden">
          <div className="p-6">
            <div className="mb-6">
              <h3 className="text-lg font-semibold text-gray-800 mb-1">
                {steps[currentStep].title}
              </h3>
              <p className="text-gray-500 text-sm">
                {currentStep === 0 &&
                  "Update your organization's basic information"}
                {currentStep === 1 && "Update primary contact person details"}
                {currentStep === 2 && "Update secondary contact person details"}
              </p>
            </div>

            {steps[currentStep].component}
          </div>

          {/* Navigation Footer */}
          <div className="bg-gray-50 px-6 py-4 border-t border-gray-200">
            <div className="flex justify-between items-center">
              <div>
                {currentStep > 0 && (
                  <Button
                    size="large"
                    onClick={handlePrev}
                    icon={<IoChevronBack className="text-base" />}
                    className="bg-white border-gray-300 hover:bg-gray-50"
                  >
                    Previous
                  </Button>
                )}
              </div>

              <div className="flex items-center gap-3">
                {currentStep < steps.length - 1 ? (
                  <Button
                    size="large"
                    type="primary"
                    onClick={handleNextWithValidation}
                    icon={<LoginOutlined />}
                    iconPosition="end"
                    className="bg-gradient-to-r from-gray-700 to-gray-800 hover:from-gray-800 hover:to-gray-900 border-0"
                  >
                    Next Step
                  </Button>
                ) : (
                  <Button
                    size="large"
                    type="primary"
                    onClick={handleSave}
                    loading={saving}
                    icon={<SaveOutlined />}
                    iconPosition="end"
                    className="bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 border-0 shadow-lg"
                  >
                    {saving ? "Updating..." : "Update Institute"}
                  </Button>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default InstituteProfile;
