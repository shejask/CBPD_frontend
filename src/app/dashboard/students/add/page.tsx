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
  });

  const [passportPhoto, setPassportPhoto] = useState<File | null>(null);
  const [marksheets, setMarksheets] = useState<File[]>([]);
  
  const passportInputRef = useRef<HTMLInputElement>(null);
  const marksheetsInputRef = useRef<HTMLInputElement>(null);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>, type: 'passport' | 'marksheets') => {
    if (e.target.files) {
      const files = Array.from(e.target.files);
      const MAX_SIZE = 4 * 1024 * 1024; // 4MB limit to prevent Vercel 413 errors
      
      const oversizedFiles = files.filter(f => f.size > MAX_SIZE);
      if (oversizedFiles.length > 0) {
        setErrorMsg(`File size must be less than 4MB. Some files were too large.`);
        e.target.value = ''; // Reset input
        return;
      }

      if (type === 'passport') {
        setPassportPhoto(files[0]);
      } else {
        setMarksheets(files);
      }
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
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

      if (passportPhoto) {
        submitData.append("passportPhoto", passportPhoto);
      }
      
      marksheets.forEach((file) => {
        submitData.append("marksheets", file);
      });

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
          
          {/* Section: Personal Info */}
          <div>
            <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-3 mb-5 flex items-center gap-2">
              <span className="w-6 h-6 rounded-full bg-brand-blue/10 text-brand-blue flex items-center justify-center text-sm">1</span>
              Personal Information
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="space-y-2">
                <label className="text-sm font-semibold text-slate-700">Full Name *</label>
                <input required type="text" name="fullName" value={formData.fullName} onChange={handleInputChange} className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-brand-blue focus:border-brand-blue outline-none transition-all text-slate-900 dark:bg-slate-800 dark:border-slate-700 dark:text-white" placeholder="John Doe" />
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
                <label className="text-sm font-semibold text-slate-700">Phone Number *</label>
                <input required type="tel" name="phoneNumber" value={formData.phoneNumber} onChange={handleInputChange} className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-brand-blue focus:border-brand-blue outline-none transition-all text-slate-900 dark:bg-slate-800 dark:border-slate-700 dark:text-white" placeholder="+1 234 567 8900" />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-semibold text-slate-700">Date of Birth *</label>
                <input required type="date" name="dateOfBirth" value={formData.dateOfBirth} onChange={handleInputChange} className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-brand-blue focus:border-brand-blue outline-none transition-all text-slate-900 dark:bg-slate-800 dark:border-slate-700 dark:text-white" />
              </div>
            </div>
          </div>

          {/* Section: Academic Info */}
          <div>
            <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-3 mb-5 flex items-center gap-2">
              <span className="w-6 h-6 rounded-full bg-brand-blue/10 text-brand-blue flex items-center justify-center text-sm">2</span>
              Academic Details
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="space-y-2">
                <label className="text-sm font-semibold text-slate-700">Admission Number *</label>
                <input required type="text" name="admissionNumber" value={formData.admissionNumber} onChange={handleInputChange} className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-brand-blue focus:border-brand-blue outline-none transition-all text-slate-900 dark:bg-slate-800 dark:border-slate-700 dark:text-white" placeholder="AD-2026-001" />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-semibold text-slate-700">Joining Date *</label>
                <input required type="date" name="joiningDate" value={formData.joiningDate} onChange={handleInputChange} className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-brand-blue focus:border-brand-blue outline-none transition-all text-slate-900 dark:bg-slate-800 dark:border-slate-700 dark:text-white" />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-semibold text-slate-700">Current Course *</label>
                <input required type="text" name="currentCourse" value={formData.currentCourse} onChange={handleInputChange} className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-brand-blue focus:border-brand-blue outline-none transition-all text-slate-900 dark:bg-slate-800 dark:border-slate-700 dark:text-white" placeholder="B.Sc Computer Science" />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-semibold text-slate-700">Department *</label>
                <input required type="text" name="department" value={formData.department} onChange={handleInputChange} className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-brand-blue focus:border-brand-blue outline-none transition-all text-slate-900 dark:bg-slate-800 dark:border-slate-700 dark:text-white" placeholder="Engineering" />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-semibold text-slate-700">Semester *</label>
                <input required type="text" name="semester" value={formData.semester} onChange={handleInputChange} className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-brand-blue focus:border-brand-blue outline-none transition-all text-slate-900 dark:bg-slate-800 dark:border-slate-700 dark:text-white" placeholder="First Semester" />
              </div>
            </div>
          </div>

          {/* Section: Location */}
          <div>
            <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-3 mb-5 flex items-center gap-2">
              <span className="w-6 h-6 rounded-full bg-brand-blue/10 text-brand-blue flex items-center justify-center text-sm">3</span>
              Location Details
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="space-y-2">
                <label className="text-sm font-semibold text-slate-700">State *</label>
                <input required type="text" name="state" value={formData.state} onChange={handleInputChange} className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-brand-blue focus:border-brand-blue outline-none transition-all text-slate-900 dark:bg-slate-800 dark:border-slate-700 dark:text-white" placeholder="California" />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-semibold text-slate-700">District *</label>
                <input required type="text" name="district" value={formData.district} onChange={handleInputChange} className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-brand-blue focus:border-brand-blue outline-none transition-all text-slate-900 dark:bg-slate-800 dark:border-slate-700 dark:text-white" placeholder="Los Angeles" />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-semibold text-slate-700">County</label>
                <input type="text" name="county" value={formData.county} onChange={handleInputChange} className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-brand-blue focus:border-brand-blue outline-none transition-all text-slate-900 dark:bg-slate-800 dark:border-slate-700 dark:text-white" placeholder="LA County" />
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
              {/* Passport Photo */}
              <div className="border-2 border-dashed border-slate-200 rounded-2xl p-6 text-center hover:border-brand-blue transition-colors cursor-pointer bg-slate-50/50" onClick={() => passportInputRef.current?.click()}>
                <input type="file" ref={passportInputRef} onChange={(e) => handleFileChange(e, 'passport')} accept="image/*" className="hidden" />
                <div className="w-12 h-12 bg-white rounded-full border border-slate-200 flex items-center justify-center mx-auto mb-3 shadow-sm">
                  <Upload className="w-5 h-5 text-brand-blue" />
                </div>
                <h3 className="font-semibold text-slate-900">Passport Photo</h3>
                <p className="text-sm text-slate-500 mt-1 mb-3">Upload a clear photo of the student.</p>
                {passportPhoto ? (
                  <div className="inline-flex items-center gap-2 bg-green-50 text-green-700 px-3 py-1.5 rounded-lg text-sm font-medium border border-green-200">
                    <AlertCircle className="w-4 h-4" /> {passportPhoto.name}
                  </div>
                ) : (
                  <span className="text-sm font-medium text-brand-blue">Browse file</span>
                )}
              </div>

              {/* Marksheets */}
              <div className="border-2 border-dashed border-slate-200 rounded-2xl p-6 text-center hover:border-brand-blue transition-colors cursor-pointer bg-slate-50/50" onClick={() => marksheetsInputRef.current?.click()}>
                <input type="file" multiple ref={marksheetsInputRef} onChange={(e) => handleFileChange(e, 'marksheets')} accept="image/*,.pdf" className="hidden" />
                <div className="w-12 h-12 bg-white rounded-full border border-slate-200 flex items-center justify-center mx-auto mb-3 shadow-sm">
                  <Upload className="w-5 h-5 text-brand-blue" />
                </div>
                <h3 className="font-semibold text-slate-900">Marksheets</h3>
                <p className="text-sm text-slate-500 mt-1 mb-3">Upload previous academic records (Multiple allowed).</p>
                {marksheets.length > 0 ? (
                  <div className="inline-flex items-center gap-2 bg-green-50 text-green-700 px-3 py-1.5 rounded-lg text-sm font-medium border border-green-200">
                    <AlertCircle className="w-4 h-4" /> {marksheets.length} file(s) selected
                  </div>
                ) : (
                  <span className="text-sm font-medium text-brand-blue">Browse files</span>
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
