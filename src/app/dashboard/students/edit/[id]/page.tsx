"use client";

import { useState, useRef, useEffect } from "react";
import { useParams, useRouter } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, Upload, Loader2, Save, AlertCircle } from "lucide-react";
import { api } from "@/lib/api";
import FormAlert from "@/components/FormAlert";

export default function EditStudentPage() {
  const params = useParams();
  const router = useRouter();
  const id = params.id as string;
  const [isFetching, setIsFetching] = useState(true);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchStudentData = async () => {
      try {
        setIsFetching(true);
        const response = await api.getStudent(id);
        if (response.success && response.data) {
          const s = response.data;
          setFormData({
            learnerFullName: s.fullName || "",
            gender: s.gender || "",
            dateOfBirth: s.dateOfBirth ? s.dateOfBirth.split('T')[0] : "",
            emailAddress: s.emailAddress || "",
            mobileNumber: s.phoneNumber || "",
            districtCity: s.district || "",
            stateProvince: s.state || "",
            country: s.county || "",
            qualificationTitle: s.currentCourse || "",
            qualificationLevel: s.qualificationLevel || "",
            qualificationType: s.qualificationType || "",
            studyMode: s.studyMode || "",
            batchNumber: s.semester || "",
            programmeStartDate: s.joiningDate ? s.joiningDate.split('T')[0] : "",
            completionDate: s.completionDate ? s.completionDate.split('T')[0] : "",
            guidedLearningHours: s.guidedLearningHours || "",
            resultGrade: s.resultGrade || "",
            approvedCentreName: s.approvedCentreName || "",
            centreCode: s.centreCode || "",
            trainerTutorName: s.trainerTutorName || "",
            internalStudentId: s.admissionNumber || "",
            programmeSelection: s.department || "",
          });
          setExistingPhotoUrl(s.passportPhoto || "");
          setExistingDocumentUrls(s.marksheets || []);
        }
      } catch (err) {
        console.error(err);
        setErrorMsg("Failed to load student data.");
      } finally {
        setIsFetching(false);
      }
    };
    if (id) fetchStudentData();
  }, [id]);


  const [errorMsg, setErrorMsg] = useState("");
  const [successMsg, setSuccessMsg] = useState("");

  const [formData, setFormData] = useState({
    learnerFullName: "",
    gender: "",
    dateOfBirth: "",
    emailAddress: "",
    mobileNumber: "",
    districtCity: "",
    stateProvince: "",
    country: "",
    qualificationTitle: "",
    qualificationLevel: "",
    qualificationType: "",
    studyMode: "",
    batchNumber: "",
    programmeStartDate: "",
    completionDate: "",
    guidedLearningHours: "",
    resultGrade: "",
    approvedCentreName: "",
    centreCode: "",
    trainerTutorName: "",
    internalStudentId: "",
    programmeSelection: "",
  });

  const [fieldErrors, setFieldErrors] = useState<Record<string, string>>({});

  const [learnerPhotograph, setLearnerPhotograph] = useState<File | null>(null);
  const [qualificationDocument, setQualificationDocument] = useState<File | null>(null);
  
  const [existingPhotoUrl, setExistingPhotoUrl] = useState("");
  const [existingDocumentUrls, setExistingDocumentUrls] = useState<string[]>([]);
  
  const photoInputRef = useRef<HTMLInputElement>(null);
  const documentInputRef = useRef<HTMLInputElement>(null);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    if (fieldErrors[e.target.name]) {
      setFieldErrors({ ...fieldErrors, [e.target.name]: "" });
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>, type: 'photo' | 'document') => {
    if (type === 'photo' && fieldErrors.learnerPhotograph) {
      setFieldErrors({ ...fieldErrors, learnerPhotograph: "" });
    } else if (type === 'document' && fieldErrors.qualificationDocument) {
      setFieldErrors({ ...fieldErrors, qualificationDocument: "" });
    }

    if (e.target.files && e.target.files.length > 0) {
      const file = e.target.files[0];
      const MAX_SIZE = 1000 * 1024; // 1MB limit to prevent API 413 errors
      
      if (file.size > MAX_SIZE) {
        setErrorMsg(`File size must be less than 1MB. Please compress your file before uploading.`);
        e.target.value = ''; // Reset input
        return;
      }

      if (type === 'photo') {
        setLearnerPhotograph(file);
      } else {
        setQualificationDocument(file);
      }
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Photograph is optional when editing

    setIsLoading(true);
    setErrorMsg("");
    setSuccessMsg("");
    setFieldErrors({});

    try {
      const orgStr = localStorage.getItem("org");
      if (!orgStr) {
        throw new Error("Institution profile not found. Please log in again.");
      }
      const org = JSON.parse(orgStr);

      const submitData = new FormData();
      submitData.append("fullName", formData.learnerFullName);
      submitData.append("gender", formData.gender);
      submitData.append("phoneNumber", formData.mobileNumber);
      submitData.append("dateOfBirth", formData.dateOfBirth);
      submitData.append("joiningDate", formData.programmeStartDate);
      submitData.append("state", formData.stateProvince);
      submitData.append("district", formData.districtCity);
      submitData.append("county", formData.country);
      submitData.append("currentCourse", formData.qualificationTitle);
      submitData.append("department", formData.programmeSelection);
      submitData.append("semester", formData.batchNumber);
      submitData.append("admissionNumber", formData.internalStudentId);
      submitData.append("institutionId", org._id);
      
      // Additional fields added to schema
      submitData.append("emailAddress", formData.emailAddress);
      submitData.append("qualificationLevel", formData.qualificationLevel);
      submitData.append("qualificationType", formData.qualificationType);
      submitData.append("studyMode", formData.studyMode);
      submitData.append("completionDate", formData.completionDate);
      submitData.append("guidedLearningHours", formData.guidedLearningHours);
      submitData.append("resultGrade", formData.resultGrade);
      submitData.append("approvedCentreName", formData.approvedCentreName);
      submitData.append("centreCode", formData.centreCode);
      submitData.append("trainerTutorName", formData.trainerTutorName);

      if (learnerPhotograph) {
        submitData.append("passportPhoto", learnerPhotograph);
      }
      
      if (qualificationDocument) {
        submitData.append("marksheets", qualificationDocument);
      }

      const response = await api.updateStudent(id, submitData);
      
      if (response.success) {
        setSuccessMsg("Learner created successfully!");
        setTimeout(() => {
          router.push("/dashboard/students");
        }, 1500);
      } else {
        const err: any = new Error(response.error || "Failed to create student");
        if (response.details) err.details = response.details;
        throw err;
      }
    } catch (err: any) {
      console.error(err);
      setErrorMsg(err.message || "An error occurred while creating the student");
      
      if (err.details && Array.isArray(err.details)) {
        const errors: Record<string, string> = {};
        err.details.forEach((msg: string) => {
          const lowerMsg = msg.toLowerCase();
          if (lowerMsg.includes("admission number")) errors.internalStudentId = msg;
          else if (lowerMsg.includes("year/semester") || lowerMsg.includes("batch")) errors.batchNumber = msg;
          else if (lowerMsg.includes("department/branch")) errors.programmeSelection = msg; 
          else if (lowerMsg.includes("current course") || lowerMsg.includes("programme")) errors.qualificationTitle = msg;
          else if (lowerMsg.includes("district")) errors.districtCity = msg;
          else if (lowerMsg.includes("state")) errors.stateProvince = msg;
          else if (lowerMsg.includes("joining date") || lowerMsg.includes("start date")) errors.programmeStartDate = msg;
          else if (lowerMsg.includes("phone") || lowerMsg.includes("mobile")) errors.mobileNumber = msg;
          else if (lowerMsg.includes("name")) errors.learnerFullName = msg;
          else if (lowerMsg.includes("email")) errors.emailAddress = msg;
          else if (lowerMsg.includes("dob") || lowerMsg.includes("date of birth")) errors.dateOfBirth = msg;
          else if (lowerMsg.includes("gender")) errors.gender = msg;
          else if (lowerMsg.includes("country")) errors.country = msg;
          else if (lowerMsg.includes("level")) errors.qualificationLevel = msg;
          else if (lowerMsg.includes("type")) errors.qualificationType = msg;
          else if (lowerMsg.includes("mode")) errors.studyMode = msg;
          else if (lowerMsg.includes("completion date")) errors.completionDate = msg;
          else if (lowerMsg.includes("guided")) errors.guidedLearningHours = msg;
          else if (lowerMsg.includes("grade")) errors.resultGrade = msg;
          else if (lowerMsg.includes("centre name")) errors.approvedCentreName = msg;
          else if (lowerMsg.includes("centre code")) errors.centreCode = msg;
          else if (lowerMsg.includes("trainer")) errors.trainerTutorName = msg;
          else if (lowerMsg.includes("photograph") || lowerMsg.includes("photo")) errors.learnerPhotograph = msg;
          else if (lowerMsg.includes("document")) errors.qualificationDocument = msg;
        });
        setFieldErrors(errors);
      }
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="max-w-5xl mx-auto space-y-8 animate-fade-in-up pb-12">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <Link href="/dashboard/students" className="inline-flex items-center gap-2 text-sm font-medium text-slate-500 hover:text-brand-blue transition-colors mb-2">
            <ArrowLeft className="w-4 h-4" />
            Back to Learners </Link>
          <h1 className="text-3xl font-bold text-slate-900">Edit Learner </h1>
          <p className="text-slate-500 mt-1">Update student details and records.</p>
        </div>
      </div>

      {errorMsg && <FormAlert type="error" message={errorMsg} onClose={() => setErrorMsg("")} />}
      {successMsg && <FormAlert type="success" message={successMsg} onClose={() => setSuccessMsg("")} />}

      <form onSubmit={handleSubmit} className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
        <div className="p-8 space-y-8">
          
          {/* Section: Learner Information */}
          <div>
            <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-3 mb-5 flex items-center gap-2">
              <span className="w-6 h-6 rounded-full bg-brand-blue/10 text-brand-blue flex items-center justify-center text-sm">1</span>
              Learner Information
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="space-y-2">
                <label className="text-sm font-semibold text-slate-700">Learner Full Name *</label>
                <input required type="text" name="learnerFullName" value={formData.learnerFullName} onChange={handleInputChange} className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-brand-blue focus:border-brand-blue outline-none transition-all text-slate-900 dark:bg-slate-800 dark:border-slate-700 dark:text-white" />
                {fieldErrors.learnerFullName && <p className="text-red-500 text-xs mt-1">{fieldErrors.learnerFullName}</p>}
              </div>
              <div className="space-y-2">
                <label className="text-sm font-semibold text-slate-700">Gender *</label>
                <select required name="gender" value={formData.gender} onChange={handleInputChange} className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-brand-blue focus:border-brand-blue outline-none transition-all text-slate-900 dark:bg-slate-800 dark:border-slate-700 dark:text-white">
                  <option value="">Select Gender</option>
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                  <option value="Other">Other</option>
                </select>
                {fieldErrors.gender && <p className="text-red-500 text-xs mt-1">{fieldErrors.gender}</p>}
              </div>
              <div className="space-y-2">
                <label className="text-sm font-semibold text-slate-700">Date of Birth *</label>
                <input required type="date" name="dateOfBirth" value={formData.dateOfBirth} onChange={handleInputChange} className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-brand-blue focus:border-brand-blue outline-none transition-all text-slate-900 dark:bg-slate-800 dark:border-slate-700 dark:text-white" />
                {fieldErrors.dateOfBirth && <p className="text-red-500 text-xs mt-1">{fieldErrors.dateOfBirth}</p>}
              </div>
              <div className="space-y-2">
                <label className="text-sm font-semibold text-slate-700">Email Address *</label>
                <input required type="email" name="emailAddress" value={formData.emailAddress} onChange={handleInputChange} className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-brand-blue focus:border-brand-blue outline-none transition-all text-slate-900 dark:bg-slate-800 dark:border-slate-700 dark:text-white" />
                {fieldErrors.emailAddress && <p className="text-red-500 text-xs mt-1">{fieldErrors.emailAddress}</p>}
              </div>
              <div className="space-y-2">
                <label className="text-sm font-semibold text-slate-700">Mobile Number *</label>
                <input required type="tel" name="mobileNumber" value={formData.mobileNumber} onChange={handleInputChange} className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-brand-blue focus:border-brand-blue outline-none transition-all text-slate-900 dark:bg-slate-800 dark:border-slate-700 dark:text-white" />
                {fieldErrors.mobileNumber && <p className="text-red-500 text-xs mt-1">{fieldErrors.mobileNumber}</p>}
              </div>
              <div className="space-y-2">
                <label className="text-sm font-semibold text-slate-700">District / City *</label>
                <input required type="text" name="districtCity" value={formData.districtCity} onChange={handleInputChange} className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-brand-blue focus:border-brand-blue outline-none transition-all text-slate-900 dark:bg-slate-800 dark:border-slate-700 dark:text-white" />
                {fieldErrors.districtCity && <p className="text-red-500 text-xs mt-1">{fieldErrors.districtCity}</p>}
              </div>
              <div className="space-y-2">
                <label className="text-sm font-semibold text-slate-700">State / Province *</label>
                <input required type="text" name="stateProvince" value={formData.stateProvince} onChange={handleInputChange} className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-brand-blue focus:border-brand-blue outline-none transition-all text-slate-900 dark:bg-slate-800 dark:border-slate-700 dark:text-white" />
                {fieldErrors.stateProvince && <p className="text-red-500 text-xs mt-1">{fieldErrors.stateProvince}</p>}
              </div>
              <div className="space-y-2">
                <label className="text-sm font-semibold text-slate-700">Country *</label>
                <input required type="text" name="country" value={formData.country} onChange={handleInputChange} className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-brand-blue focus:border-brand-blue outline-none transition-all text-slate-900 dark:bg-slate-800 dark:border-slate-700 dark:text-white" />
                {fieldErrors.country && <p className="text-red-500 text-xs mt-1">{fieldErrors.country}</p>}
              </div>
            </div>
          </div>

          {/* Section: Qualification Information */}
          <div>
            <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-3 mb-5 flex items-center gap-2">
              <span className="w-6 h-6 rounded-full bg-brand-blue/10 text-brand-blue flex items-center justify-center text-sm">2</span>
              Qualification Information
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="space-y-2">
                <label className="text-sm font-semibold text-slate-700">Programme Selection *</label>
                <select required name="programmeSelection" value={formData.programmeSelection} onChange={handleInputChange} className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-brand-blue focus:border-brand-blue outline-none transition-all text-slate-900 dark:bg-slate-800 dark:border-slate-700 dark:text-white">
                  <option value="">Select Programme</option>
                  <option value="Security">Security</option>
                  <option value="Social Care">Social Care</option>
                  <option value="Sport">Sport</option>
                  <option value="Telecommunications">Telecommunications</option>
                  <option value="Tourism">Tourism</option>
                  <option value="Transport">Transport</option>
                  <option value="Property">Property</option>
                  <option value="Beauty & Wellness">Beauty & Wellness</option>
                  <option value="International">International</option>
                  <option value="Marine">Marine</option>
                  <option value="Media">Media</option>
                  <option value="Science">Science</option>
                  <option value="Hospitality">Hospitality</option>
                  <option value="Human Resources">Human Resources</option>
                  <option value="Fire & Safety">Fire & Safety</option>
                  <option value="Healthcare & Medical Programmes">Healthcare & Medical Programmes</option>
                  <option value="Finance Programmes">Finance Programmes</option>
                  <option value="Energy Programmes">Energy Programmes</option>
                  <option value="Construction Programmes">Construction Programmes</option>
                  <option value="Engineering Programmes">Engineering Programmes</option>
                  <option value="Technical Programmes">Technical Programmes</option>
                  <option value="Education Programmes">Education Programmes</option>
                  <option value="Design Programmes">Design Programmes</option>
                  <option value="Information Technology Programmes">Information Technology Programmes</option>
                  <option value="Business Programmes">Business Programmes</option>
                </select>
                {fieldErrors.programmeSelection && <p className="text-red-500 text-xs mt-1">{fieldErrors.programmeSelection}</p>}
              </div>
              <div className="space-y-2">
                <label className="text-sm font-semibold text-slate-700">Qualification Title *</label>
                <input required type="text" name="qualificationTitle" value={formData.qualificationTitle} onChange={handleInputChange} className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-brand-blue focus:border-brand-blue outline-none transition-all text-slate-900 dark:bg-slate-800 dark:border-slate-700 dark:text-white" />
                {fieldErrors.qualificationTitle && <p className="text-red-500 text-xs mt-1">{fieldErrors.qualificationTitle}</p>}
              </div>
              <div className="space-y-2">
                <label className="text-sm font-semibold text-slate-700">Qualification Level (CQF Level) *</label>
                <input required type="text" name="qualificationLevel" value={formData.qualificationLevel} onChange={handleInputChange} className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-brand-blue focus:border-brand-blue outline-none transition-all text-slate-900 dark:bg-slate-800 dark:border-slate-700 dark:text-white" />
                {fieldErrors.qualificationLevel && <p className="text-red-500 text-xs mt-1">{fieldErrors.qualificationLevel}</p>}
              </div>
              <div className="space-y-2">
                <label className="text-sm font-semibold text-slate-700">Qualification Type *</label>
                <select required name="qualificationType" value={formData.qualificationType} onChange={handleInputChange} className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-brand-blue focus:border-brand-blue outline-none transition-all text-slate-900 dark:bg-slate-800 dark:border-slate-700 dark:text-white">
                  <option value="">Select Type</option>
                  <option value="Level 1 Professional Certificate">Level 1 Professional Certificate</option>
                  <option value="Level 2 International Certificate">Level 2 International Certificate</option>
                  <option value="Level 3 International Diploma">Level 3 International Diploma</option>
                  <option value="Level 4 Professional Diploma">Level 4 Professional Diploma</option>
                  <option value="Level 5 Advanced Diploma">Level 5 Advanced Diploma</option>
                  <option value="Level 6 Higher Diploma">Level 6 Higher Diploma</option>
                  <option value="Level 7 Postgraduate Diploma">Level 7 Postgraduate Diploma</option>
                </select>
                {fieldErrors.qualificationType && <p className="text-red-500 text-xs mt-1">{fieldErrors.qualificationType}</p>}
              </div>
              <div className="space-y-2">
                <label className="text-sm font-semibold text-slate-700">Study Mode *</label>
                <select required name="studyMode" value={formData.studyMode} onChange={handleInputChange} className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-brand-blue focus:border-brand-blue outline-none transition-all text-slate-900 dark:bg-slate-800 dark:border-slate-700 dark:text-white">
                  <option value="">Select Mode</option>
                  <option value="Online">Online</option>
                  <option value="Blended">Blended</option>
                  <option value="Classroom">Classroom</option>
                </select>
                {fieldErrors.studyMode && <p className="text-red-500 text-xs mt-1">{fieldErrors.studyMode}</p>}
              </div>
              <div className="space-y-2">
                <label className="text-sm font-semibold text-slate-700">Batch Number *</label>
                <input required type="text" name="batchNumber" value={formData.batchNumber} onChange={handleInputChange} className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-brand-blue focus:border-brand-blue outline-none transition-all text-slate-900 dark:bg-slate-800 dark:border-slate-700 dark:text-white" />
                {fieldErrors.batchNumber && <p className="text-red-500 text-xs mt-1">{fieldErrors.batchNumber}</p>}
              </div>
              <div className="space-y-2">
                <label className="text-sm font-semibold text-slate-700">Programme Start Date *</label>
                <input required type="date" name="programmeStartDate" value={formData.programmeStartDate} onChange={handleInputChange} className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-brand-blue focus:border-brand-blue outline-none transition-all text-slate-900 dark:bg-slate-800 dark:border-slate-700 dark:text-white" />
                {fieldErrors.programmeStartDate && <p className="text-red-500 text-xs mt-1">{fieldErrors.programmeStartDate}</p>}
              </div>
              <div className="space-y-2">
                <label className="text-sm font-semibold text-slate-700">Completion Date *</label>
                <input required type="date" name="completionDate" value={formData.completionDate} onChange={handleInputChange} className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-brand-blue focus:border-brand-blue outline-none transition-all text-slate-900 dark:bg-slate-800 dark:border-slate-700 dark:text-white" />
                {fieldErrors.completionDate && <p className="text-red-500 text-xs mt-1">{fieldErrors.completionDate}</p>}
              </div>
              <div className="space-y-2">
                <label className="text-sm font-semibold text-slate-700">Guided Learning Hours (GLH) *</label>
                <input required type="number" name="guidedLearningHours" value={formData.guidedLearningHours} onChange={handleInputChange} className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-brand-blue focus:border-brand-blue outline-none transition-all text-slate-900 dark:bg-slate-800 dark:border-slate-700 dark:text-white" />
                {fieldErrors.guidedLearningHours && <p className="text-red-500 text-xs mt-1">{fieldErrors.guidedLearningHours}</p>}
              </div>
              <div className="space-y-2">
                <label className="text-sm font-semibold text-slate-700">Result / Grade *</label>
                <input required type="text" name="resultGrade" value={formData.resultGrade} onChange={handleInputChange} className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-brand-blue focus:border-brand-blue outline-none transition-all text-slate-900 dark:bg-slate-800 dark:border-slate-700 dark:text-white" />
                {fieldErrors.resultGrade && <p className="text-red-500 text-xs mt-1">{fieldErrors.resultGrade}</p>}
              </div>
            </div>
          </div>

          {/* Section: Centre Information */}
          <div>
            <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-3 mb-5 flex items-center gap-2">
              <span className="w-6 h-6 rounded-full bg-brand-blue/10 text-brand-blue flex items-center justify-center text-sm">3</span>
              Centre Information
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="space-y-2">
                <label className="text-sm font-semibold text-slate-700">Approved Centre Name *</label>
                <input required type="text" name="approvedCentreName" value={formData.approvedCentreName} onChange={handleInputChange} className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-brand-blue focus:border-brand-blue outline-none transition-all text-slate-900 dark:bg-slate-800 dark:border-slate-700 dark:text-white" />
                {fieldErrors.approvedCentreName && <p className="text-red-500 text-xs mt-1">{fieldErrors.approvedCentreName}</p>}
              </div>
              <div className="space-y-2">
                <label className="text-sm font-semibold text-slate-700">Centre Code *</label>
                <input required type="text" name="centreCode" value={formData.centreCode} onChange={handleInputChange} className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-brand-blue focus:border-brand-blue outline-none transition-all text-slate-900 dark:bg-slate-800 dark:border-slate-700 dark:text-white" />
                {fieldErrors.centreCode && <p className="text-red-500 text-xs mt-1">{fieldErrors.centreCode}</p>}
              </div>
              <div className="space-y-2">
                <label className="text-sm font-semibold text-slate-700">Trainer / Tutor Name</label>
                <input type="text" name="trainerTutorName" value={formData.trainerTutorName} onChange={handleInputChange} className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-brand-blue focus:border-brand-blue outline-none transition-all text-slate-900 dark:bg-slate-800 dark:border-slate-700 dark:text-white" />
                {fieldErrors.trainerTutorName && <p className="text-red-500 text-xs mt-1">{fieldErrors.trainerTutorName}</p>}
              </div>
              <div className="space-y-2">
                <label className="text-sm font-semibold text-slate-700">Internal Student ID</label>
                <input type="text" name="internalStudentId" value={formData.internalStudentId} onChange={handleInputChange} className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-brand-blue focus:border-brand-blue outline-none transition-all text-slate-900 dark:bg-slate-800 dark:border-slate-700 dark:text-white" />
                {fieldErrors.internalStudentId && <p className="text-red-500 text-xs mt-1">{fieldErrors.internalStudentId}</p>}
              </div>
            </div>
          </div>

          {/* Section: Documents */}
          <div>
            <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-3 mb-5 flex items-center gap-2">
              <span className="w-6 h-6 rounded-full bg-brand-blue/10 text-brand-blue flex items-center justify-center text-sm">4</span>
              Documents & Media
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Learner Photograph */}
              <div className="border-2 border-dashed border-slate-200 rounded-2xl p-6 text-center hover:border-brand-blue transition-colors cursor-pointer bg-slate-50/50" onClick={() => photoInputRef.current?.click()}>
                <input type="file" ref={photoInputRef} onChange={(e) => handleFileChange(e, 'photo')} accept="image/*" className="hidden" />
                <div className="w-12 h-12 bg-white rounded-full border border-slate-200 flex items-center justify-center mx-auto mb-3 shadow-sm">
                  <Upload className="w-5 h-5 text-brand-blue" />
                </div>
                <h3 className="font-semibold text-slate-900">Learner Photograph *</h3>
                <p className="text-sm text-slate-500 mt-1 mb-1">Upload a clear passport-sized photo.</p>
                <p className="text-xs text-slate-400 mb-3">Maximum file size: 1MB</p>
                {learnerPhotograph ? (
                  <div className="inline-flex items-center gap-2 bg-green-50 text-green-700 px-3 py-1.5 rounded-lg text-sm font-medium border border-green-200">
                    <AlertCircle className="w-4 h-4" /> {learnerPhotograph.name}
                  </div>
                ) : existingPhotoUrl ? (
                  <div className="flex flex-col items-center gap-2">
                    <img src={existingPhotoUrl} alt="Current Photo" className="w-16 h-16 object-cover rounded-md border border-slate-200" />
                    <span className="text-sm font-medium text-brand-blue">Replace file</span>
                  </div>
                ) : (
                  <span className="text-sm font-medium text-brand-blue">Browse file</span>
                )}
              </div>

              {/* Qualification Document */}
              <div className="border-2 border-dashed border-slate-200 rounded-2xl p-6 text-center hover:border-brand-blue transition-colors cursor-pointer bg-slate-50/50" onClick={() => documentInputRef.current?.click()}>
                <input type="file" ref={documentInputRef} onChange={(e) => handleFileChange(e, 'document')} accept="image/*,.pdf" className="hidden" />
                <div className="w-12 h-12 bg-white rounded-full border border-slate-200 flex items-center justify-center mx-auto mb-3 shadow-sm">
                  <Upload className="w-5 h-5 text-brand-blue" />
                </div>
                <h3 className="font-semibold text-slate-900">Previous Academic Mark Sheet / Qualification Document</h3>
                <p className="text-sm text-slate-500 mt-1 mb-1">Upload qualification document (Optional).</p>
                <p className="text-xs text-slate-400 mb-3">Maximum file size: 1MB</p>
                {qualificationDocument ? (
                  <div className="inline-flex items-center gap-2 bg-green-50 text-green-700 px-3 py-1.5 rounded-lg text-sm font-medium border border-green-200">
                    <AlertCircle className="w-4 h-4" /> {qualificationDocument.name}
                  </div>
                ) : existingDocumentUrls.length > 0 ? (
                  <div className="flex flex-col items-center gap-2">
                    <div className="inline-flex items-center gap-2 bg-blue-50 text-brand-blue px-3 py-1.5 rounded-lg text-sm font-medium border border-blue-200">
                      <AlertCircle className="w-4 h-4" /> Existing Document Uploaded
                    </div>
                    <span className="text-sm font-medium text-brand-blue">Replace file</span>
                  </div>
                ) : (
                  <span className="text-sm font-medium text-brand-blue">Browse file</span>
                )}
              </div>
            </div>
          </div>
          
        </div>
        
        {/* Footer Actions */}
        <div className="px-8 py-5 bg-slate-50 border-t border-slate-200 flex items-center justify-end gap-4">
          <button type="button" onClick={() => router.push('/dashboard/students')} className="px-6 py-2.5 rounded-xl font-medium text-slate-600 hover:bg-slate-200/50 transition-colors">
            Cancel
          </button>
          <button type="submit" disabled={isLoading} className="flex items-center gap-2 bg-brand-blue hover:bg-brand-blue/90 text-white px-8 py-2.5 rounded-xl transition-colors shadow-sm font-medium disabled:opacity-70 disabled:cursor-not-allowed">
            {isLoading ? (
              <Loader2 className="w-5 h-5 animate-spin" />
            ) : (
              <Save className="w-5 h-5" />
            )}
            {isLoading ? "Saving..." : "Save Student"}
          </button>
        </div>
      </form>
    </div>
  );
}
