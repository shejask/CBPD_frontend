"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { api } from "@/lib/api";
import { ArrowLeft, Loader2, Save } from "lucide-react";

export default function NewCertificateRequestPage() {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const [isFetchingData, setIsFetchingData] = useState(true);
  
  const [instituteData, setInstituteData] = useState<any>(null);
  const [students, setStudents] = useState<any[]>([]);
  
  // Computed Data
  const [programmes, setProgrammes] = useState<string[]>([]);
  const [batches, setBatches] = useState<string[]>([]);

  // Form State
  const [formData, setFormData] = useState({
    programmeName: "",
    batchNumber: "",
    batchStartDate: "",
    examCompletedDate: "",
    message: "",
  });
  
  const [numberOfLearners, setNumberOfLearners] = useState(0);

  useEffect(() => {
    fetchInitialData();
  }, []);

  const fetchInitialData = async () => {
    try {
      setIsFetchingData(true);
      const orgStr = localStorage.getItem("org");
      if (!orgStr) {
        router.push("/login");
        return;
      }
      const org = JSON.parse(orgStr);
      const orgId = org._id || org.id;
      setInstituteData(org);

      if (orgId) {
        // Fetch all students for the institute to compute programmes and batches
        const res = await api.getStudents(orgId, 1, 1000);
        
        let studentList = [];
        if (res.success && res.data) {
          studentList = res.data;
        } else if (res.students) {
          studentList = res.students;
        } else if (Array.isArray(res)) {
          studentList = res;
        }
        
        setStudents(studentList);
        
        // Extract unique active programmes
        const uniqueProgrammes = Array.from(new Set(
          studentList
            .map((s: any) => s.department)
            .filter(Boolean)
        )) as string[];
        
        setProgrammes(uniqueProgrammes);
      }
    } catch (error) {
      console.error("Failed to fetch initial data", error);
    } finally {
      setIsFetchingData(false);
    }
  };

  // When programme changes, update available batches
  useEffect(() => {
    if (formData.programmeName && students.length > 0) {
      const uniqueBatches = Array.from(new Set(
        students
          .filter(s => s.department === formData.programmeName)
          .map(s => s.semester)
          .filter(Boolean)
      )) as string[];
      setBatches(uniqueBatches);
      
      // Reset batch number if it's no longer valid for the new programme
      if (!uniqueBatches.includes(formData.batchNumber)) {
        setFormData(prev => ({ ...prev, batchNumber: "" }));
        setNumberOfLearners(0);
      }
    } else {
      setBatches([]);
      setFormData(prev => ({ ...prev, batchNumber: "" }));
      setNumberOfLearners(0);
    }
  }, [formData.programmeName, students]);

  // When programme OR batch changes, recalculate number of learners and batch start date
  useEffect(() => {
    if (formData.programmeName && formData.batchNumber && students.length > 0) {
      const batchStudents = students.filter(
        s => s.department === formData.programmeName && s.semester === formData.batchNumber
      );
      setNumberOfLearners(batchStudents.length);
      
      if (batchStudents.length > 0 && batchStudents[0].joiningDate) {
        // Auto-fill batch start date from the first student's joining date
        const dateObj = new Date(batchStudents[0].joiningDate);
        if (!isNaN(dateObj.getTime())) {
          setFormData(prev => ({ ...prev, batchStartDate: dateObj.toISOString().split('T')[0] }));
        }
      } else {
        setFormData(prev => ({ ...prev, batchStartDate: "" }));
      }
    } else {
      setNumberOfLearners(0);
      setFormData(prev => ({ ...prev, batchStartDate: "" }));
    }
  }, [formData.programmeName, formData.batchNumber, students]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!instituteData || !numberOfLearners) return;

    try {
      setIsLoading(true);
      const payload = {
        institutionId: instituteData._id || instituteData.id,
        instituteName: instituteData.orgName || "Institute",
        programmeName: formData.programmeName,
        batchNumber: formData.batchNumber,
        batchStartDate: formData.batchStartDate,
        numberOfLearners: numberOfLearners,
        examCompletedDate: formData.examCompletedDate,
        message: formData.message,
      };

      const res = await api.createCertificateRequest(payload);
      if (res.success) {
        router.push("/dashboard/certificate-requests");
      } else {
        alert("Failed to submit request.");
      }
    } catch (error: any) {
      console.error(error);
      alert(error.message || "An error occurred while submitting the request.");
    } finally {
      setIsLoading(false);
    }
  };

  if (isFetchingData) {
    return (
      <div className="flex flex-col items-center justify-center py-20">
        <Loader2 className="w-8 h-8 animate-spin text-brand-blue mb-4" />
        <p className="text-slate-500 font-medium">Loading form data...</p>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto">
      <div className="mb-6 flex items-center justify-between">
        <div>
          <Link href="/dashboard/certificate-requests" className="inline-flex items-center gap-2 text-sm font-medium text-slate-500 hover:text-brand-blue transition-colors mb-2">
            <ArrowLeft className="w-4 h-4" />
            Back to Requests
          </Link>
          <h1 className="text-3xl font-bold text-slate-900">Request Certificate Status</h1>
          <p className="text-slate-500 mt-1">Submit a query regarding certificate printing and dispatch.</p>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-sm">
        <div className="p-6 md:p-8 space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            
            <div className="space-y-2">
              <label className="text-sm font-semibold text-slate-700">Institute Name</label>
              <input 
                type="text" 
                value={instituteData?.orgName || "Institute"} 
                readOnly 
                className="w-full px-4 py-3 bg-slate-100 border border-slate-200 rounded-xl text-slate-500 cursor-not-allowed outline-none"
              />
            </div>

            <div className="space-y-2">
              <label className="text-sm font-semibold text-slate-700">Programme Name *</label>
              <select 
                required 
                name="programmeName" 
                value={formData.programmeName} 
                onChange={handleChange} 
                className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-brand-blue focus:border-brand-blue outline-none transition-all text-slate-900 appearance-none"
              >
                <option value="">Select a Programme</option>
                {programmes.map(prog => (
                  <option key={prog} value={prog}>{prog}</option>
                ))}
              </select>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-semibold text-slate-700">Batch Number *</label>
              <select 
                required 
                name="batchNumber" 
                value={formData.batchNumber} 
                onChange={handleChange} 
                disabled={!formData.programmeName || batches.length === 0}
                className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-brand-blue focus:border-brand-blue outline-none transition-all text-slate-900 appearance-none disabled:bg-slate-100 disabled:text-slate-400 disabled:cursor-not-allowed"
              >
                <option value="">Select a Batch</option>
                {batches.map(b => (
                  <option key={b} value={b}>{b}</option>
                ))}
              </select>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-semibold text-slate-700">Number of Learners</label>
              <input 
                type="number" 
                value={numberOfLearners} 
                readOnly 
                className="w-full px-4 py-3 bg-slate-100 border border-slate-200 rounded-xl text-slate-700 font-medium cursor-not-allowed outline-none"
              />
              <p className="text-xs text-slate-500">Auto-calculated based on selected programme and batch.</p>
            </div>

            <div className="space-y-2 md:col-span-2">
              <label className="text-sm font-semibold text-slate-700">Batch Start Date *</label>
              <input 
                required 
                type="date" 
                name="batchStartDate" 
                value={formData.batchStartDate} 
                onChange={handleChange} 
                className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-brand-blue focus:border-brand-blue outline-none transition-all text-slate-900"
              />
            </div>

            <div className="space-y-2 md:col-span-2">
              <label className="text-sm font-semibold text-slate-700">Exam Completed Date *</label>
              <input 
                required 
                type="date" 
                name="examCompletedDate" 
                value={formData.examCompletedDate} 
                onChange={handleChange} 
                className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-brand-blue focus:border-brand-blue outline-none transition-all text-slate-900"
              />
            </div>

            <div className="space-y-2 md:col-span-2">
              <label className="text-sm font-semibold text-slate-700">Message / Query *</label>
              <textarea 
                required 
                name="message" 
                value={formData.message} 
                onChange={handleChange} 
                rows={4}
                placeholder="E.g. Batch 03 completed examination on 10 May 2026. Kindly update certificate printing and dispatch status."
                className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-brand-blue focus:border-brand-blue outline-none transition-all text-slate-900 resize-y"
              ></textarea>
            </div>

          </div>
        </div>

        <div className="px-8 py-5 bg-slate-50 border-t border-slate-200 flex items-center justify-end gap-4">
          <button type="button" onClick={() => router.push('/dashboard/certificate-requests')} className="px-6 py-2.5 rounded-xl font-medium text-slate-600 hover:bg-slate-200/50 transition-colors">
            Cancel
          </button>
          <button type="submit" disabled={isLoading || numberOfLearners === 0} className="flex items-center gap-2 bg-brand-blue hover:bg-brand-blue/90 text-white px-8 py-2.5 rounded-xl transition-colors shadow-sm font-medium disabled:opacity-70 disabled:cursor-not-allowed">
            {isLoading ? (
              <Loader2 className="w-5 h-5 animate-spin" />
            ) : (
              <Save className="w-5 h-5" />
            )}
            {isLoading ? "Submitting..." : "Submit Request"}
          </button>
        </div>
      </form>
    </div>
  );
}
