"use client";

import { useState, useRef } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, Upload, Loader2, Save, AlertCircle } from "lucide-react";
import { api } from "@/lib/api";
import FormAlert from "@/components/FormAlert";

export default function AddStudentPage() {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
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

  const [learnerPhotograph, setLearnerPhotograph] = useState<File | null>(null);
  const [qualificationDocument, setQualificationDocument] = useState<File | null>(null);
  
  const photoInputRef = useRef<HTMLInputElement>(null);
  const documentInputRef = useRef<HTMLInputElement>(null);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>, type: 'photo' | 'document') => {
    if (e.target.files && e.target.files.length > 0) {
      const file = e.target.files[0];
      const MAX_SIZE = 4 * 1024 * 1024; // 4MB limit to prevent Vercel 413 errors
      
      if (file.size > MAX_SIZE) {
        setErrorMsg(`File size must be less than 4MB.`);
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
    
    if (!learnerPhotograph) {
      setErrorMsg("Learner Photograph is required.");
      return;
    }

    setIsLoading(true);
    setErrorMsg("");
    setSuccessMsg("");

    try {
      const orgStr = localStorage.getItem("org");
      if (!orgStr) {
        throw new Error("Institution profile not found. Please log in again.");
      }
      const org = JSON.parse(orgStr);

      const submitData = new FormData();
      Object.entries(formData).forEach(([key, value]) => {
        submitData.append(key, value);
      });
      submitData.append("institutionId", org._id);

      if (learnerPhotograph) {
        submitData.append("learnerPhotograph", learnerPhotograph);
      }
      
      if (qualificationDocument) {
        submitData.append("qualificationDocument", qualificationDocument);
      }

      const response = await api.createStudent(submitData);
      
      if (response.success) {
        setSuccessMsg("Student created successfully!");
        setTimeout(() => {
          router.push("/dashboard/students");
        }, 1500);
      } else {
        throw new Error(response.error || "Failed to create student");
      }
    } catch (err: any) {
      console.error(err);
      setErrorMsg(err.message || "An error occurred while creating the student");
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
            Back to Students
          </Link>
          <h1 className="text-3xl font-bold text-slate-900">Add New Student</h1>
          <p className="text-slate-500 mt-1">Register a new student to your institution.</p>
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
              </div>
              <div className="space-y-2">
                <label className="text-sm font-semibold text-slate-700">Gender *</label>
                <select required name="gender" value={formData.gender} onChange={handleInputChange} className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-brand-blue focus:border-brand-blue outline-none transition-all text-slate-900 dark:bg-slate-800 dark:border-slate-700 dark:text-white">
                  <option value="">Select Gender</option>
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                  <option value="Other">Other</option>
                </select>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-semibold text-slate-700">Date of Birth *</label>
                <input required type="date" name="dateOfBirth" value={formData.dateOfBirth} onChange={handleInputChange} className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-brand-blue focus:border-brand-blue outline-none transition-all text-slate-900 dark:bg-slate-800 dark:border-slate-700 dark:text-white" />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-semibold text-slate-700">Email Address *</label>
                <input required type="email" name="emailAddress" value={formData.emailAddress} onChange={handleInputChange} className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-brand-blue focus:border-brand-blue outline-none transition-all text-slate-900 dark:bg-slate-800 dark:border-slate-700 dark:text-white" />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-semibold text-slate-700">Mobile Number *</label>
                <input required type="tel" name="mobileNumber" value={formData.mobileNumber} onChange={handleInputChange} className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-brand-blue focus:border-brand-blue outline-none transition-all text-slate-900 dark:bg-slate-800 dark:border-slate-700 dark:text-white" />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-semibold text-slate-700">District / City *</label>
                <input required type="text" name="districtCity" value={formData.districtCity} onChange={handleInputChange} className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-brand-blue focus:border-brand-blue outline-none transition-all text-slate-900 dark:bg-slate-800 dark:border-slate-700 dark:text-white" />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-semibold text-slate-700">State / Province *</label>
                <input required type="text" name="stateProvince" value={formData.stateProvince} onChange={handleInputChange} className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-brand-blue focus:border-brand-blue outline-none transition-all text-slate-900 dark:bg-slate-800 dark:border-slate-700 dark:text-white" />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-semibold text-slate-700">Country *</label>
                <input required type="text" name="country" value={formData.country} onChange={handleInputChange} className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-brand-blue focus:border-brand-blue outline-none transition-all text-slate-900 dark:bg-slate-800 dark:border-slate-700 dark:text-white" />
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
                  <option value="Healthcare & Medical">Healthcare & Medical</option>
                  <option value="Finance">Finance</option>
                  <option value="Energy">Energy</option>
                  <option value="Construction">Construction</option>
                  <option value="Engineering">Engineering</option>
                  <option value="Technical">Technical</option>
                  <option value="Education">Education</option>
                  <option value="Design">Design</option>
                  <option value="Information Technology">Information Technology</option>
                  <option value="Business">Business</option>
                </select>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-semibold text-slate-700">Qualification Title *</label>
                <input required type="text" name="qualificationTitle" value={formData.qualificationTitle} onChange={handleInputChange} className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-brand-blue focus:border-brand-blue outline-none transition-all text-slate-900 dark:bg-slate-800 dark:border-slate-700 dark:text-white" />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-semibold text-slate-700">Qualification Level (CQF Level) *</label>
                <input required type="text" name="qualificationLevel" value={formData.qualificationLevel} onChange={handleInputChange} className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-brand-blue focus:border-brand-blue outline-none transition-all text-slate-900 dark:bg-slate-800 dark:border-slate-700 dark:text-white" />
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
              </div>
              <div className="space-y-2">
                <label className="text-sm font-semibold text-slate-700">Study Mode *</label>
                <select required name="studyMode" value={formData.studyMode} onChange={handleInputChange} className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-brand-blue focus:border-brand-blue outline-none transition-all text-slate-900 dark:bg-slate-800 dark:border-slate-700 dark:text-white">
                  <option value="">Select Mode</option>
                  <option value="Online">Online</option>
                  <option value="Blended">Blended</option>
                  <option value="Classroom">Classroom</option>
                </select>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-semibold text-slate-700">Batch Number *</label>
                <input required type="text" name="batchNumber" value={formData.batchNumber} onChange={handleInputChange} className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-brand-blue focus:border-brand-blue outline-none transition-all text-slate-900 dark:bg-slate-800 dark:border-slate-700 dark:text-white" />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-semibold text-slate-700">Programme Start Date *</label>
                <input required type="date" name="programmeStartDate" value={formData.programmeStartDate} onChange={handleInputChange} className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-brand-blue focus:border-brand-blue outline-none transition-all text-slate-900 dark:bg-slate-800 dark:border-slate-700 dark:text-white" />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-semibold text-slate-700">Completion Date *</label>
                <input required type="date" name="completionDate" value={formData.completionDate} onChange={handleInputChange} className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-brand-blue focus:border-brand-blue outline-none transition-all text-slate-900 dark:bg-slate-800 dark:border-slate-700 dark:text-white" />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-semibold text-slate-700">Guided Learning Hours (GLH) *</label>
                <input required type="number" name="guidedLearningHours" value={formData.guidedLearningHours} onChange={handleInputChange} className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-brand-blue focus:border-brand-blue outline-none transition-all text-slate-900 dark:bg-slate-800 dark:border-slate-700 dark:text-white" />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-semibold text-slate-700">Result / Grade *</label>
                <input required type="text" name="resultGrade" value={formData.resultGrade} onChange={handleInputChange} className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-brand-blue focus:border-brand-blue outline-none transition-all text-slate-900 dark:bg-slate-800 dark:border-slate-700 dark:text-white" />
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
              </div>
              <div className="space-y-2">
                <label className="text-sm font-semibold text-slate-700">Centre Code *</label>
                <input required type="text" name="centreCode" value={formData.centreCode} onChange={handleInputChange} className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-brand-blue focus:border-brand-blue outline-none transition-all text-slate-900 dark:bg-slate-800 dark:border-slate-700 dark:text-white" />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-semibold text-slate-700">Trainer / Tutor Name</label>
                <input type="text" name="trainerTutorName" value={formData.trainerTutorName} onChange={handleInputChange} className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-brand-blue focus:border-brand-blue outline-none transition-all text-slate-900 dark:bg-slate-800 dark:border-slate-700 dark:text-white" />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-semibold text-slate-700">Internal Student ID</label>
                <input type="text" name="internalStudentId" value={formData.internalStudentId} onChange={handleInputChange} className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-brand-blue focus:border-brand-blue outline-none transition-all text-slate-900 dark:bg-slate-800 dark:border-slate-700 dark:text-white" />
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
                <p className="text-sm text-slate-500 mt-1 mb-3">Upload a clear passport-sized photo.</p>
                {learnerPhotograph ? (
                  <div className="inline-flex items-center gap-2 bg-green-50 text-green-700 px-3 py-1.5 rounded-lg text-sm font-medium border border-green-200">
                    <AlertCircle className="w-4 h-4" /> {learnerPhotograph.name}
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
                <p className="text-sm text-slate-500 mt-1 mb-3">Upload qualification document (Optional).</p>
                {qualificationDocument ? (
                  <div className="inline-flex items-center gap-2 bg-green-50 text-green-700 px-3 py-1.5 rounded-lg text-sm font-medium border border-green-200">
                    <AlertCircle className="w-4 h-4" /> {qualificationDocument.name}
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
