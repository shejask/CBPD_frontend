import EditAcademic from "@/components/dashboard/editStudentTabs/EditAcademic";
import EditIdentification from "@/components/dashboard/editStudentTabs/EditIdentification";
import EditProfile from "@/components/dashboard/editStudentTabs/EditProfile";
import EditStep from "@/components/dashboard/EditStudStep";
import ImportBulkAndUser from "@/components/ImportBulkAndUser";
import institutionApi from "@/lib/api/institutionApi";
import { EditOutlined, LoginOutlined } from "@ant-design/icons";
import { Button, message } from "antd";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { IoChevronBack } from "react-icons/io5";

const EditStudentPage = () => {
  const router = useRouter();
  const { id } = router.query;

  const [orgId, setOrgId] = useState("");
  const [currentStep, setCurrentStep] = useState(0);
  const [studentData, setStudentData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [updating, setUpdating] = useState(false);

  // Form data state
  const [formData, setFormData] = useState({
    fullName: "",
    gender: "",
    phoneNumber: "",
    dateOfBirth: "",
    joiningDate: "",
    state: "",
    district: "",
    county: "",
    currentCourse: "",
    department: "",
    semester: "",
    admissionNumber: "",
    govtIdNumber: "",
    marksheets: [],
    passportPhoto: null,
    isActive: true,
  });

  const fetchStudents = async () => {
    try {
      setLoading(true);
      const response = await institutionApi.fetchOneStudent(orgId, id);
      if (response.success) {
        const student = response.data.data;
        setStudentData(student);

        // Populate form data
        setFormData({
          fullName: student.fullName || "",
          gender: student.gender || "",
          phoneNumber: student.phoneNumber || "",
          dateOfBirth: student.dateOfBirth
            ? new Date(student.dateOfBirth).toISOString().split("T")[0]
            : "",
          joiningDate: student.joiningDate
            ? new Date(student.joiningDate).toISOString().split("T")[0]
            : "",
          state: student.state || "",
          district: student.district || "",
          county: student.county || "",
          currentCourse: student.currentCourse || "",
          department: student.department || "",
          semester: student.semester || "",
          admissionNumber: student.admissionNumber || "",
          govtIdNumber: student.govtIdNumber || "",
          marksheets: student.marksheets || [],
          passportPhoto: student.passportPhoto || null,
          isActive: student.isActive ?? true,
        });
      }
    } catch (error) {
      console.log(error);
      message.error("Failed to fetch student data");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const storedOrgId = localStorage.getItem("id");
    setOrgId(storedOrgId);
  }, []);

  useEffect(() => {
    if (orgId && id) {
      fetchStudents();
    }
  }, [orgId, id]);

  const handleInputChange = (field, value) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleFileChange = (field, file) => {
    setFormData((prev) => ({
      ...prev,
      [field]: file,
    }));
  };

  const handleUpdate = async () => {
    try {
      setUpdating(true);

      // Create FormData for file upload
      const updateFormData = new FormData();

      // Add all text fields
      Object.keys(formData).forEach((key) => {
        if (key !== "marksheets" && key !== "passportPhoto") {
          updateFormData.append(key, formData[key]);
        }
      });

      // Add passport photo if it's a new file
      if (
        formData.passportPhoto &&
        typeof formData.passportPhoto === "object"
      ) {
        updateFormData.append("passportPhoto", formData.passportPhoto);
      }

      // Add marksheets if they are new files
      if (formData.marksheets && formData.marksheets.length > 0) {
        formData.marksheets.forEach((file) => {
          if (typeof file === "object") {
            updateFormData.append("marksheets", file);
          }
        });
      }

      const response = await institutionApi.editOneStudent(
        orgId,
        id,
        updateFormData
      );

      if (response.success) {
        message.success("Student updated successfully");
        router.push("/dashboard");
      } else {
        message.error("Failed to update student");
      }
    } catch (error) {
      console.error("Update error:", error);
      message.error("Failed to update student");
    } finally {
      setUpdating(false);
    }
  };

  const steps = [
    {
      title: "Profile",
      component: (
        <EditProfile formData={formData} onInputChange={handleInputChange} />
      ),
    },
    {
      title: "Academic Details",
      component: (
        <EditAcademic formData={formData} onInputChange={handleInputChange} />
      ),
    },
    {
      title: "Identification Documents",
      component: (
        <EditIdentification
          formData={formData}
          onInputChange={handleInputChange}
          onFileChange={handleFileChange}
        />
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

  if (loading) {
    return (
      <div className="flex justify-center items-center h-64">
        <div className="text-lg">Loading student data...</div>
      </div>
    );
  }

  return (
    <div className="text-black pb-10">
      <div className="w-full px-5 py-5 h-auto text-black flex flex-col gap-5">
        <div className="flex items-center justify-between w-full">
          <Link href={"/dashboard"}>
            <div className="flex items-center gap-2 cursor-pointer hover:scale-105 duration-75">
              <IoChevronBack className="text-2xl cursor-pointer" />
              <h1 className="text-xl font-medium cursor-pointer">
                Student Details
              </h1>
            </div>
          </Link>
          <ImportBulkAndUser />
        </div>
      </div>

      <div className="w-full h-32 bg-gradient-to-r pl-10 from-blue-50 px to-blue-400 relative">
        <div className="flex flex-col gap-2 absolute top-10">
          <div className="w-40 h-40 rounded-full bg-blue-600">
            <Image
              src={studentData?.passportPhoto || "/dum.avif"}
              alt="student"
              height={100}
              width={100}
              className="w-full h-full object-cover rounded-full"
            />
          </div>
          <div className="flex flex-col">
            <h1 className="text-xl font-semibold">
              {studentData?.fullName || "N/A"}
            </h1>
            <p className="-mt-1">
              {studentData?.institutionId?.email || "N/A"}
            </p>
          </div>
        </div>
      </div>

      <div className="w-full flex flex-col gap-5 mt-40">
        <div className="w-full flex justify-between pr-10">
          <div className="w-1/2">
            <EditStep currentStep={currentStep} />
          </div>
          <Button
            icon={<EditOutlined />}
            iconPosition="start"
            type="primary"
            onClick={handleUpdate}
            loading={updating}
          >
            {updating ? "Updating..." : "Update Student"}
          </Button>
        </div>

        <div className="px-5 flex flex-col gap-5">
          {steps[currentStep].component}
          <div className="flex justify-between gap-3">
            {currentStep > 0 && (
              <Button
                size="large"
                type="default"
                onClick={handlePrev}
                className="bg-white"
                icon={<LoginOutlined />}
                iconPosition="start"
              >
                Previous
              </Button>
            )}

            <Button
              size="large"
              type={currentStep === steps.length - 1 ? "primary" : "default"}
              icon={currentStep != 2 ? <LoginOutlined /> : <EditOutlined />}
              iconPosition="end"
              className={`${
                currentStep === steps.length - 1
                  ? "bg-blue-500 hover:to-blue-700 hover-text-white"
                  : "bg-black"
              } text-white ml-auto`}
              onClick={
                currentStep === steps.length - 1 ? handleUpdate : handleNext
              }
              loading={currentStep === steps.length - 1 && updating}
            >
              {currentStep === steps.length - 1 ? "Update" : "Next"}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditStudentPage;
